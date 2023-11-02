const mongoose = require("mongoose");

const SubTaskSchema = mongoose.Schema({
  title: String,
  isCompleted: { type: Boolean },
});

const SubTaskModel = mongoose.model("Subtask", SubTaskSchema);
module.exports = { SubTaskModel };
