const {sequelize, dataTypes, checkModelName, checkPropertyExists} = require('sequelize-test-helpers');

const BookModel = require('../../models/BooksModel');

describe('O model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('Possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('Possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ["title", "author", "pageQuantity", "publisher"].forEach(checkPropertyExists(book));
  })
})