// TESTANDO REDUX

// O primeiro passo é renderizar um componente no ambiente simulado dos testes. Geralmente, esse componente é o App.js.

// Por causa do uso necessário do Provider em aplicações react-redux, nos testes temos também de utilizar o Provider para termos acesso ao state.

// Para o redux, usamos a função renderWithRedux.

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}



// A função renderWithRedux recebe um componente como primeiro parâmetro e desconstrói um objeto como segundo.

// Ele obtém o valor de uma chave initialState desse objeto e o armazena numa variável de mesmo nome.

// Além disso, ele atribui um valor padrão para a chave store, sendo esse valor uma nova store criada com um reducer importado e o initialState que acabamos de desconstruir. 

// Isso renderiza o componente envolvido pela store que criamos para o contexto do teste.

// A função retorna, também, a própria store, caso precisemos acessá-la diretamente em nosso teste.

// Em resumo, a função renderWithRedux acrescenta ao componente renderizado um store criado para os testes.

// 