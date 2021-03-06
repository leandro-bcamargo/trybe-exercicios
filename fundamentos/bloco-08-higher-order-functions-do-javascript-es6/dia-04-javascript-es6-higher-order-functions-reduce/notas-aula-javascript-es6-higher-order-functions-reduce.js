// O reduce é diferente das outras HOFs : ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador, comumente referido como acc. E o que ele faz? Ele serve para acumular dentro de si os resultados das funções. Pense assim: caso não exista segundo parâmetro no reduce, para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr, que é chamado de current. Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante. Olhe no exemplo abaixo:

// A função soma todos os valores de um array:
// Apenas com o for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// Com .reduce:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Dissecando as funções:

// Usando for:

// Necessidade de criar uma variável para acumular o resultado de cada iteração do for, a soma de cada resultado - let sumNumbers;

// Necessidade de setar um valor inicial para variável - sumNumbers = 0;

// Usando .reduce :

// A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number;

// Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number;

// O retorno é salvo no primeiro parâmetro, result. É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index], mas nesse caso seria result = result + number;

// Para entender melhor como o reduce funciona, veja a animação e o código abaixo.

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

// O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Veja a seguir, será usado o último exemplo dado da soma dos números:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Com a alteração:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// Pode ver que mudou em nada o resultado da função. Mas veja que o primeiro valor do result não foi 32 , mas sim 0 .
// Agora mude o 0 para 10 ou qualquer outro valor.

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

// Agora o resultado mudou para 123, e o primeiro número impresso foi o 10. Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result, ou seja, no acumulador. Ele é o valor inicial do reduce. Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.

// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce. Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce. Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// A função passada agora pode possuir dois tipos de retorno:

// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou

// O valor do elemento do array, number , que indica que possui um valor maior que bigger 
.
// Modifique o segundo parâmetro passado, o 0 , no reduce para 100 e execute o programa. O retorno agora é 100 , já que nenhum número de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador igual ou o atualiza de acordo com a comparação que é feita. Ao final, você tem o maior valor do array. Adicione um console.log à função do reduce para ver isso acontecendo em detalhes, se quiser!

// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solução é está a seguir, mas tente realizar a função sem vê-la. Tente criar uma usando reduce e filter , e outra apenas usando reduce.

// Solução usando filter e reduce:

// É conveniente que o accumulator mantenha constante o seu tipo de dado, caso contrário pode haver confusão. Por exemplo, se ele for um objeto e for retornada uma string para o acumulador, ele passará a ser uma string e perderá as propriedades de objeto.