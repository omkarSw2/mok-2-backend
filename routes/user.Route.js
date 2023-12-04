const express = require("express");
const { UserModel } = require("../models/user.Model");
const UserRoute = express.Router();

UserRoute.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();

    res.status(200).send({ status: "success", mgs: "getting Users", user });
  } catch (error) {
    res.status(400).send({ status: "failed", mgs: "Something Went Wrong" });
  }
});
UserRoute.post("/contacts", async (req, res) => {
  try {
    const user = await UserModel(req.body);
    user.save();

    res.status(200).send({ status: "success", mgs: "Create New User ", user });
  } catch (error) {
    res.status(400).send({ status: "failed", mgs: "Something Went Wrong" });
  }
});

module.exports = { UserRoute };
