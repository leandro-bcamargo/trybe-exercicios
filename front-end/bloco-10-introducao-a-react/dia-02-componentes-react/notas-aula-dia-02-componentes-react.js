// O QUE VAMOS APRENDER

// Se você abrir um projeto recém-criado pelo create-react-app, o src/index.js conterá algo parecido com o seguinte:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// O método ReactDOM.render está recebendo como primeiro parâmetro <App />. Mas o que é esse <App />?

// POR QUE ISSO É IMPORTANTE

// Uma aplicação React é composta por componentes. Então, saber usar componentes é saber montar dozero uma aplicação React. 

// A checagem de tipos economiza muito tempo de desenvolvimento, protegendo quem desenvolve de erros facilmente evitáveis na utilização dos componentes.

// CONTEÚDOS

// Componentes são a base de todas aplicação React.

// Eles nos permitem segmentar a página em blocos de código independentes e reutilizáveis, organizando o desenvolvimento. 

// Componentes React são funções ou classes JS que podem aceitar parâmetros, chamados de props (properties), e retornam elementos React responsáveis por determinar o que será renderizado na tela.

// Há duas maneiras de definir um componente:

// Via função JS:

function Greeting(props) {
  return (<h1>Hello, {props.name}</h1>);
}

export default Greeting;

// Via classe JS:

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

export default Greeting;

// Ambos os métodos são equivalentes, porém tanto funções como classes têm recursos adicionais que serão vistos mais adiante.

// Vejamos mais um exemplo

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;

// No código acima, temos: 

// 1. A declaração de um componente chamado Greeting.

// 2. O componente Greeting herda a classe Component da biblioteca React

// 3. O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação, declarado no método obrigatório render. Nesse caso, Greeting retorna <h1>Hello, {this.props.name}</h1>

// 4. O componente Greeting possui como propriedade um objeto chamado props, que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar 

<Greeting name="Samuel" /> 

// faz com que o componente tenha uma prop igual a { name: "Samuel"}.

// 5. Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.



// PROPS

// As props são uma das partes mais importantes de um componente. É através deles que você passa os valores para o componente, e são elas que o tornam reutilizável em diferentes contextos. Elas são como os parâmetros de uma função. Vejamos como seria uma função que retornasse a mesma mensagem que o componente Greeting renderiza:

function greeting(name){
  return `Hello, ${name}`;
}
console.log(greeting('Samuel'));

// Assim como podemos ter vários parâmetros em uma função, podemos passar inúmeras propriedades para o componente por meio das props. Vamos adicionar o sobrenome da pessoa à função e ao componente:

function greeting(name, lastName) {
  return `Hello, ${name} ${lastName}`;
}
console.log(Greeting('Samuel', 'Silva'));

// Agora ao componente:

import React from 'react'

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting

// Agora chamamos esse componente dentro do componente App:

import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name='Samuel' lastName='Silva' />
    </main>
  );
}

export default App;

// Observe como a chamada do componente lembra a chamada de uma função com passagem de parâmetros. Seu retorno, nesse caso, será <h1>Hello, Samuel Silva</h1>.

// Como funciona o trâmite das props? Para compreender melhor, vamos analisar com cuidado a linha 6 do código anterior:

<Greeting name='Samuel' lastName='Silva' />

// Ao atribuir as props name e lastName ao componente Greeting, o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props, num formato parecido com o seguinte:

const props = { name: 'Samuel', lastName: 'Silva' }

// Esse objeto props é então passado para o componente Greeting, o qual poderá resgatar tanto o nome como o sobrenome através do this.name e this.lastName.



// COMPOSIÇÃO DE COMPONENTES

// Componentes são utilizados para construir uma aplicação React. Essa construção é feita pela composição de componentes.

// Composição são elementos ordenados de modo a construir algo mais complexo. Ex: inputs, labels, buttons em um form.

// Componentes React podem conter um ou mais componentes. Isso permite a reutilização e a redução do nível de complexidade de códigos.

// src/App.js
import React from 'react';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={ album01.image } alt={ album01.title } />
          <h2>{ album01.title }</h2>
          <p>Lançamento: { album01.releaseDate.year }</p>
          <p>Gravadora: { album01.others.recordCompany }</p>
          <p>Formatos: { album01.others.formats }</p>
        </section>
        <section>
          <img src={ album02.image } alt={ album02.title } />
          <h2>{ album02.title }</h2>
          <p>Lançamento: { album02.releaseDate.year }</p>
          <p>Gravadora: { album02.others.recordCompany }</p>
          <p>Formatos: { album02.others.formats }</p>
        </section>
      </article>
    );
  }
}

