const express = require('express');
const generateToken = require('../helpers/generateToken');
const validateSignup = require('../middlewares/validateSignup');

const router = express.Router();

router.post('/', validateSignup, (req, res) => {
  const token = generateToken();
  res.status(200).json({token});
})

module.exports = router;