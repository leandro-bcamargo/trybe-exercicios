const express = require("express");
const activitiesRouter = require("./activities.router");
const signupRouter = require("./signup.router");

const router = express.Router();

router.use("/activities", activitiesRouter);
router.use("/signup", signupRouter);

module.exports = router;
