module.exports = validateDescription = ((req, res, next) => {
  const {description: {createdAt, rating, difficulty}} = req.body;
  const {description} = req.body;
  switch (true) {
    case (!description):
      return res.status(400).json({ "message": "O campo description é obrigatório" });
    case (!createdAt):
      return res.status(400).json({ "message": "O campo createdAt é obrigatório" });
    case (!rating):
      return res.status(400).json({ "message": "O campo rating é obrigatório" });
    case (!difficulty):
      return res.status(400).json({ "message": "O campo difficulty é obrigatório" });
  }
  next();
})