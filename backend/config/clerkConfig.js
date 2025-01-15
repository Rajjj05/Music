const { Webhook } = require("@clerk/clerk-sdk-node");

const verifyClerkWebhook = (req, res, next) => {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    const webhook = new Webhook(webhookSecret);
    req.clerkPayload = webhook.verifyPayload(req.body, req.headers);
    next();
  } catch (error) {
    console.error("Webhook verification failed:", error);
    res.status(400).json({ error: "Invalid webhook payload" });
  }
};

module.exports = verifyClerkWebhook;
