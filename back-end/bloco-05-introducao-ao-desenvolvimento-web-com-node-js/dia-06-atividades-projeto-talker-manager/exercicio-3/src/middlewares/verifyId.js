module.exports = verifyId = (req, res, next) => {
  const { id } = req.params;
  if (id) next();
  else res.status(400).json({ "message": "post not found" });
}