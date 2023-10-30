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
    return res.status(200).send({
      msg: "get Doctors appointment  data https://drab-pink-rhinoceros-cuff.cyclic.app/doctors/ ",
      login: "http://localhost:8080/users/login",
      Signup: "http://localhost:8080/users/signup",

      getDoctores_Data: "https://drab-pink-rhinoceros-cuff.cyclic.app/doctors/",
      adappointments_Data:
        "https://drab-pink-rhinoceros-cuff.cyclic.app/doctors/adappointments",
    });
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
