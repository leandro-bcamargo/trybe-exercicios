// ARRAY: EU ATUALIZO OU FAÇO UMA CÓPIA?

// Nunca podemos alterar o estado do componente diretamente.

// Devemos fazê-lo sempre através da função setState().

// Nessa função, passamos por parâmetro os elementos do estado que vamos atualizar/acrescentar.

// No Redux, não podemos atualizar o estado da store.

// Só podemos interagir com o estado através do reducer.

// Reducer define um estado inteiro novamente e substitui o anterior.

// Pega o estado, faz uma cópia dele, faz as modificações devidas e retorna esse estado novo por inteiro.

// const primeiroArray = [1, 2, 3];

// const segundoArray = primeiroArray;

// primeiroArray.push(4);

// Tanto primeiroArray como segundoArray referem-se ao array [1, 2, 3, 4], porque essas duas constantes apontam para o mesmo lugar da memória.

// primeiroArray.concat(4);

// Tanto primeiroArray como segundoArray não recebem o elemento 4, pois a função concat() retorna um novo array.

// segundoArray = primeiroArray.concat(4);

// Agora o segundo array será [1, 2, 3, 4] e o primeiro [1, 2, 3].

// Quando operamos sobre arrays, existem funções que vão alterar o array e existem funções que vão fazer uma cópia dele.

// Quando estamos operando com o estado do redux, nunca podemos usar funções que atualizam o array. Somente funções que retornam um novo array.

// O state é imutável, de modo que só podemos usar métodos que façam clonagem, nunca métodos que façam mutação.

// Podem-se dividir os métodos que trabalham com arrays em duas categorias.

// Há aqueles que, ao realizar sua função, NÃO criam um novo array, ou seja, causam mutação no array já existente.

// Há aqueles que, ao realizar sua função, CRIAM um novo array sem alterar o antigo, clonando o array já existente.

// Como a store é imutável, devemos trabalhar com métodos que fazem CLONAGEM, nunca com métodos que fazem mutação. 

// A MUTAÇÃO ATUALIZA um valor já existente na memória e a CLONAGEM CRIA um novo valor separado, mantendo o antigo intacto.



const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]


// Ao passar o valor da const itemPrimario para a const mutacaoTeste, estamos apenas dando à variável mutaçãoTeste o apontador para o local da memória onde o valor de itemPrimario está armazenado. Logo, temos o mesmo valor apontado pelas duas variáveis.

// Ao utilizar o push para inserir o valor 6, como esse método não faz clonagem, e sim mutação, ele alterou diretamente o local da memória em que o valor está armazenado e, por isso, o valor de ambas as variáveis que apontam para esse local foi alterado. Isso NÃO É PERMITIDO no redux.

// Pelo fato de o endereço na memória ser alterado diretamente, não tivemos a necessidade de passar o novo valor para a variável mutacaoTeste, já que o endereço na memória permanece o mesmo.




const itemPrimario = [1, 2, 3, 4, 5];
let clonagemTeste = itemPrimario;
clonagemTeste.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemPrimario); // [1, 2, 3, 4, 5]



// Aqui estamos utilizando o método concat porque esse método faz CLONAGEM. Isto é, ele cria um novo array com os valores atualizados, MAS NÃO ATUALIZA a variável original para que ela aponte para esse novo array. 

// Logo, clonagemTeste ainda aponta para o array antigo. Sem uma reatribuição, o endereço atribuído a essa variável é o do valor antigo, por isso seu array não foi alterado. 

// A mutação altera o valor do lugar na memória para onde as duas variáveis apontam; A clonagem cria um novo lugar na memóriacom um novo valor e mantém o valor antigo intacto.

// Métodos como push(), splice(), sort() fazem mutação, ao passo que métodos como concat(), slice() e filter() fazem clonagem. Logo, esses últimos precisam que a variável seja reatribuída ao novo valor.

// O spread operator também é um meio de clonar o array original.

const itemPrimario = [1, 2, 3, 4, 5, 6];
let spreadTeste = [...itemPrimario, 7];
console.log(spreadTeste); // [1, 2, 3, 4, 5, 6, 7]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]




