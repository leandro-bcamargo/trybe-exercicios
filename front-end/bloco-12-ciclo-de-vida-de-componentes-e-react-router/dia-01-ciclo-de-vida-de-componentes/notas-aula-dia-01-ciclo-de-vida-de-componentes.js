// O QUE VAMOS APRENDER?

// Todo componente React tem um lifecycle, um ciclo de vida do componente.

// As fases desse lifecycle têm, associadas a si, funções através das quais quem programa pode associar compoartamentos.

// Por exemplo, a função componentDidMount executa logo que um componente acabou de ser montado no DOM. Uma lógica a ser executada nesse exato momento deve ser chamada aí. 

// Existem vários momentos na vida de um componente dentro da aplicação, onde podemos injetar lógica.

// O CICLO DE VIDA DE UM COMPONENTE REACT

// O construtor roda uma vez só e o render roda toda vez que o estado for atualizado, que a props for atualizada etc.

// Queremos rodar uma vez só ao final do carregamento do componente na tela.

// Um componente react tem 3 fases em sua vida.

// 1. Fase de montagem

// 2. Fase de atualização

// 3. Fase de desmontagem

// Fase de montagem é quando ele está sendo colocado na tela pela primeira vez.

// Fase de desmontagem é quando ele está saindo da tela.

// Fase de atualização é o que acontece entre elas.

// Queremos rodar a requisitção à API uma vez durante a fase de montagem do componente (quando ele está sendo colocado na tela pela primeira vez), mas não queremos rodá-lo nem no construtor nem no render.

// Rodamo-lo na função componentDidMount().

// Fase de montagem roda primeiro o construtor, depois o render, então o React atualiza o componente segundo a lógica presente nessas duas funções, e depois de colocar o componente na tela pela primeira vez, ele vai rodar a função componentDidMount().

// Cada vez que houver uma mudança de estado, props diferentes etc, passamos para a fase de atualização: ele vai rodar a função render novamente, atualizar-se, e então vai rodar componentDidUpdate().

// Na terceira fase, roda a função componentWillUnmount().

// Para cada fase do ciclp de vida de um componente, ele tem uma função especial que roda ao final dessa fase: 

// 1. Montagem: componentDidMount() -> roda assim que o componente é colocado na tela
// 2. Atualização: componentDidUpdate() -> roda assim que o componente é atualizado (props ou estado novo)
// 3. Desmontagem: componentWillUnmount() -> logo antes de o componente ser removido da tela.

// No exemplo dado, a piada tem de aparecer antes de apertar o botão.

// Vamos colocá-la em componentDidMount().

// Quer fazer algo assim que o componente terminar de ser montado? Rode componentDidMount().

// Quer fazer algo assim que o componente for atualizado? Rode componentDidUpdate().

// Quer fazer algo logo antes de o componente ser demonstado? Rode componentWillUnmount().

// Funções servem para interceptar os momentos em que as coisas acontecem.

// componentDidMount() é chamada entre o construtor e o render. Porém, não se esqueça de que essa função é executada somente após ambos construtor e render serem executados.

// componentDidUpdate() rodará depois que o set.State() rodar.

// A lógica do react divide a existência do componente da aplicação nessas 3 fases.

// Ao final de cada uma dessas fases há uma função que pode ser chamada no componente Reaact e colocar uma lógica nela.

// Existem funções específicas que são executadas ao final de cada fase do ciclo de vida de um componente: componentDidMount, componentDidUpdate, componentWillUnmount.

// Os componentes do react possuem um ciclo de vida. O ciclo é dividido em 3 etapas:

// 1. Montagem - Quando o componente é inicializado e inserido no DOM.

// 2. Atualização - Quando as props ou estados do componente são alterados.

// 3. Desmontagem - Quando o componente morre, sumindo do DOM.

// Dentro dessas 3 etapas existem vários métodos que podemos usar para interceptar um determinado momento do ciclo de vida e agir naquele momento.

// Criação de componente:
// Constructor() -> recebe as props e define o estado ->
// -> render () -> renderiza o componente, inserindo-o no DOM ->
// -> criação dos componentes filhos diretos ->
// -> componentDidMount() -> dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições)

// Atualização de componentes:
// Novas props/setState() ->
// -> shouldComponentUpdate() -> autorizar ou não o componente a atualizar -> true ou false ->


// -> render() -> renderiza o componente, inserindo-o no DOM ->
// -> envio das novas props para os componentes filhos diretos ->
// -> componentDidUpdate() -> dispara uma ou mais ações após o componente ser atualizado.



