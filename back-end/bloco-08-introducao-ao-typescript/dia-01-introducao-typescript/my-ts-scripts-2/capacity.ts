import readline = require('readline-sync')

const capacityUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const capacityConvert = (value: number, fromUnit: string, toUnit: string): number => {
  const indexFrom: number = capacityUnits.indexOf(fromUnit);
  const indexTo: number  = capacityUnits.indexOf(toUnit);

  const exponent: number  = indexTo - indexFrom;

  return value * Math.pow(10, exponent);
}

const execCapacity = (): number|string => {
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
}

execCapacity();