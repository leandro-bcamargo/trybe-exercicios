const fs = require("fs").promises;
const path = require("path");

async function changeFile() {
    try {
        const data = await fs.readFile(
            path.resolve(__dirname, "./data/simpsons.json"),
            "utf-8"
        );
        const characters = JSON.parse(data);
        const newCharacters = characters.filter(
            (character) => ![6, 10].includes(Number(character.id))
        );
        await fs.writeFile(
            path.resolve(__dirname, "./data/simpsons2C.json"),
            JSON.stringify(newCharacters)
        );
    } catch (error) {
        console.error(error.message);
    }
}

changeFile();
