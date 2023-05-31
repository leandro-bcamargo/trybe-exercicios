module.exports = validateCountry = (req, res, next) => {
  const {country} = req.body;
  if (country.length > 3) next();
  else res.status(400).json({ "message": "invalid data" });
}