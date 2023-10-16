const { Op, fn, col } = require('sequelize');
const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [
      [fn('lower', col('title')), 'ASC']
    ]
  });

  return books;
}

const getById = async (id) => {
  const { dataValues: book } = await Book.findOne({
    where: { id }
  });

  return book;
}

const create = async (bookData) => {
  console.log('Book:', Book);
  const { dataValues: newBook } = await Book.create({
    ...bookData,
  });

  return newBook;
}

const update = async (id, bookData) => {
  const [hasUpdated] = await Book.update({
    ...bookData
  }, {
    where: { id }
  });

  return hasUpdated
}

const remove = async (id) => {
  const hasRemoved = await Book.destroy({
    where: { id }
  });

  return hasRemoved
}

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: {
      author: {
        [Op.like]: `%${author}%`,
      }
    },
    order: [
      [fn('lower', col('title')), 'ASC']
    ]
  });

  return books;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}