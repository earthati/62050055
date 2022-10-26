const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    description: { type: String },
    created: { type: Date, default: Date.now() },
  },
  {
    collection: "news",
  }
);

const news = mongoose.model("News", schema);

module.exports = news;
