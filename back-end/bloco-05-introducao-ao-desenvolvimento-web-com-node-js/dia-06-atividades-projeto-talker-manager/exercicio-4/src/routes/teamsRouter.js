const express = require('express');
const validateCountry = require('../middlewares/validateCountry');
const validateInitials = require('../middlewares/validateInitials');
const validateName = require('../middlewares/validateName');
const {readContentFile, writeContentFile} = require('../helpers/readWriteFile')

const router = express.Router();
const FILE_PATH = './teams.json';

router.post('/', validateCountry, validateInitials, validateName, async (req, res) => {
  const newTeam = {...req.body, initials: req.body.initials.toUpperCase()};
  const team = await writeContentFile(FILE_PATH, newTeam);
  res.status(200).json(team)
})

module.exports = router; 