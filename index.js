const express = require("express");
const { conntection } = require("./db");

require("dotenv").config;
const cors = require("cors");
const { UserRoute } = require("./route/user.Route");
const { BlogRoute } = require("./route/blogs.Route");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.status(200).send({ status: true, msg: "get request from sever" });
  } catch (error) {
    res.status(200).send({
      status: false,
      msg: "something went wrong",
      error: error.message,
    });
  }
});

app.use("/api", UserRoute);
app.use("/api/blogs", BlogRoute);

app.listen(process.env.PORT, (req, res) => {
  try {
    conntection;
    console.log("Connected");
  } catch (error) {
    res.status(500).send({ msg: "Internal error", error: error.message });
  }
});
