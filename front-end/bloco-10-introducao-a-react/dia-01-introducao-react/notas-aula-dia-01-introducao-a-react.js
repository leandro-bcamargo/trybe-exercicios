// React é uma biblioteca Javascript de criação de interfaces (UIs).

// Há todo um ecossistema que envolve o React:
// React
// JSX
// Babel
// Webpack
// Flux/Redux
// fetch
// Jest/RTL

// JSX é uma sintaxe usada pelo React,levemente diferente do JS, combinando JS com HTML num mesmo arquivo.

// Classes são o modo como o React propõe que se organize o código em pedaços lógicos.

// NPM - node package manager.

// Pacotes do node são pacotes de códigos feitos por outras pessoas.

// npm init -y - inicia npm com configurações padrão

// Cria um package.json que armazena essas informações.

// "test": "jest"

// Instala-se então o jest: npm install --save-dev jest -> instala jest como dependência de desenvolvimento

// package.json é atualizado.

// É criada pasta node_modules, onde há todos os pacotes do npm. É uma pasta muito grande e não deve ser commitada no github.

// Quando se executa npm install, package.json será analisado e se verão todos os pacotes que usuário tem instalado. E esse comando cria node_modules.

// Se se clonar esse repositório que contém o arquivo package.json e se executa npm install, essa pasta já vai ser criada. Por isso, como ela vai ser criada toda vez que se executar npm install, não é preciso commitá-la no github.

// npm install react -> instalar sem flag faz com que seja usado tanto no desenvolvimento como na produção

// Como não se quer comitar node_modules, cria-se um arquivo .gitignore e dentro dele se escreve node_modules/

// existem 2 comandos - npm e npx 

// npm instala os pacotes no seu projeto.

// npm não instala o pacote no projeto, apenas executa o código que está no pacote.

// npx create-react-app my_app -> cria um aplicativo pre-definido do react com todas as pastas e scripts necessários

// npm é o gerenciador de pacotes, será utilizado para instalar os pacotes em nossas aplicações React. Npx executa o comando de um pacote sem instalá-lo. 

// create-react-app é um pacote que cria todos os arquivos necessários para termos um app React, então não rodamos ele mais do que uma vez por projeto, nem precisamos do pacota instalado em nossas máquinas. Então, ele é sempre executado com npx.

// React é uma biblioteca JS para construção de UIs.

// Serve para organizar, componentizar e tornar mais eficientes cada parte das aplicações que a utilizam.

// A idéia principal é dividir a aplicação em blocos, reutilizáveis ou não, que podem fazer a gestão das suas próprias informações através de seu estado, ou seja, reagir a eventos, interações, dados etc. Toda vez que houve uma mudança de um componente, o React atua especificamente na renderização dele, sem que seja necessário atualizar outros blocos.

// A componentização permite também utilizar funções específicas, estilizações, testes e outras tecnologias no exato local em que elas serão utilizadas, permitindo que qualquer possível refatoração do código se torne simples, bem endereçada e fácil de se encontrar.



// JSX

// Javascript Syntax Extension

// É uma extensão de sintaxe para o JS. Ela demonstra como a interface deverá se comportar, de forma lógica e descritiva.

const element = <h1>Hello, world!</h1>;

// A construção de um elemento JSX é bem parecida com a de um elemento HTML, com pequenas diferenças, para que não haja conflito entre HTML e JS. Um exemplo é a declaração de uma classes no HTML, que é substituída por className no JSX, para evitar conflito de sintaxe com as classes do JS.

// Caso fossemos declarar a mesma variável sem o JSX, precisaríamos de funções como createElement, que recebe como parâmetro um componente, um objeto com as props, e o conteúdo que será encapsulado por esse componente. Seriam necessárias sequências relativamente longas de instruções de código para conseguirmos montar e manipular uma árvore de componentes. Refazendo o código acima sem o JSX:


const element = React.createElement("h1", null, "Hello, world")

// Seria muito difícil compreender uma aplicação inteira construída dessa forma, por isso precisamos do JSX.

// O uso do JSX em aplicações React não é obrigatório, mas a complexidade da contrução da aplicação fica menor e o código fica mais intuitivo.



// Incorporando expressões no JSX

// Por ser um código JS, JSX permite que se façam injeções de algoritmos dentro da estrutura HTML. Logo, podem-se aplicar diretamente na estrutura códigos que renderizarão outras diversas expressões.

const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

// Podemos aprofundar mais um pouco e chamar uma função na nossa constante element:


function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// Agora vamos incorporar nossa constante element na função helloWorld, retornar um código JSX e encapsulá-lo numa div.

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

// Lembra-se quando falamos da substituição de class por className em JSX? Podemos também usar expressões Javascript para atribuir valor a esse atributo.

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;



// ReactDOM.render

// O ReactDOM.render é responsável por renderizar e atualizar seu código dentro do HTML, exibindo seus elementos React.

// Quando fazemos alguma alteração no código, seja através de uma função ou da interação de quem usa, o React DOM compara o elemento novo e seus elementos filhos com os anteriores e aplica as mudanças somente onde é necessário pra levar a aplicação ao estado desejado. 


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// Neste exemplo, chamamos a função tick, que chama o ReactDom.render a cada segundo e injeta no elemento pai de id root um 'Hello, world!' e o horário. 

// Diferentemente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. Pela atualização precisa do DOM, e pela sua composição, o React apresenta grandes avanços na velocidade de processamento.

