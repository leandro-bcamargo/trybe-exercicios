const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf-8');
    return JSON.parse(content);
  } catch(err) {
    return null;
  }
}

const writeContentFile = async (path, content) => {
  try {
    const arrContent = await readContentFile(path) || [];
    arrContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrContent));
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

module.exports = {
  readContentFile,
  writeContentFile,
}