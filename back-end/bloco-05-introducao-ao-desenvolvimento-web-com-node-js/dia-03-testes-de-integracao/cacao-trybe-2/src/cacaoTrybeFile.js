const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacaoTrybeFile.json';

// A leitura do arquivo cacaoTrybe.json será necessária para todas as rotas. Por isso definimos a função readCacaoTrybeFile() como responsável por ler esse arquivo independentemente da rota.
const readCacaoTrybeFile = async () => {
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

const getChocolatesByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
  .filter(chocolate => chocolate.name.includes(name));
}

// const writeCacaoTrybe = async (content) => {
//   try {
//     const completePath = join(__dirname, path);
//     await fs.writeFile(completePath, JSON.stringify(content));
//   } catch (e) {
//     console.error('Erro ao salvar o arquivo', e.message);
//     return null;
//   }
// }

// const updateChocolate = async (id, update) => {
//   const cacaoTrybe = await readCacaoTrybeFile();
//   const chocolateToUpdate = cacaoTrybe.chocolates.find(
//     (chocolate) => chocolate.id === id,
//   );

//   if (chocolateToUpdate) {
//     cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
//         if (chocolate.id === id) return { ...chocolate, ...update };
//         return chocolate;
//       });
  
//     await writeCacaoTrybe(cacaoTrybe);
//     return { ...chocolateToUpdate, ...update };
//   }

//   return false;
// };

const writeCacaoTrybe = async (content) => {
  try {
    return await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch(err) {
    console.error(err.message);
    return null;
  }
}

const updateChocolate = async (id, update) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateToUpdate = cacaoTrybe.chocolates
  .find(chocolate => chocolate.id === id);

  if (chocolateToUpdate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates
    .map(chocolate => {
      if (chocolate.id === id) {
        return { ...chocolate, ...update };
      }
      return chocolate;
    });
    await writeCacaoTrybe(cacaoTrybe);
    return {...chocolateToUpdate, ...update};
  } else {
    return null;
  }
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByName,
  updateChocolate,
}