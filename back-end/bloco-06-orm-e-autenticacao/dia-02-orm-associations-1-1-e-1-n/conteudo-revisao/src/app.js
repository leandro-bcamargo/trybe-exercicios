const employeeController = require('./controllers/employee.controller');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/employees/:id', employeeController.getById);
app.get('/employees', employeeController.getAll);

module.exports = app;