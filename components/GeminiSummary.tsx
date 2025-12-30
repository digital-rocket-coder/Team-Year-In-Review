
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareQuote, Quote, Loader2, Scan, Cpu } from 'lucide-react';

export const GeminiSummary: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pavelsAvatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=PavelNaumov&topProbability=0&glasses=round&facialHair=beardLight&facialHairProbability=100&skinColor=f8d25c&backgroundColor=0a0a0a";

  const staticSummary = `Команда, это был легендарный год! 🚀

Мы пробили планку в 80 миллиардов событий и ворвались в Топ-3 Markswebb. 99,99% Crash Free — это уровень, о котором другие только мечтают. Вы выловили 14 000 багов и сделали продукт, которым пользуются миллионы.

В 2026-м году мы не сбавляем темп. Наша цель — абсолютное лидерство и идеальный код. Горжусь работать с вами. Вы — настоящие рок-звезды IT!`;

  useEffect(() => {
    // Имитируем небольшую задержку "анализа" для атмосферы
    const timer = setTimeout(() => {
      setLoading(false);
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTyping && !loading) {
      let index = 0;
      
      const typeNextChar = () => {
        if (index < staticSummary.length) {
          setDisplayedText(staticSummary.slice(0, index + 1));
          index++;
          // Пауза чуть длиннее на знаках препинания для естественности
          const char = staticSummary[index - 1];
          const delay = char === '.' || char === '!' || char === '?' ? 400 : 20;
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
    <div className="glass-card p-10 md:p-14 rounded-[40px] border-t-8 border-t-neon-blue relative overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,243,255,0.15)]">
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes scanline-avatar {
            0% { top: 0%; }
            100% { top: 100%; }
          }
          @keyframes glitch-avatar {
            0% { transform: translate(0); filter: hue-rotate(0deg); }
            10% { transform: translate(-3px, 1px); filter: hue-rotate(90deg); }
            20% { transform: translate(3px, -1px); filter: hue-rotate(180deg); }
            30% { transform: translate(-1px, 2px); filter: hue-rotate(270deg); }
            40% { transform: translate(0); filter: hue-rotate(0deg); }
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
          .avatar-scan {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background: #00f3ff;
            box-shadow: 0 0 15px #00f3ff, 0 0 5px #fff;
            z-index: 30;
            animation: scanline-avatar 3s linear infinite;
          }
          .glitch-active {
             animation: glitch-avatar 0.25s infinite;
          }
          .stud-earring {
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 6px white, 0 0 2px rgba(0, 243, 255, 0.8);
            position: absolute;
            z-index: 45;
          }
        `}
      </style>

      {/* Background decoration */}
      <div className="absolute top-10 right-10 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity rotate-12">
        <MessageSquareQuote size={200} />
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 relative z-10">
        {/* Аватар руководителя */}
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="relative group/avatar">
            
            <div className="absolute -top-4 -left-4 text-neon-blue/40 animate-pulse">
              <Scan size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 text-neon-blue/20">
              <Cpu size={20} />
            </div>

            <div className="w-44 h-44 rounded-[48px] border-2 border-neon-blue/50 p-1.5 bg-[#050505] transition-all duration-700 shadow-[0_0_50px_rgba(0,243,255,0.2)] group-hover/avatar:border-neon-blue">
                <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#080808] flex items-center justify-center border border-white/10 relative">
                  
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="avatar-scan opacity-50"></div>
                  </div>

                  <div className="stud-earring left-[14%] top-[48%]"></div>
                  <div className="stud-earring right-[14%] top-[48%]"></div>

                  <div className={`w-full h-full flex items-center justify-center transition-all duration-500 group-hover/avatar:glitch-active`}>
                    <img 
                        src={pavelsAvatarUrl} 
                        alt="Lead Avatar" 
                        className="w-[140%] h-[140%] object-cover translate-y-6 select-none pointer-events-none"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-neon-blue/30 shadow-[0_0_20px_rgba(0,243,255,0.3)] z-40">
                    <div className="relative">
                      <div className="w-4 h-4 bg-neon-green rounded-full shadow-[0_0_15px_#0aff00] animate-pulse"></div>
                    </div>
                </div>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left space-y-1">
            <h3 className="text-2xl font-bold font-display text-white uppercase tracking-tight">Павел Наумов</h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff] animate-pulse"></span>
               <p className="text-neon-blue text-[11px] font-mono uppercase tracking-[0.3em] font-bold">LEGENDARY_CORE_LEAD</p>
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
                              <span className="tracking-[0.5em] uppercase text-xs font-bold">PREPARING_EXECUTIVE_VOICE...</span>
                          </div>
                          <div className="space-y-4">
                              <div className="h-4 bg-white/5 rounded-full w-full"></div>
                              <div className="h-4 bg-white/5 rounded-full w-[95%]"></div>
                              <div className="h-4 bg-white/5 rounded-full w-[80%]"></div>
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
               <div className="flex gap-2">
                  <div className="w-1.5 h-4 bg-neon-blue shadow-[0_0_8px_#00f3ff]"></div>
                  <div className="w-1.5 h-4 bg-neon-blue/40"></div>
                  <div className="w-1.5 h-4 bg-neon-blue/10"></div>
               </div>
               <div className="flex flex-col items-end">
                 <span className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.4em] font-bold">
                   {isTyping ? 'UPLINK_ACTIVE' : 'MESSAGE_DELIVERED'}
                 </span>
                 <span className="text-[8px] font-mono text-gray-600">SOURCE: DIRECT_LEAD_COMMUNICATION</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
