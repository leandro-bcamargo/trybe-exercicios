const express = require("express");

const app = express();
app.use(express.json());

const teams = [
  {
    id: 1,
    name: "São Paulo Futebol Clube",
    initials: "SPF",
  },
  {
    id: 2,
    name: "Clube Atlético Mineiro",
    initials: "CAM",
  },
];

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));

app.get("/teams", (req, res) => res.status(200).json({ teams }));

app.get("/teams/:id", (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));

  return res.status(200).json({ team });
});

app.post("/teams", (req, res) => {
  const team = {
    ...req.body,
    id: Number(req.body.id),
  };
  teams.push(team);
  return res.status(201).json({ message: "Team created successfully!" });
});

app.put("/teams/:id", (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  const teamToUpdate = teams.find((team) => team.id === Number(id));

  if (!teamToUpdate) {
    return res.status(404).json({ message: "Team not found!" });
  }

  Object.assign(teamToUpdate, { name, initials });

  return res.status(200).json({ message: "Team updated successfully!" });
});

app.delete("/teams/:id", (req, res) => {
  const { id } = req.params;
  const index = teams.findIndex((team) => team !== Number(id));
  if (index === -1) {
    return res.status(401).json({ message: `Team with id ${id} not found` });
  }
  teams.splice(index, 1);

  return res.status(200).json({ message: "Team deleted successfully!" });
});

module.exports = app;
