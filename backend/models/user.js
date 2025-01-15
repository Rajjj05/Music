const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
  likedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: "LikedSong" }],
});

module.exports = mongoose.model("User", UserSchema);
