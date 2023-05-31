"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execArea = exports.convertArea = exports.unitsArea = void 0;
const _1 = require(".");
exports.unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convertArea(value, fromUnit, toUnit) {
    const fromIndex = exports.unitsArea.indexOf(fromUnit);
    const toIndex = exports.unitsArea.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
exports.convertArea = convertArea;
function execArea() {
    const value = _1.readline.questionInt('What value?\n');
    const fromUnit = _1.readline.question('From what unit?\n');
    const toUnit = _1.readline.question('To what unit?\n');
    const convertedValue = convertArea(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}
exports.execArea = execArea;
execArea();
