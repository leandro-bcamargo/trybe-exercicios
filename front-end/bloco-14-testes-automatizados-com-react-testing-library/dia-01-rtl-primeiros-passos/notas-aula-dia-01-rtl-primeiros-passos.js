// CONTEÚDOS


// COBERTURA DE CÓDIGO E COBERTURA DE TESTES AUTOMATIZADOS

// O principal objeivo da COBERTURA DE CÓDIGO/COBERTURA DE TESTES é evidenciar quais linhas de código foram testadas e quais não estão sendo exploradas nos testes.

// Se o resultado mostra que há uma cobertura alta, podemos dizer que o código foi bastante testado e tem uma chance menor de conter erros, mas isso não diz nada sobre a qualidade do código, o que só pode ser medido pela COBERTURA DOS CASOS DE USO.

// CASOS DE USO VS COBERTURA DE CÓDIGO

// Casos de uso são possibilidades de uso do sistema. Ex:
// Quais passos o usuário precisa seguir para fazer um login no sistema e o que é esperado ao final do login tanto no sucesso como na falha?
// E se o usuário não digitar no campo user? Ou no campo password?
// E se a senha digitada for incorreta?

// Cada uma dessas situações é um CASO DE USO diferente. 

// Mais importante do que a cobertura do código, que também é essencial, é garantir que seus testes abordem todos os casos de uso da sua aplicação.

// Para tanto, devemos criar testes automatizados que simulam uma pessoa acessando a página e fazendo uma sequência de passos que resultam naquele caso de uso.

// A ferramente de testes automatizados que utilizaremos é a REACT TESTING LIBRARY.



// INTRODUÇÃO AO RTL

// No RTL, o objeto é testar comportamento, como se algo aparece ou nã na tela. Ex:

// Testar se a nossa página possui um título específico

// Em uma lista de tarefas, precisamos verificar, por exemplo, se a funcionalidade de adicionar uma nova tarefa funciona. Para tanto, devemos simular o comportamento de quem usa, que seria adicionar um texto no campo de texto alvo e clicar no botão que adiciona a nova tarefa. Para testar se funcionou, verificamos se o texto aparece em algum lugar da página. O RTL nos dá as ferramentas necessários para fazer essa verificação.

// Ao observarmos o arquivo App.test.js, temos o seguinte:

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Estamos verificando se algum elemento dentro do componente App possui o texto "learn react" (/string/i é usado para ignorar case sensitivity). Para rodar os testes, executa-se npm test na pasta src. 

// Ao fazê-lo, veremos que o teste passará. Quer dizer que existe o texto "learn react" dentro do componente App.

// Se mudarmos o texto "learn react" para "algo que não aparece" e rodarmos o teste, isso gerará um erro dizendo que não foi possível encontrar um elemento com o texto "/algo que não aparece/i". 

// Toda alteração feita ao código será submetida aos testes para garantir que essa alteração não tenha quebrado nenhum outro componente do código.

test('Verifica se existe um input de email na tela', () => {
  //acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");

  // interagir com esses elementos(se for necessário)

  // fazer os testes

  // 
})

// Para testar uma aplicação, precisamos seguir alguns passos:


// RENDERIZAÇÃO

// Testar um componente significa renderizá-lo em um browser real ou numa simulação de um browser e testar nele o componente desejado. 

// Na RTL, precisamos da função render() para fazer isso. A função render() faz a renderização de um componente na memória para que possa simular interações com esse componente.

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Para usarmos o seletor getByText, precisamos usar screen.getByText. 

// Observe que ele e muito parecido com os seletores do DOM, como document.getElementById ou document.querySelector. Seguindo essa mesma lógica, ao usarmos o screen.getByText, será retornado um elemento HTML. A vantagem de utilizarmos o screen é que não precisaremos atualizar e desestruturar a chamada do render para todo teste a ser feito, pois através do próprio screen é possível consultar todos os elementos do DOM. 

// Dito de outro modo, screen receberá um objeto contendo os elementos do DOM e você poderá acessar as propriedades desse objeto através dele.



// SELETORES


test('Verifica se existe um input de email na tela', () => {
  // acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");
})

 // interagir com esses elementos(se for necessário)

  // fazer os testes






test('Verifica se existem 2 botões', () => {
  // acessar os elementos da tela
  render(<App />);
  // Retorna um array com todos os buttons da tela
  const buttons = screen.getAllByRole("button")
  // interagir com esses elementos
  // fazer os testes
  expect(buttons).toHaveLength(2);
})

 




test('Verifica se existe o botão de enviar', () => {
  render(<App />)
  const sendButton = screen.getByTestId("id-send");
  expect(sendButton).toBeInTheDocument();
  expect(sendButton).toHaveValue("Enviar");
})





// SELETORES ou QUERIES são métodos que utilizamos para indicar ao RTL elementos de nossa aplicação e assim poder realizar nossos testes e comparações.

// Veremos agora algumas formas de buscar por um elemento HTML. Vimos o getByText, que busca por um elemento que possui um determinado texto.

// Como fazer para buscar um elemento que não possui texto, como um input?


// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
    </div>
  );
}

export default App;


// Como esse input não possui texto, não podemos usar o getByText. Porém, podemos usar getLabelByText, em que será pego o input de acordo com o texto da label a ele associada. Nesse caso, o input está relacionado com a label Email.


// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// Como se pode ver, mudamos os expects também, verificando se o elemento que está na tela é do tipo correto.

// Porém, e se um campo não tiver texto nem label? Podemos usar o getByRole. Ele busca pelo atributo role. No caso de um botão, o role é definido pela propriedade type="button". O role serve, por exemplo, para buscar por um elemento <button>Enviar</button> ou <input type="button" value="Enviar" />



// Adicionando um botão ao App.js
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
    </div>
  );
}

export default App;

// Adicionando o teste abaixo ao arquivo App.tests.js

test('Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});

// Adicionando um novo botão à aplicação

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;

// Note que, ao rodarmos os testes, ocorre um erro. O que ocorre é que o getByRole espera encontrar apenas um elemento, mas acaba encontrando dois, o botão enviar e o botão voltar, pois ambos possuem o role button, retornando a mensagem Found multiple elementos with the role "button". Para resolver esse problema, precisamos usar outro seletor, o getAllByRole, que armazenará todos os valores encontrados pelo seletor num array. Alteramos, então, o teste:

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

// Observe que usamos buttons juntamente com toHaveLength para verificar se foram encontrados 2 botões. Não precisamos usar toBeInTheDocument para realizar a verificação da presença no documento.

// Vamos testar a existência de um botão de enviar. Para tanto, usaremos a query getByTestId. Para usar esse seletor, devemos adicionar uma propriedade ao nosso botão de enviar, o data-testid, que é um identificador para a biblioteca de testes.

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;

// Temos, então, o seguinte teste.

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

// Buscamos o elemento pelo data-testid e verificamos se ele está na tela. Em seguida, verificamos se esse elemento é um botão, e com a propriedade toHaveValue conferimos se ele possui o texto Enviar.



// TESTANDO EVENTOS

test('Verifica que, ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
  render(<App />);
    // acessar os elementos da tela
  const inputEmail = screen.getByLabelText('Email');
  const button = screen.getByTestId('id-send');
  const userEmail = screen.getByTestId('id-email-user');

  // interagir com esses elementos
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.click(button);

  // fazer os testes
  expect(inputEmail).toHaveValue('');
  expect(userEmail).toHaveTextContent('Valor: test@test.com')
})

// Estamos, agora, testando o comportamento do usuário, como o clique em um botão. Para tanto, usaremos a userEvent, uma biblioteca complementar à RTL que possibilita a simulação de várias interações com o navegador.

// Um userEvent.type(input, 'hello world') testará interações keyDown, keyPress, keyUp para cada caractere digitado. 

// A maioria dos métodos do userEvent são síncronos, exceto ao utilizar userEvent.type, pois ele aguarda a informação que será testada. O type possui três parâmetros, sendo o terceiro opcional.

// type(element, text, [options]) -> Esse terceiro parâmetro pode ser utilizado para passar um delay, em milisegundos, que será o tempo esperado entre dois caracteres digitados para realizar a ação do teste. O valor default para o delay é 0. O userEvent.type é um evento que retorna uma Promise, porém, como o valor default do delay é 0, você só precisará aguardar o retorno dessa Promise caso passe algum valor para a opção delay, do contrário userEvent funcionará de modo síncrono.

// Modificando o App.js para que o usuário possa inserir seu Email no campo, salvá-lo e mostrá-lo na tela:


// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;


// Agora vamos automatizar cada passo feito no código usando o userEvent, para não precisar testar à mão cada passo toda vez que o código for alterado, bastando rodar o npm test.

// Primeiro, devemos importar a biblioteca para o arquivo onde o teste será realizado.

import userEvent from '@testing-library/user-event';

// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

// Passo a passo:

// Renderizamos a aplicação, depois salvamos o email do usuário numa variável

// Verificamos se a tag <h2>, onde o email aparece na tela, está apenas com o texto 'Valor:'.

// Procuramos pelo campo de email e o botão que enviará os dados.

// Simulamos a digitação do usuário no campo de email com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ('email@email.com')

// Simulamos um click no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro.

// Verificamos se, após o click, o campo de input do email volta para vazio e se a tag <h2>, que anteriormente só exibia "Valor:", agora recebe o email passado como input, resultando em Valor: email@email.com


// TESTANDO APENAS UM COMPONENTE

// Imagine que queiramos tester apenas um componente. Podemos renderizar apenas esse componente específico e criar testes para ele.

// Criaremos um componente que mostra se o email é válido ou não.

// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;


// Substituímos a seguinte linha em App.js

<h2 data-testid="id-email-user">{ `Valor: ${ saveEmail }` }</h2>
// Substitua a linha de cima pela a debaixo.
<ValidEmail email={ saveEmail } />


// Todos os testes passam, assegurando que a aplicação continua funcionando mesmo após essa mudança. 

// Criaremos o arquivo ValidEmail.test.js:

import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

// No lugar de render(<App />), colocamos render(< ValidEmail email={EMAIL_USER}/>). O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={EMAIL_USER}. O teste verifica se, com a prop passada, o nosso teste passará.

// Já testamos o cenário em que o email é válido. Precisamos agora testar o cenário em que o emial é inválido. Para tanto, precisamos criar um novo teste, definindo a constante EMAIL_USER com o valor de um email inválido e alterando o texto buscado para Email inválido.

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});