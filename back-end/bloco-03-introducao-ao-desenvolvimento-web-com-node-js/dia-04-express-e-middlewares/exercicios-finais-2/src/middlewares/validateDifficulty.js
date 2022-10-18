module.exports = validateDifficulty = (req, res, next) => {
  const {description: {difficulty}} = req.body;
  const possibilities = ['Fácil', 'Médio', 'Difícil'];
  if (!possibilities.includes(difficulty)) res.status(400).json({"message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"}) 
  next();
}