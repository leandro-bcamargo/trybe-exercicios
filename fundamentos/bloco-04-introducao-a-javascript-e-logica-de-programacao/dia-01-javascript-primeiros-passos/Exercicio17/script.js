let grossIncome = 3000;
let inss;
let incomeTax;

if (grossIncome <= 1556.94) {
    inss = .08 * grossIncome;
}
else if (grossIncome <= 2594.92) {
    inss = .09 * grossIncome;
}
else if (grossIncome <= 5189.82) {
    inss = .11 * grossIncome;
}
else {
    inss = 570.88;
}

let baseIncome = grossIncome - inss;


if (baseIncome < 1903.98) {
    incomeTax = 0;
}
else if (baseIncome <= 2826.65) {
    incomeTax = (.075 * baseIncome) - 142.80;
}
else if (baseIncome <= 3751.05) {
    incomeTax = (.15 * baseIncome) - 354.80;
}
else if (baseIncome <= 4664.68) {
    incomeTax = (.225 * baseIncome) - 636.13;
}
else {
    incomeTax = (.275 * baseIncome) - 869.36;
}

let netIncome = baseIncome - incomeTax;
console.log(netIncome);

