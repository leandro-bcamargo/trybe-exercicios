const path = require('path');
const fs = require('fs').promises;

const DATA_PATH = path.resolve(__dirname, 'data', 'users.json');

const getAll = async () => {
  const data = await fs.readFile(DATA_PATH, 'utf-8');

  const users = JSON.parse(data);

  return users;
}

const writeAll = async (data) => {
  const dataStr = JSON.stringify(data);
  await fs.writeFile(DATA_PATH, dataStr);
}

const getByUsername = async (username) => {
  const users = await getAll();
  const user = users.find(el => el.username === username);

  return user;
}

const create = async (userData) => {
  const prevUsers = await getAll();
  prevUsers.push(userData);

  await writeAll(users);
  return userData;
}

module.exports = {
  getByUsername,
  create,
  writeAll,
  getAll,
}