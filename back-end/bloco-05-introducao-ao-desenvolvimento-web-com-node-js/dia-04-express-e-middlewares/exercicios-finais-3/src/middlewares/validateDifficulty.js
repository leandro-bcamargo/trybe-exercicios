module.exports = validateDifficulty = (req, res, next) => {
  const {description: {difficulty}} = req.body;
  const difficulties = ['Fácil', 'Médio', 'Difícil'];
  if (!difficulties.includes(difficulty)) return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  next();
}