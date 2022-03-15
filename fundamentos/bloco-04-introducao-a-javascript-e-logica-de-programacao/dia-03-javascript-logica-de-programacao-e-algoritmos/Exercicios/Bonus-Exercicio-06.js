// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let number = 6;
let isPrime = true;

for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
        isPrime = false;
    }
}
if (isPrime === true) {
    console.log(number, "is a prime number.");
}
else {
    console.log(number, "is not a prime number.");
}