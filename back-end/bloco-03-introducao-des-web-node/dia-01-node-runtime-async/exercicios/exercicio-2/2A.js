const fs = require("fs").promises;
const path = require("path");

async function printCharacters() {
    try {
        const data = await fs.readFile(
            path.resolve(__dirname, "./data/simpsons.json"),
            "utf-8"
        );
        const characters = JSON.parse(data);
        for (let { id, name } of characters) {
            console.log(`${id} - ${name}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

printCharacters();
