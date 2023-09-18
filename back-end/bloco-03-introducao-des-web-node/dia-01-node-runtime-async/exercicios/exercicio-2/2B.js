const fs = require("fs").promises;
const path = require("path");

// function getCharacterData(id) {
//     promise = new Promise(async (resolve, reject) => {
//         data = await fs.readFile(
//             path.resolve(__dirname, "./data/simpsons.json"),
//             "utf-8"
//         );
//         characters = JSON.parse(data);
//         character = characters.find(
//             (character) => character.id === id.toString()
//         );
//         if (character) {
//             resolve(character);
//         }
//         reject(new Error(`Character with id ${id} not found`));
//     });

//     return promise;
// }

// function main(id) {
//     getCharacterData(id)
//         .then((character) => console.log(character))
//         .catch((error) => console.error(error.message));
// }

// main(2);

async function getCharacterData(id) {
    try {
        const data = await fs.readFile(
            path.resolve(__dirname, "./data/simpsons.json"),
            "utf-8"
        );
        const characters = JSON.parse(data);
        const character = characters.find(
            (character) => character.id === id.toString()
        );
        if (character) {
            console.log(character);
        } else {
            throw new Error(`Character with id ${id} not found`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

async function main(id) {
    await getCharacterData(id);
}

main(2);
