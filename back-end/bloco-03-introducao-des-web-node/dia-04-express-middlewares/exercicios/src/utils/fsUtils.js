const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = "../files/activities.json";

async function readFile() {
  const data = await fs.readFile(path.resolve(__dirname, FILE_PATH), "utf-8");
  const activities = !data.trim() ? [] : JSON.parse(data);

  return activities;
}

async function writeFile(activities) {
  const activitiesStr = JSON.stringify(activities);
  await fs.writeFile(path.resolve(__dirname, FILE_PATH), activitiesStr);
}

module.exports = { readFile, writeFile };
