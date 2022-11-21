const {readFile, readSimpsonsFamily} = require('./readWriteFile');

const fs = require('fs').promises;

const printIdName = async () => {
  const simpsonsData = await readFile();
  simpsonsData.forEach(simpson => console.log(`${simpson.id} - ${simpson.name}`));
}

const printSimpsonById = async (id) => {
  const simpsonsData = await readFile();
  return new Promise((res, rej) => {
    if (!simpsonsData.some(simpson => simpson.id === id.toString())) rej(`Id não encontrado`);
    res(simpsonsData.find(simpson => simpson.id === id.toString()));
  });
}

const removeIds = async (...id) => {
  try {
    console.log(typeof id);
    const simpsonsData = await readFile();
    const newData = simpsonsData.filter(simpson => !Object.keys(id).includes(Number(simpson.id)));
    const jsonData = JSON.stringify(newData);
    await fs.writeFile('.simpsons.json', jsonData);
  } catch (err) {
    console.log(err);
    return `Error: ${err.message}`;
  }
};

const createSimpsonsFam = async () => {
  try {
    const simpsonsData = await readFile();
    const filteredArray = simpsonsData.filter(simpson => Number(simpson.id) >= 1 && Number(simpson.id) <= 4);
    const json = JSON.stringify(filteredArray);
    await fs.writeFile('./simpsonsFamily.json', json);
  } catch(err) {
    console.log(err);
    return `Error: ${err.message}`;
  }
}

const addMuntz = async () => {
  try {
    const simpsonsData = await readSimpsonsFamily();
    const newData = [...simpsonsData, {id: `${simpsonsData.length + 1}`, name: "Nelson Muntz"}];
    const json = JSON.stringify(newData);
    await fs.writeFile('./simpsonsFamily.json', json);
  } catch(err) {
    console.log(err);
    return `Error: ${err.message}`;
  }
}

const replaceMuntz = async (oldId, newName) => {
  try {
    const simpsonsData = await readSimpsonsFamily();
    simpsonsData.splice(oldId - 1, 1, {id: oldId.toString(), name: newName});
    const json = JSON.stringify(simpsonsData);
    await fs.writeFile('./simpsonsFamily.json', json);
  } catch(err) {
    console.log(err);
    return `Error: ${err.message}`;
  }
};

// printSimpsonById(10)
// .then(simpson => console.log(simpson))
// .catch(error => console.log(error));

// removeIds(10, 6);

// createSimpsonsFam();
// addMuntz();
replaceMuntz(5, "Maggie Simpson");