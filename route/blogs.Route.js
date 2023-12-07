const express = require("express");
const { BlogsModel } = require("../model/blogs.model");
const BlogRoute = express.Router();

BlogRoute.post("/", async (req, res) => {
  try {
    const Blog = await BlogsModel(req.body);
    await Blog.save();

    res.status(200).send({
      status: true,
      msg: "New Blog Crated Successfully.. ",
      blogs: Blog,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});
BlogRoute.get("/", async (req, res) => {
  try {
    const Blog = await BlogsModel.find();
    res.status(200).send({
      status: true,
      msg: "Getting Blogs Successfull.. ",
      blogs: Blog,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});
BlogRoute.patch("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const Blog = await BlogsModel.findByIdAndUpdate(_id, req.body);
    res.status(200).send({
      status: true,
      msg: " Blog Updated Successfull.. ",
      blogs: Blog,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});
BlogRoute.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const Blog = await BlogsModel.findByIdAndDelete(_id);
    res.status(200).send({
      status: true,
      msg: " Blog  Successfully Deleted.. ",
      blogs: Blog,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});
// LIKE
BlogRoute.patch("/:_id/like", async (req, res) => {
  const { _id } = req.params;

  try {
    const user = await BlogsModel.find({ _id: _id });

    const liked = Number(user[0].likes + 1);

    const Blog = await BlogsModel.findByIdAndUpdate(_id, { likes: liked });

    res.status(200).send({
      status: true,
      msg: " Blog Liked Successfully.. ",
      Blog,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});

// Comment
BlogRoute.patch("/:_id/comment", async (req, res) => {
  const { _id } = req.params;
  //   console.log("body", req.body);

  try {
    const user = await BlogsModel.find({ _id: _id });

    let comment = await user[0].comments;
    await comment.push(1);

    console.log("comment", comment);

    const Blog = await BlogsModel.findByIdAndUpdate(_id, { comments: comment });

    res.status(200).send({
      status: true,
      msg: " Conmmented on Blog  Successfully.. ",
      Blog,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      msg: "something went Wrong ",
      error: error.message,
    });
  }
});

// Like

module.exports = { BlogRoute };
