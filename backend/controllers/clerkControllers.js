const User = require("../models/userModel");

const handleUserCreated = async (req, res) => {
  const { id, email_addresses, first_name, last_name, profile_image_url } =
    req.body;

  try {
    const existingUser = await User.findOne({ clerkId: id });

    if (!existingUser) {
      const newUser = await User.create({
        clerkId: id,
        email: email_addresses[0]?.email_address,
        firstName: first_name,
        lastName: last_name,
        profileImage: profile_image_url,
      });
      console.log("New User Created:", newUser);
    }

    res.status(200).json({ message: "User created/updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleUserDeleted = async (req, res) => {
  const { id } = req.body;

  try {
    await User.findOneAndDelete({ clerkId: id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleUserCreated,
  handleUserDeleted,
};
