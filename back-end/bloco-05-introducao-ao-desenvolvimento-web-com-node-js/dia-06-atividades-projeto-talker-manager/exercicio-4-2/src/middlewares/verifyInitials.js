module.exports = verifyInitials = (req, res, next) => {
  const {initials} = req.body;
  const arr = initials.split("");
  const filteredArr = arr.filter(char => char === char.toUpperCase());
  if (filteredArr.length > 3) return next({statusCode: 400, message: 'invalid data'});
  next();
}