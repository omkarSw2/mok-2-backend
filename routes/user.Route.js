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
UserRoute.patch("/patch/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await UserModel.findByIdAndUpdate(_id, req.body);

    res.status(200).send({ status: "success", mgs: " User Updated  ", user });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      mgs: "Something Went Wrong",
      error: error.message,
    });
  }
});
UserRoute.delete("/delete/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(_id);

    res.status(200).send({ status: "success", mgs: " User Updated  ", user });
  } catch (error) {
    res.status(400).send({ status: "failed", mgs: "Something Went Wrong" });
  }
});

module.exports = { UserRoute };

// Model.findByIdAndDelete()
// Model.findByIdAndUpdate();
