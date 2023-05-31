const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;

module.exports = (req, res, next) => {
  const {authorization: token} = req.headers;

  if (!token) {
    const error = new Error('Missing token');
    error.statusCode = 401;

    return next(error);
  };

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;

    return next();
    
  } catch (error) {
    error.statusCode = 401;
    return next(error);
  }
}