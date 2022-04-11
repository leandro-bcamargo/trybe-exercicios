const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.

function authorBornIn1947(array) {
  // escreva aqui o seu código
  return array.find((book) => {
    return book.author.birthYear === 1947;
  })
}
console.log(authorBornIn1947(books));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function smallerName(array) {
  let nameBook;
  let bookLength = books[0].name.length;
  // escreva aqui o seu código
  array.forEach((book) => {
    if (book.name.length < bookLength) {
      bookLength = book.name.length;
      nameBook = book;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const findBook = (array) => {
  return array.find((book) => {
    return book.name.length === 26;
  })
}

console.log(findBook(books));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const booksOrderedByReleaseYearDesc = (array) => {
  return array.sort((bookA, bookB) => {
    return bookB.releaseYear - bookA.releaseYear;
  });
}

console.log(booksOrderedByReleaseYearDesc(books));

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
  // escreva seu código aqui
  return array.every((book) => {
    return book.author.birthYear > 1900 && book.author.birthYear < 2000;
  })
}

console.log(everyoneWasBornOnSecXX(books));

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => {
    return book.releaseYear > 1980 && book.releaseYear < 1990
  })
}

console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

// const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((bookA) => {
    return !books.some((bookB) => {
     bookA.author.name !== bookB.author.name &&  bookA.author.birthYear === bookB.author.birthYear 
    })
  })
}

console.log(authorUnique());




