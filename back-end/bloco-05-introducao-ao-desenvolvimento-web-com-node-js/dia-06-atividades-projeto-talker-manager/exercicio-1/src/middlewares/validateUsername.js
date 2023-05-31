module.exports = validateUsername = (req, res, next) => {
  const {username} = req.body;
  if (username.length > 3) next();
  else res.status(400).json({ "message": "invalid data" });
}