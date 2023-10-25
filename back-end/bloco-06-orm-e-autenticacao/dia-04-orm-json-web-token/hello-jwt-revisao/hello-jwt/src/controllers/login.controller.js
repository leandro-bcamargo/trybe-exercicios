const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { username, password } = req.body;
    const jwtConfig = {
      algorithm: 'HS256',
      expiresIn: '1h',
    }

    let payload;
    if (username === 'admin' && password === 's3nh4S3gur4???') {
      payload = {
        username,
        admin: true,
      }
    } else {
      payload = {
        username,
        admin: false,
      }
    }

    const token = jwt.sign({ payload }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = {
  login,
}