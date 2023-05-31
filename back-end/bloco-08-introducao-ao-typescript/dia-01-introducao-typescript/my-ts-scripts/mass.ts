import { readline } from ".";

const unitsWeight = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass (value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsWeight.indexOf(fromUnit);
  const toIndex = unitsWeight.indexOf(toUnit);

  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function execMass () {
  const value = readline.questionInt('What value?\n');
  const fromUnit = readline.question('From what unit?\n');
  const toUnit = readline.question('To what unit?\n');

  const convertedValue = convertMass(value, fromUnit, toUnit);
  console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
}

execMass();
