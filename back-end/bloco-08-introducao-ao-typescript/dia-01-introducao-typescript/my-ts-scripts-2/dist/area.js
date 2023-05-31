"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const areaConvert = (value, fromUnit, toUnit) => {
    const indexFrom = areaUnits.indexOf(fromUnit);
    const indexTo = areaUnits.indexOf(toUnit);
    const exponent = indexTo - indexFrom;
    return value * Math.pow(100, exponent);
};
const execArea = () => {
    const value = readline.questionFloat('Which value?\n');
    const fromUnitIndex = readline.keyInSelect(areaUnits, 'From which unit?\n');
    const toUnitIndex = readline.keyInSelect(areaUnits, 'To what unit?\n');
    const fromUnit = areaUnits[fromUnitIndex];
    const toUnit = areaUnits[toUnitIndex];
    if (!fromUnit || !toUnit) {
        console.log('Função cancelada');
        return 0;
    }
    const result = areaConvert(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${result}${toUnit}`);
    return `${value}${fromUnit} é igual a ${result}${toUnit}.`;
};
execArea();
