// Note: For a hackathon, you can use the Gemini API or OpenAI API.
// Make sure to put your API key in your .env file as VITE_AI_API_KEY!

const API_KEY = import.meta.env.VITE_AI_API_KEY;

export const analyzeMedicalText = async (extractedText) => {
  try {
    // Example using a generic fetch (adapt to your chosen LLM's exact endpoint)
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an AI Clinical Assistant. Analyze this medical report text and extract key biomarkers, flag anomalies, and provide a short summary. Return ONLY JSON format. \n\nReport Text: ${extractedText}`
          }]
        }]
      })
    });
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Analysis Failed:", error);
    return null;
  }
};
