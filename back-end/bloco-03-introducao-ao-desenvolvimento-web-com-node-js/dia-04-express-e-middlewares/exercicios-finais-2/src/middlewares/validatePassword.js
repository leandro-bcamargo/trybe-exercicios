module.exports = validatePassword = (req, res, next) => {
  const {password} = req.body;
  if (password === undefined) return res.status(401).json({ "message": "Campos ausentes!" });
  next();
}