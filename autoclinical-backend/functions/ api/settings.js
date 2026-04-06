const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");

// Get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const doc = await db.collection("users").doc(uid).get();
    if (!doc.exists) return res.status(404).json({ message: "User not found" });
    res.status(200).json(doc.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { name, role } = req.body;
    await db.collection("users").doc(uid).update({ name, role });
    res.status(200).json({ message: "Profile updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update settings (dark mode, notifications)
router.put("/update", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { darkMode, notifications } = req.body;
    await db.collection("users").doc(uid).update({
      darkMode,
      notifications
    });
    res.status(200).json({ message: "Settings updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
