const express = require('express');

const app = express();

app.use(express.json());

const cacaoTrybe = require('./cacaoTrybe');

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({chocolates}); 
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  const totalChocolates = chocolates.length;
  res.status(200).json({totalChocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const {name} = req.query;
  const chocolates = await cacaoTrybe.searchChocolates(name);
  if (!chocolates) res.status(404).json([]);
  else res.status(200).json(chocolates);
})

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um número
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const {id} = req.params;
  const chocolateInfo = req.body;
  const chocolate = await cacaoTrybe.updateChocolate(id, chocolateInfo);
  console.log("chocolate: ", chocolate);
  if (chocolate === null) res.status(404).json({"message": "chocolate not found"});
  else res.status(200).json({chocolate});
})


module.exports = app;