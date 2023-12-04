const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  label: { type: String },
  booked_slots: [],
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = { UserModel };
