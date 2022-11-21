const fs = require('fs').promises;

const addMuntz = async () => {
  const data = await fs.readFile('./simpsonsFamily.json');
  const simpsonsData = JSON.parse(data);
  const muntz = {
    "id": "5",
    "name": "Nelson Muntz"
  }
  const newData = [...simpsonsData, muntz];
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newData));
}

const main = async () => {
  await addMuntz();
}

main();