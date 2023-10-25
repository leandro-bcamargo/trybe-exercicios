const validateAdmin = async (req, res, next) => {
  const user = req.user;
  const isAdmin = user.admin;
  if (!isAdmin) return res.status(403).json({ message: "Restricted Access" });

  next();
}

module.exports = {
  validateAdmin,
}