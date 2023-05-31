"use strict";
const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const volumeConvert = (value, fromUnit, toUnit) => {
    const indexFrom = volumeUnits.indexOf(fromUnit);
    const indexTo = volumeUnits.indexOf(toUnit);
    const exponent = indexTo - indexFrom;
    return value * Math.pow(1000, exponent);
};
