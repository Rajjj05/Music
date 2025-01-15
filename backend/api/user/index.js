const express = require("express");
const User = require("../../models/user");
const verifyClerkWebhook = require("../../config/clerkConfig");

const router = express.Router();

router.post("/webhook", verifyClerkWebhook, async (req, res) => {
  const { type, data } = req.clerkPayload;

  if (type === "user.created") {
    const { id, email_addresses, first_name, last_name } = data;

    try {
      const user = await User.create({
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName: first_name,
        lastName: last_name,
      });
      return res.status(201).json({ message: "User created", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create user" });
    }
  }

  res.status(200).json({ message: "Webhook processed" });
});

module.exports = router;
