const { model, Schema, Mongoose } = require("mongoose");
const User = require("../models/User");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  // TODO: is verified
  // TODO: avatar
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = model("User", userSchema);
