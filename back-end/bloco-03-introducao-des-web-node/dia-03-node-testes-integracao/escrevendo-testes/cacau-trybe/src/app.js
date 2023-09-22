const express = require("express");
const {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByQuery,
  updateChocolate,
  CustomError,
} = require("./cacauTrybe");

const app = express();
app.use(express.json());

app.get("/chocolates", async (req, res) => {
  const chocolates = await getAllChocolates();
  return res.status(200).json({ chocolates });
});

app.get("/chocolates/total", async (req, res) => {
  const chocolates = await getAllChocolates();
  const totalChocolates = chocolates.length;
  return res.status(200).json({ totalChocolates });
});

app.get("/chocolates/search", async (req, res) => {
  const { name } = req.query;
  try {
    const chocolates = await getChocolatesByQuery(name);
    return res.status(200).json(chocolates);
  } catch (error) {
    if (error.statusCode)
      return res.status(error.statusCode).json(error.payload);
    throw new Error(error.message);
  }
});

app.get("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate)
    return res.status(404).json({ message: "Chocolate not found" });
  return res.status(200).json({ chocolate });
});

app.get("/chocolates/brand/:brandId", async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  return res.status(200).json({ chocolates });
});

app.put("/chocolates/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const updatedChocolate = await updateChocolate(Number(id), dataToUpdate);

    return res.status(200).json({ chocolate: updatedChocolate });
  } catch (error) {
    console.log(error instanceof CustomError);
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.payload });
    }
    return res.status(500).json({ message: error.message });
  }
});

module.exports = app;
