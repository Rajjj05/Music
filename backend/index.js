const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const clerkRoutes = require("./routes/clerkRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

// Middleware
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
); // Raw body for webhook auth

// Database Connection
connectDB();

// Routes
app.use("/webhooks/clerk", clerkRoutes);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
