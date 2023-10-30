const express = require("express");
const { DoctorsModel } = require("../model/Doctores.Model");
const DoctorsRoute = express.Router();

DoctorsRoute.post("/adappointments", async (req, res) => {
  try {
    let data = await DoctorsModel(req.body);
    await data.save();
    res.status(200).send({ message: "added succsessfull .! ", data });
  } catch (error) {
    res.status(200).send({ message: "Error ", error });
  }
});

DoctorsRoute.get("/", async (req, res) => {
  try {
    let data = await DoctorsModel.find();

    res.status(200).send({ message: "Fetched data succsessfull .! ", data });
  } catch (error) {
    res.status(200).send({ message: "Error ", error });
  }
});

module.exports = { DoctorsRoute };
