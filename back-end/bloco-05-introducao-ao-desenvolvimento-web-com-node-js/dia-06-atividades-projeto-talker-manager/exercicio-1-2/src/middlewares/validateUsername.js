module.exports = validateUsername = (req, res, next) => {
  const {username} = req.body;
  if (username.length > 3) return next();
  return res.status(400).json({ "message": "invalid username" });
}