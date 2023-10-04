const express = require("express");
const peopleDB = require("../db/peopleDB");

const router = express.Router();

router.post("/", async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    return res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Ocorreu um erro ao cadastrar uma pessoa` });
  }
});

router.get("/", async (req, res) => {
  try {
    const [result] = await peopleDB.findAll();

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await peopleDB.findById(Number(id));
    if (result) return res.status(200).json(result);
    return res.status(404).json({ message: "Pessoa não encontrada" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const [{ affectedRows }] = await peopleDB.update(Number(id), updateData);
    if (affectedRows)
      return res
        .status(200)
        .json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    return res
      .status(404)
      .json({ message: `Pessoa de id ${id} não encontrada` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [{ affectedRows }] = await peopleDB.remove(Number(id));
    if (affectedRows) {
      return res
        .status(201)
        .json({ message: `Pessoa de id ${id} excluída com sucesso` });
    }
    return res
      .status(404)
      .json({ message: `Pessoa de id ${id} não encontrada` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
