module.exports = validateToken = (req, res, next) => {
  const {authorization} = req.headers;
  const regex = /^[A-Za-z0-9]*$/;
  if (regex.test(authorization) && authorization.length === 12) return next();
  return res.status(401).json({ "message": "invalid token" });
}