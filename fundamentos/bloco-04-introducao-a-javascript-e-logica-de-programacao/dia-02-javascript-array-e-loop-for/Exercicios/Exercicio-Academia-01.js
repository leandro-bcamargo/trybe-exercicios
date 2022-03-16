/*
01 - Lanchonete da Trybe
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.
Para isso escreva um algoritmo que recebe o número da opção escolhida conforme tabela abaixo e retorne a string inteira do respectivo lanche:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"
Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:
-------------------------------
"Não temos esta opção ainda :("
-------------------------------
Utilize Switch/Case para resolver este problema.
*/

function optionsMenu(number){
    // Desenvolva seu código nessa função
    let order;
    switch (order) {
        case 1:
            console.log("1 - Trybe Lanche Feliz");
        case 2:
            console.log("2 - McTrybe");
        case 3:
            console.log("3 - TrybeWooper");
        case 4:
            console.log("4 - X-Trybe");
        case 5:
            console.log("5 - Triplo Trybe com JS");
        default:
            console.log("Não temos esta opção ainda :(")
    }

  module.exports = optionsMenu;