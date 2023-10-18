const express = require("express");
const app = express();
const cors = require("cors");
const { conntection } = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    return res.status(200).send({ msg: "Home Route" });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
});

app.listen(process.env.PORT || 3000, (req, res) => {
  try {
    conntection;
    console.log("Connected");
  } catch (error) {
    res.status(500).send({ msg: "Internal error", error: error.message });
  }
});