// Desmonte de componente:
// componentWillUnmount() -> dispara uma ou mais ações antes de o componente ser desmontado ->
// Ideal para limpar "timers" e "listeners" ->
// -> não utilize "this.setState" e não inicie "timers" e "listeners"

// O ciclo de vida é acessível por meio de métodos nativos dos class components. Por exemplo, pense no render, que é um método de renderização dos class components e que é chamado toda vez que uma atualização ocorre. Ele possui características intrínsecas que permitem adicionar o componente ao DOM. Assim como o render, outros métodos possuem suas próprias características e objetivos. 

// 1. Montagem: 
// constructor -> recebe as props e define o estado.
// render -> renderiza o componente, inserindo-o no DOM.
// componentDidMount -> dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições).

// 2. Atualização:
// shouldComponentUpdate -> possibilita autorizar ou não o componente a atualizar.
// componentDidUpdate -> dispara uma ou mais ações após o componente ser atualizado. 

// 3. Desmontagem:
// componentWillUnmount -> dispara uma ou mais ações antes de o componente ser desmontado.


// No exemplo, estamos realizando uma requisição para uma API de piadas, e para isso a função fetch está sendo chamada dentro do método componentDidMount.

// Criamos um componente dentro da pasta src/components chamado DadJoke que vai ser o responsável por realizar a chamada à nossa API e renderizar nossa piada.

import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;


// ENTENDENDO QUANDO CADA MÉTODO É CHAMADO

// Faremos uma simulação para entender quando cada método é chamado.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

// Ao executar o código acima, aparecerão as seguintes mensagens no console:

// constructor
// render
//  componentDidMount 

// Atente-se para a ordem de chamada dos métodos. As mensagens refletem a ordem de execução dos métodos de ciclo de vida do componente.

// Os métodos shouldComponentUpdate e didComponentUpdate não apareceram no console pois não houve atualização. Caso seja clicado no botão soma, teremos mais mensagens no console:

// constructor
//  render
//  componentDidMount
//  shouldComponentUpdate
//  render
//  componentDidUpdate

// Note que, durante o processo de atualização, o método render é chamado novamente. Isso acontece porque, quando se atualiza uma props ou estado, o React pede que o componente seja renderizado no DOM. Note que podemos impedir essa renderização retornando false com o método shouldComponentUpdate.

// Podemos também, nos métodos shouldComponentUpdate e componentDidUpdate, acessar os estados ou props próximos e anteriores. Para isso, devemos utilizar os parâmetros nextProps e nextState no shouldComponentUpdate e prevProps e prevState no componentDidUpdate.

shouldComponentUpdate(nextProps, nextState) {
  console.log("shouldComponentUpdate", this.state, nextState);
  return true;
}

componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate", this.state, prevState);
}

// Clicando uma vez no botão somar, temos:

// constructor
// render
// componentDidMount
// shouldComponentUpdate {counter: 0} {counter: 1}
// render
// componentDidUpdate {counter: 1} {counter: 0}


// Perceba que o estado só é de fato atualizado quando chega no método componentDidUpdate. Por isso, caso seja necessário imprimir uma renderização, você deve utilizar o método shouldComponentUpdate, que permite comparar os atuais e próximos estados ou props e adicionar a lógica.



// REQUISIÇÕES E COMPONENTDIDMOUNT

// Caso sua requisição tenha de retornar algo para ser renderizado logo que a página carregar, é muito importante que você entenda bem a importância dessa etapa no cicle de vida.

// Vamos consumir uma API de Rick e Morty, cujo endpoint é https://rickandmortyapi.com/api/character e exibir na tela os nomes dos personagens e suas fotos.

// Depois de transformar App.js em um componente de classe, podemos definir nosso estado inicial local, para que possamos armazenar nele os dados que a API retornará. Em seguida, podemos fazer a requisição e colocar um título para ser exibido na página.

// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
      </div>
    );
  }
}

export default App;

// Note que a chave results é a que contém as informações que queremos, por isso é ela que estamos setando em nosso estado. Verificar se vocẽ está inserindo a chave certa é essencial, e por isso você não deve deixar de ler a documentação da API que irá consumir para ver como os seus dados são retornados.

// Depois disso, com nosso estado já recebendo o resultado da API, poderíamos fazer uma desestruturação no estado e fazer apenas um .map para iterar o array e renderizá-lo na tela. Outro detalhe importante aqui é o uso da key, que deve ser um identificador único, como se fosse um ID para cada item da lista iterada. Lembre-se: a função das keys é ajudar o React a identificar quais itens sofreram alterações para que o React não precise renderizar novamente toda a lista e sim apenas se preocupar com a parte modificada. 

// Agora é só criar tags para encapsular as informações que queremos, ou seja, o nome e a imagem dos personagens.

