"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const unitsWeight = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(value, fromUnit, toUnit) {
    const fromIndex = unitsWeight.indexOf(fromUnit);
    const toIndex = unitsWeight.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
function execMass() {
    const value = _1.readline.questionInt('What value?\n');
    const fromUnit = _1.readline.question('From what unit?\n');
    const toUnit = _1.readline.question('To what unit?\n');
    const convertedValue = convertMass(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}
execMass();
