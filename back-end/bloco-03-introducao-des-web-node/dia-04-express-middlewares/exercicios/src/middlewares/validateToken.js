function validateToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization || !(authorization.length === 16))
    return res.status(400).json({ message: "Invalid token" });

  return next();
}

module.exports = validateToken;
