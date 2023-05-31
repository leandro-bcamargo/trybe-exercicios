"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const unitsVolume = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convertVolume(value, fromUnit, toUnit) {
    const fromIndex = unitsVolume.indexOf(fromUnit);
    const toIndex = unitsVolume.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
}
function execVolume() {
    const value = _1.readline.questionInt('What value?\n');
    const fromUnit = _1.readline.question('From what unit?\n');
    const toUnit = _1.readline.question('To what unit?\n');
    const convertedValue = convertVolume(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}
execVolume();
