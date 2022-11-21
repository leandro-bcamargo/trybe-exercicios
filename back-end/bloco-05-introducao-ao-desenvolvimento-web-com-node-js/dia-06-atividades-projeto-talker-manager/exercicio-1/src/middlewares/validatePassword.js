module.exports = validatePassword = (req, res, next) => {
  const {password} = req.body;
  if (typeof password === "number" && password.length >= 4 && password.length <= 8) next();
  else res.status(400).json({ "message": "invalid data" });
}