// App.js
// import React, { Component }from 'react';
// import './App.css';

// class App extends Component {
//  constructor(props){
//      super(props);
//      this.state = {
//        characters: [],
//      };
//   }

//  fetchCharacters = () => {
//    fetch('https://rickandmortyapi.com/api/character')
//    .then(response => response.json())
//    .then(data => {
//      this.setState({characters: data.results})
//    })
//  }

render() {
  const { characters } = this.state;
  return (
    <div className="App">
      <h1>
        Ricky and Morty Characters:
      </h1>
      <div className="body">
        {characters.map(({ name, image }) => {
          return (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
}

export default App;


// Continua aparecendo apenas o título na página. Characters continua a ser um array vazio. O velho problema do código ser lido antes do retorno da requisição está ocorrendo novamente. Para resolver isso existe o componentDidMount.

// Portanto, vamos resolver esse problema chamando a função fetchCharacters dentro do componentDidMount. Outra possibilidade é fazer o fetch diretamente dentro do componentDidMount.

//  Primeira maneira:
fetchCharacters() {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    this.setState({characters: data.results})
  })
}

componentDidMount() {
  this.fetchCharacters();
}

//  Segunda maneira:
componentDidMount() {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    this.setState({characters: data.results})
  })
}

// Ao final, teremos:

// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };
      }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;



// RENDERIZAÇÃO CONDICIONAL E ATUALIZAÇÃO DE ARRAYS NO ESTADO

// Quando o React passa pela função render pela primeira vez, o objeto está undefined. Aí eel vai para o componentDidMount, faz a requisição da API, essa requisição dispara a atualização do estado, e quando o estado é atualizado ele renderiza a piada.

// Com ajuda da renderização condicional, componente terá aparência diferente a depender do estado da aplicação.

// Estamos realizando uma requisição a uma API e, enquanto esperamos o resultado retornar, criamos uma lógica de renderização condicional.

// Vamos criar um componente para renderizar nossa piada na tela. 

import React from 'react';

class Joke extends React.Component {
  render() {
    const { jokeObj, saveJoke } = this.props;

    return (
      <div>
        <p>{jokeObj.joke}</p>
        <button type="button" onClick={saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }
}

export default Joke;

// Vamos, então, importar nosso componente Joke para ser renderizado através do DadJoke usando uma renderização condicional.

import React from 'react';
import Joke from './Joke.js';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

          {
            loading
              ? loadingElement
              : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
          }

      </div>
    );
  }
}

export default DadJoke;


// Vimos como garantir que algo só rode depois de o estado ser atualizado. Passamos como segundo parâmetro da this.setState uma callback com a dita lógica.

this.setState({ meuEstado: novoValor }, () => {
  // ... Sua lógica aqui
})

// E para o caso mais complicado? Isto é, atualizar o estado baseado no estado anterior e executar alguma lógica somente depois de o estado atualizar? Nesse caso, tanto o primeiro quanto o segundo parâmetros são callbacks.

this.setState(
  (estadoAnterior) => ({ meuEstado: estadoAnterior + incremento }), // Primeiro parâmetro!
  () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
)

// Guarde essa sintaxe para fazer lógicas de Loading... quando se está esperando uma resposta de uma API. Lembre-se: como a this.setState não retorna uma promise, usar async/await com ela nunca vai funcionar. 

// Aprendemos também como atualizar arrays no estado com base no estado anterior usando o spread operator: 

this.setstate(({ meuArrayNoEstado }) => ({ meuArrayNoEstado: [... meuArrayNoEstado, novoElemento]} ))







--------------------------

// this.setState -> setar estado em componentes de classe

// Há 3 formas de usá-lo:

// 1. passar como parâmetro um objeto cuja chave é a chave que se quer atualizar no estado. Usado quando se quer passar um novo estado sem se basear no estado anterior.

// 2. passar como parâmetro uma função. Usado quando se quer passar um novo estado baseando-se no estado anterior.

// 3. passar 2 argumentos: um objeto e uma callback. Usado quando se quer realizar uma ação que somente ocorrerá após a atualização do estado.
// this.setState({count: 10}, () => console.log(count))

// Há 3 formas de renderização condicional:

// 1. If-statement. Porém, não conseguimos usá-lo no JSX. JSX só comporta expressões do JS, e if não é uma expressão, mas uma instrução. Fazemos uma função fora do render que contenha esse if.

// 2. Ternário. teste ? retornoSeTrue : retornoSeFalse.

// 3. Logical end operator. teste && retornoSeTrue (caso for false, retornará o próprio false, que não é renderizado. Logo, é o mesmo que renderizar null/undefined).

// 


// 2. 


