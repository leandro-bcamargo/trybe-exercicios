// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solução é está a seguir, mas tente realizar a função sem vê-la. Tente criar uma usando reduce e filter , e outra apenas usando reduce.

// Solução usando filter e reduce:

// const sumEven = numbers.reduce((accumulator, number) => {
//   if (number % 2 === 0) {
//     accumulator += number;
//   }
//   return accumulator;
// })

// console.log(sumEven);

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
})

const sumEven = evenNumbers.reduce((accumulator, number) => {
  return accumulator + number;
});

console.log(sumEven);