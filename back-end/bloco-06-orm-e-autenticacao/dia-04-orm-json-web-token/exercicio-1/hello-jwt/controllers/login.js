const Joi = require('joi');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;

const validateBody = Joi.object({
  username: Joi.string().alphanum().min(5).required().messages({
    'string.min': '"username" deve ter pelo menos 5 caracteres',
    'string.required': '"username" é obrigatório',
  }),
  password: Joi.string().min(5).required().messages({
    'string.min': '"password" deve ter pelo menos 5 caracteres',
    'string.required': '"password" é obrigatório',
  })
});


module.exports = (req, res, next) => {
  const {username, password} = req.body;
  const {error} = validateBody.validate({username, password});
  if (error !== undefined) return next(error);

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const error = new Error('Password inválido');
    error.statusCode = 401;

    return next(error);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const payload = {
    username,
    admin,
  }
  

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  })

  return res.status(200).json({token});
}