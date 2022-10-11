// OS MOCKS

// O objetivo de mockar uma função, módulo ou requisição é dar ao desenvolvedor controle sobre todo o funcionamento dos seus testes. Tomemos uma requisição a uma API, que muda constantemente seu retorno. Como ter certeza de seu retorno e como se precaver contra um falso-positivo?

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

// Mockar o comporamento da função retornaNumeroAleatório() para garantir que ela está, nesse teste, retornando um número par, é a solução.

// Destacam-se 3 formas de mockar algo somente utilizando Jest:

// jest.fn();
// jest.mock();
// jest.spyOn();

// Mocks são simulações.

describe("Aprendendo sobre mocks", () => {
  it('Testa se a função foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
  })

  it('Testa o resultado da função', () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8);
    expect(somaDoisNumeros()).toBe(8)
  })

  it('Testa quantas vezes a função foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
  })

  it('Testa que retorna true quando número é par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(2);
    expect(divisivelPorDois()).toBe(true);
  })

  it('Testa que retorna true quando número é ímpar', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    expect(divisivelPorDois()).toBe(false);
  })
})



// MOCKANDO FUNÇÕES COM JEST

// O método jest.fn() é a forma mais simples de mockar algo: ele transforma uma função em uma simulação. Em outras palavras, ao mockar uma função com o jest.fn() e chamá-la, o comportamento definido na mock será chamado em vez da função original.

// Ele é muito útil para casos em que precisamos ter controle sobre retornos aleatórios.

// Testando para saber se a função foi chamada, temos:


test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});

// Esse teste não passa, apontando o seguinte erro:
// Matcher error: received value must be a mock or spy function

// Esse erro ocorre pois a propriedade toHaveBeenCalled é exclusiva para funções simuladas. Ou seja, se você não simular a função, a propriedade não funcionará corretamente.

// Precisamos, então, usar o jest.fn():

test("#divisivelPorDois", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
  divisivelPorDois = jest.fn();

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});

// Ao declararmos divisivelPorDois = jest.fn(), estamos dizendo que, a partir daquele momento, estamos tomando controle da função divisivelPorDois(), e ela será uma simulação da função original. 

// Por se tratar de uma simulação, podemos especificar o valor retornado pela função. Basicamente, podemos dizer: No contexto deste teste, quando essa função chamada, ela retornará o valor X em vez de um valor aleatório.

// Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value). o mockReturnValue(value) define um valor padrão de retorno. Já o mockReturnValueOnce(value) retorna o valor estipulado apenas uma vez, podendo ser encadeado para que chamadas sucessivas retornem valores distintos.

test("#divisivelPorDois", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);
});

// Estamos manualmente chamando a função divisivelPorDois(): Caso isso não seja feito, o texto expect(divisivelPorDois()).toHaveBeenCalled() irá falhar. Isso ocorre pois mockar uma função redefine seu comportamento, porém não a executa por si só. A propriedade toHaveBeenCalled() espera que a função dentro de expect() tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.

// Além disso, podemos testar quantas vezes uma função foi chamada. Para tanto, utilizamos a propriedade toHaveBeenCalledTimes(number);

test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});

// Note que a implementação mockReturnValueOnce sobrepõe-se à mockReturnValue,que se torna um padrão apenas após os retornos de mockReturnValueOnce serem executados.



// MOCKANDO MÓDULOS

// Diferentemente do jest.fn(), que simula apenas uma função por vez, o jest.mock(), que tem como principal diferença mockar todo um pacote de dependências ou módulo de uma só vez.

// Tomemos um arquivo math.js:

const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

// Utilizando o jest.fn(), teríamos de mockar uma a uma. Usando o jest.mock(), podemos mocá-las todas num só comando:

jest.mock('./math');

// Passamos a simular o comportamento de suas funções, porém sua implementação individual permanece indefinida. Por exemplo, se passarmos os parâmetros 1 e 2 para a função somar, o retorno será undefined. Isso porque a simulação deixou de acessar o comportamento da função original de math.js.

// Embora possamos definir um retorno com mockReturnValue(value), há casos em que é útil ir além dessa capacidade de retornar um valor e criar um novo comportamento para a função mockada. É o que o método mockImplementation(func) faz. Ele aceita uma função que deve ser usada como implementação. 

const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

// No exemplo, utilizamos também o método toHaveBeenCalledWith(... args), que valida quais argumentos foram passados à função.

// Assim como o mockReturnValueOnce, podemos implementar também uma funcionalidade para apenas uma chamada com mockImplementationOnce.



// TRABALHANDO COM MOCK E FUNÇÕES ORIGINAIS

// Há casos em que é útil verificar efeitos colaterais de uma função, como quando alteramos um elemento de uma página. Mas como fazer isso se, por um lado, ao mockarmos uma função, ela perde sua implementação original e, por outro, se não a mockarmos, não podemos testá-la com o matcher?

// O jest.spyOn() se propõe a resolver esse problema. Ele espia a chamada da função simulada enquanto deixa a implementação da função original ativa. 

const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

