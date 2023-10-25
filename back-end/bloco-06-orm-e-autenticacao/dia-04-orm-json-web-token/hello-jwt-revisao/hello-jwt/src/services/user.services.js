const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')

const getAll = async () => {
  const users = await userModel.getAll();

  return users;
}

const getByUsername = async (username) => {
  const user = await userModel.getByUsername(username);

  return user;
}

const create = async (username, password) => {
  const user = await userService.getByUsername(username);

  if (user) return res.status(409).json({ "error": { "message": "user already exists" } })

  let admin;

  if (Math.floor(Math.random() * 100) > 50) admin = true;
  else admin = false;

  await userModel.create({ username, password, admin });

  return { username, admin };
}

const login = async (username, password, admin = false) => {
  secret = process.env.JWT_SECRET;
  if (username === 'admin' && password !== 's3nh4S3gur4???') return {
    error: {
      message: 'Invalid username or password',
      code: 'invalidCredentials',
    },
  }

  const isAdmin = (admin || username === 'admin' && password === 's3nh4S3gur4???');

  const payload = {
    username,
    admin: isAdmin,
  }

  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1h',
  }

  const token = jwt.sign(payload, secret, jwtConfig);

  return { token }
}

module.exports = {
  getAll,
  getByUsername,
  create,
  login,
}