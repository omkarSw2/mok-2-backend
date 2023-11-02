const express = require("express");
const { BoardModel } = require("../model/BoardModel");
const { TaskModel } = require("../model/TaskModel");
const { SubTaskModel } = require("../model/SubTaskModel");
const TaskRoute = express.Router();

TaskRoute.post("/", async (req, res) => {
  const { id } = req.headers;
  const { title, description, status } = req.body;
  //   console.log("subtasks", subtasks);
  try {
    const data = await TaskModel({
      title,
      description,
      status,
    });
    const saveddata = await data.save();

    const Board = await BoardModel.findOne({ _id: id });
    await Board.tasks.push(saveddata._id);
    await Board.save();
    // console.log(Board, saveddata._id);
    res.status(200).send({ msg: "Task Added Successfully ", Task: saveddata });
  } catch (error) {
    res
      .status(400)
      .send({ meg: "Error while Posting Task", error: error.message });
  }
});

module.exports = { TaskRoute };
