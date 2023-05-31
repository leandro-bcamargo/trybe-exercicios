module.exports = validateToken = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization.length === 12 && /\w{12}/.test(authorization)) next();
  else res.status(401).json({ "message": "invalid token" })
}