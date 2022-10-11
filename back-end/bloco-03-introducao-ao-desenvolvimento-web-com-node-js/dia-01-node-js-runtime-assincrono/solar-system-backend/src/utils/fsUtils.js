const fs = require('fs').promises;
const path = require('path');
const MISSION_DATA_PATH = '../../data/missions.json';

const readMissionsData = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
    // Converte o buffer em JSON.
    const missions = JSON.parse(data);
    return missions;
  } catch(err) {
    console.log("Erro na leitura do arquivo: " + err);
  }
}

const writeNewMissionsData = async (newMission) => {
  try {
    const oldMissions = await readMissionData();
    // Converte o JSON em string.
    const allMissions = JSON.stringify([
      ...oldMissions, 
      {id: Date.now(), ...newMission}
    ]);
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions);
  } catch(err) {
    console.error("Erro na escrita do arquivo: " + err);
  }
}

module.exports = {
  readMissionsData,
  writeNewMissionsData,
};