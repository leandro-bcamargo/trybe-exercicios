import { readline } from ".";

export const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

export function convertArea (value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsArea.indexOf(fromUnit);
  const toIndex = unitsArea.indexOf(toUnit);

  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}

export function execArea () {
  const value = readline.questionInt('What value?\n');
  const fromUnit = readline.question('From what unit?\n');
  const toUnit = readline.question('To what unit?\n');

  const convertedValue = convertArea(value, fromUnit, toUnit);

  console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}

execArea();