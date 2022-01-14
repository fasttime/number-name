#!/usr/bin/env node

import { lint }             from '@fasttime/lint';
import { fileURLToPath }    from 'url';

const workspaceFolder = fileURLToPath(new URL('..', import.meta.url));
process.chdir(workspaceFolder);
await lint
(
    { src: ['*.js', '{lib,test}/**/*.js', '!**/*.min.js'] },
    { src: 'dev/*.mjs', envs: 'node', parserOptions: { ecmaVersion: 2022, sourceType: 'module' } },
);
