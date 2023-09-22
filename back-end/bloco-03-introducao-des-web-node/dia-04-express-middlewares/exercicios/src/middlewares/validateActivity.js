function validateName(req, res, next) {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ message: "The field 'name' is mandatory" });
  if (name.length < 4)
    return res
      .status(400)
      .json({ message: "The field 'name' must have at least 4 characters" });
  return next();
}

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (price === undefined)
    return res.status(400).json({ message: "The field 'price' is mandatory" });
  if (price < 0)
    return res
      .status(400)
      .json({ message: "The field 'price' must be positive" });

  return next();
}

function validateDescription(req, res, next) {
  const { description } = req.body;
  const {
    description: { createdAt, rating, difficulty },
  } = req.body;

  if (!description)
    return res
      .status(400)
      .json({ message: "The field 'description' is mandatory" });
  if (!createdAt)
    return res
      .status(400)
      .json({ message: "The field 'createdAt' is mandatory" });
  if (!rating)
    return res.status(400).json({ message: "The field 'rating' is mandatory" });
  if (!difficulty)
    return res
      .status(400)
      .json({ message: "The field 'difficulty' is mandatory" });

  return next();
}

function validateCreatedAt(req, res, next) {
  const {
    description: { createdAt },
  } = req.body;
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  const isValidDate = datePattern.test(createdAt);
  if (!isValidDate)
    return res.status(400).json({
      message: "The field 'createdAt should be in the format dd/mm/yyyy",
    });

  return next();
}

function validateRating(req, res, next) {
  const {
    description: { rating },
  } = req.body;
  if (!(rating >= 1 && rating <= 5))
    return res.status(400).json({
      message: "The field 'rating' must be an integer between 1 and 5",
    });

  return next();
}

function validateDifficulty(req, res, next) {
  const {
    description: { difficulty },
  } = req.body;
  const allowedDifficulties = ["Easy", "Medium", "Hard"];
  if (!allowedDifficulties.includes(difficulty))
    return res.status(400).json({
      message: "The field 'difficulty' must be 'Easy', 'Medium', or 'Hard'",
    });

  return next();
}

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
};
