// O QUE VAMOS APRENDER?

// Um estado representa um momento de um componente dinâmico. Se o componente é um relógio, o estado atual dele é sua hora atual. Se o componente é uma tabela cujo conteúdo muda de acordo com o que o usuário clica na página, o estado dele contém o conteúdo da tabela. Se o o componente é um jogo, o estado é o momento em que você está no jogo, sua quantidade de vidas, munição, itens etc. Estado, portanto, é um momento de algo que pode mudar ao longo do tempo (algo dinâmico). É uma informação que se quer preservar enquanto o componente está interagindo com quem usa.



// INTRODUÇÃO AO ESTADO 

// Estado é uma informação que a aplicação precisa guardar para poder funcionar.

// Onde a aplicação guarda informações? 

// React não permite declarar uma variável dentro da classe para guardar essa informação. Só permite funções dentro da classe.

// Variáveis fora da classe iriam contra a proposta de se agregar lógicas em classes e componentes.

// Dentro da função render também não é possível, pois cada vez que uma função é chamada, a variável que está dentro dela é declarada novamente, então a informação não está sendo salva. Nocaso de render, toda vez que é mudada a prop recebida pelo elemento, a função é chamada novamente, então qualquer variável será redeclarada e a informação será perdida. Queremos que a informação seja preservada mesmo que a prop do elemento seja mudada.

// Informação deve ser salva no estado do componente.

// Cada componente possui seu estado, um local especial onde ele armazena as informações que vão ficar persistentes.

// Um componente não enxerga o estado de outro componente.

// Se houver um componente pai, ele não enxerga o estado de seus filhos.

// Guardar informação dentro do estado do componente que é pertinente ter a informação.

// O estado de um componente é um lugar especial que todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada. É o filtro selecionado, o item da lista destacado, o carrinho de compras etc.

// No React cada componente cuida das suas informações e o React garante que todas estejam atualizadas de maneira otimizada. 



// INTRODUÇÃO AOS EVENTOS

// Eventos em React são os mesmos do JS. A diferença está na forma como se liga o elemento que está reagindo à ação a ser executada.

// Eventos são como event listeners do JS: você os associa aos elementos que serão exibidos na tela e eles nortearão como cada componente reage a uma ação de quem usa.

import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;



//VINCULANDO FUNÇÕES À CLASSE COM THIS E BIND NO CONTRUCTOR

// Em uma classe, queremos juntar todas as funções que fazem sentido pertencer a esse componente. 

// No exemplo dado, a função está fora da classe. Porém, queremos que ela esteja dentro da classe.

// Ao colocar uma função dentro de uma classe, não é necessário escrever a palavra-chave function

// This é um objeto JS que representa aquela classe, aquele componente com tudo o que ele tem - props, estados e tudo o mais que se refere àquele componente React.

// Quando chamamos uma função, JS entende que essa função está em algum lugar fora da classe, não olha para as funções que estão dentro da classe.

// Quando passamos a função para dentro da classe, JS não consegue mais encontrar a função.

// Para que possamos usar uma função que esteja localizada dentro da classe, usamos {this.função}. Não queremos uma função qualquer do JS. Queremos a função que está dentro do objeto da classe, i.e. a função que está dentro do objeto this.

// Há uma outra função que toda classe JS/React pode ter definida. Ela faz parte da lógica interna do React à qual temos acesso ao usar o extends. Ela se chama constructor.

// Quando o React vai renderizar o elemento, executa uma série de funções. Uma das funções executadas antes de executa a função render, é essa função constructor.

// Podemos redeclarar essa função no elemento React e adicionar a ela um comportamento específico. 

// Uma das funções que fazem parte da lógica do React para ele gerar um elemento e colocar no navegador é a função constructor.

// É uma função interna que tem sua própria lógica. É possível sobrescrevê-la com uma função escrita por nós. Para tanto, usamos o código super(). Ao fazê-lo, toda a lógica interna do React execute nessa função sendo definida, sobrescrevendo, assim, a função interna.

// Abaixo de super() descrevemos nossa lógica.

// Estendemos o comportamento da função interna do React com a nossa lógica.

