const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema(
  {
    userName: { type: String },
    title: { type: String },
    content: { type: String },
    category: { type: String },
    date: { type: String },
    likes: { type: Number, default: 0 },
    comments: [{ type: String }],
  },
  { timestamps: true }
);

const BlogsModel = mongoose.model("blog", BlogSchema);
module.exports = { BlogsModel };
