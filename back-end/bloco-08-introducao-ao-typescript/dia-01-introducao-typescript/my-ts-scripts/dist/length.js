"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitsLength = void 0;
const _1 = require(".");
exports.unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertLength(value, fromUnit, toUnit) {
    const fromIndex = exports.unitsLength.indexOf(fromUnit);
    const toIndex = exports.unitsLength.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * 10 ** exponent;
}
function execLength() {
    const value = _1.readline.questionInt('What value?\n');
    const fromUnit = _1.readline.question('From what unit?\n');
    const toUnit = _1.readline.question('To what unit?\n');
    const convertedValue = convertLength(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}
execLength();
