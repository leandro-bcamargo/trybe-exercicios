const { writeFile } = require('fs');

const fs = require('fs').promises;

const createSimpsonFamily = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsData = JSON.parse(data);
  const ids = [1, 2, 3, 4]
  const filteredSimpsons = simpsonsData.filter(({id}) => ids.includes(Number(id)));
  console.log(filteredSimpsons);
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(filteredSimpsons));
}

const main = async () => {
  const result = await createSimpsonFamily();
}

main();