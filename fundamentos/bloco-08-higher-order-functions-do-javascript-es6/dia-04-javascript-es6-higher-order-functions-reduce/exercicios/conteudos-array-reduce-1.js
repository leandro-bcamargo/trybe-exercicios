// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce. Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce. Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];

const biggestValue = (array) => {
  let biggestValue = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > biggestValue) {
      biggestValue = array[i];
    }
  }
  return biggestValue;
}

console.log(biggestValue(numbers));

const biggestValueReduce = numbers.reduce((accumulator, number) => {
  if (number > accumulator) {
    accumulator = number
  }
  return accumulator
}, 100);

console.log(biggestValueReduce);