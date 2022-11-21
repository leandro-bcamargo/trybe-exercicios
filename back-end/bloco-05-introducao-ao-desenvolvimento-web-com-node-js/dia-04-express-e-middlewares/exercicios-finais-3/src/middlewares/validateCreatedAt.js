module.exports = validateCreatedAt = (req, res, next) => {
  const {description: {createdAt}} = req.body;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!createdAt.match(regex)) return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  next();
}