const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./api/user/index");
const likedSongsRoutes = require("./api/user/likedSongs");
const playlistsRoutes = require("./api/user/playlists");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/user/liked-songs", likedSongsRoutes);
app.use("/api/user/playlists", playlistsRoutes);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
