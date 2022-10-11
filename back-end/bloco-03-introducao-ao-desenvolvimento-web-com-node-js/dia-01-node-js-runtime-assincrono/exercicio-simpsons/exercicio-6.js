const fs = require('fs').promises;

const replaceByMaggie = async () => {
  const data = await fs.readFile('./simpsonsFamily.json');
  const simpsonsData = JSON.parse(data);
  const index = simpsonsData.findIndex(({name}) => name === "Nelson Muntz");
  const meggie = {
    "id": "5",
    "name": "Maggie Simpson"
  }
  simpsonsData.splice(index, 1, meggie);
  return fs.writeFile('./simpsonsFamily2.json', JSON.stringify(simpsonsData));
}

const data = async () => {
  await replaceByMaggie();
}

data();