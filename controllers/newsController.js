const mongoose = require("mongoose");
const News = require("../models/news");

exports.index = async (req, res, next) => {
  const news = await News.find();

  res.json({
    message: "successfully get from news",
    data: news,
  });
};
