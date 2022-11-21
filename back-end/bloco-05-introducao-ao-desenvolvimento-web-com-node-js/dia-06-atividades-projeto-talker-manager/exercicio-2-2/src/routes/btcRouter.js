const express = require('express');
const validateToken = require('../middlewares/validateToken');
const fetchAPI = require('../utils/fetchAPI');
const router = express.Router();

router.get('/price', validateToken, async (req, res) => {
  const APIreturn = await fetchAPI();
  res.status(200).json({APIreturn}); 
})

module.exports = router;