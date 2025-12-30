
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareQuote, Quote, Loader2 } from 'lucide-react';

export const GeminiSummary: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const staticSummary = `Команда, это был легендарный год! 🚀

Мы пробили планку в 80 миллиардов событий и ворвались в Топ-3 Markswebb. 99,99% Crash Free — это уровень, о котором другие только мечтают. Вы выловили 14 000 багов и сделали продукт, которым пользуются миллионы.

В 2026-м году мы не сбавляем темп. Наша цель — абсолютное лидерство и идеальный код. Горжусь работать с вами. Вы — настоящие рок-звезды IT!`;

  // Ссылка на обновленную аватарку (Стилизованный 3D Memoji образ)
  const pavelsAvatarUrl = "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1619614486510-4W4D7U7Y9H3U9G4D8X1H/Memoji+Avatar+Glasses.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsTyping(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTyping && !loading) {
      let index = 0;
      const fullText = staticSummary;
      
      const typeNextChar = () => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
          const delay = fullText[index - 1] === '.' || fullText[index - 1] === '!' ? 450 : 20;
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

  return (
    <div className="glass-card p-10 md:p-14 rounded-[40px] border-t-8 border-t-neon-blue relative overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,243,255,0.1)]">
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
          .avatar-glow {
            filter: drop-shadow(0 0 15px rgba(0, 243, 255, 0.4));
          }
        `}
      </style>

      {/* Background decoration */}
      <div className="absolute top-10 right-10 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity rotate-12">
        <MessageSquareQuote size={200} />
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 relative z-10">
        {/* Аватар Павла Наумова */}
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="relative">
            {/* Анимированный контур аватара */}
            <div className="w-44 h-44 rounded-[48px] border-2 border-neon-blue/40 p-1.5 bg-[#080808] rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-[0_0_40px_rgba(0,243,255,0.1)]">
                <div className="w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-tr from-black via-[#0a0a0a] to-[#111] flex items-center justify-center border border-white/5 relative">
                  <img 
                      src={pavelsAvatarUrl} 
                      alt="Павел Наумов" 
                      className="w-full h-full object-cover scale-110 translate-y-3 select-none pointer-events-none transition-transform duration-1000 group-hover:scale-125 avatar-glow"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pavel&backgroundColor=0a0a0a&top=shortHair&topProbability=0&glasses=round&facialHair=beardLight&facialHairProbability=100';
                      }}
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                    <div className="w-3.5 h-3.5 bg-neon-green rounded-full shadow-[0_0_12px_#0aff00] animate-pulse"></div>
                </div>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left space-y-1">
            <h3 className="text-2xl font-bold font-display text-white uppercase tracking-tight">Павел Наумов</h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_8px_#00f3ff]"></span>
               <p className="text-neon-blue text-[11px] font-mono uppercase tracking-[0.3em] font-bold">Team Lead / Core</p>
            </div>
          </div>
        </div>

        {/* Текстовая секция */}
        <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="mb-6 text-neon-blue/20">
                  <Quote size={56} fill="currentColor" />
              </div>
              
              <div className="min-h-[220px]">
                  {loading ? (
                      <div className="flex flex-col gap-6 w-full">
                          <div className="flex items-center gap-4 text-gray-500 font-mono animate-pulse">
                              <Loader2 className="animate-spin text-neon-blue w-6 h-6" />
                              <span className="tracking-[0.5em] uppercase text-xs font-bold">RECOVERING VOICE LOGS...</span>
                          </div>
                          <div className="space-y-4">
                              <div className="h-4 bg-white/5 rounded-full w-full"></div>
                              <div className="h-4 bg-white/5 rounded-full w-[95%]"></div>
                              <div className="h-4 bg-white/5 rounded-full w-[80%]"></div>
                              <div className="h-4 bg-white/5 rounded-full w-[85%]"></div>
                          </div>
                      </div>
                  ) : (
                      <div className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] text-gray-100 italic font-serif text-fit whitespace-pre-wrap selection:bg-neon-blue selection:text-black">
                          {displayedText}
                          {isTyping && <span className="cursor"></span>}
                      </div>
                  )}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
               <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-neon-blue/40 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-neon-blue/20 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-neon-blue/10 rounded-full"></div>
               </div>
               <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">
                 {isTyping ? 'STATE: STREAMING' : 'STATE: COMPLETE'}
               </span>
            </div>
        </div>
      </div>
    </div>
  );
};
