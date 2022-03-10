// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let sum = 0;
for (let i = 1; i <= 50; i += 1) {
    sum += i;
}
console.log(sum);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let resultado = 0;
for (let i = 2; i <= 150; i += 1) {
    if (i % 3 === 0) {
        resultado += 1;
    }
}
console.log(resultado);
if (resultado === 50) {
    console.log("Mensagem secreta");
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let escolha1;
let escolha2;
if (escolha1 === "pedra") {
    if (escolha2 === "tesoura") {
        console.log("Player 1 won");
    }
    else if (escolha2 === "papel") {
        console.log("Player 2 won");
    }
    else {
        console.log("A ties");
    }
} 
else if (escolha1 === "tesoura") {
    if (escolha2 === "papel") {
        console.log("Player 1 won");
    }
    else if (escolha2 === "pedra") {
        console.log("Player 2 won");
    }
    else {
        console.log("It's a tie");
    }   
}
else {
    if (escolha2 === "pedra") {
        console.log("Player 1 won");
    }
    else if (escolha2 === "tesoura") {
        console.log("Player 2 won");
    }
    else {
        console.log("It's a tie");
    }
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade;
if (idade >= 18) {
    console.log("A pessoa é maior de idade.");
}
else {
    console.log("A pessoa não é maior de idade.");
}

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
let idadeManu = 10;
let idadeAna = 10;
let idadeRonald = 10;

if (idadeManu < idadeAna && idadeManu < idadeRonald) {
    console.log("Manu é a mais nova");
}
else if (idadeAna < idadeManu && idadeAna < idadeRonald) {
    console.log("Ana é a mais nova");
}
else if (idadeRonald < idadeAna && idadeRonald < idadeManu) {
    console.log("Ronald é o mais novo");
}
else if (idadeRonald === idadeAna && idadeRonald === idadeManu) {
    console.log("Todos têm a mesma idade.");
}
else if (idadeRonald === idadeAna) {
    console.log("Ronald e Ana são os mais novos");
}
else if (idadeRonald === idadeManu) {
    console.log("Ronald e Manu são os mais novos");
}
else if (idadeAna === idadeManu) {
    console.log("Ana e Manu são os mais novos");
}
