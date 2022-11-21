const express = require('express');
const router = express.Router();
const fetchAPI = require('../helpers/fetchAPI.js');
const validateToken = require('../middlewares/validateToken');

router.get('/price', validateToken, async (req, res) => {
  const data = await fetchAPI();
  res.status(200).json(data);
})

module.exports = router;