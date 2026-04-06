const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase.config");
const authMiddleware = require("../middleware/authMiddleware");
const geminiService = require("../services/geminiService");

// Send message to AI
router.post("/message", authMiddleware, async (req, res) => {
  try {
    const { message, reportId } = req.body;
    const uid = req.user.uid;

    // Get previous chat history for context
    const historySnap = await db.collection("chatHistory")
      .doc(uid).collection("messages")
      .orderBy("timestamp", "asc")
      .limitToLast(10)
      .get();

    const history = historySnap.docs.map(doc => doc.data());

    // Get report context if reportId provided
    let reportContext = "";
    if (reportId) {
      const reportDoc = await db.collection("analysisResults")
        .doc(reportId).get();
      if (reportDoc.exists) {
        reportContext = JSON.stringify(reportDoc.data());
      }
    }

    // Call Gemini AI
    const aiReply = await geminiService.chat(message, history, reportContext);

    // Save user message
    await db.collection("chatHistory").doc(uid)
      .collection("messages").add({
        role: "user",
        content: message,
        timestamp: new Date().toISOString(),
        linkedReportId: reportId || null
      });

    // Save AI reply
    await db.collection("chatHistory").doc(uid)
      .collection("messages").add({
        role: "assistant",
        content: aiReply,
        timestamp: new Date().toISOString(),
        linkedReportId: reportId || null
      });

    res.status(200).json({ reply: aiReply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get chat history
router.get("/history", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snap = await db.collection("chatHistory")
      .doc(uid).collection("messages")
      .orderBy("timestamp", "asc")
      .get();
    const messages = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear chat history
router.delete("/history", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snap = await db.collection("chatHistory")
      .doc(uid).collection("messages").get();
    const batch = db.batch();
    snap.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    res.status(200).json({ message: "Chat history cleared" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
