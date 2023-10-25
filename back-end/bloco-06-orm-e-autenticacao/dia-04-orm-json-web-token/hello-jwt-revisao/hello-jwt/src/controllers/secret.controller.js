const getTopSecret = async (req, res) => {
  try {
    return res.status(200).json({ "secretInfo": "Peter Parker é o Homem-Aranha" });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getTopSecret,
}