import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("REACT_APP_GEMINI_API_KEY is not defined in the environment");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Sorry, something went wrong.";
  }
};