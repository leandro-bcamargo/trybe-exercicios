module.exports = verifyName = (req, res, next) => {
  const {name} = req.body;
  if (name.length <= 5) return next({statusCode: 404, message: 'invalid data'});
  next();
}