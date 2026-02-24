const mongoose = require("mongoose");

const engagementSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Engagement", engagementSchema);