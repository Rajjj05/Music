const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  songs: [
    {
      songId: { type: String, required: true },
      title: { type: String },
      artist: { type: String },
      album: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
