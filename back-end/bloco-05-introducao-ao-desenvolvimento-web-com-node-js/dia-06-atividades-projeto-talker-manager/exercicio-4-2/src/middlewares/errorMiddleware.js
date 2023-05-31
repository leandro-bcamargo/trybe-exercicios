module.exports = errorMiddleware = (error, req, res, next) => {
  const {statusCode, message} = error;
  res.status(statusCode).json({message});
}