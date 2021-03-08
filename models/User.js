const { model, Schema, Mongoose } = require("mongoose");
require("mongoose-type-email");

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
    type: Mongoose.SchemaTypes.Email,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = model.exports("User", userSchema);
