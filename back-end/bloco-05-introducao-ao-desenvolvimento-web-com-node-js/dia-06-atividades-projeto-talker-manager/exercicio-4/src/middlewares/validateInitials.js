module.exports = validateInitials => (req, res, next) => {
  const {initials} = req.body;
  if (initials === initials.toUpperCase()) next();
  else res.status(400).json({ "message": "invalid data" });
}