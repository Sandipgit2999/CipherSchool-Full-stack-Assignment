const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String, requred: true },
  password: { type: String, requred: true },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = {
  UserModel,
};
