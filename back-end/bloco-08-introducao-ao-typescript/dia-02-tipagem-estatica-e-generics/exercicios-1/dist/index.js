"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calabresa = {
    flavor: 'calabresa',
    slices: 8,
};
const marguerita = {
    flavor: 'marguerita',
    slices: 6,
};
const nutella = {
    flavor: 'nutella',
    slices: 4,
};
const comumCalabresa = {
    flavor: "Calabresa",
    slices: 6,
};
const comumFrango = {
    flavor: "Frango",
    slices: 8,
};
const comumPepperoni = {
    flavor: "Pepperoni",
    slices: 4,
};
const vegetarianaCogumelo = {
    flavor: "Cogumelo",
    slices: 6,
};
const vegetarianaPalmito = {
    flavor: "Palmito",
    slices: 4,
};
const doceGoiabada = {
    flavor: "Goiabada com queijo",
    slices: 4,
};
console.log(comumCalabresa);
console.log(comumFrango);
console.log(comumPepperoni);
console.log(vegetarianaPalmito);
console.log(vegetarianaCogumelo);
console.log(doceGoiabada);
function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            result.push(array[i]);
    }
    ;
    return result;
}
console.log(myFilter([1, 2, 3, 4], (item) => item < 3));
console.log(myFilter(['a', 'b', 'c'], (item) => item !== 'a'));