// Dentro da função render, JS enxerga o objeto this. Contudo, ao chamar uma função dentro de um event listener, ele não consegue mais enxergar o this. 

// Para permitir que ele enxergue o this, escrevemos o seguinte dentro do constructor, sendo handleClick a função passada ao event listener:

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicou!")
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}
export default App; 



// O constructor enxerga o this, então ao escrever this.handleClick ele sabe que estamos falando da função declarada dentro da classe.

// Tomamos a função declarada dentro da classe e a redefinimos, chamando uma função bind e passando this como parâmetro.

// Escrevemos essa linha de código para que a nossa função consiga enxergar o this. 

// Leia-se: essa função (handleClick) está ligada ao this.

// Precisamos fazer uma linha dessa para cada função que queiramos que tenha acesso ao this.

// Para acessar uma função que criamos dentro de uma classe num event listener, precisamos explicitar a origem de nossa função com a sintaxe this.minhaFuncao.

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função declarada dentro de nossa classe para podermos usá-la num evento. Fazemos isso através da sintaxe `this.minhaFuncao` */
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;



// CONSTRUCTOR

// Toda classe do JS tem acesso a um método chamado constructor(), e com as classes de React, definidas por class minhaClasse extends React.Component, não é diferente.

// Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor(). Toda a lógica interna que o React adiciona aos seus componentes começar a ser inclusa neles nesse momento. 

// No JS, o super() refere-se ao construtor da classe pai (no nosso caso, refere-se à implementação de React.Component). É importante lembrar que vocẽ não pode usar o this em um construtor até que vocẽ tenha chamado o construtor da classe pai, o JS não vai te deixar fazer isso. Então, por ora, apenas lembre-se de que, para usar o this dentro do contructor(), é preciso chamar o super() antes.

// Como adicionar aos construtores das classes React comportamentos e lógicas extras?

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;



// THIS

// O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente. Vejamos isso ao tentar imprimir o this no seguinte código:

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;

// O resultado da impressão:

App {
  context: {}
  props: {}
  refs: {}
  state: null
  updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
  _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
  _reactInternalInstance: {_processChildContext: ƒ}
  isMounted: (...)
  replaceState: (...)
  __proto__: Component
    constructor: class App
    isMounted: (...)
    render: ƒ render()
    replaceState: (...)
    __proto__: {...}
  // ... Continua
  }

// Assim, o this, dentro das classes de componentes React, é um objeto enorme que contém, basicamente, tudo que concerne aquele componente dento da aplicação. Quando fazemos this.props, estamos acessando a chave props dentro do objeto this, que irá conter as propriedades (props) passadas àquele componente. Com ele, por exemplo, conseguimos conseguimos acessar as props e outras coisas, como o estado do componente, dentro das funções render e constructor.

// No entanto, há um problema com o this. Quando definimos funções nossas numa classe de componente React, ele não funciona bem.

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// Esse comportamento acontece em função das dificuldades que o JS tem com a implementação de uma lógica de classes, lógica para a qual a linguagem não foi feita. A solução é, no constructor, fazermos para cada uma de nossas funções um vínculo manual dessa função com o this.

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// Se definirmos uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...}, você não precisará fazer o bind no constructor, mas sua aplicação será menos performática.  



// UNINDO COMPONENTES COM ESTADOS E EVENTOS

// Queremos um botão que contabilize quantos cliques foram dados nele.

// Para tanto, precisamos de um estado inicial, que armazena quantos cliques foram dados quando o componente é carregado (zero).

// Depois, precisamos de uma lógica que, para cada clique, incrementa o estado da aplicação em 1.

// Dentro da função constructor(), acessamos this.state. State é um objeto que está dentro do this.

this.state = {
  numeroDeCliques: 0
}

// Se dermos console.log(this) dentro de render(), veremos que dentro da chave state de this, teremos numeroDeCliques: 0.

// Queremos que estado seja incrementado toda vez que clicarmos no botão.

handleClick() {
  this.setState((prevState, _props) => ({
    numeroDeCliques: prevState.numeroDeCliques + 1
  }))
}

