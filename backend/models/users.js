let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let users = new Schema({
   username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  }
});

let Users = mongoose.model("Users", users);

module.exports = Users;
