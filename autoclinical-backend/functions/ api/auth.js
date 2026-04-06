const express = require("express");
const router = express.Router();
const { auth, db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");

// Register new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = await auth.createUser({ email, displayName: name });
    await db.collection("users").doc(user.uid).set({
      name,
      email,
      role: role || "Patient",
      darkMode: false,
      notifications: {
        reportDone: true,
        alerts: true,
        reminders: true
      },
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    });
    res.status(201).json({ message: "User registered", uid: user.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get current user
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const userDoc = await db.collection("users").doc(req.user.uid).get();
    res.status(200).json(userDoc.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
