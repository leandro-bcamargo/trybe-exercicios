import { readline } from ".";

export const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convertLength (value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsLength.indexOf(fromUnit);
  const toIndex = unitsLength.indexOf(toUnit);

  const exponent = toIndex - fromIndex;

  return value * 10 ** exponent;
}

function execLength () {
  const value = readline.questionInt('What value?\n');
  const fromUnit = readline.question('From what unit?\n');
  const toUnit = readline.question('To what unit?\n');

  const convertedValue = convertLength(value, fromUnit, toUnit);
  console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}

execLength();