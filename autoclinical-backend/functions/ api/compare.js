const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");

// Compare two reports
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { earlierReportId, latestReportId } = req.body;
    const uid = req.user.uid;
    const earlier = await db.collection("analysisResults")
      .doc(earlierReportId).get();
    const latest = await db.collection("analysisResults")
      .doc(latestReportId).get();
    if (!earlier.exists || !latest.exists) {
      return res.status(404).json({ message: "Report not found" });
    }
    const e = earlier.data().metrics;
    const l = latest.data().metrics;
    const metricDiffs = Object.keys(e).map(key => ({
      metric: key,
      prev: e[key],
      curr: l[key],
      change: (((l[key] - e[key]) / e[key]) * 100).toFixed(1) + "%",
      verdict: l[key] < e[key] ? "Improved" : "Declined"
    }));
    const scoreDelta = latest.data().healthScore - earlier.data().healthScore;
    const compRef = await db.collection("comparisons").add({
      userId: uid,
      earlierReportId,
      latestReportId,
      scoreDelta,
      overallVerdict: scoreDelta >= 0 ? "Improved" : "Declined",
      metricDiffs,
      createdAt: new Date().toISOString()
    });
    res.status(200).json({ comparisonId: compRef.id, scoreDelta, metricDiffs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get comparison
router.get("/:comparisonId", authMiddleware, async (req, res) => {
  try {
    const doc = await db.collection("comparisons")
      .doc(req.params.comparisonId).get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
