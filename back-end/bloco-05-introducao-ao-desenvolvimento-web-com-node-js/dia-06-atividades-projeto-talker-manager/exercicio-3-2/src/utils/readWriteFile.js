const fs = require('fs').promises;
const {join} = require('path');
const CURRENT_PATH = '../posts.json';

const readFile = async () => {
  try {
    const fileContent = await fs.readFile(join(__dirname, CURRENT_PATH));
    const jsObject = JSON.parse(fileContent);
    return jsObject.posts;
  } catch(err) {
    console.error(err.message);
  }
}

const getAllPosts = async () => {
  const allPosts = await readFile();
  return allPosts;
}

module.exports = {getAllPosts};