const mongoose = require("mongoose");

const eventsSchema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  description: { type: String },
  date: { type: String },
  location: { type: String },
  category: { type: String },
  price: { type: Number },
});

const EventModel = mongoose.model("event", eventsSchema);
module.exports = { EventModel };

// mok-5
