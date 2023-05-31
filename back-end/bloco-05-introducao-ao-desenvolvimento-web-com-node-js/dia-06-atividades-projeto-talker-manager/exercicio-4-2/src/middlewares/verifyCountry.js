module.exports = verifyCountry = (req, res, next) => {
  const {country} = req.body;
  if (country.length <= 3) return next({statusCode: 400, message: 'invalid data'});
  next();
}