const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");
const geminiService = require("../services/geminiService");

// Generate insights
router.post("/generate", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const reportsSnap = await db.collection("analysisResults")
      .where("userId", "==", uid).get();
    const allData = reportsSnap.docs.map(doc => doc.data());
    const insights = await geminiService.generateInsights(allData);
    const insightRef = db.collection("insights").doc(uid)
      .collection("entries");
    for (const insight of insights) {
      await insightRef.add({ ...insight, createdAt: new Date().toISOString() });
    }
    res.status(200).json({ message: "Insights generated", insights });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get insights
router.get("/", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snap = await db.collection("insights").doc(uid)
      .collection("entries").orderBy("createdAt", "desc").get();
    const insights = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(insights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
