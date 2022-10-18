const express = require('express');

const app = express();
const cacaoTrybe = require('./cacaoTrybeFile');
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({chocolates}); 
});

app.get('/chocolates/search', async (req, res) => {
  const {name} = req.query;
  const chocolates = await cacaoTrybe.getChocolatesByName(name);
  chocolates.length > 0 
  ? res.status(200).json(chocolates)
  : res.status(404).json([]); 
})

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

// app.put('/chocolates/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, brandId } = req.body;
//   const updatedChocolate = await cacaoTrybe.updateChocolate(Number(id), {name, brandId});

//   if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
//   res.status(404).json({ message: 'chocolate not found' });
// });

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const {name, brandId} = req.body;
  const updatedChocolate = await cacaoTrybe.updateChocolate(Number(id), {name, brandId});
  if (updatedChocolate) return res.status(200).json({chocolate: updatedChocolate});
  return res.status(404).json({message: 'chocolate not found'});
});


module.exports = app;