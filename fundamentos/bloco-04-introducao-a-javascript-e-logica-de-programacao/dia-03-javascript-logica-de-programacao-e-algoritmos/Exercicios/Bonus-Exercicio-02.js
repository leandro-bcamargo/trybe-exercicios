// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let string = "";
for (let i = 0; i < n; i += 1) {
    string += "*";
    console.log(string);
}