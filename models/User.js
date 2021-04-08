const { model, Schema, Mongoose } = require("mongoose");

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
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = model("User", userSchema);
