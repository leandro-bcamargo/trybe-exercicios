module.exports = validatePassword = (req, res, next) => {
  const {password} = req.body;
  if (!Number.isNaN(Number(password)) &&
  password.toString().length >= 4 &&
  password.toString().length <= 8) return next();
  return res.status(400).json({ "message": "invalid password" });
}