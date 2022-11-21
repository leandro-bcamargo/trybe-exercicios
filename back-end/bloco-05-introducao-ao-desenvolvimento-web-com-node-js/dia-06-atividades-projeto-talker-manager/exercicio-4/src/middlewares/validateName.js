module.exports = validateName = (req, res, next) => {
  const {name} = req.body;
  if (name.length > 5) next();
  else res.status(400).json({ "message": "invalid data" });
}