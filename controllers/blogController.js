const Blogs = require("../models/blog");

exports.index = async (req, res, next) => {
  const blogs = await Blogs.find();
  res.status(200).json({
    message: "Successfully loaded",
    data: blogs,
  });
};

exports.add = async (req, res, next) => {
  const { title, detail } = req.body;
  const blogs = new Blogs({
    title: title,
    detail: detail,
  });

  await blogs.save();

  res.status(201).json({
    message: "Successfully added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  res.status(200).json({
    message: "Successfully removed",
  });
};