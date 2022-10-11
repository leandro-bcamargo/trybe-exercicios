// RELEMBRANDO CONCEITOS

// Quando redux é utilizado com algum UI framework, é comum utilizar uma biblioteca para fazer a conexão entre o redux e o framework. No caso do react, é a biblioteca react redux que faz esse conexão.

npm install react-redux

// STORE
// É onde vamos armazenar todos os dados compartilhados da aplicação.
// É representado por um objeto JS. 
// O estado é armazenado no store do redux.

// ACTION
// É um objeto JS que representa alguma alteração que precisa acontecer no estado.

// REDUCER
// É uma função JS.
// Recebe o estado atual (current state) e a ação atual (current action) e retorna um novo estado (new state). 
// Determina o que acontecerá com o estado dada uma action.

// DISPATCH
// É uma função JS que recebe uma action como parâmetro e a envia para processamento.

// Primeiro, criamos nossa aplicação react.

npx create-react-app my-app

// Depois, instalamos as dependẽncias

npm install redux react-redux

// redux é a biblioteca que possui a implementação do redux.

// react-redux é a biblioteca que realiza a conexão entre o react e o redux.

// A primeira coisa a fazer ao implementar o redux no react é criar nossa fonte universal de estados, o store.



// STORE
// Vamos criar um arquivo src/store/index.js com o seguinte conteúdo

import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;

// A função createStore() sempre receberá como parâmetro um rootReducer. Portanto, devemos criar um rootReducer no arquivo src/reducers/index.js.

// É recomendada a instalação da extensão Redux Devtools e do pacote redux-devtools-extension com o seguinte comando:

npm install --save redux-devtools-extension

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;



// REDUCER E ROOT REDUCER


// A função createStore() precisa receber como parâmetro um rootReducer, constante que armazena a função combineReducers, a qual, por sua vez, recebe como parâmetro TODOS OS REDUCERS DA APLICAÇÃO COMO UM OBJETO.

// reducers/myReducer.js
const INITIAL_STATE = {
  state: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;

//reducers/index.js
import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;

// O método combineReducers(), que combina reducers, deve receber um objeto com os reducers criados. SEM ELE, SÓ PODERÍAMOS USAR UM REDUCER EM NOSSA APLICAÇÃO.

// Mesmo que tenhamos apenas um reducer, é uma boa prática utilizarmos o combineReducers, pois, caso a aplicação cresca e necessite de mais de um reducer, não será necessário alterar a lógica.

// Primeiro, definimos um estado inicial para nosso reducer.

// Um reducer deve receber como parâmetro um estado e uma action.

// A action deve ser um objeto e possuir uma chave type. É essa chave que vai definir como o reducer vai manipular o estado.

// Então, combinamos os reducers dentro do arquivo contendo o rootReducer.



// ACTIONS E ACTION CREATORS

// Nossa action deve ser um objeto. 

// Esse objeto pode possuir apenas a chave type ou mais outras keys, caso seja conveniente.

// No caso abaixo, criamos também uma chave state, que guardará o valor recebido pela action.

// A action possui sempre uma propriedade type única. Essa propriedade é utilizada pelo Redux para identificar a ação que será realizada. Esse conceito recebe o nome de action type.

export const newAction = (state) => ({ type: 'NEW_ACTION', state });

// Actions são objetos, porém geralmente criamos funções, as action creators. Essas funções servem apenas para retornar uma action.



// PROVIDER

// Para utilizarmos o estado compartilhado provido pelo redux, precisamos modificar o index.js para adicionarmos a configuração do provider. 

import React from 'react';
import ReactDOM from 'react-dom';
// o provider é o meio pelo qual disponibilizamos o store
// com os estados de toda a aplicação para todos os demais componentes
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// 1. Passo - Criar store

//src/store/index.js

import { createStore } from 'redux';

const store = createStore();

export default store;

// 2. Passo - Criar reducer

//src/reducers/index.js

const INITIAL_STATE = [];

const listReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, value];
    default:
      return state;
  }
}

export default listReducer;

// 3. Passo - Criar action

//src/actions/index.js

const addAssignment = (value) => {
  return {
    type: 'ADD_ELEMENT',
    value
  }
}

export default addAssignment;



// Criamos 3 diretórios em nossa aplicação: 
// store
// reducers
// actions

// Retornamos à store para passar o reducer como parâmetro:

import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers'

const rootReducer = combineReducers({
  listReducer,
})

const store = createStore(rootReducer);

export default store;


// 4. Passo: Conectar com o React
// Provider é o componente responsável por prover a store à aplicação React.
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)



// src/actions/index.js
const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });

export default addAssignment;



