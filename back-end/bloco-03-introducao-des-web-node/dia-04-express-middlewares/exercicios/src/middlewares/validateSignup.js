function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email)
    return res.status(401).json({ message: "Email field is required" });

  return next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (!password)
    return res.status(401).json({ message: "Password field is required" });

  return next();
}

function validateFirstName(req, res, next) {
  const { firstName } = req.body;
  if (!firstName)
    return res.status(401).json({ message: "firstName field is required" });

  return next();
}

function validatePhone(req, res, next) {
  const { phone } = req.body;
  if (!phone)
    return res.status(401).json({ message: "phone field is required" });

  return next();
}

module.exports = {
  validateEmail,
  validateFirstName,
  validatePassword,
  validatePhone,
};
