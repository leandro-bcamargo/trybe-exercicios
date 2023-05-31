"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convertMass = (value, fromUnit, toUnit) => {
    const fromIndex = massUnits.indexOf(fromUnit);
    const toIndex = massUnits.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
};
const execMass = () => {
    const value = readline.questionFloat('What value?\n');
    const fromUnitIndex = readline.keyInSelect(massUnits, 'From what unit?\n');
    const toUnitIndex = readline.keyInSelect(massUnits, 'To what unit?\n');
    const fromUnit = massUnits[fromUnitIndex];
    const toUnit = massUnits[toUnitIndex];
    if (!fromUnit || !toUnit) {
        console.log('Operação cancelada');
        return 0;
    }
    const result = convertMass(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${result}${toUnit}`);
    return `${value}${fromUnit} é igual a ${result}${toUnit}`;
};
execMass();
