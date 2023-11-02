const express = require("express");
const { conntection } = require("./db");

require("dotenv").config;
const cors = require("cors");
const { BorderRoute } = require("./routes/BorderRoutes");
const { TaskRoute } = require("./routes/TaskRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    return res.status(200).send({
      msg: "server is runing ",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ msg: error.message });
  }
});
app.use("/board", BorderRoute);
app.use("/task", TaskRoute);

app.listen(process.env.PORT, (req, res) => {
  try {
    conntection;
    console.log("Connected");
  } catch (error) {
    res.status(500).send({ msg: "Internal error", error: error.message });
  }
});
