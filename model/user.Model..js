const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  password: { type: String, require: true },
  email: { type: String },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
