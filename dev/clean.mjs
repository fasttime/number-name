#!/usr/bin/env node

import { rm }               from 'fs/promises';
import { fileURLToPath }    from 'url';

const workspaceFolder = fileURLToPath(new URL('..', import.meta.url));
process.chdir(workspaceFolder);
const paths = ['coverage', 'lib/number-name.min.js'];
const options = { force: true, recursive: true };
const promises = paths.map(path => rm(path, options));
await Promise.all(promises);
