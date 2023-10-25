const jwt = require('jsonwebtoken');

const extractToken = (bearerToken) => {
  return bearerToken.split(' ')[1];
}
const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const bearerToken = req.header('authorization');

  if (!bearerToken) return res.status(401).json({ message: "Token not found" });

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const user = decoded.payload;
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

module.exports = {
  validateJWT,
}