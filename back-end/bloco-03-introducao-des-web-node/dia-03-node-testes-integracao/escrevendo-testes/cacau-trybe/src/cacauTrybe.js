const fs = require("fs").promises;
const { join } = require("path");

class CustomError extends Error {
  constructor(statusCode, payload) {
    super();
    this.payload = payload;
    this.statusCode = statusCode;
  }
}

function testFunction() {
  try {
    throw new CustomError();
  } catch (e) {
    console.log(e instanceof CustomError);
  }
}
testFunction();

const PATH = "/files/cacauTrybeFile.json";

async function readCacauTrybeFile() {
  try {
    const contentFile = await fs.readFile(join(__dirname, PATH), "utf-8");
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
}

async function getAllChocolates() {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
}

async function getChocolateById(id) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id
  );

  return chocolate;
}

async function getChocolatesByBrand(brandId) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolates = cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId
  );

  return chocolates;
}

async function getChocolatesByQuery(query) {
  const cacauTrybe = await readCacauTrybeFile();
  const filteredChocs = cacauTrybe.chocolates.filter((chocolate) =>
    chocolate.name.includes(query)
  );
  if (!filteredChocs.length) throw new CustomError(404, filteredChocs);

  return filteredChocs;
}

async function updateChocolate(id, dataToUpdate) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolates = cacauTrybe.chocolates;
  const indexToUpdate = chocolates.findIndex(
    (chocolate) => chocolate.id === id
  );
  if (indexToUpdate === -1) throw new CustomError(404, "chocolate not found");
  const updatedChocolates = chocolates.reduce(
    (chocolatesArr, currChocolate) => {
      if (currChocolate.id === id)
        return [
          ...chocolatesArr,
          {
            ...currChocolate,
            ...dataToUpdate,
          },
        ];
      return [...chocolatesArr, currChocolate];
    },
    []
  );
  const updatedChocolatesStr = JSON.stringify(updatedChocolates);
  await fs.writeFile(join(__dirname, PATH), updatedChocolatesStr);

  return updatedChocolates[indexToUpdate];
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByQuery,
  updateChocolate,
  CustomError,
};
