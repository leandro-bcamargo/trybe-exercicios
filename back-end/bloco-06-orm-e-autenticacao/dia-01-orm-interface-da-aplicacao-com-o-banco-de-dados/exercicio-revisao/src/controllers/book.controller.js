const bookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    if (author) {
      const books = await bookService.getByAuthor(author);
      if (!books.length) return res.status(404).json({ message: 'Books not found' })
      return res.status(200).json(books);
    }

    const books = await bookService.getAll();

    return res.status(200).json(books);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(Number(id));
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const create = async (req, res) => {
  try {
    const bookData = req.body;
    const newBook = await bookService.create(bookData);
    if (!newBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(201).json(newBook);

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = req.body;
    const hasUpdated = await bookService.update(Number(id), bookData);
    if (!hasUpdated) return res.status(404).json({ message: 'Book not found' })

    return res.status(200).json({ message: 'Book updated successfully' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const hasRemoved = await bookService.remove(Number(id));
    if (!hasRemoved) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book removed successfully' });

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const findByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const books = await bookService.getByAuthor(author);
    if (!books) res.status(404).json({ message: 'Books not found' });

    return res.status(200).json(book);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  findByAuthor,
}