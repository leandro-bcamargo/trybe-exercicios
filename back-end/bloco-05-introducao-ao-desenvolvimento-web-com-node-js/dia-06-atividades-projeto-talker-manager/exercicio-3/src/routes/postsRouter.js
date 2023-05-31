const express = require('express');
const verifyId = require('../middlewares/verifyId');
const routeNotFound = require('../middlewares/routeNotFound');

const router = express.Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

router.get('/', routeNotFound, (req, res) => {
  res.status(200).json({posts});
})

router.get('/:id', verifyId, routeNotFound, (req, res) => {
  const {id} = req.params;
  const post = posts.filter(item => item.id === Number(id));
  console.log(post);
  res.status(200).json({posts: post});
})

module.exports = router;