module.exports = validateEmail = (req, res, next) => {
  const {email} = req.body;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regex)) return next();
  return res.status(400).json({ "message": "invalid email" })
}