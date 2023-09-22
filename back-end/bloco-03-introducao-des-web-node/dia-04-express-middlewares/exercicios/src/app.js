const express = require("express");
const routers = require("./routers");
const errorMiddleware = require("./middlewares/errorMiddleware");
require("express-async-errors");

const app = express();
app.use(express.json());
app.use(routers);
app.use(errorMiddleware);

module.exports = app;
