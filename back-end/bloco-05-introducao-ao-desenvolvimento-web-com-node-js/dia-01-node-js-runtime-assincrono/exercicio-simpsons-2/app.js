const fs = require('fs').promises;

const printIdSimpson = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const simpsonsData = JSON.parse(data);
    simpsonsData.forEach(simpson => console.log(`${simpson.id} - ${simpson.name}`));
  } catch(err) {
    console.error("Erro: " + err);
  }
}

const printSimpsonById = async (id) => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const simpsonsData = JSON.parse(data);
    const result = simpsonsData.find(simpson => Number(simpson.id) === id);
    if (!result) throw new Error("Id não encontrado.")
    return result;
  } catch(err) {
    return "printSimpsonById " + err.message;
  }
}

const removeCharacters = async (id1, id2) => {
  try {
    const data = await fs.readFile('./simpsons.json');
    const simpsonsData = JSON.parse(data);
    const result = simpsonsData.filter(simpson => Number(simpson.id) !== id1 && Number(simpson.id) !== id2);
    if (!result) throw new Error('Id não encontrado');
    await fs.writeFile('./simpsons.json', JSON.stringify(result));
  } catch(err) {
    return "removeCharacters" + err.message;
  }
}

const createNewFile = async () => {
  try {
    const data = await fs.readFile('./simpsons.json');
    const simpsonsData = JSON.parse(data);
    const simpsonsToWrite = simpsonsData.filter(simpson => Number(simpson.id) >= 1 && Number(simpson.id) <= 4);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsToWrite));
  } catch(err) {
    console.error(err);
  }
}

// createNewFile();

// removeCharacters(6, 10);

const addCharacter = async (character) => {
  try {
    const data = await fs.readFile('./simpsonFamily.json');
    const simpsonsData = JSON.parse(data);
    simpsonsData.push(character);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsData));
  } catch(err) {
    console.error(err);
  }
}

// addCharacter({"id": "5", "name":"Nelson Muntz"});

const replaceCharacter = async (removedChar, newChar) => {
  try {
    const data = await fs.readFile('./simpsonFamily.json', 'utf8');
    const simpsonsData = JSON.parse(data);
    const filteredArray = simpsonsData.filter(simpson => simpson.name !== removedChar);
    console.log(filteredArray);
    filteredArray.push({"id": String(filteredArray.length + 1), "name": newChar });
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredArray));
  } catch(err) {
    console.error(err);
  }
}

replaceCharacter("Nelson Muntz", "Maggie Simpson");

const main = async (id) => {
  const result = await printSimpsonById(id);
  console.log(result);
}

// main(1);

module.exports = {
  printIdSimpson,
}