const express = require('express');
const btcRouter = require('./routes/btcRouter');

const app = express();

app.use(express.json());
app.use('/btc', btcRouter);

module.exports = app;