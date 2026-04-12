import express from "express";
import { signup, login } from "../controllers/authController.js";
import User from "../models/User.js";          // ✅ ADD THIS
import bcrypt from "bcryptjs";                // ✅ ADD THIS
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";  // ✅ ADD THIS

const router = express.Router();

// 🔹 AUTH
router.post("/signup", signup);
router.post("/login", login);



// 🔹 FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({
    email: email.toLowerCase()
});

    // ✅ secure token
    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    await user.save();

    const resetLink = `${process.env.CLIENT_URL}/reset/${token}`;

    // ✅ EMAIL CONTENT
    const html = `
      <h2>Password Reset Request</h2>
      <p>Dear ${user.name || "Guest"},</p>

      <p>You requested to reset your password.</p>

      <p>Click the link below to reset:</p>
      <a href="${resetLink}" target="_blank">${resetLink}</a>

      <br/><br/>
      <p>If you didn’t request this, ignore this email.</p>

      <p>Regards,<br/>Hotel Seavora</p>
    `;

    await sendEmail(user.email, "Reset Your Password", html);

    res.json("Reset email sent successfully");

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

// 🔹 RESET PASSWORD
router.post("/reset-password/:token", async (req, res) => {
  try {
    const user = await User.findOne({ resetToken: req.params.token });

    if (!user) return res.status(400).json("Invalid token");

    const hashed = await bcrypt.hash(req.body.password, 10);

    user.password = hashed;
    user.resetToken = null;

    await user.save();

    res.json("Password updated successfully");

  } catch (err) {
    console.log(err)
    res.status(500).json("Server error");
  }
});

export default router;