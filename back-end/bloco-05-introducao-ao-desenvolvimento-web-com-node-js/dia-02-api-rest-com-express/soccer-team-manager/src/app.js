// src/app.js

// const express = require('express');

// const app = express();

// app.use(express.json());

const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json({ updatedTeam });
});

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const team = teams.find((element) => element.id === Number(id));
  res.status(200).json({ team });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const index = teams.findIndex((element) => element.id === Number(id));
  const removedTeam = teams.splice(index, 1);
  res.status(200).end();
});

module.exports = app;