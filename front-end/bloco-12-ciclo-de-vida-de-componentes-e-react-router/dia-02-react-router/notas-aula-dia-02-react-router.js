/* eslint-disable */
// SINGLE PAGE APPLICATION

// Single Page Application são páginas web que funcionam 100% sem precisar dar reload.

// Numa página normal, toda vez que passamos de uma página para outra, uma nova página é carregada do zero.

// Em SPA, há uma única página, carregada na primeira vez que acessamos a página, e toda navegação, interação e carregamento de novas informações vêm por JS.



// PROPS.CHILDREN

// Children é uma ferramenta para reutilização de componentes

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}

// Podemos acessar e exibir na tela o valor SUPIMPA no ComponentePai da seguinte forma:

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

// Nesse exemplo, utilizamos a tag p, mas note que poderia ser um ou vários elementos de qualquer natureza, seja uma tag, ou até um componente. Ainda assim, ela é acessada da mesma forma dentro de ComponentePai.

// É importante perceber que, no caso acima, props.children é um objeto por ser apenas um elemento. Caso ComponentePai estja com mais de um elemento dentro, props.children se torna um array de objetos com as informações de cada filho.

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}



// INSTALAÇÃO REACT ROUTER DOM

// npm install react-router-dom@v5



// COMPONENTES BROWSE ROUTER E ROUTE

// Componente <BrowserRouter></BrowserRouter> é importado da biblioteca react-router
import { BrowserRouter } from react-router-dom;

// Quando recebemos um componente como filho do componente que fizemos, conseguimos acessar esse filho via props e fazer lógica com ele.

// Passamos nossos componentes para os componentes das bibliotecas como filhos, e as bibliotecas fazem a lógica delas funcionar.

// App.js
import { BrowserRouter } from react-router-dom;

function App() {
  return (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
  )
}

export default App;

// Home.js
import { Route } from react-router-dom;
import About from '/.about';
import HowTo from '/.Howto';
import Profile from '/.Profile';


class Home extends Component {
  render() {
    return (
      <div>
      <h1>Minha Homepage</h1>
      {/* Leia-se: se eu navegar para esse path, renderize esse componente */}
      <Route path="/about" component={ About } />
      <Route path="/howto" component={ HowTo } />
      {/* Sintaxe alternativa, em vez de passar como component, pode passar como filho do Route */}
      <Route path="/profile"><Profile /></Route>
      
      </div>
    )
  }
}

export default Home

// Podemos fazer todos os componentes serem roteados a partir do App

import { BrowserRouter, Router } from react-router-dom;
import About from '/.about';
import HowTo from '/.Howto';
import Profile from '/.Profile';

function App() {
  return (
  <BrowserRouter>
    <Home />
      {/* Leia-se: se eu navegar para esse path, renderize esse componente */}
      <Route path="/about" component={ About } />
      <Route path="/howto" component={ HowTo } />
      {/* Sintaxe alternativa, em vez de passar como component, pode passar como filho do Route */}
      <Route path="/profile"><Profile /></Route>
      <Route exact path="/" component="{ Home }" />
  </BrowserRouter>
  )
}

export default App;

// BrowserRouter é o componente que encapsula a sua aplicação, de forma a te possibilitar fazer uso de navegação.

// Route é o componente fundamental em React Router que estabelece o mapeamento entre o caminho de URL declarado e o componente. Tal mapeamento, no que diz respeito à correspondência entre o caminho da URL atual e a presente no componente, pode ser feito das seguintes formas:

<Route path="/about" component={ About } />

// Lê-se: se o caminho da URL atual do navegador começa com o caminho /about, como declarado na prop path do componente Route, há uma correspondência entre os caminhos da URL e do componente Route, e o componente About será renderizado. Ou seja, se o caminho da URL atual for /home, não há correspondência, logo o componente About não será renderizado. Entretanto, se a URL atual for /about ou /about/me, há correspondência, e o componente About é renderizado. O parâmetro exact entra em ação quando você tem vários caminhos com substrings semelhantes.

<Route exact path="/about" component={ About } />

// Lê-se: se houver uma correspondência EXATA entre o caminho da URL atual e o caminho /about declarado em Route, o componente será renderizado. Ou seja, se o caminho da URL atual for /home ou /about/me, não há correspondência exata, logo o componente About não será renderizado. Entretanto, se a URL atual for /about, há correspondẽncia exata, e o componente About será renderizado. 

// OBS: além dessas duas formas de renderização de componente com o Route, você pode fazer uso de elemento children. Ou seja, se você tiver a rota <Route path="/about" component={ About } />, você também poderá fazer da seguinte forma:

<Route path="/about">
  <About />
</Route>

// Se houver vários componentes apresentando correspondência entre seu caminho de URL e o caminho atual da aplicação, todos os componentes apresentando correspondência serão renderizados. Ou seja, suponho que houvesse a seguinte lista de componentes do tipo Route:

<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/" component={Home} />

// Se o caminho atual da URL da aplicação for /, TODOS esses componentes serão renderizados, haja visto que todas as rotas NÃO fazem correspondência EXATA com entre o caminho da URL atual e o definido via prop path, e fazer path="/" faz correspondência com qualquer caminho de URL.

// Agora, se o caminho atual da URL da aplicação for /contact, os componentes Contact e Home serão renderizados. Isso pode ser um problema, e uma forma de atacá-lo é organizar essas rotas via componente Switch.



// COMPONENTE LINK

// Home.js

import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <h1>Minha homepage</h1>
      </div>
    )
  }
}

export default Home;

// About.js

import React from 'react';
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() {
    return (
      <div>
        <p>Texto</p>
        <Link to="/">Voltar à Home</Link>
      </div>
    )
  }
}