// Como faremos manipulação do DOM? No JS costumávamos pegar os elementos via querySelector e com algum event addEventListener escutar um evento, chamar uma função e atribuir ou mudar uma propriedade desse elemento. 

// No React, temos o conceito de estado, e dependendo desse estado podemos definir classes no CSS, tudo isso dinamicamente.



// CSS e Import

// E como fica o CSS nesse contexto?

// Assim como era feito no HTML, deve-se criar um arquivo que conterá todo o código CSS e então importá-lo onde se deseja utilizá-lo e colocar as classes e ids nos elementos da página. 

/* App.css */
.App {
  background-color: #282c34;
  text-align: center;
}

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;



// Criação de componentes funcionais e de classe

// O React permite criar uma tela como uma junção de diferentes pequenas peças reutilizáveis com lógica isolada - os componentes.

// Esses componentes podem ser criados de duas formas. Através de funções e através de classes (ES6). 



// Métodos

// Tanto classes como funções recebem atributos e nós as chamamos em seguida. Porém, uma classe pode possuir métodos, que são ações que toda entidade criada a partir de uma classe pode realizar.

// Podemos atribuir vários métodos, os quais podem, inclusive, alterar o estado do objeto. Veremos mais adiante os métodos de classe, junto com o estado da aplicação.

// Em React, classe é uma das formas de renderizar os componentes da página. Então, quando um componente precisa ser alterado, utilizamos componentes de classe, para que possamos utilizar seus estados para para realizar essas alterações. 

// Classes serverem para agrupar funções que fazem sentido estar juntas. 

// React vai transformar cada agrupamento de funções em um elemento que aparece na tela.

// React é uma biblioteca que serve para criar telas. Vai dividir a tela em vários pedaços menores, e cada pedaço será um componente dessa tela.

// É através de classes que esses componentes serão descritos.

// Cada componente tem um propósito, e eles serão criados através de classes.



// Classes e React

// A principal diferença entre o uso de componentes por classe e por função é que aqueles gerados por classe têm acesso a métodos e ao estado próprios de qualquer componente React gerado via classe, como o método render(), que te permite renderizar todo o conteúdo criado na tela, os quais são acessíveis somente por componentes criados via classe na maior parte das versões do React. A sintaxe para criar um componente com classes é a seguinte:

import React from 'react';

class ReactClass extends React.Component {
  render() {
    return (
      <h1>My first React Class Component!</h1> //Quando há apenas um elemento retornado, não é necessário envolvê-lo por um elemento pai. Elemento pai pode ser uma div, mas pode ser também uma tag <Fragment> ou <>, que é uma espécie de tag vazia.
    )
  }
}

// npx create-app-react hello-world-react -> cria um app react chamado hello-world-react

// Navega-se para dentro do diretório criado

// npm install

// npm start

// Abrir vscode no diretório criado

// App.js é o código que gerou a página inicial

// index.js é criado automaticamente também. 

// index.js chama reactDOM.render. Esta função pega tudo o que está dentro dela e joga para o navegador e renderiza na tela.

// Todo o código que o React retorna termina dentro dessa função reactDOM.render e é renderizada na tela.

// App é um componente React criado por default. É o componente que conterá toda a aplicação.

// Componentes React são compostos de componentes menores.

// No exemplo dado, componente App é composto por HelloWorld

// O export default é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja ele uma função, um componente ou uma variável. Ex:

export default Component;


// CONCLUSÃO

// Vimos que o React funciona como um monta-monta. Há várias peças pequenas (componentes) que são combinadas para fazer uma tela completa.

// Esses componentes podem ser componentes de função (que não podem alterar seus estados) e componentes de classe (que podem alterar seus estados).

// Para alterar os estados dos componentes de classe, utilizamos os métodos, cuja sintaxe veremos mais adiante.

// Expressões JSX devem retornar apenas um elemento pai, que, se necessário, pode encapsular vários elementos filhos.






---------------------

// No React, tudo será Javascript, inclusive o que parece HTML e CSS.

// Toda a página será montada e controlada por JS.

// Geralmente há uma única div, geralmente com id 'root'.

// Adicionar as tags script: Bibliotecas a serem importadas via script no html: react e react-dom

// Instalar npx create-react-app permitirá utilizar o jsx.

// Node é o engine que permite rodar o JS fora do browser. 

// NPM é o gerenciador de pacotes para o node.

// React é uma biblioteca de código. Create-react-app é um programa que cria um template com todos os arquivos/dependências necessárias para o projeto.

// npx create-react-app meu-app

// node_modules contém todas as dependências para uma aplicação React.

// Basta fazer npm install que ele gera automaticamente a node_modules, razão pela qual não é preciso commitá-la.

// package.json contém informações sobre as dependências

// npm start na pasta do projeto é como se fosse o live server

// src é a pasta onde será trabalhado o código React.

// index.js é o ponto de entrada da nossa aplicação.

// importa react, react-dom, css, App (componente React)

// App é o componente raiz -> Root.render(<App />)

// No App.js serão renderizados todos os outros componentes.

// Componente React pode ser duas coisas: função e classe.

// Componentes React recebem inputs chamados props.

// Retorno de componentes React é um elemento React -> JSX

// Componente funcional é escrito através de uma função.

// Função render() retornará o JSX. 

//  Tudo o que está dentro de chaves é lido como JS 






