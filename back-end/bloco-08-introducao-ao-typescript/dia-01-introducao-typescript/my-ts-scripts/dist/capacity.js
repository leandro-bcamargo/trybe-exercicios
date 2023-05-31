"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, fromUnit, toUnit) {
    const fromIndex = unitsCapacity.indexOf(fromUnit);
    const toIndex = unitsCapacity.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
function execCapacity() {
    const value = _1.readline.questionInt('What value?\n');
    const fromUnit = _1.readline.question('From what unit?\n');
    const toUnit = _1.readline.question('To what unit?\n');
    const convertedValue = convertCapacity(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}
execCapacity();
