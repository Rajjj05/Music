const express = require("express");
const router = express.Router();
const {
  handleUserCreated,
  handleUserDeleted,
} = require("../controllers/clerkController");
const clerkWebhookAuth = require("../middlewares/clerkWebhookAuth");

router.post("/users", clerkWebhookAuth, (req, res) => {
  const { type } = req.body;

  if (type === "user.created") {
    return handleUserCreated(req, res);
  } else if (type === "user.deleted") {
    return handleUserDeleted(req, res);
  }

  res.status(400).json({ message: "Unhandled event type" });
});

module.exports = router;