// src/reducers/index.js
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;



// É importante se lembrar de sempre escrever o caso default na declaração do switch, garantindo que não haja erro caso o reducer recebe uma action inexistente. 

// Garantimos que o estado não será alterado se uma action com um type que não é conhecido pelo reducer for despachada para a store.

// src/store/index.js
import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store; 



// src/App.js
import React from 'react';

function App() {
  return (
    <span> Hello, World </span>
  );
}

export default App;



// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);




// MAPSTATETOPROPS

// Ao implementarmos os componentes, é preciso conectá-los ao redux.

// Em primeiro lugar, precisamos importar e adicionar os componentes à página que irá renderizá-los.

import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;



// Agora, vamos analisar a implementação do componente <FirstComponent />

import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(FirstComponent);


// O método connect()() é utilizado para conectar o componente à store do redux. 

// Estamos fazendo um map com os elementos presentes no array myFirstState, que, por sua vez, foi recebido via props. Resta saber como esse array foi parar em props.

// A função mapStateToProps mapeia as entidades armazenadas no estado para uma props.

// No nosso caso, queremos acessar os dados providos pelo reducer myReducer. Portanto, basta acesssar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamo-na myFirstState).

// Por último, utilizamos o connect para conectar o Redux ao componente. Esse método possui o seguinte formato: connect()(). 

// Como, no caso, estamos fazendo apenas a leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.



// CONNECT

// O método connect nos dá acesso à store do redux. Sua estrutura é connect()().

// Nos primeiros parênteses, devem estar presentes os métodos nativos do redux.

// Se usarmos somente o mapDispatchToProps, o primeiro parâmetro deverá ser null.

// Se usarmos somente o mapStateToProps, o segundo parâmetro deverá ser null.



export default connect(mapStateToProps, mapDispatchToProps)(Component)



// No segundo parênteses, colocamos o componente que deverá ser conectado.




// MAPDISPATCHTOPROPS E DISPATCH

// Vamos à implementação do secondComponent:

//actions.js

export const newAction = (state) => ({ type: 'NEW_ACTION', state });



import React from 'react';
import { connect } from 'react-redux';
import { newAction } from './actions';
// Import referente à `action creator` criada para despachar a ação para a store.

class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    // Esse estado irá armazenar o valor do input
  }

  render() {
    const { myFirstDispatch } = this.props
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        <button onClick={() => this.props.myFirstDispatch(this.state.inputValue)}> /
          Executar qualquer tarefa
        </button>
    // O botão está disparando o mapDispatch e enviando o valor para a store
      </div>
    );
  }
}

// utilizando `action`:
// const mapDispatchToProps = (dispatch) => ({
  // myFirstDispatch: (state) => dispatch({ type: 'NEW_ACTION', state }),
// });

// No caso acima, vemos que o mapDispatchToProps é uma função que retorna um objeto, e sua key recebe uma callback.
// Essa callback terá um parâmetro correspondente ao estado que será enviado para a store.
// Nessa callback, chamamos a função `dispatch`, que receberá como argumento a `action`,
// que é um objeto contendo o "type" e o parâmetro da callback, o "state", que será o novo valor do estado.


// utilizando `action creator `:

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))});

// Podemos utilizar o mapDispatchToProps de outra forma também! Lembra do arquivo que foi criado contendo a função "newAction?
// No exemplo acima, o dispatch está recebendo como argumento a "newAction", que também é chamada de `action creator`.
// E é aí que está a vantagem de utilizar  as `action creator`, pois elas também geram uma `action`.

export default connect(null, mapDispatchToProps)(SecondComponent);




// reducers/myReducer.js

const INITIAL_STATE = {
  state: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
      // Nesse caso a utilização do spread operator (...) não é necessário, pois estamos trabalhando com uma única chave no estado.
      // Mas caso tenha dúvidas sobre a utilização, consulte a documentação do Redux https://redux.js.org/recipes/using-object-spread-operator
    default:
      return state;
  }
}

export default myReducer;




// reducers/index.js

import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;




// O dispatch é uma função da redux store.

// Lembra que temos de chamar store.dispatch para despachar uma ação com JS puro?

// O mapDispatchToProps tem acesso a essa função da store, e é através dela que conseguiremos enviar uma ação para modificar o estado.

// Primeiro, estamos definindo um estado interno do componente com uma chave chamada inputValue. Note que, apesar de estarmos usando redux, que centraliza os estados, caso haja algum estado que não precise passar dados para outros componentes, podemos declará-lo localmente.

// Estamos criando um input para o usuário digitar a tarefa que deseja executar. A cada mudança no valor do input, o valor é salvo na chave inputValue do estado.