export default About;

// Link faz o papel do componente anchor <a>, porém o anchor exige que se recarregue a página, ao passo que o Link não.

// O Link é o componente a ser usado no lugar de elementos com a tag <a>, de forma a disponibilizar a nevagação por URL na sua aplicação SPA sem o recarregamento da página que <a> exige. Ou seja, se quisermos definir um link que leve quem usa a aplicação para a URL com o caminho /about, poderíamos chamar o link da seguinte forma:

<Link to="/about" > About </Link>

// Lembre-se: palavras, imagens, até mesmo outros componentes podem ser filhos do Link. Ser filho do Link significa que, se você clicar nesse filho, irá para onde o Link te direciona.



// COMPONENTES ROUTE COM PASSAGEM DE PROPS

// Profile.js
class Profile extends React.Component {
  render() {
    return (
      <h1>Meu perfil: {this.props.name}</h1>
    )
  }
}

// App.js
function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={ About } />
      <Route path="/howto" component={ HowTo } />
      {/* Para passar props, trocamos o atributo component pelo atributo render e passamos uma callback como seu valor. Para passar as props que o Route internamente fornece (objeto de props contendo as chaves history, location e match), passamos props como parâmetro da callback e spreadamos esse objeto dentro do componente */}
      <Route path="/profile" render={ (props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web" /> } />
      <Route path="/" component={ Home } />
    </BrowserRouter>
  )
}

// history: histórico de navegação do usuário

// match: passar parâmetros pela URL para que a aplicação saiba o que mostrar na tela.



// App.js
function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={ About } />
      <Route path="/howto" component={ HowTo } />
      {/* Sintaxe -> :nomeDoParametroPassadoPorURL. Leia-se: a rota que for colocada na URL vai chegar para o nosso componente como uma prop em match.params.ship = "perolanegra" */}
      <Route path="/profile/:ship" render={ (props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web" /> } />
      <Route path="/" component={ Home } />
    </BrowserRouter>
  )
}

// Profile.js
class Profile extends React.Component {
  render() {
    const { ship } = this.props.match.params
    return (
      <h1>Meu perfil: {this.props.name}, do navio { ship }</h1>
    )
  }
}

// Através do Route, podemos associar um componente com o caminho da URL via children, component ou render.

// Faz-se uso da prop component de Route quando NÃO É NECESSÁRIO passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente About que não precisa de props setadas para ser chamado, e você precisa mapeá-lo para o caminho de url /about, você poderia criar uma rota da seguinte forma:

<Route path="/about" component={ About } />

// Já a prop render de Route é usada quando É NECESSÁRIO passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente Movies que precisa receber uma lista de filmes via prop movies, e você precisa mapeá-lo para o caminho de URL /movies, você poderia criar uma rota da seguinte forma: 

<Route path="/movies" render={ (props) => <Movies {... props} movies={['Cars', 'Toy Story', 'The Hobbit']}  /> } />

// Tanto component quanto render permitem que você tenha acesso a informações de rota (match, location e history) via props do componente que você está mapeando. Ou seja, se você tem a rota <Route path="/about" component={ About } />, About terá match, location e history setadas via props.



// COMPONENTES ROUTE COM PASSAGEM DE PARÂMETRO (ROTAS DINÂMICAS)

// O interessante em rotas dinâmicas é que podemos utilizar o mesmo componente para renderizar vários caminhos diferentes. Para fazer uso de parâmetro de URL em Route, é preciso fazer uso da sintaxe :nome_do_parametro dentro da propriedade path. Ou seja, <Route path="/movies/:movieId" component={ Movie } /> vai definir um parâmetro chamado movieId, e o componente Movie é mapeado a qualquer um dos seguintes caminhos de url:

// /movies/1
// /movies/2
// /movies/thor



// COMPONENTE SWITCH

// O componente switch é usado para encapsular um conjunto de rotas que você definiu via Route.

// Dada a URL atual da aplicação, o Switch procura de cima para baixo pelo primeiro Route que possuir correspondência entre seu caminho definido na prop pathdo componente e a URL atual da aplicação. Ou seja, se tivermos um switch com as rotas abaixo:

<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
</Switch>

// Ao mudarmos a URL da aplicação para que o seu caminho seja /contact, somente o componente Contact será renderizado. 

// Todos os filhos de um Switch devem ser Route ou Redirect. Apenas o primeiro filho que corresponder ao local atual será renderizado. Se não houvesse o Switch, mais de um componente poderia ser renderizado na mesma rota de forma errada. 

// Em uma  comparação direta, é como o switch case do JS. A título de ilustração: 

switch (rota) {
  case '/about':
    return <About />;
  case '/contact':
    return <Contact />;
  case '/movies':
    return <Movies />;
  default:
    return <Home />
}



// COMPONENTE REDIRECT

// Redirect é um componente que permite ATIVAMENTE levar quem usa a aplicação para diferentes locais dela. Um caso de uso bastante comum de Redirect é autenticação: a pessoa só pode acessar informações sensíveis (tipo conta bancária) de uma aplicação se ela já estiver autenticada; caso contrário, ela é REDIRECIONADA para uma página de login. 

<Switch>
<Route path="/dashboard" component={Dashboard} />
<Route exact path="/">
  {logado ? <Redirect to="/dashboard" /> : <Login />}
</Route>
</Switch>

// Caso a aplicação tenha o caminho /, será feita uma verificação na variável logado. No caso de true, a página será redirecionada para o caminho /dashboarde então renderizará o componente Dashboard. Caso contrário, renderizará o componente Login.

// Dê sempre PRIORIDADE para a utilização de Redirect para redirecionar, uma vez que ele é criado para isso.

