const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");

// Get analysis result
router.get("/:reportId", authMiddleware, async (req, res) => {
  try {
    const doc = await db.collection("analysisResults")
      .doc(req.params.reportId).get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get health score
router.get("/score/:reportId", authMiddleware, async (req, res) => {
  try {
    const doc = await db.collection("reports")
      .doc(req.params.reportId).get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ healthScore: doc.data().healthScore });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
