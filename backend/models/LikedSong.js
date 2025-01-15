const mongoose = require("mongoose");

const LikedSongSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  songId: { type: String, required: true },
  title: { type: String, required: true },
  artist: { type: String },
  album: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LikedSong", LikedSongSchema);
