module.exports = function validadeDescription (req, res, next) {
  const {description} = req.body;
  if (!description) return res.status(400).json({"message": "O campo description é obrigatório"});
  const {createdAt, rating, difficulty} = req.body.description;
  switch (true) {
    case createdAt === undefined:
      return res.status(400).json({"message": "O campo createdAt é obrigatório"});
    case rating === undefined:
      return res.status(400).json({"message": "O campo rating é obrigatório"});
    case difficulty === undefined:
      return res.status(400).json({"message": "O campo difficulty é obrigatório"})
  }
  next();
}