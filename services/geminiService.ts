import { GoogleGenAI } from "@google/genai";

// Context to feed the AI about Sanjarbek
const PORTFOLIO_CONTEXT = `
Siz Sanjarbek Otabekovning shaxsiy portfoliosidagi AI yordamchisiz.
Sanjarbek haqida ma'lumotlar:
- Ism: Sanjarbek Otabekov
- Kasbi: Senior Full Stack Dasturchi (Software Engineer)
- Tajriba: 5+ yil
- Asosiy texnologiyalar: React, TypeScript, Node.js, Python, AWS, Docker, Tailwind CSS.
- Qiziqishlari: Sun'iy intellekt (AI), Open Source loyihalar, Kiberxavfsizlik.
- Maqsad: Murakkab muammolarga innovatsion yechimlar topish va foydali dasturiy mahsulotlar yaratish.
- Aloqa: sanjarbek@example.com

Sizning vazifangiz: Foydalanuvchilarning Sanjarbek haqidagi savollariga qisqa, lunda va professional javob berish. O'zbek tilida gapiring. Agar texnik savol bo'lsa, aniq javob bering.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    // Guidelines: API key must be obtained exclusively from process.env.API_KEY
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key is missing in process.env.API_KEY");
      return "API kaliti topilmadi. Tizim sozlamalarini tekshiring.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Guidelines: Use 'gemini-3-flash-preview' for basic text tasks.
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
        temperature: 0.7,
      }
    });

    // Guidelines: Use the .text property accessor
    return response.text || "Kechirasiz, javob olishda xatolik yuz berdi.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hozirda AI xizmati ishlamayapti. Iltimos, keyinroq urinib ko'ring.";
  }
};