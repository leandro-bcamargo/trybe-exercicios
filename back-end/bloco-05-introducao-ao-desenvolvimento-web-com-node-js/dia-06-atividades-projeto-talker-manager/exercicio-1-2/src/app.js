const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use('/user', userRouter);


module.exports = app;