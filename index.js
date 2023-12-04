const express = require("express");
const { conntection } = require("./db");

require("dotenv").config;
const cors = require("cors");
const { UserRoute } = require("./routes/user.Route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", UserRoute);

app.listen(process.env.PORT, (req, res) => {
  try {
    conntection;
    console.log("Connected");
  } catch (error) {
    res.status(500).send({ msg: "Internal error", error: error.message });
  }
});
