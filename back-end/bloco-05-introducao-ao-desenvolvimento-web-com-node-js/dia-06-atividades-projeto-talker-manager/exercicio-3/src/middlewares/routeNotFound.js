module.exports = routeNotFound = (err, req, res, next) => {
  res.status(404).json({ "message": "Opsss, route not found!" })
}