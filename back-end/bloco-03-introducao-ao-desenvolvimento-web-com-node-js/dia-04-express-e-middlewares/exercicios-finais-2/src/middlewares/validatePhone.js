module.exports = validatePhone = (req, res, next) => {
  const {phone} = req.body;
  if (phone === undefined) return res.status(401).json({ "message": "Campos ausentes!" });
  next();
}