const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.Model.");

const UserRoute = express.Router();

UserRoute.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const finduser = await UserModel.findOne({ email });

    if (finduser) {
      res.status(200).send({ message: "USER Alredy Exist Please Login..!" });
    } else {
      bcrypt.hash(password, 2, async (err, hash) => {
        // Store hash in your password DB.
        let data = await UserModel({ email, password: hash });
        await data.save();
        res.status(200).send({ message: "Welcome Please Login..!" });
      });
    }
  } catch (error) {
    res.status(400).send({ message: "Something went wrong", error });
  }
});
UserRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const finduser = await UserModel.findOne({ email });

    if (!finduser) {
      res.status(200).send({ message: "USER Not Found  Please Register..!" });
    } else {
      bcrypt.compare(password, finduser.password, async (err, result) => {
        if (result) {
          res.status(200).send({ message: "Welcome user" });
        }
        if (err) {
          res.status(200).send({ message: "Error ", err });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ message: "Something went wrong", error });
  }
});

module.exports = { UserRoute };
