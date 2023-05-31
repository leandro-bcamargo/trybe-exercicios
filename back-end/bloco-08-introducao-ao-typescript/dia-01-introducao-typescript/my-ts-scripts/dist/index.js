"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readline = void 0;
exports.readline = require('readline-sync');
const scripts = [
    { name: 'Convert area', script: './area' },
    { name: 'Convert capacity', script: './capacity' },
    { name: 'Convert length', script: './length' },
    { name: 'Convert volume', script: './volume' },
];
const scriptsNames = scripts.map(script => script.name);
const scriptIndex = exports.readline.keyInSelect(scriptsNames, 'Which script would you like to use?');
require(scripts[scriptIndex].script);
