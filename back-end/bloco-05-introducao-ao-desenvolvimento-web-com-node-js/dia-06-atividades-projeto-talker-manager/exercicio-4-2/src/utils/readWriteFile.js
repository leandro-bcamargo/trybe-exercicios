const fs = require('fs').promises;
const {join} = require('path');

const CURRENT_PATH = '../teams.json';

const readFile = async () => {
  try {
    const fileContent = await fs.readFile(join(__dirname, CURRENT_PATH));
    const jsObject = JSON.parse(fileContent);
    console.log("jsObject", jsObject);
    console.log("jsObject.teams", jsObject.teams);
    return jsObject;
  } catch(err) {
    console.error(err.message);
  }
}

const addTeam = async (team) => {
  try {
    const teams = await readFile();
    console.log(teams);
    const newTeam = {id: new Date(), ...team};
    teams.push(newTeam);
    await fs.writeFile(join(__dirname, CURRENT_PATH), JSON.stringify(teams));
  } catch(err) {
    console.error(err.message);
  }
}

const getAllTeams = async () => {
  const allTeams = await readFile();
  return allTeams;
}

module.exports = {addTeam, getAllTeams};