// Cookies são dados salvos em pequenos arquivos de texto no computador da pessoa que utiliza a Internet.

// Quando o servidor envia a página Web para o browser , a conexão é desligada e o servidor não tem mais acesso às informações da requisição - como os itens que a pessoa usuária adicionou a um carrinho de compras ou o e-mail que lhe dará acesso a sua conta. Cookies foram inventados para salvar dados das pessoas usuárias no próprio browser , pois, dessa forma, uma página conseguirá acessá-los para executar uma lógica com os parâmetros personalizados por pessoa.

// Cookies são salvos no formato chave-valor. Quando o navegador faz a requisição ao servidor para acessar uma página Web, os cookies dessa página são adicionados à requisição. Dessa forma, o servidor tem acesso aos dados da pessoa usuária. 

// O Javascript permite que a gente crie, leia e delete cookie através da propriedade document.cookie.

// Para criar um cookie, você só precisa atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:

document.cookie = 'email=isabella@email.com';

// Por definição, o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:

document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// Você pode adicionar também o parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.

document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

// O Javascript permite que você atribua document.cookie a uma variável. Assim, você conseguirá ler as informações que estão armazenadas. No exemplo abaixo, ao imprimirmos no console o valor de myCookie, o que será retornado é uma string contendo o nome e o valor do cookie. Quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.

const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com

// E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.

document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:

document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'

// HTML Web Storage provê dois objetos para armazenamento de dados no cliente ( browser da pessoa), no formato de chave-valor de um modo mais intuitivo do que nos Cookies:

// localStorage - salva os dados sem data de expiração . Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // limpa todas as entradas salvas em localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

// sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba ( tab ) ou o navegador ( browser ).

console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

// OBS: Tanto o localStorage quanto o sessionStorage , armazenam dados no formato chave e valor e os valores salvos serão sempre no formato string.

// Isso quer dizer que não podemos armazenar qualquer outro formato? Não exatamente. Existem duas funções que irão nos ajudar a armazenar qualquer tipo de dado: uma vai transformar o dado em uma string JSON.stringify() e a outra vai transformar o dado de volta para o formato original JSON.parse().

const myObj = {
    name: 'Link',
    age: 20,
  };
  
  // Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
  
  localStorage.setItem('myData', JSON.stringify(myObj));
  
  // Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, `myData`, e como segundo parâmetro a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
  
  // Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
  
  const recoveredObject = JSON.parse(localStorage.getItem('myData'));
  
  // Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.
  
  console.log(recoveredObject); // { name: 'Link', age: 20 }

  let organization = {
    name: 'trybe',
    since: 2019,
  };
  
  // A variável 'storage' pode ser localStorage ou sessionStorage
  let storage = localStorage;
  
  storage.setItem('trybe', JSON.stringify(organization));
  let org = JSON.parse(storage.getItem('trybe'));
  console.log(org); // { name: 'trybe', since: 2019 }
  
  let classes = ['2019/set', '2019/oct'];
  storage.setItem('classes', JSON.stringify(classes));
  let cls = JSON.parse(storage.getItem('classes'));
  console.log(cls); // ['2019/set', '2019/oct']


  localStorage.setItem(chave, valor); // Armazena par chave: valor no local storage.
  localStorage.getItem(chave) // Retorna o valor associado à chave;
  localStorage.removeItem(chave); // Remove o par chave: valor;
  localStorage.clear(); // Deleta tudo o que está dentro de local storage.

//   sessionStorage tem os mesmos comandos.

// É muito mais simples utilizar localStorage e sessionStorage do que Cookies , mas o uso de Cookies não é totalmente dispensável.

// Em regra geral, utilizamos Cookies quando precisamos dos dados no cliente ( browser ) e no servidor, pois os Cookies são enviados para o servidor a cada requisição. Caso contrário, utilizamos localStorage e sessionStorage.

// Um bom ponto de atenção para decidir quando você deve usar um ou outro é perguntar a si mesmo sobre a importância da permanência da informação que você vai armazenar.

// <!DOCTYPE html>
// <html lang="pt-br">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Exemplo WebStorage</title>
// </head>
// <body>
//   <header>
//     <h1>Diferenças de armazenamento entre LocalStorage e WebStorage</h1>
//   </header>
//   <main>
//     <section>
//       <h2>Frases armazenadas</h2>
//       <input type="text" id="phrases-input" />
//       <button id="add-button">Adicionar frase</button>
//       <div>
//         <ul id="phrases-list">
//         </ul>
//       </div>
//     </section>
//   </main>
//   <script src="script.js"></script>
// </body>
// </html>

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};



// E o próximo script tem a mesma funcionalidade que o anterior. Mas a diferença se dá no momento em que você fecha a sua aba ou o seu navegador. Lhe encorajamos a experimentar por si só e ver o que acontece.


const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage);

{/* <input></input> uma tag html que permite a interação entre o usuário que está utilizando o site e o código. */}

// `${variável} string` -> permite que uma variável seja usada no interior de uma string. 

