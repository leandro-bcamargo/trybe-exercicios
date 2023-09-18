const fs = require("fs").promises;
const path = require("path");
const FILEPATH = "../files/movies.json";

class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

async function readFile() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, FILEPATH), "utf-8");
    const movies = JSON.parse(data);
    return movies;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function writeFile(movieData) {
  try {
    const data = await fs.readFile(path.resolve(__dirname, FILEPATH), "utf-8");
    const movies = JSON.parse(data);
    const movieDataWithId = {
      id: movies.length ? Math.max(...movies.map((movie) => movie.id)) + 1 : 1,
      ...movieData,
    };
    movies.push(movieDataWithId);
    const newMovies = JSON.stringify(movies);
    await fs.writeFile(path.resolve(__dirname, FILEPATH), newMovies);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function modifyFile(id, fileData) {
  try {
    const data = await fs.readFile(path.resolve(__dirname, FILEPATH), "utf-8");
    const dataArr = JSON.parse(data);
    const newData = dataArr.reduce((films, curr_film) => {
      if (curr_film.id === id) {
        return [
          ...films,
          {
            ...curr_film,
            ...fileData,
          },
        ];
      }
      return [...films, curr_film];
    }, []);
    const newDataStr = JSON.stringify(newData);
    await fs.writeFile(path.resolve(__dirname, FILEPATH), newDataStr);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function deleteFile(id) {
  try {
    const data = await fs.readFile(path.resolve(__dirname, FILEPATH), "utf-8");
    const dataArr = JSON.parse(data);
    const indexToDelete = dataArr.findIndex((movie) => movie.id === id);
    if (indexToDelete === -1)
      throw new CustomError(404, `Id ${id} not found in database`);
    dataArr.splice(indexToDelete, 1);
    const dataStr = JSON.stringify(dataArr);
    await fs.writeFile(path.resolve(__dirname, FILEPATH), dataStr);
  } catch (error) {
    if (error.statusCode) throw error;
    throw new Error(error.message);
  }
}

module.exports = {
  readFile,
  writeFile,
  modifyFile,
  deleteFile,
};
