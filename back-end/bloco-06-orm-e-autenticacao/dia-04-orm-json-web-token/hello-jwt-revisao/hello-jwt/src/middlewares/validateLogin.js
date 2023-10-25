const { loginSchema } = require('./loginSchema');

const validateLogin = async (req, res, next) => {
  const loginData = req.body;
  const { error } = loginSchema.validate(loginData);

  if (error) {
    const message = error.details[0].message;
    return res.status(500).json({ message });
  }

  next();
}

module.exports = {
  validateLogin,
}