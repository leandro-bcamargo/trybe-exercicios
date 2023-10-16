const { User } = require('../models')

const getAll = async () => {
  const users = await User.findAll();

  return users;
}

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
}

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({
    where: {
      id,
      email,
    }
  })

  return user;
}

const createUser = async (fullName, email) => {
  const { dataValues: newUser } = await User.create({
    fullName,
    email,
  });

  return newUser;
}

const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update({
    fullName, email
  }, { where: { id } });

  return updatedUser;
}

const deleteUser = async (id) => {
  const deletedUser = await User.destroy({
    where: {
      id,
    }
  });

  console.log('deletedUser:', deletedUser);

  return deletedUser;
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
}