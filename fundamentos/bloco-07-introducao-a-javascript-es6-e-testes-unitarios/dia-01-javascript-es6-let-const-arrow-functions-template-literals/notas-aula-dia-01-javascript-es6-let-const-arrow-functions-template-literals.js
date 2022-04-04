// Você certamente já se deparou com três diferentes formas de se declarar variáveis em Javascript:
// var userEmail = 'maria@email.com';
// let userId = '78945-6';
// const userLocation = 'Brasil';

// Em primeiro lugar, vamos entender o que é o escopo em que a variável é declarada. Podemos pensar em escopo como sendo o 'local' em que uma variável é visível e pode ser referenciada.

function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  }
  userInfo();
  console.log(userEmail);

// Tente rodar a função userInfo no seu editor de código. Nesse caso, a variável userEmail foi declarada dentro do escopo da função userInfo . Agora experimente mover o console.log(userEmail) para fora da função e a execute novamente. Você verá um erro dizendo que userEmail não é definida - a variável só é reconhecida dentro do escopo da função. O que aconteceria se trocássemos o let por var e const ? Não deixe de fazer esse teste! Você verá que nos três casos, não temos acesso à variável fora do escopo da função userInfo . Como saber, então, qual expressão utilizar para declarar variáveis?

// O escopo de uma variável é o espaçõ do código em que é possível referir-se a essa variável.

// var vaza o escopo de estruturas de repetição e condicionais para o escopo da função.

// let não vaza escopo -> só é acessível dentro da estrutura de repetição/condicional/função em que é declarada.

// const faz com que variável não permita reatribuição.

// Vamos agora pensar em variáveis declaradas dentro do escopo de um bloco de código - como o corpo de um if ou um for.