// Um botão com a propriedade onClick foi criado, passando a função myFirstDispatch, passada via props. Mas como ela foi parar em props?

// A função mapDispatchToProps é responsável por despachar uma ação para o reducer.

// Para termos acesso às funcionalidades do redux, seja para ler os dados ou manipulá-los, precisamos acessar essas funcionalidades como props de um componente. Por isso, a função mapDispatchToProps mapeia os dispatchs para o props.

// Note que no início do arquivo estamos importando a action newAction, criada anteriormente. Estamos nomeando uma propriedade chamada myFirstDispatch, que faz o dispatch da action newAction com um parâmetro.

// Outra observação é que as estruturas dos métodos mapStateToProps e mapDispatchToProps serão sempre as mesmas, o que mudam são as propriedades que vamos acessar ou actions que vamos despachar.

// É INDISPENSÁVEL QUE O RETORNO DE MAPSTATETOPROPS E MAPDISPATCHTOPROPS SEJA UM OBJETO, pois é assim que o redux o espera.

// Lembre-se: a única maneira de enviarmos uma action a um reducer é através de um dispatcher.

// Por fim, para conectar o redux ao componente, é preciso importar o método connect.


// Note que a estrutura pura do redux se baseia em: 
// store
// actions
// reducer 

// Já a estrutura de conexão entre react e redux é composta por:
// provider
// connect
// dispatch
// mapDispatchToProps
// mapStateToProps



// src/actions/index.js
const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });

export default addAssignment;




// src/reducers/index.js
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;




// src/store/index.js
import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // A linha acima não é obrigatória, serve apenas para visualizar
  // a extensão "Redux Devtools", caso você tenha instalado.
);

export default store;




// src/InputsList.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssignment from './actions';

class InputsList extends React.Component {
  constructor() {
    super();
    this.state = { textValue: '' };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState({ textValue: event.target.value }) }
        />
        <button type="button" onClick={ () => add(textValue) }>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

InputsList.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
});

export default connect(null, mapDispatchToProps)(InputsList);






// src/List.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  render () {
    const { list } = this.props;

    return (
      <div>
        <div>
          {list.map((element, index) => <p key={ index }>{element}</p>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer});

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default connect(mapStateToProps)(List);






// src/App.js
import React from 'react';
import InputsList from './InputsList';
import List from './List';

function App() {
  return (
    <div>
      <InputsList />
      <List />
    </div>
  );
}

export default App;





// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);





// FLUXO DE DADOS NO REDUX

// 1. Uma STORE é criada para armazenar todos os dados da aplicação.

// 2. O STORE é disponibilizado através do PROVIDER para todos os componentes da aplicação.

// 3. Os componentes usam o CONNECT para conectarem-se à store.

// 4. As pessoas que utilizam a aplicação interagem com ela e despacham eventos.

// 5. Esses eventos têm o nome de ACTIONS e alteram o estado da aplicação (criando um novo estado e salvando-o na store).

// 6. Os REDUCERS recebem essas ACTIONS e alteram o estado da aplicação (criando um novo estado e salvando-no na store).

// 7. Os componentes conectados à store ouvem essas mudanças e atualizam a view.



// CHECKLIST react-redux: Passo a passo para guardar no coração e colar na parede:

// npx create-react-app my-app-redux;
// npm install redux react-redux;
// npm install.


// Criar dentro do diretório src:
// diretório actions;
// diretório reducers;
// diretório store.


// Criar dentro do diretório actions:
// arquivo index.js.


// Criar dentro do diretório reducers:
// arquivo index.js.


// Criar dentro do diretório store:
// arquivo index.js.


// Em src/index.js:
// definir o Provider, <Provider store={ store }>, para fornecer os estados a todos os componentes encapsulados em <App />.


// Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:
// npm install react-router-dom@v5;
// Em src/index.js:
// definir o BrowserRouter, <BrowserRouter>.


// No arquivo App.js:
// definir o Switch, <Switch>;
// definir a Route, <Route>.
// O BrowserRouter, o Switch e a Route são três componentes essenciais para trabalhar rotas em React.


// Caso necessário:
// criar o diretório components;
// criar o diretório pages.


// No arquivo store/index.js:
// importar o rootReducer e criar a store;
// configurar o Redux DevTools.


// Na pasta reducers:
// criar os reducers necessários;
// configurar os exports do arquivo index.js.


// Na pasta actions:
// criar os actionTypes;
// criar as actions necessárias.


// Nos componentes:
// criar a função mapStateToProps se necessário;
// criar a função mapDispatchToProps se necessário;
// fazer o connect se necessário.

// #theend