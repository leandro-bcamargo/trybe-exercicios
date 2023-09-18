const fs = require("fs").promises;
const path = require("path");

async function createFamily() {
    try {
        const data = await fs.readFile(
            path.resolve(__dirname, "./data/simpsons.json"),
            "utf-8"
        );
        const characters = JSON.parse(data);
        const newCharacters = characters.filter(
            (character) =>
                Number(character.id) >= 1 && Number(character.id) <= 4
        );
        await fs.writeFile(
            path.resolve(__dirname, "./data/simpsonsFamily.json"),
            JSON.stringify(newCharacters)
        );
    } catch (error) {
        console.error(error.message);
    }
}

createFamily();
