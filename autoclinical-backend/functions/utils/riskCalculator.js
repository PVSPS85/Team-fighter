// Calculate health score based on metrics
const calculateHealthScore = (metrics) => {
  let score = 100;

  // Glucose check (normal: 70-100 mg/dL)
  if (metrics.glucose > 126) score -= 20;
  else if (metrics.glucose > 100) score -= 10;

  // Blood pressure check (normal: <120 mmHg)
  if (metrics.bloodPressure > 140) score -= 20;
  else if (metrics.bloodPressure > 120) score -= 10;

  // Cholesterol check (normal: <200 mg/dL)
  if (metrics.cholesterol > 240) score -= 15;
  else if (metrics.cholesterol > 200) score -= 8;

  // BMI check (normal: 18.5-24.9)
  if (metrics.bmi > 30) score -= 15;
  else if (metrics.bmi > 25) score -= 8;

  // Hemoglobin check (normal: 12-17 g/dL)
  if (metrics.hemoglobin < 12) score -= 10;

  return Math.max(0, score);
};

// Determine risk level from score
const getRiskLevel = (score) => {
  if (score >= 80) return "Low";
  if (score >= 60) return "Moderate";
  return "High";
};

// Generate alert messages for abnormal values
const generateAlerts = (metrics) => {
  const alerts = [];

  if (metrics.glucose > 126) {
    alerts.push({
      field: "glucose",
      message: "High glucose detected - possible diabetes risk",
      severity: "high"
    });
  }
  if (metrics.bloodPressure > 140) {
    alerts.push({
      field: "bloodPressure",
      message: "High blood pressure detected",
      severity: "high"
    });
  }
  if (metrics.cholesterol > 240) {
    alerts.push({
      field: "cholesterol",
      message: "High cholesterol detected",
      severity: "moderate"
    });
  }
  if (metrics.bmi > 30) {
    alerts.push({
      field: "bmi",
      message: "BMI indicates obesity",
      severity: "moderate"
    });
  }
  if (metrics.hemoglobin < 12) {
    alerts.push({
      field: "hemoglobin",
      message: "Low hemoglobin - possible anemia",
      severity: "moderate"
    });
  }

  return alerts;
};

module.exports = {
  calculateHealthScore,
  getRiskLevel,
  generateAlerts
};
