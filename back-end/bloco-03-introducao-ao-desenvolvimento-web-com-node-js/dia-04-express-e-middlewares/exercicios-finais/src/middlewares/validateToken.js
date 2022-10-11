module.exports = (req, res, next) => {
  const {Authorization} = req.headers;
  if (Authorization === undefined || Authorization.length !== 16) {
    return res.status(401).json({"message": "Token inválido!"})
  }
  next();
}