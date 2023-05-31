import readline = require('readline-sync');

const areaUnits: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const areaConvert = (value: number, fromUnit: string, toUnit: string): number => {
  const indexFrom: number = areaUnits.indexOf(fromUnit);
  const indexTo: number  = areaUnits.indexOf(toUnit);

  const exponent: number  = indexTo - indexFrom;

  return value * Math.pow(100, exponent);
}

const execArea = (): string|number => {
  const value = readline.questionFloat('Which value?\n');
  const fromUnitIndex = readline.keyInSelect(areaUnits, 'From which unit?\n');
  const toUnitIndex = readline.keyInSelect(areaUnits, 'To what unit?\n');

  const fromUnit = areaUnits[fromUnitIndex];
  const toUnit = areaUnits[toUnitIndex];

  if (!fromUnit || !toUnit) {
    console.log('Função cancelada')
    return 0;
  }

  const result = areaConvert(value, fromUnit, toUnit);
  console.log(`${value}${fromUnit} é igual a ${result}${toUnit}`)

  return `${value}${fromUnit} é igual a ${result}${toUnit}.`
}

execArea();