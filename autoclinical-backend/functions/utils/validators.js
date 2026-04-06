// Validate age
const isValidAge = (age) => {
  return age > 0 && age < 150;
};

// Validate glucose level
const isValidGlucose = (glucose) => {
  return glucose > 0 && glucose < 1000;
};

// Validate blood pressure
const isValidBP = (bp) => {
  return bp > 0 && bp < 300;
};

// Validate cholesterol
const isValidCholesterol = (cholesterol) => {
  return cholesterol > 0 && cholesterol < 1000;
};

// Validate all metrics at once
const validateMetrics = (metrics) => {
  const errors = [];

  if (metrics.age && !isValidAge(metrics.age)) {
    errors.push({ field: "age", message: "Invalid age value" });
  }
  if (metrics.glucose && !isValidGlucose(metrics.glucose)) {
    errors.push({ field: "glucose", message: "Invalid glucose value" });
  }
  if (metrics.bloodPressure && !isValidBP(metrics.bloodPressure)) {
    errors.push({ field: "bloodPressure", message: "Invalid blood pressure" });
  }
  if (metrics.cholesterol && !isValidCholesterol(metrics.cholesterol)) {
    errors.push({ field: "cholesterol", message: "Invalid cholesterol value" });
  }

  return errors;
};

module.exports = {
  isValidAge,
  isValidGlucose,
  isValidBP,
  isValidCholesterol,
  validateMetrics
};
