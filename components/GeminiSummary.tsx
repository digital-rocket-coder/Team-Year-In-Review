
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareQuote, Quote, Loader2 } from 'lucide-react';
import { generateCharacterAvatar } from '../services/geminiService';

export const GeminiSummary: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [aiAvatar, setAiAvatar] = useState<string | null>(null);
  const [showAiAvatar, setShowAiAvatar] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to avoid namespace errors in browser environment
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const staticSummary = `Команда, это был легендарный год! 🚀

Мы пробили планку в 80 миллиардов событий и ворвались в Топ-3 Markswebb. 99,99% Crash Free — это уровень, о котором другие только мечтают. Вы выловили 14 000 багов и сделали продукт, которым пользуются миллионы.

В 2026-м году мы не сбавляем темп. Наша цель — абсолютное лидерство и идеальный код. Горжусь работать с вами. Вы — настоящие рок-звезды IT!`;

  useEffect(() => {
    const initSummary = async () => {
      setLoading(true);
      const avatarPromise = generateCharacterAvatar("A hyper-realistic 3D octane render avatar of a professional tech team lead. Bald man with a well-groomed short beard, wearing round stylish glasses. Dressed in a tactical futuristic techwear hoodie. Soft neon blue backlighting, cinematic depth of field, high-end digital art style, perfectly centered headshot.");
      
      const [avatarUrl] = await Promise.all([
        avatarPromise,
        new Promise(resolve => setTimeout(resolve, 1500)) // Быстрая загрузка логов
      ]);
      
      if (avatarUrl) {
        setAiAvatar(avatarUrl);
        setShowAiAvatar(true);
      }
      setLoading(false);
      setIsTyping(true);
    };
    initSummary();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (isTyping && !loading) {
      let index = 0;
      const fullText = staticSummary;
      
      const typeNextChar = () => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
          const delay = fullText[index - 1] === '.' || fullText[index - 1] === '!' ? 400 : 25;
          typingTimerRef.current = setTimeout(typeNextChar, delay);
        } else {
          setIsTyping(false);
        }
      };

      typeNextChar();
    }
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [isTyping, loading]);

  const memojiUrl = "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1619614486510-4W4D7U7Y9H3U9G4D8X1H/Memoji+Avatar+Glasses.png";
  const currentAvatar = showAiAvatar && aiAvatar ? aiAvatar : memojiUrl;

  return (
    <div className="glass-card p-8 rounded-2xl col-span-1 md:col-span-2 lg:col-span-4 border-t-4 border-t-neon-blue mt-8 relative overflow-hidden group">
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .cursor {
            display: inline-block;
            width: 2px;
            height: 1.2em;
            background-color: #00f3ff;
            margin-left: 4px;
            vertical-align: middle;
            animation: blink 1s step-end infinite;
          }
        `}
      </style>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        <MessageSquareQuote size={120} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Avatar Section */}
        <div className="flex flex-col items-center justify-center md:items-start min-w-[150px]">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-neon-blue/40 p-1 relative group/avatar bg-[#1a1a1a] shadow-[0_0_40px_rgba(0,243,255,0.2)] transition-all duration-500 hover:scale-105 animate-[pulse_4s_ease-in-out_infinite]">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-black relative">
                <img 
                    src={currentAvatar} 
                    alt="Павел Наумов" 
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${!showAiAvatar ? 'scale-110 translate-y-2' : 'scale-100'}`}
                />
                {loading && <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-neon-blue" /></div>}
                </div>
                <div className="absolute bottom-1 right-2 w-6 h-6 bg-neon-green rounded-full border-4 border-[#0a0a0a] shadow-[0_0_10px_#0aff00] animate-pulse"></div>
            </div>
          </div>

          <div className="mt-4 text-center md:text-left">
            <h3 className="text-xl font-bold font-display text-white uppercase tracking-tighter">Павел Наумов</h3>
            <p className="text-neon-blue text-xs font-mono uppercase tracking-widest font-bold">Team Lead / Core</p>
          </div>
        </div>

        {/* Speech Section */}
        <div className="flex-1">
            <div className="mb-4 text-neon-blue opacity-30">
                <Quote size={40} />
            </div>
            
            <div className="prose prose-invert max-w-none min-h-[150px] flex items-start">
                {loading ? (
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex items-center gap-3 text-gray-500 font-mono animate-pulse">
                            <Loader2 className="animate-spin text-neon-blue" />
                            <span className="tracking-[0.3em] uppercase text-xs font-bold">АНАЛИЗИРУЮ ЛОГИ...</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 bg-white/5 rounded w-full animate-pulse"></div>
                            <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse"></div>
                        </div>
                    </div>
                ) : (
                    <div className="text-lg md:text-xl font-light leading-relaxed text-gray-100 italic font-serif text-fit whitespace-pre-wrap">
                        {displayedText}
                        {isTyping && <span className="cursor"></span>}
                    </div>
                )}
            </div>

            <div className="mt-8 flex items-center gap-4">
               <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
               <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                 {isTyping ? 'Writing status: Active' : 'Direct Communication Link'}
               </span>
            </div>
        </div>
      </div>
    </div>
  );
};
