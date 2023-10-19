const express = require("express");
const { conntection } = require("./db");
const { EventModel } = require("./model/events.model");

require("dotenv").config;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
  try {
    const data = await EventModel.find();
    return res.status(200).send({ msg: "get data", events: data });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ msg: error.message });
  }
});

app.post("/add", async (req, res) => {
  try {
    const data = await EventModel(req.body);
    await data.save();
    return res.status(200).send({ msg: "get data", events: data });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ msg: error.message });
  }
});

app.listen(process.env.PORT, (req, res) => {
  try {
    conntection;
    console.log("Connected");
  } catch (error) {
    res.status(500).send({ msg: "Internal error", error: error.message });
  }
});
