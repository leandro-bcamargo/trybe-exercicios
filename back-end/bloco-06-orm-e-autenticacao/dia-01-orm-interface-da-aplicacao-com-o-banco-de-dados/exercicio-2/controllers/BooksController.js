const BooksService = require('../services/BooksService');

const getAll = async (req, res) => {
  const {author} = req.query;
  try {
    if (author) {
      const books = await BooksService.getByAuthor(author);
      if (!books) return res.status(404).json({message: 'Author not found'});
      return res.status(200).json(books);
    }
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({message: "Livros não encontrados"})
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({message: 'Book not found'})
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'There was an error'});
  }
};

const create = async (req, res) => {
  const {title, author, pageQuantity, publisher} = req.body;
  try {
    const createdBook = await BooksService.create({title, author, pageQuantity, publisher});
    if (!createdBook) return res.status(404).json({message: 'Book not found'});
    return res.status(201).json({message: 'Book created'})
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'There was an error'});
  }
}

const update = async (req, res) => {
  const {id} = req.params;
  const {title, author, pageQuantity, publisher} = req.body;
  try {
    const updatedBook = await BooksService.update(id, {title, author, pageQuantity, publisher});
    if (!updatedBook) return res.status(404).json({message: 'Book not found'});
    return res.status(201).json({message: 'Book updated!'});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'There was an error'});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    const removedBook = await BooksService.remove(id);
    if (!removedBook) return res.status(404).json("BOok not found");
    return res.status(200).json({message: 'Book removed'});
  } catch (error) {
    return res.status(500).json({message: 'There was an error'});
  }
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}