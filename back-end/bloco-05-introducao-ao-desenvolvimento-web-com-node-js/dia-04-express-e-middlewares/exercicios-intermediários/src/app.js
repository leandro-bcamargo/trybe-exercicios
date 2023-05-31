const express = require('express');
const existingId = require('./middlewares/existingId');
const validateTeam = require('./middlewares/validateTeam');
const apiCredentials = require('../src/middlewares/apiCredentials');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
// require no nosso novo router
const teamsRouter = require('./routes/teamsRouter');

const app = express();

app.use(express.json());
app.use(apiCredentials);
// Em requisições GET, procura arquivos usando como raiz o diretório aqui especificado: por isso, esse diretório não aparece na requisição - fica subentendido.
app.use(express.static('./images'));
app.use(morgan('dev'));
app.use(cors());
// monta o router na rota /teams (1)
app.use('/teams', teamsRouter);


app.use((req, res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
})

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];


app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    res.json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.sendStatus(401);
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);
});


app.use((req, res) => res.sendStatus(404));

module.exports = app;