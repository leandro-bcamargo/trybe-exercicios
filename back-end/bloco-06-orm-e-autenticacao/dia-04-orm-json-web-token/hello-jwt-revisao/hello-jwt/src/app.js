const express = require('express');
const cors = require('cors');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const secretController = require('./controllers/secret.controller');
const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const { validateLogin } = require('./middlewares/validateLogin');
const { validateJWT } = require('./auth/validateJWT');
const { validateAdmin } = require('./middlewares/validateAdmin');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/ping', controllers.ping);
app.post('/login', validateLogin, loginController.login);
app.get('/users/me', validateLogin, validateJWT, userController.getUser);
app.get('/top-secret', validateLogin, validateJWT, validateAdmin, secretController.getTopSecret);

app.use(middlewares.error);

module.exports = app;
