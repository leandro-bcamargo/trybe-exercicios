const volumeUnits: string[] = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

const volumeConvert = (value: number, fromUnit: string, toUnit: string): number => {
  const indexFrom: number = volumeUnits.indexOf(fromUnit);
  const indexTo: number  = volumeUnits.indexOf(toUnit);

  const exponent: number  = indexTo - indexFrom;

  return value * Math.pow(1000, exponent);
}