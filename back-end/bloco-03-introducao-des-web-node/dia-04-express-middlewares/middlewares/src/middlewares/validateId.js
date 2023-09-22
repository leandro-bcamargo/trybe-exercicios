const teams = require("../utils/teams");

function validateId(req, res, next) {
  const { id } = req.params;
  const hasId = teams.some((team) => team.id === Number(id));
  if (!hasId) return res.status(400).json({ message: "Id not found" });
  const team = teams.find((team) => team.id === Number(id));
  if (!team) return res.status(404).json({ message: "Team not found" });
  return next();
}

module.exports = validateId;
