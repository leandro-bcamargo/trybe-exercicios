const validateEmail = require('../middlewares/validadeEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateUsername = require('../middlewares/validateUsername');

const router = express.Router();

router.post('/register', validateEmail, validatePassword, validateUsername, (req, res) => {
  res.status(201).json({ "message": "user created" });
})

router.post('/login', validateEmail, validatePassword, (req, res) => {
  const token = Math.random().toString(16).substr(2);
  res.status(201).json({token})
})