import readline = require('readline-sync');

const lengthUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertLength = (value: number, fromUnit: string, toUnit: string): number => {
  const indexFrom: number = lengthUnits.indexOf(fromUnit);
  const indexTo: number  = lengthUnits.indexOf(toUnit);

  const exponent: number  = indexTo - indexFrom;

  return value * Math.pow(10, exponent);
}

const execLength = (): number|string => {
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
}

execLength();