const express = require("express");
const UserRoute = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

require("dotenv").config;
// Register User
UserRoute.post("/register", async (req, res) => {
  const { userName, email, password, avatar } = req.body;
  //   console.log(req.body);
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(200).send({
        status: false,
        msg: "User Alredy Exist Please Login ",
      });
    } else {
      bcrypt.hash(password, 3, async (err, hash) => {
        const user = await UserModel({
          email,
          userName,
          avatar,
          password: hash,
        });

        user.save();
        res.status(200).send({
          status: true,
          msg: "regiser Sucessfull",
          user,
        });
      });
    }
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});

// Login user
UserRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.status(200).send({
        status: false,
        msg: "User Not Exist Exist Please Register",
      });
    } else {
      bcrypt.compare(password, userExist.password, async (err, result) => {
        let token = jwt.sign({ userExist }, process.env.JSONKEY);
        res.status(200).send({
          status: true,
          msg: "Login Sucessfull",
          token,
          user: userExist,
        });
      });
    }
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});

module.exports = { UserRoute };
