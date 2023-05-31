const express = require('express');

const app = express();

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

app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
  const {id} = req.params;
  const selectedActivity = activities.find((activity) => activity.id === Number(id));
  res.status(200).json({selectedActivity})

})

app.get('/myActivities', (req, res) =>{
  res.status(200).json({activities});
})

app.get('/filter/myActivities', (req, res) => {
  const {status} = req.query;
  let filteredActivities;
  if (status) {
    filteredActivities = activities.filter(activity => activity.status === status);
  } else {
    filteredActivities = activities;
  }
  res.status(200).json({filteredActivities})
})

app.get('/search/myActivities', (req, res) => {
  const {q} = req.query;
  let filteredActivities;
  if (q) {
    filteredActivities = activities.filter(activity => activity.description.includes(q));
  } else {
    filteredActivities = [];
  }
  res.status(200).json({filteredActivities});
})

module.exports = app;