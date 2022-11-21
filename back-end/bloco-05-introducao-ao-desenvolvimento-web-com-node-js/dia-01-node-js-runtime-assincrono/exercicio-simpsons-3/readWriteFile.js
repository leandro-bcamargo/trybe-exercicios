const fs = require('fs').promises;

const readFile = async () => {
  try {
    const data = await fs.readFile('./simpsons.json');
    const json = JSON.parse(data);
    return json;
  } catch(err) {
    console.log(err);
    return (`Error: ${err.message}`);
  }
}

const readSimpsonsFamily = async () => {
  try {
    const data = await fs.readFile('./simpsonsFamily.json');
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.log(error);
    return `Error: ${error.message}`;
  }
}

// const writeFile = async (newData) => {
//   try {
//     const oldData = await readFile();
//     const json = JSON.stringify(oldData);
//     await fs.writeFile('./simpsons.json', json); 
//   } catch (error) {
    
//   }
// }

module.exports = {
  readFile,
  readSimpsonsFamily,
}