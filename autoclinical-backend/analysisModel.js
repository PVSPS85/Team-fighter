// Analysis result document structure
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
  alerts: [
    {
      field: "",
      message: "",
      severity: ""       // low | moderate | high
    }
  ],
  healthScore: 0,        // 0 - 100
  riskLevel: "",         // Low | Moderate | High
  aiSummary: "",
  tags: [],
  processedAt: ""
};

module.exports = { analysisModel };
