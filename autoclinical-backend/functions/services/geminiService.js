const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Analyze medical report and extract data
const analyzeReport = async (extractedText) => {
  const prompt = `
    You are a medical AI assistant. Analyze this medical report text and return a JSON object with:
    - patientName
    - age
    - gender
    - metrics: { glucose, bloodPressure, cholesterol, hemoglobin, bmi }
    - alerts: [ { field, message, severity (low|moderate|high) } ]
    - healthScore: number between 0-100
    - riskLevel: Low | Moderate | High
    - aiSummary: brief explanation
    - tags: array of condition tags

    Medical Report:
    ${extractedText}

    Return only valid JSON, no extra text.
  `;
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return JSON.parse(text);
};

// Generate insights from multiple reports
const generateInsights = async (allReportsData) => {
  const prompt = `
    You are a medical AI assistant. Analyze these multiple medical reports data 
    and return a JSON array of insights. Each insight should have:
    - type: trend | anomaly | correlation
    - metric: the health metric name
    - fromValue: starting value
    - toValue: current value
    - description: clear explanation
    - iconType: up | down | warning | check | bulb

    Reports Data:
    ${JSON.stringify(allReportsData)}

    Return only valid JSON array, no extra text.
  `;
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return JSON.parse(text);
};

// AI chatbot handler
const chat = async (userMessage, history, reportContext) => {
  const contextPrompt = reportContext
    ? `You have access to this patient report: ${reportContext}\n\n`
    : "";

  const historyText = history
    .map(h => `${h.role}: ${h.content}`)
    .join("\n");

  const prompt = `
    You are AutoClinical AI Health Assistant.
    You help patients understand their medical reports, 
    suggest precautions, and answer health questions clearly.
    Always remind users to consult a doctor for medical decisions.

    ${contextPrompt}
    Previous conversation:
    ${historyText}

    User: ${userMessage}
    Assistant:
  `;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

module.exports = { analyzeReport, generateInsights, chat };
