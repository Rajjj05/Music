const express = require("express");
const Playlist = require("../../models/Playlist");
const User = require("../../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, name, songs } = req.body;

  try {
    const playlist = await Playlist.create({
      user: userId,
      name,
      songs,
    });

    await User.findByIdAndUpdate(userId, {
      $push: { playlists: playlist._id },
    });

    res.status(201).json({ message: "Playlist created", playlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create playlist" });
  }
});

module.exports = router;
