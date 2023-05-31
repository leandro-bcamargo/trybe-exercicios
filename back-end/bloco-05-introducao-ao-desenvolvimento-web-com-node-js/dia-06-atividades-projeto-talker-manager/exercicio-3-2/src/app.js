const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const app = express();
const postsRouter = require('./routes/postsRouter');

app.use(express.json());
app.use('/posts', postsRouter);
app.use('*', (req, res, next) => next({statusCode: 404, message: "Opsss, route not found!" }));
app.use(errorMiddleware);

module.exports = app;