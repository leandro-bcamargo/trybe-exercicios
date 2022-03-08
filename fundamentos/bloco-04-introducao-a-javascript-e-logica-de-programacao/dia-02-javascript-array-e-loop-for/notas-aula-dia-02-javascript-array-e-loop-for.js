// Há variáveis simples e compostas.
// Variáveis simples são let e const.
// Variáveis compostas colocam vários valores dentro de uma única estrutura de dados -> arrays.
let pizza1 = "4 queijos";
let pizza2 = "Frango com catupiry";
let pizza3 = "Marguerita";
let pizza4 = "Palmito";
let pizza5 = "Chocolate;"

// Valores contidos em um array ficam entre colchetes [] e separados por vírgula.
let pizzas = ["4 queijos", "Frango com catupiry", "Marguerita", "Palmito", "Chocolate"];

// Cada um dos valores de um array recebe um índice/chave.
// Começa a ser contado da posição 0.
console.log("Menu de sabores: " + pizzas);

// Para adicionar um valor a um array, usa-se a sintaxe array[posição] = valor;
pizzas[5] = "Peito de peru";

// Para substituir um valor em um array por outro valor, usa-se a mesma sintaxe de adicionar um valor, porém usando a posição ocupada pelo valor que se quer substituir.
pizzas[4] = "Sorvete";

// Para adicionar um valor ao fim de um array, usa-se a sintaxe array.push = valor;
pizzas.push("Muçarela");

// Para adicionar um valor ao início de um array, usa-se a sintaxe array.unshift = valor;
pizzas.unshift("Vegetariana");

// Para remover o último valor de um array, usa-se a sintaxe array.pop();
pizzas.pop();

// Para remover o primeiro valor de um array, usa-se a sintaxe array.shift();
pizzas.shift();

// Para procurar o índice de um valor em um array, usa-se a sintaxe array.indexOf(valor);
pizzas.indexOf("Muçarela");

// Para saber o tamanho de um array, usa-se a sintaxe array.length;
console.log("pizzas.length");

// Para colocar os elementos de um array em ordem alfabética, usa-se a sintaxe array.sort();
console.log(pizzas.sort());

// Para se referir a um valor em particular de um array, usa-se a sintaxe array[índice];
console.log(pizzas[0]);

// Para se referir ao último valor de um array, usa-se a sintaxe array[array.length - 1], uma vez que os elementos são contados a partir de 0.
console.log(pizzas[pizzas.length - 1]);

// Para executar um código para cada um dos elementos de um array, usa-se uma estrutura de repetição. 
/* 
Dentro dos parênteses, há três informações separadas por ponto-e-vírgula:
1- Inicialização - declaração de uma variável que conta as repetições, à qual será atribuída, no mais das vezes, o valor 0.
2- Verificação - condição que deve ser satisfeita para que o a estrutura realize mais um loop.
3- Atualização - atualização da variável que conta as repetições;
*/
// Entre chaves vem o bloco de código.

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

let numero = 7;
// Note o uso de <= na condição, uma vez que o contador começa com valor 1, não 0, como ocorre quando estamos trabalhando com índices de arrays.
for (let contador = 1; contador <= 8; contador++) {
    console.log("");
    console.log(numero * contador);
}

let listaDeNomes = ["Joana", "Maria", "Lucas"];
// Note o uso de < na condição, uma vez que o length da lista de nomes será maior em uma unidade do que o índice do último elemento do array.
for (let indice = 0; indice < listaDeNomes.length; indice += 1) {
    let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem);
}

// for/of permite a criação de uma estrutura de repetição que percorre cada um dos elementos de um array ou uma string.
/*
Sua sintaxe é:
for (let variavel of array) {
    bloco de código usando variavel;
}
*/

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 
//1
//2
//3
//4
//5

// Com strings funciona de modo análogo:
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// É possível, também, fazer operações com cada um dos itens de um array.
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

// É importante notar que o for/of não altera o array.