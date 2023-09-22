// src/app.js

const express = require("express");
const validateId = require("./middlewares/validateId");
const teams = require("./utils/teams");
const validateTeam = require("./middlewares/validateTeam");
const apiCredentials = require("./middlewares/apiCredentials");

require("express-async-errors");
const app = express();

let nextId = 3;

app.use(express.json());
app.use(apiCredentials);

app.get("/teams", (req, res) => res.json(teams));

app.get("/teams/:id", validateId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  return res.status(200).json({ team });
});

app.post("/teams", validateTeam, (req, res) => {
  if (
    !req.teams.teams.includes(req.body.sigla) &&
    teams.every((t) => t.sigla !== req.body.sigla)
    )
    return res
      .status(422)
      .json({ message: "Já existe um time com essa sigla" });
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put("/teams/:id", validateId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete("/teams/:id", validateId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
});

module.exports = app;
