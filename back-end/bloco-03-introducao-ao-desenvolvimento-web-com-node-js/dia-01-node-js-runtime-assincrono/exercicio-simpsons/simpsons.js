const fs = require('fs').promises;

const readSimpsonsData = async () => {
  try {
    const data = await fs.readFile('./simpsons.json');
    const simpsonsData = JSON.parse(data);
    return simpsonsData;
  } catch(err) {
    console.log("Error: " + err)
  }
}

const showAllChars = async () => {
  const simpsonsData = await readSimpsonsData();
  const idName = simpsonsData.forEach(({id, name}) => console.log(`${id} - ${name}`))
  return idName;
}

showAllChars();

const charData = async (id) => {
  const simpsonsData = await readSimpsonsData();
  const promise = new Promise((res, rej) => {
    const character = simpsonsData.find(char => Number(char.id) === id);
    if (!character) rej(new Error('Character not found'));
    res(character);
  })
  return promise;
}

charData(11)
.then(char => console.log(char))
.catch(err => console.log("Error: " + err.message));

