
import { GoogleGenAI } from "@google/genai";
import { ALL_STATS, APP_CONFIG, TEAM_DNA } from "../constants";

export const generateYearSummary = async (): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Unable to generate AI summary.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const statsStr = ALL_STATS.map(d => `${d.label}: ${d.value} ${d.subValue || ''}`).join(', ');

  const prompt = `
    Ты — P.N., харизматичный и амбициозный руководитель этой IT-команды (Team Core).
    Сейчас конец ${APP_CONFIG.year} года. Мы подводим итоги.
    
    Вот наши факты за год:
    ${statsStr}
    
    Твоя задача:
    Напиши короткую, мощную и эмоциональную речь (пожелание) для своей команды.
    
    Как писать:
    1. Тон: Гордый, драйвовый, лидерский, немного "гиковский". Ты ценишь людей больше цифр, но цифры тебя восхищают.
    2. Обязательно подсвети главные победы: Markswebb Top-3, 99.99% Crash Free и то, что мы выловили 14 000 багов.
    3. Используй "мы", "команда", "бандиты" или "рок-звезды".
    4. Закончи эпичным призывом на 2026 год.
    
    Формат: Только текст, без Markdown. Максимум 4-5 предложений.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Связь с командным центром прервана. Но вы и так знаете, что вы лучшие!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI перегружен крутостью ваших результатов. Попробуйте еще раз.";
  }
};

export const queryTerminalData = async (query: string): Promise<string> => {
  if (!process.env.API_KEY) return "ERROR: API_KEY_MISSING";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const statsStr = ALL_STATS.map(d => `${d.label}: ${d.value}`).join(', ');

  const prompt = `
    Ты — бортовой компьютер системы TEAM_CORE v4.0.5. 
    Твоя база данных содержит итоги 2025 года: ${statsStr}.
    
    Пользователь вводит запрос: "${query}"
    
    Твои инструкции:
    1. Отвечай кратко, в стиле хакерского терминала.
    2. Используй только предоставленные данные. Если данных нет, отвечай "DATA_NOT_FOUND".
    3. Если спрашивают про "лучшего" или "мемы", отвечай с юмором, но ссылаясь на цифры (например, про 16 000 литров кофе).
    4. Твой тон: холодный, аналитический, с легким киберпанк-налетом.
    
    Максимальная длина ответа: 200 символов. Без Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text?.trim() || "SYSTEM_IDLE";
  } catch (error) {
    return "CONNECTION_INTERRUPTED";
  }
};

export const generateHoroscope = async (): Promise<string> => {
    if (!process.env.API_KEY) {
      return "Звезды не видят API KEY.";
    }
  
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Ты — мистический AI-астролог, который специализируется на корпоративной ДНК и психотипах команд (CliftonStrengths).
      
      ДНК нашей команды:
      1. Исполнение: ${TEAM_DNA.executing.value}.
      2. Стратегическое мышление: ${TEAM_DNA.strategic.value}.
      3. Построение отношений: ${TEAM_DNA.relationship.value}.
      4. Влияние: ${TEAM_DNA.influencing.value}. (Это наша зона роста).
  
      Задача:
      Составь ироничный, смешной "Гороскоп команды на 2026 год".
      Смесь технарского жаргона, астрологии и корпоративного юмора.
      
      Формат: Только 3-4 предложения. Максимально емко.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      return response.text || "Звезды сложились в `undefined`. Попробуйте позже.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Космические помехи. Астролог ушел в астрал.";
    }
  };

/**
 * Generates a high-quality AI avatar using Gemini 3 Pro Image.
 * Requires a selected API key in the environment.
 */
export const generateCharacterAvatar = async (description: string): Promise<string | null> => {
  // We create a new instance right before the call to ensure the latest selected key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: description }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error: any) {
    console.error("Image Generation Error:", error);
    // Handle specific "entity not found" error by throwing it up to reset key selection state
    if (error?.message?.includes("Requested entity was not found")) {
      throw new Error("KEY_RESET_REQUIRED");
    }
    return null;
  }
};
