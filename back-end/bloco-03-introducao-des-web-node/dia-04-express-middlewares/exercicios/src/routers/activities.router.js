const express = require("express");
const { writeFile, readFile } = require("../utils/fsUtils");
const {
  validateCreatedAt,
  validateDescription,
  validateDifficulty,
  validateName,
  validatePrice,
  validateRating,
} = require("../middlewares/validateActivity");
const validateToken = require("../middlewares/validateToken");

const router = express.Router();

router.post(
  "/",
  validateToken,
  validateDescription,
  validateCreatedAt,
  validateDifficulty,
  validateName,
  validatePrice,
  validateRating,
  async (req, res) => {
    const activity = req.body;
    const activities = await readFile();
    activities.push(activity);
    await writeFile(activities);
    return res
      .status(201)
      .json({ message: "Activity successfully registered!" });
  }
);

module.exports = router;
