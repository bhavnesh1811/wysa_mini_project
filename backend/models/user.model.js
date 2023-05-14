const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  sleepStuggle: { type: String ,default:""},
  goTobed: { type: String,default:"" },
  getOutofBed: { type: String ,default:""},
  sleepHours: { type: String ,default:""},
  sleepEfficiency: { type: Number,default:0 },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
