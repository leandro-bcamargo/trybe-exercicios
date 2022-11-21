const express = require('express');
const {writeFile, getFilmById, getAllFilms, addNewFilm, updateInfo, deleteMovie, searchMovie} = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const {id} = req.params;
  const film = await getFilmById(id);
  res.status(200).json({film});
});

app.get('/movies', async (req, res) =>{
  const {q} = req.query;
  const searchedMovie = await searchMovie(q);
  res.status(200).json({searchedMovie});
})

app.get('/movies', async (req, res) => {
  const films = await getAllFilms();
  res.status(200).json({films});
});

app.post('/movies', async (req, res) => {
  const body = req.body;
  await addNewFilm(body);
  res.status(200).json({newFilm: body});
})

app.put('/movies/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  await updateInfo(id, body);
  res.status(200).json({body});
})

app.delete('/movies/:id', async (req, res) => {
  const {id} = req.params;
  await deleteMovie(id);
  res.status(200).json(`Filme de id ${id} deletado`);
})


module.exports = app;