// No React, o estado é atualizado de forma assíncrona. React agrega todas as atualizações de estado de forma assíncrona numa fila e faz todas de uma vez. Então, ele não garante que no instante em que houve o clique o estado será atualizado. Ele vai agregar essa atualização junto a outras e vai fazer tudo de uma vez de forma assíncrona.

// Como a a atualização do estado é feita de forma assíncrona, a forma correta de fazermos essa atualização é chamando uma função que funciona de forma assíncrona. Neste caso, trata-se de setState.

// Não basta atualizar o estado, a atualização depende do estado anterior. Temos de passar como parâmetro para this.setState uma função, uma callback. Seu primeiro parâmetro será o estado anterior e o segundo parâmetro as props desse estado.  

// Garante que setState só será executada depois que a atualização de estado anterior a essa for executada.

// Cada vez que se chama o setState ele vai enfileirar a atualização e funcionar de modo assíncrono. Para garantir que a ordem esteja correta, é preciso fazer essa lógica, segundo a qual a atualização seguinte depende da anterior.

render() {
  return <button onclick={this.handleClick}>{this.state.numeroDeCliques}</button>
}



// Vamos agora acessar o estado:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// Note que nunca se deve atribuir valores ao estado diretamente com this.state. O estado é atualizado de forma assíncrona pelo React, e o React não garante a ordem em que as atualizações ocorrerão. Por isso pode haver problemas se se fizer a atribuição de maneira direta. Devemos fazê-lo sempre através da função

this.setState(meuNovoObjetoQueRepresentaOEstado)

// Mas se a atualização do estado não ocorre em ordem, como saber que ocorrerá na ordem correta ao utilizar

novoEstado = estadoAnterior + 1

// Lembremos que, com Promises, para garantir que um código somente fosse executado após o retorno da Promise, que é assíncrona, era preciso colocar esse código dentro da função .then. Aqui ocorre algo análogo.


import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// Se quiséssemos chamar, no elemento, um evento passando um parâmetro, deveríamos trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick{() => this.minhaFuncao('meu parametro')}. Basicamente, substituimos a função do evento por uma chamada à mesma via callback.



// STATE VS PROPS

// A diferença entre state e props pode ser entendida da seguinte forma:

// Props são uma forma de passar dados de pai para filho.

// State é reservado para dados que o seu componente controla.

// O conceito é: state, ou estado do componente, deve servir para guardar valores do componente que mudam com o uso do mesmo. As props são valores fixos que um componente recebe e não altera.

// Pelos princípios do React, você nunca deve tentar alterar o que um componente recebe como props, como no exemplo abaixo:

this.props.name = 'novo nome';



// EM RESUMO

// Todo componente possui seu próprio estado e tem 100% de controle sobre ele.

// Quando um componente é colocado na tela, ele executa uma função chamada constructor, e usando a linha super() podemos sobrescrevê-la para estender seu comportamento.

// O objeto this, acessível a toda classe de componente React, contém tudo o que concerne àquele componente e deve ser vinculado explicitamente às funções criadas dentro da classe, através da sintaxe this.minhaFuncao = this.minhaFuncao.bind(this) no contrutor do componente.

// Funções que tratam eventos devem ser vinculadas aos seus respectivos elementos com {this.minhaFuncao} ou {() => this.minhaFuncao('Meu Parametro')}




-------------------

class Person {
  name = 'My Friend'
  age = 18

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Meu nome é ${this.name} e eu tenho ${this.age} anos`)
  }
}

const myFriend = new Person('André', 50); //instanciação. Constructor toda toda vez que se faz uma instanciação
console.log(myFriend);


myFriend.sayHello();


// Componentes -> Função ou classe que retorna JSX, que se transforma em um elemento React, e esse elemento React é uma representação do DOM HTML.

// Props -> São read-only (imutáveis). Componente que recebe a prop não pode mudá-la. São parâmetros de um componente, passados do componente pai, deixam o componente dinâmico -> mudança causa rerenderização.

// Estado -> local para armazenar dados que refletem no componente. Diferentemente das props, estados podem ser mudados.

// Toda vez que o input for atualizado, o estado deve ser atualizado também.

// Estado, em componente de classe, é sempre um objeto.

// 
