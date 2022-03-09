const mongoose = require("mongoose");

const receiveSchema = new mongoose.Schema({
  // Refer to the User db model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true,'Please add a name']
},
  bloodType: {
    type: String,
    required: [true, "Please add a blood type"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please add a phone number"],
  },
  location: {
    type: String,
    required: [true, "Please add a location"],
  },

});

module.exports = mongoose.model("Receive", receiveSchema);
