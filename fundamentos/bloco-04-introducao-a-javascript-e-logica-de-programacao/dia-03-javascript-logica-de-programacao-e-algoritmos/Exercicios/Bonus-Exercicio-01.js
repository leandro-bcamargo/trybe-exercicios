// // Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5;
let string = "";
for (var i = 0; i < n; i += 1) {
    for (var j = 0; j < n; j += 1) {
        string += "*";
    }
    console.log(string);
    string = "";
}