export default App;

// Ambas as sections, apesar de possuírem estruturas semelhantes, renderizam informações diferentes. Nesse contexto, a section é uma excelente candidata a ser transformada em um componente reutilizável, dando início à refatoração. Para isso, criamos um arquivo Album.js para armazenar o código das sections e adaptá-lo para fazer a leitura das props que iremos passar.


// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={this.props.album.image} alt={this.props.album.title} />
        <h2>{this.props.album.title}</h2>
        <p>{this.props.releaseDate.year}</p>
        <p>
          Lançamento: {`${this.props.album.releaseDate.day}/${this.props.album.releaseDate.month}/${this.props.album.releaseDate.year}`}
        </p>
        <p>
          Gravadora: {this.props.album.others.recordCompany}
        </p>
        <p>
          Formatos: {this.props.album.others.formats}
        </p>
      </section>
    );
  }
}


// Em seguida, vamos refatorar App.js. Para substituirmos as sections pelo novo componente criado, temos que:

// 1. Importá-lo no arquivo App.js

  // src/App.js
  import React from 'react';
  import Album from './components/Album'

// 2. Passar as props apropriadas

  // src/App.js
  class App extends React.Component {
    render() {
      return (
        <div>
          <Album album={album01}/>
          <Album album={album02}/>
        </div>
      );
    }
  }

// Assim, o componente App.js ficará do seguinte modo

// src/App.js
import React from 'react';
import Album from './components/Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div>
        {/* Está importando o elemento React Album e dizendo que a prop album ("parâmetro") deve receber o valor album01 ou album02 */}
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;

// Aqui, o nosso componente App contém dois componentes Album. Isso é o que se chama composição de componentes. Cada um desses componentes recebe um objeto diferente através da prop album.

// É importante notar que os dois componentes irmãos <Album /> são, em verdade, o mesmo componente, porém reutilizados com base nas props recebidas. EM outras palavras, embora sejam o mesmo componente, renderizam informções diferentes, uma vez que recebem props diferentes.

// Ter à disposição uma gama de componentes reutilizáveis de baixo nível de complexidade individual facilitará muito o trabalho.

// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.alternativeText} />
    );
  }
}

export default Image;

// arquivo UserProfile.js
import React from 'react';
import Image from './Image'

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.email}</p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;


// arquivo App.js, criado pelo create-react-app, modificado

import React from 'react';
import './App.css'
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao}/>
        <UserProfile user={amelia}/>
      </div>
    );
  }
}

export default App;

// Analisando esse código, temos:
// 1. O componente App é composto por dois componentes UserProfile. Dito de outro modo, o componente App é pai dos dois componentes UserProfile. Além disso, <UserProfile user={joao} /> e <UserProfile user={amelia} /> são componentes irmãos, e eles são filhos do componente App.

// 2. O componente UserProfile possui um componente Image. Ou seja, UserProfile posui Image como filho.

// 3. Os dados são repassados de componente pai para componente(s) filho(s). Olhando para o código acima, o componente App, que é pai dos dois componentes UserProfile, passa para cada um de seus filhos um objeto com as informações de um perfil. O mesmo pode ser dito olhandopara UserProfile, que passa para seu componente filho Image a origem de uma imagem.

// Note a regra de sintaxe React segundo a qual os nomes de todos os componentes Reacts são iniciados em letra maiúscula. 

// Essa regra deve-se ao modo como o React diferencia tags do DOM de elementos React: quando iniciados por letra minúscula, como <div /> e <input />, serão tratadas como tags do DOM. Quando iniciados por letra maiúscula, como <Greeting />, serão entendidos como componentes React.


// LISTA DE COMPONENTES E CHAVES

// Suponha que você precise implementar um componente que renderiza uma lista de compras. Contudo, você não sabe de antemão os elementos dessa lista. Como renderizá-la dinamicamente?

// Imagine que devemos renderizar a seguinte lista de maneira dinâmica:

const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

// O primeiro passo é criar uma coleção de elementos. Para tanto, iteramos sobre shoppingList com uma HOF que retorne um novo array com cada item envolvido por um elemento <li>. Atribuímos o array resultante para a variável items.

// o console log foi adicionado para facilitar a compreensão
const items = shoppingList.map((item) => {
  console.log("item: ", item);
  return (<li>{ item }</li>);
});

