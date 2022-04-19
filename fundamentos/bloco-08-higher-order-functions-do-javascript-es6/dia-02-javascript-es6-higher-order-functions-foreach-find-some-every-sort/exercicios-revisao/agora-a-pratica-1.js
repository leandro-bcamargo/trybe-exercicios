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
// Dica: use a função find .

function authorBornIn1947() {
  // escreva aqui o seu código
  const bookElement = books.find((book) => book.releaseYear === 1928);
  return bookElement.author.name;
}


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

// function smallerName() {
//   let bookLength = books.reduce((shortestBook, book) => {
//     if (book.name.length < shortestBook) {
//       return book.name.length;
//     }
//     return shortestBook;
//   }, books[0].name.length);
//   let bookName = books.find((book) => book.name.length === bookLength);
//   return bookName.name;
// }

// console.log(smallerName());

function smallerName() {
  let counter = books[0].name;
  books.forEach((book) => {
    if (book.name.length < counter.length) {
      counter = book.name;
    }
  });
  return counter;
}

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const find26 = () => {
  return books.find((book) => {
    return book.name.length === 26;
  })
};

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  const bookList = books.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  });
  return bookList;
}

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every((book) => {
    return (book.author.birthYear > 1900 && book.author.birthYear < 2000)
  })
}

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  const truthValue = books.some((book) => {
    return (book.releaseYear >= 1980 && book.releaseYear < 1990)
  })
  return truthValue;
}

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
  let answer = true;
  books.forEach((book1) => {
    const bornSameYear = books.filter((book2) => {
      return book2.author.birthYear === book1.author.birthYear;
    })
    if (bornSameYear.length > 1) {
      answer = false;
    }
  })
  return answer;
}

console.log(authorUnique());




