const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", msgSchema);
