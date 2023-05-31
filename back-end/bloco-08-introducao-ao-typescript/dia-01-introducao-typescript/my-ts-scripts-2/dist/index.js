"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const main = () => {
    const scripts = [
        { name: 'Convert area', script: './area' },
        { name: 'Convert capacity', script: './capacity' },
        { name: 'Convert length', script: './length' },
        { name: 'Convert mass', script: './mass' },
        { name: 'Convert volume', script: './volume' },
    ];
    const scriptNames = scripts.map(script => script.name);
    const scriptIndex = readline.keyInSelect(scriptNames, 'Choose script');
    require(scripts[scriptIndex].script);
};
main();
