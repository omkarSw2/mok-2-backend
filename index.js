const express = require("express");
const { conntection } = require("./db");

require("dotenv").config;
const cors = require("cors");
const { UserRoute } = require("./routes/userRoutes");
const { DoctorsRoute } = require("./routes/DoctoresRoute");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    return res.status(200).send({ msg: "get data" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ msg: error.message });
  }
});

app.use("/users", UserRoute);
app.use("/doctors", DoctorsRoute);

app.listen(process.env.PORT, (req, res) => {
  try {
    conntection;
    console.log("Connected");
  } catch (error) {
    res.status(500).send({ msg: "Internal error", error: error.message });
  }
});
