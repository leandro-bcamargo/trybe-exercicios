// STORE
// É a única fonte de verdade para o estado da aplicação.
// É somente na store onde se encontram os dados compartilhados da aplicação.

// ACTIONS
// São objetos que contém uma chave obrigatória: type.
// São ordens enviadas ao reducer, que interpreta as alterações que devem ocorrer e as envia à store. 
// Action creators são funções que retornam uma action.
// É uma boa prática inserir todas as action creators em uma única pasta separada dos demais arquivos.

// REDUCER
// É uma função que recebe estado e action como parâmetros.
// Tem por responsabilidade gerenciar o estado da store de acordo com a action recebida.
// Provê um NOVO ESTADO à store de acordo com as informações fornecidas pela action.
// É possível combinar vários reducers em um único, de forma que somente esse rootReducer seja gerencie a store. 
// É uma boa prática inserir todos os reducers em uma pasta própria.

// A integração de redux e react é feita através do pacote react-redux, que permite que o react acesse a store e consiga enviar actions a ela através dos reducers. 

// Out of the box, o redux suporta somente fluxo síncrono de dados.

// Uma action é um objeto JS que descreve um evento que JÁ ACONTECEU, e esse objeto é capturado pelo reducer e enviado à store para que seu estado seja atualizado.

// Mas e se a action for assíncrona, precisando fazer uma requisição a uma API para que os dados necessário estejam presentes? 

// Precisamos esperar que a requisição seja concluída para só então poder montar o objeto da action. Precisamos, então, de actions assíncronas.



// REDUX THUNK

// A solução padrão para ter actions assíncronas é usando o pacote redux-thunk.

// Quando estamos definindo um action creator, podemos ou retornar um objeto ou retornar uma função.

// Essa função vai poder fazer a lógica assíncrona necessária.

// Redux-thunk é um middleware que INTERCEPTA TODAS AS ACTIONS enviadas à store ANTES de elas chegarem a um reducer.

// Se a action fosse o produto que você comprou em algum site e o reducer fosse você, o middleware seria o correio, que intercepta o produto antes que ele chegue a você para garantir que ele chegue da maneira adequada. 

// Para fazer uso do redux-thunk, é preciso instalá-lo via npm

npm install redux-thunk

// Para habilitá-lo, usamos a função applyMiddleware() do redux.




// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

...

const store = createStore(reducer, applyMiddleware(thunk));
...

// Para usar o redux-thunk junto com o redux devtools, é preciso passar o applyMiddleware(thunk) como parâmetro para a função composeWithDevTools



// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

...

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
...



// O thunk é uma função que encapsula uma operação para que esta seja feita posteriormente. Estamos definindo uma função que vai ser retornada por uma outra função com mais lógica adicionada a ela.

// Com o redux-thunk, conseguimos definir uma action creator que retorna uma função (em vez de um objeto).

// Na função retornada, podemos realizar uma operação assíncrona, como fazer chamadas a uma API.

// Uma vez finalizada a operação assíncrona, conseguimos enviar uma action com os dados obtidos por ela.

// Toda a lógica de lidar com operações assíncronas será encapsulada na sua respectiva action assíncrona, deixando-a transparente para os componentes react que forem fazer uso dela.

// A action creator precisa retornar uma função que pode fazer uso do dispatch e do getState da store como parâmetros.



export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creator que retorna um objeto, que você tem feito até então
const requestMovies = () => ({
  type: REQUEST_MOVIES});

// outro action creator que retorna um objeto, que você tem feito até então
const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchMovies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('alguma-api-qualquer.com')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente onde você usaria a action creator fetchMovies assíncrona como uma outra qualquer
...
class MyConectedAppToRedux extends Component {
  ...
  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
  ...
}
...