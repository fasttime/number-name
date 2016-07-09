/* eslint-env node */

'use strict';

module.exports =
    function (grunt)
    {
        // Project configuration.
        grunt.initConfig(
            {
                clean: { default: ['coverage', 'lib/**/*.min.js'] },
                fasttime_lint: { default: ['*.js', 'lib/**/*.js', 'test/**/*.js', '!**/*.min.js'] },
                mocha_istanbul: { default: 'test/**/*.spec.js' },
                uglify:
                {
                    default: { files: { 'lib/number-name.min.js': 'lib/number-name.js' } },
                    options: { compress: { global_defs: { DEBUG: false }, hoist_vars: true } }
                }
            }
        );
        
        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-fasttime-lint');
        grunt.loadNpmTasks('grunt-mocha-istanbul');
        
        // Default task.
        grunt.registerTask('default', ['fasttime_lint', 'clean', 'mocha_istanbul', 'uglify']);
    };
