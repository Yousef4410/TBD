const { model, Schema, Mongoose } = require("mongoose");

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
  location: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  postedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  createdBy: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
