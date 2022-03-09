const mongoose = require("mongoose");

const bloodSchema = new mongoose.Schema({
  // Refer to the User db model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  bloodType: {
    type: String,
    required: [true, "Please add a blood type"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please add a phone number"],
  },
  location: {
    type: String,
    required: [true, "Please add a location"],
  },
});

module.exports = mongoose.model("Blood", bloodSchema);
