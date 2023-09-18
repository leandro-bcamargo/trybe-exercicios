const express = require("express");
const {
  readFile,
  writeFile,
  modifyFile,
  deleteFile,
} = require("./utils/fsFunctions");

const app = express();
app.use(express.json());

app.get("/movies", async (req, res) => {
  const movies = await readFile();

  return res.status(200).json({ movies });
});

app.get("/movies/search", async (req, res) => {
  const { q } = req.query;
  const movies = await readFile();
  const result = movies.filter((movie) => movie.movie.includes(q));

  return res.status(200).json({ result });
});

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movies = await readFile();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie)
    return res.status(404).json({ message: `Movie with id ${id} not found` });

  return res.status(200).json({ movie });
});

app.post("/movies", async (req, res) => {
  const movieData = req.body;
  await writeFile(movieData);

  return res.status(201).json({ message: "Movie added successfully" });
});

app.put("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movieData = req.body;
  const movies = await readFile();
  const movieToUpdate = movies.find((movie) => movie.id == id);
  if (!movieToUpdate)
    return res
      .status(404)
      .json({ message: `Movie with id ${id} not found in database` });

  await modifyFile(Number(id), movieData);

  return res.status(200).json({ message: "Movie modified successfully" });
});

app.delete("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteFile(Number(id));

    return res.status(204).json({ message: "Movie deleted successfully" });
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
});

module.exports = app;
