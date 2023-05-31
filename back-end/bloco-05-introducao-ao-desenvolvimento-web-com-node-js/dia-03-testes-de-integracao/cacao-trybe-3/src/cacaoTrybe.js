// src/cacaoTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

// A leitura do arquivo cacaoTrybe.json será necessária para todas as rotas. Por isso definimos a função readCacaoTrybeFile() como responsável por ler esse arquivo independentemente da rota.
const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (err) {
    return null;
  }
}

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
}

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const searchChocolates = async (string) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const searchedChocolates = cacaoTrybe.chocolates.filter(chocolate => chocolate.name.includes(string));
  if (searchedChocolates.length === 0) return null; 
  return searchedChocolates;
}

const writeCacaoTrybeFile = async (chocolateData) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(chocolateData));
  } catch (error) {
    console.error(error);
  }
}

const updateChocolate = async (id, chocolateInfo) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const index = cacaoTrybe.chocolates.findIndex(chocolate => chocolate.id === Number(id));
  // console.log("index:", index);
  // console.log("cacaoTrybe.chocolates: ", cacaoTrybe.chocolates);
  // console.log("chocolateInfo: ", chocolateInfo);
  if (index === -1) return null;
  cacaoTrybe.chocolates.splice(index, 1, {id: Number(id), ...chocolateInfo});
  await writeCacaoTrybeFile(cacaoTrybe);
  return {id: Number(id), ...chocolateInfo};
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  searchChocolates,
  updateChocolate,
}