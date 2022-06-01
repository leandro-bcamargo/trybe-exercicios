// COMPONENTES CONTROLADOS

import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    // Como chaves são usados os "names" dos elementos do formulário
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value, //event.target imprime o elemento em que foi colocado o escutador. Ao acrescentar .value, retorna o que foi digitado no elemento em questão.
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;

// Tomemos o elemento textarea para analisar o que está ocorrendo.

// Quando textarea sofrer uma alteração, ele vai disparar esse evento onChange.

// Esse evento onChange será passado como argumento para a função handleChange().

// Essa função vai pegar o valor inserido pelo usuário (event.target.value) e colocá-lo como valor da chave inicialmente declarada.

// O value do elemento é o valor desse campo no estado (this.state.estadoFavorito). Pega-se o valor do elemento, coloca-se esse valor no estado, e a partir do estado esse valor é mostrado no componente.

// O elemento deixou de lidar com a própria informação, ele está lidando com a informação disponibilizada pelo React no estado. É o estado do React que está lidando com a informação do elemento. Elemento não mais controla a informação, ele é controlado pelo estado do componente react.

// Quando um elemento que compõe o formulário (ex. textarea) passa a ser controlado pelo estado React, o nome que se dá a isso é componente controlado.

// Nos formulários do JS, os dados dos campos preenchidos ficavam salvos no próprio DOM. 

// Nos formulários do React, os dados dos campos preenchidos ficam salvos no estado.

// Como todos os dados que concernem os componentes React, os dados de um formulários são salvos no estado. 

// A partir do momento em que as informações do forms não são mais salvas no próprio elemento, no DOM, mas sim no estado do componente que o contém, passamos a dizer que esse elemento é um componente controlado.

// Estamos dizendo que o elemento do formulário é um componente controlado. Não estamos falando dos componentes React, mas dos componentes que compõem o formulário.




// EVENT HANDLERS GENÉRICOS

// Queremos que todos os componentes do formulário sejam componentes controlados através de um único handler.

// event.target recupera o elemento que está chamando o evento. 

handleChange = ({ target }) => {
  const { name, value } = target;

  this.setState({
    [name]: value // Interpolação do valor da variável para ser o nome da chave do objeto. É por isso que colocamos o NAME do componente como sendo idêntico à chave do estado.
  })
}

// Quando name === estadoFavorito, estadoFavorito substituirá [name].

// Quando name === email, email substituirá [name].

// No caso de checkbox, o true or false não fica armazenado no value, mas sim em uma chave chamada checked.

handleChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value; 

  this.setState({
    [name]: value
  })
};

// Uma excelente forma de criarmos formulários 100% com componentes controlados é fazermos um event handler genérico, capaz de atualizar o estado de todos os componentes com a mesma lógica.

handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
}

// O truque é o seguinte:

// Dê a cada elemento um NAME que seja igual à respectiva chave no estado do componente.

// No handler, recupere, a partir do parâmetro event o NAME do componente que disparou o evento e o valor associado ao disparo.

// Interpole o nome do componente como chave do estado numa sintaxe como a acima.



// TRANSMITINDO INFORMAÇÕES DE COMPONENTE FILHO PARA COMPONENTE PAI

// O componente pai detém o estado e controla completamente como ele será atualizado. Isso significa que as funções que manipularão o estado devem ser declaradas sempre no componente pai.

// Quando algum componente filho tem de passar alguma informação ao componente pai, ele deve receber como props a função que atualiza o estado do pai e dar a ela, como parâmetro, a informação pedida.

// A informação transmitida dessa forma será inserida no estado do componente pai.

import React from 'react';

class Button extends React.Component {
  render() {
    /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! */
    const { handleClick } = this.props;

    return (<button type="button" onClick={handleClick} >Contar clique!</button>);
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
    };
  }

  /* A função de alterar o estado é definida no componente pai*/
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  /* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback */
  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App



--------------

// Para mudar dinamicamente a chave de um objeto, usam-se colchetes

// Só se passam props de pai para filho. Por isso deixa-se estado no pai para que possa ser passado aos filhos.

// 