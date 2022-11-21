const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const teamsRoute = require('./routes/teamsRoute');

const app = express();

app.use(express.json());
app.use('/teams', teamsRoute);
app.use(errorMiddleware); 

module.exports = app;