import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";

// Initialize the API client
const ai = new GoogleGenAI({});

async function run() {
  console.log("Asking Gemini for all targets...");
  const prompt = `Give me an exhaustive list of ALL targets killed by Agent 47 in the Hitman video game franchise (from Codename 47 to Hitman 3, including spin-offs if any).
Please return them strictly as a valid JSON array of objects, with no markdown formatting around it (just the JSON string).
Each object should have the following structure:
{
  "name": "Target Name",
  "role": "Their role/profession or title",
  "actorType": "target",
  "description": "A very brief 1-sentence description.",
  "details": "A very brief 1-sentence detail of their death."
}

Only return characters who are actual assassination targets in the games. Try to include as many as possible (really, all of them). Output only the JSON array.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "";
    let jsonStr = text.trim();
    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.substring(7);
      if (jsonStr.endsWith('```')) jsonStr = jsonStr.substring(0, jsonStr.length - 3);
    } else if (jsonStr.startsWith('```')) {
        jsonStr = jsonStr.substring(3);
        if (jsonStr.endsWith('```')) jsonStr = jsonStr.substring(0, jsonStr.length - 3);
    }
    
    fs.writeFileSync("targets_output.json", jsonStr);
    console.log("Generated targets_output.json");
  } catch (err) {
    console.error("Failed:", err);
  }
}
run();
