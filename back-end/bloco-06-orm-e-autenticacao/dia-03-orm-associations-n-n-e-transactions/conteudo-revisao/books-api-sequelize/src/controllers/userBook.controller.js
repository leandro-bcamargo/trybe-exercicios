const userBookService = require('../services/userBook.service');

const getUserBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const userBooks = await userBookService.getUserBooksById(Number(id));
    if (!userBooks) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(userBooks);
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

module.exports = {
  getUserBooksById,
}