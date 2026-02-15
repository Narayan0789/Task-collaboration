const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Board", boardSchema);
