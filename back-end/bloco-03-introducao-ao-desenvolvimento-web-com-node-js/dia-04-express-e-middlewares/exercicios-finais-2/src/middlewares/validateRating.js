module.exports = validateRating = (req, res, next) => {
  const {description: {rating}} = req.body;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  next();
}