const express = require('express');
const postsRouter = require('./routes/postsRouter');

const app = express();

app.use(express.json());
app.use('/posts', postsRouter);

module.exports = app;