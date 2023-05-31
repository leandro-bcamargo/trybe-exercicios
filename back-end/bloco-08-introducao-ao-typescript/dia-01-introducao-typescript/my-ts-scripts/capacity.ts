import { readline } from ".";

const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity (value: number, fromUnit: string, toUnit: string ): number {
  const fromIndex = unitsCapacity.indexOf(fromUnit);
  const toIndex = unitsCapacity.indexOf(toUnit);

  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function execCapacity () {
  const value = readline.questionInt('What value?\n');
  const fromUnit = readline.question('From what unit?\n');
  const toUnit = readline.question('To what unit?\n');

  const convertedValue = convertCapacity(value, fromUnit, toUnit);

  console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}

execCapacity();
