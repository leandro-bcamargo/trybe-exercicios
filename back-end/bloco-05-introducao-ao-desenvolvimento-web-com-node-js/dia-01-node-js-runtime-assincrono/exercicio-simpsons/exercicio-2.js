const fs = require('fs').promises;

const getSimpsonById = async (id) => {
  const data = await fs.readFile('./simpsons.json');
  const simpsonsData = JSON.parse(data);
  const chosenSimpson = simpsonsData.find(simpson => Number(simpson.id) === id);
  if (!chosenSimpson) throw new Error("Id não encontrado");
  return chosenSimpson;
}

const main = async () => {
  const result = await getSimpsonById(5);
  console.log(result);
}

main();