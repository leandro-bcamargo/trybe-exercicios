const UserService = require('../services/user.service');

const httpStatus = {
  error500: 'Something went wrong',
  error404: 'User not found'
}

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: httpStatus.error500 });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(Number(id));

    if (!user) return res.status(404).json(httpStatus.error404);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: httpStatus.error500 })
  }
}

const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const user = await UserService.getByIdAndEmail(Number(id), email);

    if (!user) return res.status(404).json(httpStatus.error404);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: httpStatus.error500 });
  }
}

const createUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await UserService.createUser(fullName, email);

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: httpStatus.error500 })
  }
}


const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email } = req.body;

    const updatedUser = await UserService.updateUser(Number(id), fullName, email);

    if (!updatedUser) return res.status(404).json(httpStatus.error404);

    return res.status(204).json(updatedUser);

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: httpStatus.error500 })
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUser(Number(id));

    if (!deletedUser) return res.status(404).json({ message: httpStatus.error404 })

    return res.status(200).json(deletedUser);

  } catch (error) {
    console.log(error.message);
    return res.status(500).json(httpStatus.error500);
  }
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
}
