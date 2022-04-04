


let clickCount = 0;
let button = document.querySelector("#btn");
let counterPgraph = document.createElement("p");
document.body.appendChild(counterPgraph);
counterPgraph.innerHTML = clickCount;
button.addEventListener("click", function () {
    clickCount += 1;
    counterPgraph.innerHTML = clickCount;
})

function replaceX (startText, replacementText) {
            let newString = startText.replace("x", replacementText);
            return newString;
}

console.log(replaceX("Tryber x aqui!", "Bebeto"))

function replaceX (startText, replacementText) {
    startText = startText.split('');
    for (let i = 0; i < startText.length; i += 1) {
        if (startText[i] === "x") {
            startText[i] = replacementText;
        }
    }
    startText = startText.join("");
    return startText;
}


console.log(replaceX("Tryber x aqui!", "Bebeto"))


let array = ["html", "css", "javascript", "react", "php"];

function concatenation (startText, array) {
    array.sort();
    let textIntoArray = startText.split(" ");
    textIntoArray.push(`Minhas cinco principais habilidades são:`);
    for (let i = 0; i < array.length; i += 1) {
        textIntoArray.push(`
        ${array[i]}`);
    }
    let finalText = textIntoArray.join(" ");
    return finalText;
}
console.log(concatenation(replaceX("Tryber x aqui!", "Bebeto"), array));
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".