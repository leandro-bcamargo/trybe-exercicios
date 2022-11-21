const express = require('express');
const validateDescription = require('./middlewares/validateDescription');
const validateName = require('./middlewares/validatePrice');
const validatePrice = require('./middlewares/validateName');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateRating = require('./middlewares/validateRating');
const validatePassword = require('./middlewares/validatePassword');
const validateEmail = require('./middlewares/validateEmail');
const validateFirstName = require('./middlewares/validateFirstName');
const validatePhone = require('./middlewares/validatePhone');
const randomBytes = require('./helper-functions/randomBytes');
const validateAuthorization = require('./middlewares/validateAuthorization');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, validateDescription, validateCreatedAt, validateDifficulty, validateName, validatePrice, validateRating, validateAuthorization, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
})

app.post('/signup', validatePassword, validateEmail, validateFirstName, validatePhone, (req, res) => {
  const token = randomBytes();
  res.status(200).json({ token });
})

module.exports = app;