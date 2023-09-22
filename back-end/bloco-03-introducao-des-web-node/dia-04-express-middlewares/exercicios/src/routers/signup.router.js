const express = require("express");
const {
  validateEmail,
  validateFirstName,
  validatePassword,
  validatePhone,
} = require("../middlewares/validateSignup");
const generateToken = require("../utils/generateToken");

const router = express.Router();

router.post(
  "/",
  validateEmail,
  validateFirstName,
  validatePassword,
  validatePhone,
  async (req, res) => {
    const token = generateToken();
    return res.status(200).json({ token });
  }
);

module.exports = router;
