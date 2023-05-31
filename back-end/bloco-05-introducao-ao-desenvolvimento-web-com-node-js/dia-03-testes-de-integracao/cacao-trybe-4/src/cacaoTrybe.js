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

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
}