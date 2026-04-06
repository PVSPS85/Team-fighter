const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");

// Get dashboard stats
router.get("/stats", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const trendDoc = await db.collection("healthTrends").doc(uid).get();
    const reportsSnap = await db.collection("reports")
      .where("userId", "==", uid).get();

    const totalReports = reportsSnap.size;
    const trendData = trendDoc.exists ? trendDoc.data() : {};

    res.status(200).json({
      totalReports,
      reportsThisWeek: trendData.reportsThisWeek || 0,
      improvedCases: trendData.improvedCases || 0,
      aiConfidence: trendData.aiConfidence || 0,
      healthScore: trendData.latestScore || 0,
      riskAlerts: trendData.riskAlerts || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get 6-month health trend
router.get("/trend", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const trendDoc = await db.collection("healthTrends").doc(uid).get();
    if (!trendDoc.exists) {
      return res.status(404).json({ message: "No trend data found" });
    }
    res.status(200).json(trendDoc.data().dataPoints || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
