const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const FILE_PATH = "../files/teams.json";

const app = express();
app.use(express.json());

app.listen(3001, () => console.log("Server running on port 3001"));

app.get("/teams", async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, FILE_PATH), "utf-8");
    const teams = JSON.parse(data);
    return res.status(200).json({ teams });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});
