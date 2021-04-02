const { model, Schema, Mongoose } = require("mongoose");
const Post = require("../models/Post");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    unique: true,
  },
  postedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const PostMessage = model('Posts',postSchema);

module.exports = PostMessage;
