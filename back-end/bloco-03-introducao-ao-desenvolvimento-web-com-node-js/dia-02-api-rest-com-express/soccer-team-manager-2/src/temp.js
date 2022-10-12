const express = require('express');

const app = express();
const port = 3000;
// Middleware que permite a leitura do body.
app.use(express.json());

// Query string
app.get('/search', (req, res) => {
  const { nome, idade } = req.query;
  res.status(200).send(`Recebi o nome ${nome} e a idade ${idade}`);
});

// Parâmetro de rota
app.get('/:id/:nome', (req, res) => {
  const { id, nome } = req.params;
  res.status(200).send(`O identificador informado possui o valor ${id} e o nome é ${nome}.`);
});

// Corpo da requisição
app.get('/data', (req, res) => {
  const { nome, idade } = req.body;
  res.send(200).status(`O nome é ${nome} e a idade é ${idade}.`);
});

app.listen(port, () => console.log(`Aplicação em execução na porta ${port}`));

const updateMissionData = async (id, updatedMissionData) => {
  const oldMissions = await readMissionsData();
  const updatedMission = { id, ...updatedMissionData };
  const updatedMissions = oldMissions.reduce((missionsList, currentMission) => {
    if (currentMission.id === updatedMission.id) return [...missionsList, updatedMission];
    return [...missionsList, currentMission];
  });

  try {
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), JSON.stringify(updatedMissions));
    console.log(`Atualizou a missão com o id ${id}`);
    return updatedMission;
  } catch (err) {
    console.log(`Erro na escrita do arquivo: ${err}`);
  }
};

app.put('/missions/:id', async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionData(Number(id), updatedMissionData);
  return res.status(201).json({ mission: updatedMission });
});

const deleteMissionData = async (id) => {
  const oldMissions = await readMissionsData();
  const updatedMissions = oldMissions.filter((mission) => mission.id !== id);
  try {
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), JSON.stringify(updatedMissions));
    console.log(`Removeu a missão com o id ${id}`);
  } catch (err) {
    console.log(`Erro na escrita do arquivo: ${err}`);
  } 
};

app.get('/missions', async (req, res) => {
  const missions = await readMissionsData();
  return res.status(200).json({ missions }); 
});

app.post('/missions', async (req, res) => {
  const newMission = req.body;

  const newMissionWithId = await writeMissionsData(newMission);

  return res.json(201).json({ mission: newMissionWithId });
});

app.delete('/mission/:id', (req, res) => {
  const {id} = req.params;
  await deleteMissionData();
  return res.status(204).end();
})