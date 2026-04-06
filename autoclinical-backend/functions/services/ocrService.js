const axios = require("axios");
require("dotenv").config();

// Extract text from uploaded file using OCR API
const extractText = async (storageUrl) => {
  try {
    // Download file as base64
    const response = await axios.get(storageUrl, {
      responseType: "arraybuffer"
    });
    const base64 = Buffer.from(response.data).toString("base64");
    const mimeType = response.headers["content-type"];

    // Send to OCR API (Google Vision or any OCR)
    const ocrResponse = await axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=${process.env.OCR_API_KEY}`,
      {
        requests: [
          {
            image: { content: base64 },
            features: [{ type: "DOCUMENT_TEXT_DETECTION" }]
          }
        ]
      }
    );

    const extractedText =
      ocrResponse.data.responses[0]
        .fullTextAnnotation?.text || "";

    return extractedText;
  } catch (error) {
    throw new Error("OCR extraction failed: " + error.message);
  }
};

module.exports = { extractText };
