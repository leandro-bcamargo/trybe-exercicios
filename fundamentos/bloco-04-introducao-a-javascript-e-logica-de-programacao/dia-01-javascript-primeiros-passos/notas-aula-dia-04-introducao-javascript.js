
// Para linkar arquivo javascript ao arquivo html, usa-se dentro de <head> ou na última linha antes de </body> a tag <script>.
// let nome_variavel = valor -> declara uma variável com o nome especificado e atribui a ela o valor especificado. Declaração de uma variável e atribuição de valor a uma variável.
// Neste caso, o valor é um número.
// Não é permitido iniciar o nome de uma variável por um número e não pode haver espaços.
// camelCase -> Quando houver 2 ou mais palavras, a primeira se inicia por minúscula e as demais por maiúscula.
// Variáveis são case-sensitive.
let age = 20;
// Variáveis declaradas por "let" podem ter seus valores atualizados ao longo do código.
age = 30;
// Variáveis declaradas por "const" não podem ter seus valores atualizados ao longo do código
const hero = "Batman";
// Neste caso, o valor é uma string.
let name = "Hulk";
// Mostra no console o valor da variável usada como argumento.
console.log(age);
console.log(name);

// Há dois tipos de tipos primitivos: tipos de referência e tipos de valores.
// String literals -> sequências de caracteres.
let movie = "Avengers"
//Number literals -> números inteiros ou decimais.
let score = 10.89;
//Booleans -> valores de verdade, true ou false.
let isValid = true;
// Undefined -> variáveis indefinida. Não possui nenhum valor.
// Null -> pode ser redefinido ao longo do código. Há um valor, e ele é nulo.
let person;
let color = null;
// typeof variavel -> identifica o tipo da variável em questão.
typeof color;
// + -> adição.
// - -> subtração.
// * -> multiplicação.
// / -> divisão
// ** -> exponenciação
let salary = 3500;
console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);
console.log(3 ** 3);

// ++ -> incrementação -> equivalente a variável = variável + 1;
salary++;
// -- -> decrementação -> equivalente a variável = variável - 1;
salary--;

// "if" cria uma estrutura condicional.

/*
if (condição) {
    código a ser executado se condição for satisfeita;
}
*/

// Para adicionar outras condições a serem checadas caso a primeira não seja satisfeita, usa-se "else if"

/* 
if (condição){
    código;
}
else if (outra condição) {
    outro código;
}
*/


// "else" descreve o que deve acontecer se nenhuma das condições anteriormente declaradas for satisfeita. É residual.

/* 
if (condição){
    código;
}
else if (outra condição) {
    outro código;
}
else {
    outro código;
}
*/

let trybe = 14;
if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos síncronos");
}

// && -> AND -> operador lógico binário que resulta em true sse ambos os conjuntos forem true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Se houver uma conjunção de vários conjuntos, a ordem seguida será de dois em dois, da esquerda para a direita.

const listaDeCompras = cenouras && leite && arroz && feijao;
                            /* true && arroz && feijão;
                                    true && feijão;
                                         true; */

// || -> OR -> operador lógico binário que resulta em true sse pelo menos um dos disjuntos for true.

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ! -> NOT -> operador lógico unário que resulta em true sse o negado for false.

// Valores podem ser, também, truthy ou falsy.
// Valores truthy são interpretados como true em contextos booleanos. 
// Valores falsy são interpretados como false in contextos booleanos.
// Todos os valores são truthy, exceto os seguintes: false, 0, -0, 0n, "", null, undefined, e NaN.

// "==" é para igualdade apenas de valores, não de tipos.
let num3 = 15;
let num4 = '15'
num3 == num4;

// "===" é para igualdade de valores e de tipos.
let num5 = 15;
let num6 = 15;
num5 === num6;

// Strings
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

// Números
console.log(!42); // false

console.log(!0); // true

// Null
console.log(!null); // true

// Undefined
console.log(!undefined); // true

let trafficLight = "vermelho";

// Estrutura switch/case.
// Entre parenteses coloca-se a variável a ser examinada.
switch (trafficLight) {
    // "case" introduz o valor que a variável deve ter para satisfazer a condição.
    // Note os dois pontos ao final.
    case "vermelho":
        // Aqui é expresso o código a ser executado se a condição for satisfeita.
        console.log("Pare!");
        // Break é necessário para que não se chequem as condições seguintes.
        break;

    case "amarelo":
        console.log("Atenção!");
        break;
    
    case "verde":
        console.log("Siga!");
        break;

    // "default" é usado residualmente, para o caso de nenhuma das condições anteriormente estipuladas for satisfeita.
    default:
        console.log("Valor não identificado.")
}

