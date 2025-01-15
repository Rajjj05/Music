const crypto = require("crypto");

const clerkWebhookAuth = (req, res, next) => {
  const signature = req.headers["clerk-signature"];
  const payload = req.rawBody; // Ensure raw body is passed
  const secret = process.env.CLERK_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const hash = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("base64");

  if (hash !== signature) {
    return res.status(403).json({ message: "Invalid Clerk webhook signature" });
  }

  next();
};

module.exports = clerkWebhookAuth;
