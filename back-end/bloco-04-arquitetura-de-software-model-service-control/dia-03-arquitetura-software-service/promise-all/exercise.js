const fs = require('fs/promises');
const path = require('path');

const FILE_PATH = './files'

const strList = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const createFiles = async () => {
  await fs.mkdir(path.resolve(FILE_PATH));
  const promiseArr = strList.map((str, index) => fs.writeFile(path.resolve(`${FILE_PATH}/file${index + 1}.txt`), str));

  await Promise.all(promiseArr);
}

const readFiles = async () => {
  let textPromises = [];
  for (let i = 0; i < strList.length; i++) {
    textPromises.push(fs.readFile(path.resolve(`${FILE_PATH}/file${i + 1}.txt`), 'utf-8'));
  }

  const text = await Promise.all(textPromises);


  await fs.writeFile(path.resolve(`${FILE_PATH}/fileAll.txt`), text.join(' '));
}

const createAndReadFiles = async () => {
  try {
    await createFiles();
    await readFiles();
  } catch (error) {
    console.log(error.message)
  }
}

createAndReadFiles();