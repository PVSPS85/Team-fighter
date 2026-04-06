const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");
const storageService = require("../services/firestoreService");

// Upload report
router.post("/upload", authMiddleware, async (req, res) => {
  try {
    const { fileName, fileType, storageUrl } = req.body;
    const uid = req.user.uid;
    const reportRef = await db.collection("reports").add({
      userId: uid,
      fileName,
      fileType,
      storageUrl,
      status: "uploaded",
      riskLevel: null,
      healthScore: null,
      uploadedAt: new Date().toISOString()
    });
    res.status(201).json({ reportId: reportRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all reports for user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snap = await db.collection("reports")
      .where("userId", "==", uid)
      .orderBy("uploadedAt", "desc")
      .get();
    const reports = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single report
router.get("/:reportId", authMiddleware, async (req, res) => {
  try {
    const doc = await db.collection("reports").doc(req.params.reportId).get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete report
router.delete("/:reportId", authMiddleware, async (req, res) => {
  try {
    await db.collection("reports").doc(req.params.reportId).delete();
    res.status(200).json({ message: "Report deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
