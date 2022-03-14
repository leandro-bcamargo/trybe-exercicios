// Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****
  


// ---* 1
// --*** 3
// -***** 5
// ******* 7

let size = 5;
let symbol = "*";
// Aquilo que será printado em cada linha
let inputLine = "";
// Posição do asterisco central da pirâmide
let centerPosition = (size + 1) / 2;
// posição do asterisco mais à esquerda da linha
let controlLeft = centerPosition;
// posição do asterisco mais à direita da linha
let controlRight = centerPosition;
// conta quantas linhas haverá na pirâmide (no caso, 5)
for (let lineIndex = 0; lineIndex <= centerPosition; lineIndex += 1) {
    // conta quantos caracteres haverá na linha (no caso, 6)
    for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
        // serão inseridos asteriscos apenas entre os índices marcados por controlLeft e controlRight
        if (columnIndex > controlLeft && columnIndex < controlRight) {
            inputLine += symbol;
        }
        // no restante das posições, serão inseridos espaços.
        else {
            inputLine += " ";
        }
    }
    // imprime a linha
    console.log(inputLine);
    // reseta a linha
    inputLine = "";
    // expande o limite que conterá os asteriscos uma casa para cada logado
    controlRight += 1;
    controlLeft -= 1;
}


// let n = 9;
// let string = "";
// for (let i = 0; i < Math.ceil(n/2); i += 1) {
//     for (var j = 1; j < (Math.ceil(n/2) - i); j += 1) {
//         string += " ";
//     }
//     for (let k = 0; k < (i * 2) + 1; k += 1) {
//         string += "*";
//     }
//     console.log(string);
//     string = "";
// }
