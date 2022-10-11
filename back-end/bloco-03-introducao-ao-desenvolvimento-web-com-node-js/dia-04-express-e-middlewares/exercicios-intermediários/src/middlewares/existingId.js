const existingId = (req, res, next) => {
  const {id} = req.params;
  if (teams.some(team => team.id === Number(id))) {
    next();
  } else {
    res.sendStatus(400);
  }
}

module.exports = existingId;