if (true) {
    // inicio do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

// Nesse exemplo, temos acesso à variável userAge dentro e fora do bloco de código. Experimente trocar o var por let e const . Qual será o resultado? Temos acesso à variável declarada com o var dentro e fora do escopo do bloco. No entanto, não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, em aplicações mais complexas declarar variáveis com o var pode confundir até mesmo programadores mais experientes.

// Em aplicações maiores, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu quando usamos o var . Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. Por estes motivos, declarar variáveis com o var não é uma boa prática.

// Por default, se não for identificado o tipo de declaração de variável numa atribuição, o javascript irá interpretá-la como var.

// No caso de const, atribuição deve ser feita na mesma linha que a declaração.

// Quando se declara uma constante que tem um objeto ou array como valor , o que se mantém constante é o tipo de dado, não o conteúdo desse dado -> podem-se mudar valores de chaves, adicionar novas chaves, alterar elementos do array etc. Por isso não pode haver reatribuição.

// Outro grande problema ao utilizar o var para atribuir valor a variáveis é que você consegue redeclará-las sem gerar erros.

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

// Em aplicações maiores, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu quando usamos o var. Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. Por estes motivos, declarar variáveis com o var não é uma boa prática.

// O ES6 corrige esse problema ao introduzir o let e o const, fazendo com que uma variável com um nome específico só possa ser declarada uma única vez dentro de um escopo. Experimente executar o exemplo anterior usando o let e const e veja o que acontece!

// E quanto ao const, como ele se diferencia do let? O const permite que você declare constantes. Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let, podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando o const e let e veja o que acontece!

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// No exemplo acima, vimos que o const é imutável - ao declarar const favoriteLanguage = 'Javascript' o valor de favoriteLanguage não pode ser alterado. Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:

const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// Hoisting

// Hoisting é um comportamento padrão do JavaScript que acontece com variáveis declaradas com var. Esse comportamento move todas as declarações destas variáveis para o topo do escopo global, independentemente de onde a declaração foi feita.
// Veja o exemplo abaixo:

age = 20;

var age;

console.log(age); // 20

// Mesmo atribuindo um valor à variável age antes mesmo de declará-la, o console.log conseguiu imprimir o seu valor, isso por causa do hoisting. É como se tivéssemos primeiro declarado a variável age e depois atribuído o valor 20, como no exemplo abaixo:

var age;

age = 20;

console.log(age); // 20

// Porém, apenas a declaração da variável é movida para o topo do escopo e não seu valor. No código abaixo podemos ver um exemplo disso. Ao atribuirmos um valor à variável age apenas após o console.log , recebemos undefined como resultado.

var age;

console.log(age); // undefined

age = 20;

// Não se esqueça de que esse comportamento acontece apenas com variáveis declaradas com var. Se tentarmos fazer isso com let ou const , irá dar erro.

// Em resumo, variáveis podem ser declaradas com o const , let e var. Apesar das três terem o mesmo propósito, é importante nos atentar às boas práticas para escrevermos códigos confiáveis. Assim, sempre que possível, usar o const para declarar variáveis é interessante porque conseguimos um comportamento mais previsível, já que o seu valor não pode ser alterado diretamente.

// Template literals é mais uma feature do ES6 que nos permite criar strings complexas de forma mais fácil. Você certamente já concatenou strings e variáveis em Javascript da seguinte forma:

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');

// Essa solução nada elegante é como fazíamos antes de o ES6 introduzir uma nova forma de criar e manipular strings dinamicamente através de template literals. Com o template literals o exemplo acima pode ser substituído por:

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

// A sintaxe do template literals pede para usarmos o sinal de crase no início e no final da frase, e variáveis dentro de um ${...}. Você também pode adicionar uma expressão dentro das chaves, como ${a + b}. Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o operador + e \n para trocar de linha. Execute o código abaixo para ver o resultado!

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// Você já está craque em declarar funções em JavaScript utilizando a seguinte sintaxe:

const printName = function () {
    const myName = 'Lucas';
    return myName;
};
  
console.log(printName());

// A expressão acima está correta. Mas como você verá nos exemplos a seguir, é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos as vantagens de usarmos mais essa novidade do Javascript ES6 - arrow functions. 

// Uma das aplicações para arrow functions é em funções anônimas. Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.

// Arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function:

const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

// Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => 'Lucas';
console.log(printName());

// Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

// Até o momento você já aprendeu a usar expressões if / else e switch / case pra executar código baseado em certas condições, correto? Mas e se te disséssemos que existe uma sintaxe mais simples para a construção de algumas condicionais no JavaScript e que combina muito bem com as novas alterações do ES6?

// Pois é! Além dos condicionais que você já aprendeu, o JavaScript traz consigo uma ferramenta que permite fazer operações condicionais mais simples, que só tenham duas possibilidades de resposta ( x se verdadeiro , y se falso ), com uma sintaxe simplificada e legível: o operador ternário . Ele funciona muito bem com as sintaxes simplificadas que você acabou de aprender, como arrow functions , por exemplo! Para entendê-lo melhor, observe a seguinte lógica:

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Como você pode ver, a sintaxe do operador ternário é bem simples: x ? y : z.
// O x é uma condição que será avaliada como verdadeira ou falsa;
// O y é o retorno se a condição for verdadeira;
// O z é o retorno se a condição for falsa;

// A vantagem do operador ternário é que ele é fácil de entender quando se pega o jeito e é muito mais sucinto do que escrever um bloco condicional com if/else ou switch, gerando um código mais limpo e simples.

// Por outro lado, é bom saber que o operador ternário não substitui as expressões condicionais tradicionais! Em qualquer situação onde exista mais de uma condição a ser avaliada, gerando três ou mais resultados possíveis, o mais simples será utilizar as opções já aprendidas anteriormente:

// Situação em que é mais simples usar o operador ternário:

const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
  );
  
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática, pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código no futuro!

//   No mais, vale dizer que o ternary operator é uma excelente adição à caixa de ferramentas de qualquer pessoa desenvolvedora, basta saber usá-lo para tornar o código mais simples e legível!



