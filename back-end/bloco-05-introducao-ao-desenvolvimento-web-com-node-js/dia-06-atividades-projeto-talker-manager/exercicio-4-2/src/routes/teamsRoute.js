const express = require('express');
const verifyCountry = require('../middlewares/verifyCountry');
const verifyInitials = require('../middlewares/verifyInitials');
const verifyName = require('../middlewares/verifyName');
const route = express.Router();
const {addTeam} = require('../utils/readWriteFile');

route.post('/', verifyCountry, verifyInitials, verifyName, async (req, res) => {
  const team = req.body;
  await addTeam(team);
  res.status(201).json({team})
})

module.exports = route;
