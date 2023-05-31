module.exports = validateEmail = (req, res, next) => {
  const {email} = req.body;
  if (email === undefined) return res.status(401).json({ "message": "Campos ausentes!" });
  next();
}