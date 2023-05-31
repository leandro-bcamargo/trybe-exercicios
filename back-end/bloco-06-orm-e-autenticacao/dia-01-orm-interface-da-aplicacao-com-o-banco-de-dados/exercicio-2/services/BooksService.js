const {Book} = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']]
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
}

const create = async ({title, author, pageQuantity, publisher}) => {
  const createdBook = await Book.create({title, author, pageQuantity, publisher});

  console.log(createdBook);
  return createdBook;
};

const update = async (id, {title, author, pageQuantity, publisher}) => {
  const [updatedBook] = await Book.update({title, author, pageQuantity, publisher}, {
    where: {id},
  });

  return updatedBook;
};

const remove = async (id) => {
  const removedBook = await Book.destroy({
    where: {id},
  });

  return removedBook;
}

const getByAuthor = async (author) => {
  const book = await Book.findAll({
    where: {author}, 
    order: [['title', 'ASC']]
  });

  console.log(book);
  return book;
}



module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}