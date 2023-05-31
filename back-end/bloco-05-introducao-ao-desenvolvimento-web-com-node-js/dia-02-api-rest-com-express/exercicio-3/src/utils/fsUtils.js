const fs = require('fs').promises;
const path = require('path');

const readFile = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../movies.json'));
    const json = JSON.parse(data);
    return json;
  } catch(err) {
    console.error(err);
  }
}

const writeFile = async (newFilm) => {
  try {
    const movies = await getAllFilms();
    const newFilms = [...movies, {id: movies.length + 1, ...newFilm}];
    const json = JSON.stringify(newFilms);
    await fs.writeFile(path.resolve(__dirname, '../movies.json'), json);
  } catch (error) {
    console.error(error);
  }
}

const getFilmById = async (id) => {
  try {
    const filmData = await readFile();
    const film = filmData.find(film => film.id === Number(id));
    return film;
  } catch(err) {
    console.error(err);
  }
}

const getAllFilms = async () => {
  try {
    const filmData = await readFile();
    return filmData;
  } catch(err) {
    console.error(err);
  }
}

const addNewFilm = async (newFilm) => {
  try {
    await writeFile(newFilm);
  } catch (error) {
    console.error(error);
  }
}

const updateInfo = async (id, newInfo) => {
  try {
    const movieData = await readFile();
    const index = movieData.findIndex(movie => movie.id === Number(id));
    movieData.splice(index, 1, {id: Number(id), ...newInfo});
    const json = JSON.stringify(movieData);
    await fs.writeFile(path.resolve(__dirname, '../movies.json'), json);
  } catch (error) {
    console.error(error);
  }
}

const deleteMovie = async (id) => {
  try {
    const movieData = await getAllFilms();
    const filteredMovies = movieData.filter(movie => movie.id !== Number(id));
    const json = JSON.stringify(filteredMovies);
    await fs.writeFile(path.resolve(__dirname, '../movies.json'), json);
  } catch (error) {
    console.error(error);
  }
}

const searchMovie = async (query) => {
  try {
    const films = await getAllFilms();
    const film = films.find(film => film.movie.toLowerCase().includes(query));
    if (!film) return [];
    return film;
  } catch (error) {
    console.error(error.message);
  }
}


module.exports = {
  readFile,
  getFilmById,
  getAllFilms,
  addNewFilm,
  updateInfo,
  deleteMovie,
  searchMovie,
}