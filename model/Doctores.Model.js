const mongoose = require("mongoose");

const doctoresSchema = mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  specialization: { type: String, require: true },
  experience: { type: Number, require: true },
  location: { type: String, require: true },
  date: { type: Date },
  slots: { type: Number, default: 2 },
  fee: { type: Number, require: true },
});

const DoctorsModel = mongoose.model("doctor", doctoresSchema);
module.exports = { DoctorsModel };

// {
// 	  "name": "Jane Doe",
// 	  "image": "https://example.com/doctor-image.jpg",
// 	  "specialization": "Dermatologist",
// 	  "experience": 10,
// 	  "location": "Los Angeles",
// 	  "date": "2023-04-05T12:00:00.000Z",
// 		"slots" : 2,
// 	  "fee": 150
// 	},
