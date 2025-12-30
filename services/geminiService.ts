import { GoogleGenAI } from "@google/genai";
import { ALL_STATS, APP_CONFIG, TEAM_DNA } from "../constants";

export const generateYearSummary = async (): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Unable to generate AI summary.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Format data for the prompt
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
    2. Обязательно подсвети главные победы: Markswebb Top-3, 99.99% Crash Free и то, что мы выловили 14 000 багов (значит, качество для нас — не пустой звук!).
    3. Используй "мы", "команда", "бандиты" (в хорошем смысле) или "рок-звезды".
    4. Если есть данные про кофе или встречи — пошути по-доброму, что мы выжили.
    5. Закончи эпичным призывом на 2026 год.
    
    Формат: Только текст, без Markdown заголовков. Максимум 4-5 предложений.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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
      1. Исполнение (Executing): ${TEAM_DNA.executing.value} из 100. (Мы ДЕЛАТЕЛИ. Мы пашем как кони).
      2. Стратегическое мышление (Strategic): ${TEAM_DNA.strategic.value} из 100. (Мы умные, много думаем, анализируем).
      3. Построение отношений (Relationship): ${TEAM_DNA.relationship.value} из 100. (Мы дружные, но в меру).
      4. Влияние (Influencing): ${TEAM_DNA.influencing.value} из 100. (Это наша боль. Мы НЕ умеем продавать себя, не любим политику и пушить).
  
      Задача:
      Составь ироничный, смешной, но правдивый "Гороскоп команды на 2026 год".
  
      Стиль:
      Смесь технарского жаргона, астрологии и корпоративного юмора.
      
      О чем написать:
      - Пошути про то, что мы сделаем кучу работы (высокое Исполнение) и придумаем гениальный план (высокая Стратегия), но никому об этом не скажем и будем ждать, пока заметят сами (низкое Влияние).
      - Предостереги нас от выгорания (мы слишком ответственные).
      - Дай совет: в 2026 году Меркурий в ретрограде советует нам учиться "продавать" свои фичи, иначе так и останемся непризнанными гениями.
  
      Формат: 3-4 предложения. Максимально емко и с юмором.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      
      return response.text || "Звезды сложились в `undefined`. Попробуйте позже.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Космические помехи. Астролог ушел в астрал.";
    }
  };