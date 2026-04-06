const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");
const geminiService = require("../services/geminiService");
const ocrService = require("../services/ocrService");

// Trigger processing
router.post("/trigger", authMiddleware, async (req, res) => {
  try {
    const { reportId, storageUrl } = req.body;
    await db.collection("reports").doc(reportId).update({
      status: "processing"
    });
    const extractedText = await ocrService.extractText(storageUrl);
    const analysisData = await geminiService.analyzeReport(extractedText);
    await db.collection("analysisResults").doc(reportId).set({
      ...analysisData,
      processedAt: new Date().toISOString()
    });
    await db.collection("reports").doc(reportId).update({
      status: "completed",
      healthScore: analysisData.healthScore,
      riskLevel: analysisData.riskLevel
    });
    res.status(200).json({ message: "Processing complete", reportId });
  } catch (error) {
    await db.collection("reports").doc(req.body.reportId).update({
      status: "error"
    });
    res.status(500).json({ error: error.message });
  }
});

// Get processing status
router.get("/status/:reportId", authMiddleware, async (req, res) => {
  try {
    const doc = await db.collection("reports").doc(req.params.reportId).get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ status: doc.data().status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
