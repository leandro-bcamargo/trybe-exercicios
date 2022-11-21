module.exports = generateToken = () => {
  return Math.random().toString(16).substring(3);
}
