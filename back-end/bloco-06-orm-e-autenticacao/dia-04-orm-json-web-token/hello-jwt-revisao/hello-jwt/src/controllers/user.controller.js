const userService = require('../services/user.services');

const getUser = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json(user);

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = { getUser }