const express = require('express');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');
const validateSignup = require('./middlewares/validateSignup');
const generateToken = require('./helperFunctions/generateToken');
const validateToken = require('./middlewares/validateToken');

const app = express();

app.use(express.json());

app.post('/activities', validateToken, validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
})

app.post('/signup', validateSignup, (req, res) => {
  const tokenAleatorio = generateToken();
  res.status(200).json({"token": tokenAleatorio});
})

module.exports = app;