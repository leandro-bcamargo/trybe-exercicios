module.exports = (req, res, next) => {
  const {description: {createdAt}} = req.body;
  const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  if (!dateRegex.test(createdAt)) {
    res.status(400).json({"message": `O campo createdAt deve ter o formato \'dd/mm/aaaa\'` });
  }
  next();
}