const express = require('express');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateCreatedAt = require ('../middlewares/validateCreatedAt');
const validateDescription = require ('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateRating = require('../middlewares/validateRating');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateDescription, validateName, validatePrice, validateCreatedAt, validateDifficulty, validateRating, validateToken,  (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = router;
