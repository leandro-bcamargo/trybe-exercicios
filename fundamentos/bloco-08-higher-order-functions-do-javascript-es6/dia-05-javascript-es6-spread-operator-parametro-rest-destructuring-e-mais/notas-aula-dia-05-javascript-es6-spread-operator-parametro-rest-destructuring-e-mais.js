//Spread operator

// Como você faria para adicionar itens a um array? Você pode ter pensado em usar o push , como no exemplo abaixo:

const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

// Essa solução é válida, e o seu raciocínio está correto! Mas... Onde foi parar o array original numbers? Observe que quando usamos o push para adicionar algo a um array, ele será sobrescrito. Neste exemplo simples, sobrescrever o array numbers não foi um problema. No entanto, em aplicações maiores em que você precisa atualizar alguma informação de um array ou objeto, você pode querer manter as informações originais e apenas criar uma cópia do array original com o que precisa ser alterado. Em cenários como esse, vamos deixar o push de lado e usar um recurso incrível para adicionar valores a objetos iteráveis: o operador spread. E não para por aí! Você verá que o spread pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis, e em funções que recebem múltiplos argumentos.

// Primeiramente, assista a este vídeo que explica o operador spread.

// Spread espalha os valores de arrays e objetos.

// Ajuda a promover imutabilidade no código.

// Como vimos no vídeo, o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar. Acompanhe o exemplo numérico abaixo para fixar melhor a ideia do spread:

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// Muito legal, né? E você pode usar o spread em outra posição de newArray . Experimente passar o ...numbers no final do array e veja o que acontece. O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min. Vamos ver um exemplo?

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos. Veja o exemplo abaixo:

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

// Parâmetro Rest

// Agora que você viu como funciona o spread operator , vamos aprender mais um recurso que irá te auxiliar a criar funções que recebem um número ilimitado de argumentos: o parâmetro rest .

// O parâmetro rest é uma feature do ES6 que permite que você crie funções que recebam um número variável de argumentos. Assim, suas funções ficam mais flexíveis. Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest. Todos eles serão colocados dentro de um array, o que te permite usar métodos como o .length. Acompanhe o exemplo abaixo para entender melhor essa ideia:

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// Observe no segundo console.log que passamos diferentes tipos de argumentos para a função quantosParams e todos foram colocados em um array. Quer ver mais um exemplo onde o rest é muito útil? Acompanhe!

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// Nós já aprendemos sobre higher order functions e vimos como o método reduce é útil para somar os elementos de um array. No exemplo acima, a função sum calcula a soma de todos os argumentos passados a ela - independente do número. Como o parâmetro rest "empacota" todos os argumentos em um array, podemos utilizar o reduce para somar tudo o que estiver dentro deste array. Experimente passar mais números como argumento para a função sum. Você verá que independente do número de argumentos passados, a função irá executar a soma. Sua função é muito mais flexível quando queremos passar múltiplos parâmetros com o rest pois você não precisa especificar quantos argumentos a função irá receber!

// Object Destructuring

// Você certamente já precisou extrair valores de um objeto em Javascript. No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product?

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// Uma forma seria acessar os valores utilizando a notação de objeto, como console.log(product.name), e repetir para cada propriedade. Essa tarefa é repetitiva e verbosa...quando lidamos com objetos mais complexos, ela seria até mesmo impraticável. Para a nossa alegria o ES6 introduz mais um recurso para tornar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto ou object destructuring.

// E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product . A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

const { name } = product;
console.log(name); // Smart TV Crystal UHD

// Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das chaves para acessar o seu valor correspondente:

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo este valor a variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos.

// Você deve estar se perguntando. "E se a chave do objeto contiver outro objeto como valor?" Veja o exemplo abaixo e entenda como podemos resolver este problema:

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log() , para isso, vamos utilizar a desestruturação de objetos:

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por :, segue a sintaxe: homeWorld: { name: planetName }. Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

// Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

// Temos um objeto daysOfWeek que contém as chaves workDays e weekend. Precisamos agora extrair os valores dessas chaves e, para isso, vamos utilizar a desestruturação de objetos:

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

// Feita a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays com os do array weekend, colocando-os em um novo array chamado weekdays.


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Copie o codigo acima, e teste em seu VSCode.

// Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo:

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

// As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto . Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria

// Você deve estar se perguntando: o que acontece quando tento acessar um campo inexistente? Experimente fazer esse teste! Como sabemos, o Javascript não vai conseguir fazer essa associação porque esse campo não existe e a variável receberá o valor undefined.

// Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Array Destructuring

// Agora que você entende como a desestruturação funciona, você pode estar se perguntando: será que ela também se aplica a arrays? Afinal de contas, arrays são objetos iteráveis e têm algumas similaridades com os objetos em Javascript... Este questionamento é válido, e a resposta é: SIM! Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring.

// Como vimos na sessão anterior, podemos utilizar a desestruturação para acessar valores de um objeto e atribuí-los a variáveis. Você certamente já acessou um valor de uma posição do array da seguinte forma:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Default Destructuring

// Agora você já sabe como aplicar desestruturação em objetos e arrays. Você se lembra do que acontece quando tentamos acessar:

// uma propriedade que não existe em um objeto?
// um valor em uma posição inexistente em um array?
// Ou seja:

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;

// Essa desestruturação funciona? E se funciona, qual o valor que aparece se fizer console.log(nationality)? Copie esse código e teste você mesmo. 😉

// Como vimos nas sessões anteriores, quando tentamos acessar uma propriedade que não existe, como nationality, o valor retornado é undefined. E se você quisesse dar um valor padrão para nationality, caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6:

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// Analogamente, o mesmo pode ser feito na hora de desestruturar um array:

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// Object Property Shorthand

// Você já deve ter percebido que uma das vantagens do ES6 é que a nova sintaxe elimina códigos repetitivos, contribuindo para a limpeza do código. A property shorthand é um recurso muito útil na hora de declarar objetos em Javascript. A função abaixo recebe como parâmetro informações sobre um novo usuário e retorna um objeto contendo esses dados. Observe que as propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. Essa repetição parece desnecessária, não é mesmo?

const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// É exatamente essa repetição que a feature property shorthand elimina: podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Muito legal, não é mesmo? Este é mais um recurso que te permite escrever códigos mais concisos!

// Default Parameters

// Por último, mas não menos importante, vamos entender o que é o parâmetro default. Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário. O que acontece quando você chama a função sem passar o argumento que ela espera? Faça esse teste com o exemplo no seu editor de códigos!

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// Você verá que a função retornará undefined . Você consegue pensar em uma forma de corrigir esse problema? Afinal, podemos esquecer de chamar a função com o nome do usuário. Uma solução seria:

const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

// Essa solução não parece muito elegante, não é mesmo? Afinal, precisamos de incluir uma linha para checar se o parâmetro é indefinido. Se sim, definimos que user será 'usuário'. Caso contrário, a função irá imprimir a mensagem com o nome do usuário passado como argumento.

// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// Simples assim! Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido a função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário.









