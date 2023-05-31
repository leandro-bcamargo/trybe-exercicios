"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convertLength = (value, fromUnit, toUnit) => {
    const indexFrom = lengthUnits.indexOf(fromUnit);
    const indexTo = lengthUnits.indexOf(toUnit);
    const exponent = indexTo - indexFrom;
    return value * Math.pow(10, exponent);
};
const execLength = () => {
    const value = readline.questionFloat('What value?\n');
    const fromUnitIndex = readline.keyInSelect(lengthUnits, 'From what unit?\n');
    const toUnitIndex = readline.keyInSelect(lengthUnits, 'To what unit?\n');
    const fromUnit = lengthUnits[fromUnitIndex];
    const toUnit = lengthUnits[toUnitIndex];
    if (!fromUnit || !toUnit) {
        console.log('Operação cancelada');
        return 0;
    }
    const result = convertLength(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${result}${toUnit}`);
    return `${value}${fromUnit} é igual a ${result}${toUnit}`;
};
execLength();
