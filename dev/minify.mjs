#!/usr/bin/env node

import { readFile, writeFile }  from 'fs/promises';
import { minify }               from 'uglify-js';

const { url } = import.meta;
const outputURL = new URL('../lib/number-name.min.js', url);
const inputURL = new URL('../lib/number-name.js', url);
const inputCode = await readFile(inputURL, 'utf-8');
const options = { compress: { global_defs: { DEBUG: false }, hoist_vars: true } };
const result = minify(inputCode, options);
const outputCode = result.code;
await writeFile(outputURL, outputCode);
