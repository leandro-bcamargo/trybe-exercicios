import { readline } from ".";

const unitsVolume = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume (value: number, fromUnit: string, toUnit:string): number {
  const fromIndex = unitsVolume.indexOf(fromUnit);
  const toIndex = unitsVolume.indexOf(toUnit);

  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

  function execVolume () {
    const value = readline.questionInt('What value?\n');
    const fromUnit = readline.question('From what unit?\n');
    const toUnit = readline.question('To what unit?\n');

    const convertedValue = convertVolume(value, fromUnit, toUnit);
  
    console.log(`${value}${fromUnit} é igual a ${convertedValue}${toUnit}`);
  }

execVolume();