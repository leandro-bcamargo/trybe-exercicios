module.exports = validateDescription = (req, res, next) => {
  const {description} = req.body;
  switch (true) {
    case !description:
      return res.status(400).json({ "message": "O campo description é obrigatório" });
    case !description.createdAt:
      return res.status(400).json({ "message": "O campo createdAt é obrigatório" });
    case !description.rating:
      return res.status(400).json({ "message": "O campo rating é obrigatório" });
    case !description.difficulty:
      return res.status(400).json({ "message": "O campo difficulty é obrigatório" });
  }
  next();
}