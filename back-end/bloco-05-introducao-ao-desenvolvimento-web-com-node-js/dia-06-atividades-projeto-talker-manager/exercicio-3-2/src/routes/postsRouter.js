const express = require('express');
const verifyId = require('../middlewares/verifyId');
const verifyPosts = require('../middlewares/verifyPosts');
const router = express.Router();
const {getAllPosts} = require('../utils/readWriteFile');




router.get('/', verifyPosts, async (req, res) => {
  const allPosts = await getAllPosts();
  res.status(200).json({posts: allPosts});
})

router.get('/:id', verifyId, (req, res) => {
  const post = req.body;
  const {id} = req.params;
  res.status(200).json({id: Number(id), ...post});
});

module.exports = router;