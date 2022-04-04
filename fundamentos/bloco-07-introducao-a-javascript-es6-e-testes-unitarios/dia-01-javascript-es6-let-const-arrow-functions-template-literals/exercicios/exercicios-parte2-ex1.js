// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i += 1) {
        result *= i;
    }
    return result;
}

// console.log(fatorial(7));
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

let result = 1;
const fatorial = (number) => {

    if (number > 1) {
        return number * fatorial(number - 1);
    }
    else { 
        return 1;
    }
}
  

console.log(fatorial(7));

const fatorial = (number) => (number > 1) ? number * fatorial(number - 1) : 1;
console.log(fatorial(7));