// Objetos são possuem propriedades e tipos.
// Objetos são um tipo de dado que permite armazenar entadas do tipo chave: valor.
// Uma propriedade é a associação entre uma chave e um valor.
// Propriedades descrevem as características de um objeto.
// Declaração de objetos ocorre da mesma forma que declaração de variáveis.
// Objeto é composto por entradas. Cada entrada é um par chave (ou propriedade): valor (ou valor da propriedade).
// Chave deve ser identificador único para a entrada. Valor pode ser qualquer tipo de dado.

let singer = {
    name: "Milton",
    lastName: "Nascimento",
    nickName: "Bituca",
    age: 77,
    bestAlbums: ["Travessia", "Clube da Esquina", "Minas"],
}

// Pode-se acessar os valores de chaves de um objeto de duas formas.
// A primeira é a notação por ponto: objeto.chave para se referir ao valor.

console.log("O cantor", singer.name, singer.lastName, "possui", singer.age, "anos.")

// A segunda é a notação por colchetes: objeto['chave'].

console.log("O cantor", singer["name"], singer["lastName"], "possui", singer["age"], "anos.")

// Para criar uma nova entrada num objeto, usa-se a notação por colchetes:

singer["fullName"] = singer.name + " " + singer.lastName;

// Para imprimir um objeto na tela sob a forma de uma tabela, usa-se console.table. 

console.table(singer);

singer["bornInfo"] = {
    city: "Rio de Janeiro",
    state: "Rio de Janeiro"
}

// Para acessar o valor de um objeto que está dentro de outro objeto, usa-se a seguinte notação:

console.log("O cantor", singer.fullName, "nasceu no estado do", singer.bornInfo.city);

// ou:

console.log("O cantor", singer.fullName, "nasceu no estado do", singer.['bornInfo']['city');

// Se nomearmos a propriedade com sob a forma kebab-case, será preciso colocar o nome sempre entre aspas.

let singer = {
    name: "Milton",
    "last-name": "Nascimento",
    nickName: "Bituca",
    age: 77,
    bestAlbums: ["Travessia", "Clube da Esquina", "Minas"],
}

// Para acessar o valor dessa chave, é preciso usar a notação por colchetes.
console.log("O cantor", singer.name, singer["last-name"], "possui", singer.age, "anos.")

// As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0 , por exemplo, só é possível usando a notação de colchetes. A notação de ponto gera um erro.
// Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo

// Neste exemplo, a chave banco do objeto conta guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

// O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco, que é outro objeto! Ou seja, o objeto usuario possui outros dois objetos dentro dele.

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


// Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.
// Perceba que o nome que escolhemos para a função é um nome composto, e para a escrita de nomes compostos em JavaScript existem algumas convenções. Uma delas é a kebab case, onde o nome fica separado por um traço. Apesar de ser uma convenção, não é uma boa prática de escrita, pois muitas linguagens interpretam o traço como um sinal de subtração, o que pode ocasionar bugs.
// Você se lembra das regras de nomeação de variáveis? As mesmas se aplicam aqui. O recomendado é usar nomes descritíveis para as propriedades, além de escrevê-las no estilo camelCase.
// ATENÇÃO: Não use o estilo de escrita kebab-case no JavaScript, isso não é uma boa prática porque o traço pode ser interpretado como um sinal de subtração. Use o estilo camelCase.


let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey


let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaDeCatupiry: true,
};

// Estrutura for/in percorre todos os elementos de um array/objeto/string.
// Neste caso, percorre todas as chaves do objeto pizzas.

for (let key in pizzas) {
    console.log(key);
}
/* 
sabor
preco
bordaDeCatupiry
*/

for (let key in pizzas) {
    console.log(pizzas);
}
/*
{sabor: "Palmito", preco: 39.90, bordaDeCatupiry: true}
{sabor: "Palmito", preco: 39.90, bordaDeCatupiry: true}
{sabor: "Palmito", preco: 39.90, bordaDeCatupiry: true}
*/

for (let key in pizzas) {
    console.log(pizzas.preco);
}
/*
39.90
39.90
39.90
*/

for (let key in pizzas) {
    console.log(pizzas.['bordaDeCatupiry']);
}
/*
true
true
true
*/

for (let key in pizzas) {
    console.log(pizzas[key]); // Note que aqui não há aspas, pois "key" não é o nome de uma key, e sim uma variável
}
/*
'Palmito'
39.90
true
*/

let pizzasDoces = ["Chocolate", "Banana", "Morango"];

for (let key in pizzasDoces) {
    console.log(key); // Quando iteramos em arrays, key corresponde a cada índice dos elementos do array.
}
/*
0
1
2
*/

for (let key in pizzasDoces) {
    console.log(pizzasDoces);
}
/*
["Chocolate", "Banana", "Morango"]
["Chocolate", "Banana", "Morango"]
["Chocolate", "Banana", "Morango"]
*/

for (let key in pizzasDoces) {
    console.log(pizzasDoces[key]);
}
/*
Chocolate
Banana
Morango
*/

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}
/*
0 Chocolate
1 Banana
2 Morango
*/

// Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }
/*
type Fiat
model 500
color white
*/

// O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in , mas com uma diferença crucial.
// Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

let food = ['hamburguer', 'bife', 'acarajé'];

// As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

// Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.
// Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in . Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// Funções são blocos de código que encapsulam instruções que executam uma tarefa específica.
// Visam a modularizar programas, ou seja, dividi-los em partes menores, cada uma das quais possua uma única responsabilidade. 
// Sintaxe para declaração de uma função é: objeto

function nomeDaFuncao (par1, par2, ...) {
    //Bloco de código
}

// Ao declarar uma função, seus parâmetros são automaticamente declarados como variáveis.
// Pode-se fazer com que uma função retorne um valor usando-se o comando return.
// Pode-se também declarar variáveis dentro da função.

function nomeDaFuncao(par1, par2, ...) {
    resultado = par1 + par2;
    return resultado;
}

// Para invocar função, usa-se a seguinte sintaxe:

nomeDaFuncao(arg1, arg2, ...)

// Os argumentos fornecidos na invocação da função substituirão os parâmetros estipulados pela declaração da função na ordem em que forem apresentados.

// Se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.

// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável nome e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.

function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!

// Outro exemplo:

let status = 'deslogado';

function logarDeslogar() {
if (status === 'deslogado') {
    status = 'logado';
} else {
    status = 'deslogado';
}
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(5, 2)); // 7

// Outro exemplo:

function maiorNum(primeiroNum, segundoNum) {
if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
} else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
} else {
    return 'Os números são iguais';
}
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais

// Ah, se lembra sobre a complexidade de código ? Surpresa! É comum esse erro aparecer enquanto você escreve suas primeiras funções, não se assuste! O que você precisa fazer é quebrá-las em partes menores ou até mesmo criar subfunções que podem ser chamadas dentro dessas funções. Existem tecnologias que apontam esses erros de complexidade no seu terminal, como o ESLint, , por exemplo.
// Essa tarefa fica mais fácil quando você entende que cada função deve ter apenas um propósito, evite criar uma função que faça várias coisas diferentes e que não tem ligação uma com a outra! Não é recomendável que uma função tenha muitas finalidades como dizer "oi", multiplicar dois números e dizer qual é a estação do ano. É melhor você dividir isso tudo em 3 funções diferentes, pois além de diminuir a complexidade, fica melhor para entender e usá-las em outras partes do código.

// Return para a execução da função e retorna um dado valor para o lugar onde a função foi invocada.

// For/in pode mostrar tanto chaves/propriedades como valores.
// For/of mostra valores.

