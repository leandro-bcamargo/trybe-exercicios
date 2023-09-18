const fs = require("fs").promises;
const path = require("path");

async function addCharacter() {
    try {
        const data = await fs.readFile(
            path.resolve(__dirname, "./data/simpsonsFamily.json"),
            "utf-8"
        );
        const characters = JSON.parse(data);
        characters.push({
            id: (characters.length + 1).toString(),
            name: "Nelson Muntz",
        });
        await fs.writeFile(
            path.resolve(__dirname, "./data/simpsonsFamily.json"),
            JSON.stringify(characters)
        );
    } catch (error) {
        console.error(error.message);
    }
}

addCharacter();
