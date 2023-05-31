const bookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Ocorreu um erro.'})
  }
};

const getById = async (req, res) => {
  const {id} = req.params
  try {
    const book = await bookService.findById(id);
    if (!book) return res.status(404).json({message: 'Book not found'});
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Houve um erro'});
  }
};

const createBook = async (req, res) => {
  const {title, author, pageQuantity} = req.body;
  try {
    const newBook = await bookService.createBook({title, author, pageQuantity});
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Houve um erro'})
  }
};

const updateBook = async (req, res) => {
  const {title, author, pageQuantity} = req.body;
  const {id} = req.params;
  try {
    const updatedBook = await bookService.updateBook(id, {title, author, pageQuantity});
    if (!updatedBook) return res.status(404).json({message: 'Book not found!'});
    return res.status(200).json({message: 'Book updated!'});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Houve um erro'});
  }
};

const removeBook = async (req, res) => {
  const {id} = req.params;
  try {
    const removedBook = await bookService.removeBook(id);
    if (!removedBook) return res.status(404).json({message: 'Book not found'});
    return res.status(200).json({message: 'Book removed'})
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Houve um erro'});
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
}