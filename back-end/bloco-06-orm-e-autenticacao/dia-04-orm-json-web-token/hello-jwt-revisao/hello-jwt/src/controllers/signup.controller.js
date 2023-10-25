const userService = require('../services/user.services');
const userModel = require('../models/user.model');

const signup = async (req, res) => {
  const { username } = req.body;
  const user = await userService.getByUsername(username);

  if (user) return res.status(409).json({ "error": { "message": "user already exists" } })

  const users = await userModel.getAll();

  let admin;

  if (Math.floor(Math.random() * 100) > 50) admin = true;
  else admin = false;

  await userModel.writeAll(users, {...req.body, admin});
}