
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareQuote, Quote, Loader2, Snowflake, Zap, Target } from 'lucide-react';

export const GeminiSummary: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const staticSummary = `Команда, это был легендарный год! 🚀

Мы пробили планку в 80 миллиардов событий и ворвались в Топ-3 Markswebb. 99,99% Crash Free — это уровень, о котором другие только мечтают. Вы выловили 14 000 багов и сделали продукт, которым пользуются миллионы.

В 2026-м году мы не сбавляем темп. Наша цель — абсолютное лидерство и идеальный код. Горжусь работать с вами. Вы — настоящие рок-звезды IT!`;

  useEffect(() => {
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
          @keyframes rotate-hud {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes beard-glow {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(0, 243, 255, 0.4)); }
            50% { filter: drop-shadow(0 0 15px rgba(0, 243, 255, 0.8)); }
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
          .hud-ring {
            position: absolute;
            inset: -15px;
            border: 1px dashed rgba(0, 243, 255, 0.2);
            border-radius: 60px;
            animation: rotate-hud 25s linear infinite;
            pointer-events: none;
          }
          .cyber-santa-beard {
            animation: beard-glow 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background decoration */}
      <div className="absolute top-10 right-10 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity rotate-12">
        <MessageSquareQuote size={200} />
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 relative z-10">
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="relative">
            <div className="hud-ring"></div>
            
            <div className="w-48 h-48 rounded-[52px] border-2 border-neon-blue/30 p-2 bg-gradient-to-br from-[#0a0a0a] to-[#151515] transition-all duration-700 shadow-[0_0_60px_rgba(0,243,255,0.1)] group-hover:border-neon-blue relative overflow-hidden flex items-center justify-center">
              <div className="w-full h-full rounded-[44px] overflow-hidden bg-[#0c0c0c] relative flex items-center justify-center">
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="avatar-scan opacity-20"></div>
                </div>
                
                {/* SVG Character Pavel Santa */}
                <svg viewBox="0 0 200 200" className="w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                  {/* Background Circle Gradient */}
                  <defs>
                    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1a1a1a" />
                      <stop offset="100%" stopColor="#050505" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" />
                  
                  {/* Body (Red Suit) */}
                  <path d="M40,160 Q100,140 160,160 L160,200 L40,200 Z" fill="#D32F2F" />
                  <path d="M95,155 L105,155 L105,200 L95,200 Z" fill="white" /> {/* Trim */}
                  
                  {/* Head / Face */}
                  <circle cx="100" cy="90" r="45" fill="#FFD54F" fillOpacity="0.9" />
                  
                  {/* Beard (The Cyber Beard) */}
                  <path 
                    className="cyber-santa-beard"
                    d="M60,95 Q100,160 140,95 Q140,85 100,85 Q60,85 60,95 Z" 
                    fill="white" 
                  />
                  
                  {/* Mustache */}
                  <path d="M80,105 Q100,115 120,105 Q120,95 100,100 Q80,95 80,105 Z" fill="#F5F5F5" />
                  
                  {/* Eyes (Cyber Blue) */}
                  <circle cx="85" cy="85" r="4" fill="#00f3ff" />
                  <circle cx="115" cy="85" r="4" fill="#00f3ff" />
                  <path d="M80,78 L90,78" stroke="#00f3ff" strokeWidth="1" opacity="0.5" />
                  <path d="M110,78 L120,78" stroke="#00f3ff" strokeWidth="1" opacity="0.5" />
                  
                  {/* Hat */}
                  <path d="M55,75 Q100,20 145,75" fill="#D32F2F" />
                  <path d="M50,70 Q100,60 150,70 L150,85 Q100,75 50,85 Z" fill="white" />
                  <circle cx="150" cy="70" r="10" fill="white" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
              </div>

              <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-neon-blue/30 shadow-[0_0_25px_rgba(0,243,255,0.4)] z-40 animate-pulse">
                  <Snowflake size={20} className="text-neon-blue" />
              </div>
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-max">
               <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_8px_#0aff00]"></span>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-bold">CORE_ARCHITECT_SANTA</span>
               </div>
            </div>
          </div>

          <div className="mt-16 text-center md:text-left space-y-1">
            <h3 className="text-2xl font-bold font-display text-white uppercase tracking-tight">Павел Наумов</h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff] animate-pulse"></span>
               <p className="text-neon-blue text-[11px] font-mono uppercase tracking-[0.3em] font-bold">LEGENDARY_CORE_LEAD</p>
            </div>
          </div>
        </div>

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
                              <span className="tracking-[0.5em] uppercase text-xs font-bold">DECRYPTING_EXECUTIVE_VOICE...</span>
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
                 <span className="text-[8px] font-mono text-gray-600">ID: P.NAUMOV_STABLE_SANTA</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
