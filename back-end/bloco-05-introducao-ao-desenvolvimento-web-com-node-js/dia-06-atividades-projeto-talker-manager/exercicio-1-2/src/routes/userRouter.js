const express = require('express');
const {validateEmail, validatePassword, validateUsername} = require('../middlewares/');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/register', validateEmail, validatePassword, validateUsername, (req, res) => {
  res.status(201).json({ "message": "user created" });
})

router.post('/login', validateEmail, validatePassword, (req, res) => {
  const token = generateToken();
  res.status(201).json({token});
})

module.exports = router;