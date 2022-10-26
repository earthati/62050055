const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    detail: { type: String, require: true, trim: true },
    created: { type: Date, default: Date.now() },
  },
  {
    collection: "blogs",
  }
);

const model = mongoose.model("Blogs", schema);

module.exports = model;