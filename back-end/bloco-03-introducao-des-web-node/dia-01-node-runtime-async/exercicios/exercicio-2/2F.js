const fs = require("fs").promises;
const path = require("path");

async function replaceChar() {
    try {
        const data = await fs.readFile(
            path.resolve(__dirname, "./data/simpsonsFamily.json")
        );
        const characters = JSON.parse(data);
        const index = characters.findIndex(
            (char) => char.name === "Nelson Muntz"
        );
        characters[index].name = "Maggie Simpson";
        await fs.writeFile(
            path.resolve(__dirname, "./data/simpsonsFamily.json"),
            JSON.stringify(characters)
        );
    } catch (error) {
        console.error(error.message);
    }
}

replaceChar();