// Podemos notar que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.

// Há também como limpar, resetar ou restaurar mocks. Há três métodos para fazê-lo.

// mock.mockClear();
// Útil para quando desejamos limpar os dados de uso de uma simulação entre dois expects. 

// mock.mockReset();
// Faz o que o mock.mockClear() faz;
// Remove qualquer retorno estipulado ou implementação
// Útil quando desejamos resetar uma simulação para o seu estado inicial

// mock.mockRestore();
// Faz tudo o que o mock.mockReset() faz;
// Restaura a implementação original;
// Útil para quando queremos simular funções em certos casos de teste e restaurar a implementação original em outros.

// Por exemplo, imagine que você queira testar a função mockada somar, implementando para ela um método de subtração, mas que depois você queira redefinir as implementações da mock.

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

// No exemplo acima, por termos usado o jest.fn(), não há como restaurar as implementações originais da função, pois suas funcionalidades não permitem. A única ferramente que nos permite transitar entre simulação e comportamento original é jest.spyOn().

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação por uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});




// TESTANDO UMA CHAMADA DE API NO REACT

// Os testes que dependem de requisições são os mais beneficiados com o uso de mocks. 

// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    // Definindo os headers da requisição, dizendo a ela que estamos esperando como retorno um json.
    fetch(API_URL, { headers: { Accept: 'application/json' } })
    // Fetch retorna uma promise, que ao ser resolvida é salva em response pelo método then. Dentro da resposta, há um objeto com a propriedade json, que é uma função, e é essa função que está sendo chamada nessa linha. A response está num formato que não consegue ser lido pela aplicação. Para que ela consiga ser lida para a aplicação, ela deve ser transformada em um json. É isso que a expressão response.json() faz. Porém, essa função também é assíncrona e, portanto, também retorna uma promise. Por essa razão, precisamos fazer outro then. É no resultado desse then (armazenado em data) que teremos o retorno final da função, os dados retornados pela API no formado json. Colocamos, então, essa variável dentro do estado, armazenando-a como valor da chave joke.
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        {joke}
      </div>
    );
  }
}

export default App;


// Nosso problema é: como testar a aplicação sem que ela quebre toda vez que a API retornar uma nova piada diferente?

// Não temos controle sobre se e o que uma API externa retornará. Portanto, temos de adaptar o teste para que ele não dependa dessa API externa, mas sim de uma simulação sobre a qual temos total controle.

// Devemos, então simular o fetch e, com isso, simular uma API externa. 

// Utilizando a simulação, posso saber exatamente qual o retorno dado por ela.

// Vamos tomar a função fetch e fazer uma chamada simulada para termos um retorno controlado.

it('Verifica que, quando recebe uma piada, mostra ela na tela', () async => {
  // fetch será sobrescrita com minha própria implementação. Dentro do meu tste, onde estiver aparecendo "fetch", eu quero que você chame essa função que se segue -> não quero mais chamar a função fetch original. 
  // A função fetch tem uma entrada e uma saída. A simulação deve se preocupar com essas informações. Devemos simular seu formato.
  // Recebe url como parâmetro, retorna uma promise. Quando a promise é resolvida, ela retorna um objeto (response) que tem a propriedade json(). Eu sei que json() é uma função por causa dos parênteses.
  global.fetch = (url) => {
    // fetch retorna uma promise que, quando é resolvida, retorna um objeto que tem a propriedade json(), que é uma função que, ao ser chamada, retorna uma promise que, quando é resolvida, retorna o objeto final (a piada).
    Promise.resolve({
      json: () => Promise.resolve({ 
        id: '7h3oGtr0fxc',
        joke: 'Whiteboards ... are remarkable. ',
        status: 200,
       })
    })
  }

 // Alternativa mais sucinta

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtr0fxc',
      joke: 'Whiteboards ... are remarkable. ',
      status: 200,
    })
  })


  render(<App />);
  const renderedJoke = await screen.findByText('White boards... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
})







// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

// A constante joke cria um objeto similar ao que é retornado pela API.

// O jest.spyOn() espiona as chamadas à função fetch do objeto global. É por meio desse objeto global que conseguimos usar qualquer função do sistema, como a parseInt.

// Quando a função fetch for chamada, em vez de fazer uma requisição a uma API externa, será chamado o nosso mock. Repare que, para cada .then, utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria.

// Primeiro retornamos um objeto que tem como propriedade a função json(), e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado em nosso componente.

// É importante termos o async em it('fetch joke', async () => {...}), para que se possa utilizar await findByText, quando dizemos ao nosso teste: EI, ESPERE ATÉ QUE CONSIGA ENCONTRAR ESSE TEXTO NO DOM OU DÊ ERRO POR LIMITE DE TEMPO.

// As funções toBeCalledTimes e toBeCalledWith servem para garantir, respectivamente, o número de chamadas ao fetch e que ele foi chamado com os argumentos corretos.

// A linha afterEach(() => jest.clearAllMocks()) faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock. Isso é útil para que não haja interferência de um teste sobre o outro.