// Agora precisamos renderizar a lista que acabamos de criar. Para tanto, dentro do escopo do return, devemos usar chaves e, dentro delas, colocar a constante de elementos criada anteriormente (a constante que armazena o novo array mapeado). É por meio das chaves que o React diferenciará o que é código a ser executado e o que apenas deve ser impresso para leitura. 

import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;

// Assim podemos renderizar múltiplos componentes de modo dinâmico. Ao executá-lo, um alerta de que uma key deve ser definida para cada item renderizado. Essas keys são importantes para o React identificar quais itens foram adicionados, removidos ou alterados.

// Então, como atribuímos e quais são os valores dessas keys? O melhor valor para uma key é um que seja único para cada item da lista, como um ID. No entanto, nem sempre dispomos de um ID estável. Para solucionar esse problema, uma possibilidade é usar o índice gerado no segundo parâmetro da HOF. E, para atribuirmos a key, adicionamos na <li> um atributo key com o valor escolhido. 

const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));

// Contudo, não é recomendado o uso de índices como como keys em listas que possibilitam a alteração na ordem dos itens, pois pode prejudicar o desempenho da aplicação e gerar problemas relacionados ao estado do componente. Podemos usar qualquer valor que seja único no objeto (user.id, user.email) ou até uma concatenação devalores (user.name + user.email).


// PROTOTYPES, CHECAGEM DE TIPOS

// Imagine que vocẽ criou um componente reutilizável e que ele, para funcionar corretamente, precisa receber determinadas props de tipos específicos, caso contrário a aplicação quebrará. 

// A checagem de tipos ajuda a prevenir cenários como esse, pois verifica os tipos das props passadas para um componente durante o desenvolvimento e levanta um warning se algo não estiver como planejado. 

import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default Greeting;


// 1. O primeiro passo para utilizar as props é importá-las no componente.

import PropTypes from 'prop-types';

// 2. Em seguida, para executarmos a checagem de tipos no componente Greeting, adicionamos a seguinte estrutura antes do export default:

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

// É dentro dessa estrutura que ocorre a checagem das props. Basta pegarmos o nome da prop que queremos tipar e usar a sintaxe de identificação apropriada para o caso. 

// 1. A primeira prop que queremos tipar é name. Queremos ter certeza de que ela sempre será do tipo string.

...
name: PropTypes.string,
...

// 2. A outra prop que falta ser tipada, lastName, é tipada de maneira análoga:

...
name: PropTypes.string,
lastName: PropTypes.string,
...

// 3. Agora podemos ter certeza de que, caso o componente seja renderizado com alguma prop de tipo inválido, o console disparará um aviso, facilitando muito o processo de debugging.

// Caso o componente seja renderizado sem nenhum valor numa prop, ainda será disparado o aviso? Nos casos em que as props são essenciais para o bom funcionamento do componente, é importante acrescentar o .isRequired após a definição do tipo da prop.

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

// Assim, sempre que o componente for renderizado sem uma das props ou com alguma do tipo errado, um aviso será disparado.

// Seguem alguns dos principais validadores oferecidos pela PropTypes:

MeuComponente.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios basta adicionar .isRequired
  numeroObrigatório: PropTypes.number.isRequired,

  // Tipos básico do JS.
  stringOpcional: PropTypes.string,
  numeroOpcional: PropTypes.number,
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDe: PropTypes.arrayOf(PropTypes.number),

  // Um objeto de determinado tipo básico
  objetoDe: PropTypes.objectOf(PropTypes.number),

  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    avaibility: PropTypes.bool,
  }),
};

-------------------

//  Componente pode ser função ou classe -> componente funcional ou de classe

// Recebe como argumentos props, e retorna um JSX, um elemento React

// Vantagens do React: componentização, isolamento e abstração

// Componentização ajuda na manutenção  do código. Além disso, ajuda na reusabilidade também.

// Isolamento e abstração -> 

// React usa JS declarativo, não imperativo. 

// Toda vez que usarmos JSX, é preciso declarar um elemento pai.

// Normalmente se coloca uma div. Também pode-se colocar um fragment. Funciona como elemento HTML vazio. Ex:

return (
  <>
  <Cabeça />
  <Tronco />
  <Pernas />
  </>
)

// String dispensa uso de chaves em props, mas outros tipos de dados precisam de chaves.

return (
  <>
  <Cabeça cabelo="verde" />
  <Cabeça cabelo="vermelho" isBald={false} />
  <Tronco />
  <Pernas />
  </>
)








