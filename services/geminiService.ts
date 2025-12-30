
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
 * Generates an AI avatar for a character using the image model.
 */
export const generateCharacterAvatar = async (description: string): Promise<string | null> => {
  if (!process.env.API_KEY) return null;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: description }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};
