const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities/:id', (req, res) => {
  const {id} = req.params;
  const searchedActivity = activities.find(activity => activity.id === Number(id));
  res.status(200).json({activity: searchedActivity});
});

app.get('/myActivities', (req, res) => {
  const allActivities = activities;
  res.status(200).json({activities: allActivities});
})

app.get('/filter/myActivities', (req, res) => {
  const {status} = req.query;
  const filteredActivities = activities.filter(activity => activity.status === status);
  console.log(filteredActivities);
  res.status(200).json({activities: filteredActivities});
})

app.get('/search/myActivities', (req, res) => {
  const {q} = req.query;
  const filteredActivities = activities.filter(activity => activity.description.toLowerCase().includes(q));
  res.status(200).json({activities: filteredActivities});
});

module.exports = app;

