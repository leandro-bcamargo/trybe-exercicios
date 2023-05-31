"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const capacityConvert = (value, fromUnit, toUnit) => {
    const indexFrom = capacityUnits.indexOf(fromUnit);
    const indexTo = capacityUnits.indexOf(toUnit);
    const exponent = indexTo - indexFrom;
    return value * Math.pow(10, exponent);
};
const execCapacity = () => {
    const value = readline.questionFloat('What value?\n');
    const fromUnitIndex = readline.keyInSelect(capacityUnits, 'From what unit?\n');
    const toUnitIndex = readline.keyInSelect(capacityUnits, 'To what unit?\n');
    const fromUnit = capacityUnits[fromUnitIndex];
    const toUnit = capacityUnits[toUnitIndex];
    if (!fromUnit || !toUnit) {
        console.log('Operação cancelada');
        return 0;
    }
    const result = capacityConvert(value, fromUnit, toUnit);
    console.log(`${value}${fromUnit} é igual a ${result}${toUnit}`);
    return `${value}${fromUnit} é igual a ${result}${toUnit}`;
};
execCapacity();
