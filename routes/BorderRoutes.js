const express = require("express");
const { BoardModel } = require("../model/BoardModel");
const BorderRoute = express.Router();

// POST Route

BorderRoute.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const findName = await BoardModel.findOne({ name: name });
    if (findName) {
      res.status(200).send({
        mgs: `Board with the name ${name} is alredy exist.`,
      });
    } else {
      const data = await BoardModel(req.body);
      await data.save();
      res.status(200).send({
        mgs: ` New Board with the name ${name} is Created.`,
        data: data,
      });
    }
  } catch (error) {
    res.status(400).send({ mgs: "Error ", error: error.message });
  }
});

// GET Route

BorderRoute.get("/", async (req, res) => {
  try {
    const data = await BoardModel.find();
    const tado = await BoardModel.find().populate("tasks");
    //   .where("status")
    //   .et("Todo");

    res.status(200).send({
      mgs: ` Get Request with Boards`,
      total_boards: data.length,
      boards: tado,
    });
  } catch (error) {
    res.status(400).send({ mgs: "Error ", error: error.message });
  }
});

module.exports = { BorderRoute };
