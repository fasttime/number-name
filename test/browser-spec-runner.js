/* eslint-env browser */
/* global MochaBar, TestSuite, mocha */

'use strict';

(function ()
{
    function handleLoad()
    {
        mocha.run();
    }

    mocha.setup({ checkLeaks: true, reporter: MochaBar, ui: 'bdd' });
    mocha.checkLeaks();
    TestSuite.init();
    addEventListener('DOMContentLoaded', handleLoad);
}
)();
