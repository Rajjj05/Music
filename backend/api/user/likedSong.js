const express = require("express");
const LikedSong = require("../../models/LikedSong");
const User = require("../../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, songId, title, artist, album } = req.body;

  try {
    const likedSong = await LikedSong.create({
      user: userId,
      songId,
      title,
      artist,
      album,
    });

    await User.findByIdAndUpdate(userId, {
      $push: { likedSongs: likedSong._id },
    });

    res.status(201).json({ message: "Song liked", likedSong });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to like song" });
  }
});

module.exports = router;
