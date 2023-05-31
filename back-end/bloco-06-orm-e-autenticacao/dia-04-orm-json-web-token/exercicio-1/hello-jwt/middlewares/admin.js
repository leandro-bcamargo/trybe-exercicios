module.exports = (req, res, next) => {
  const payload = req.user;

  if (!payload) {
    const error = new Error('This endpoint requires authentication');
    error.statusCode = 401;

    return next(error);
  }

  if (!payload.admin) {
    const error = new Error('Restricted access');
    error.statusCode = 403;

    return next(error);
  }
  
  return next();
}