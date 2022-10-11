const fs = require('fs').promises;

const filterSimpsons = async () => {
  const data = await fs.readFile('simpsons.json', 'utf-8');
  const simpsonsData = JSON.parse(data);
  const filteredSimpsons = simpsonsData.filter(({id}) => Number(id) !== 6 && Number(id) !== 10)
  await fs.writeFile('simpsons.json', JSON.stringify(filteredSimpsons));
}

const main = async () => {
  await filterSimpsons();
}

main();