// Report document structure reference
const reportModel = {
  userId: "",
  fileName: "",
  fileType: "",        // pdf | jpg | png
  storageUrl: "",
  status: "",          // uploaded | processing | completed | error
  riskLevel: "",       // Low | Moderate | High
  healthScore: 0,      // 0 - 100
  uploadedAt: ""
};

// Analysis result structure reference
const analysisModel = {
  patientName: "",
  age: 0,
  gender: "",
  metrics: {
    glucose: 0,
    bloodPressure: 0,
    cholesterol: 0,
    hemoglobin: 0,
    bmi: 0
  },
  alerts: [],
  healthScore: 0,
  riskLevel: "",
  aiSummary: "",
  tags: [],
  processedAt: ""
};

module.exports = { reportModel, analysisModel };
