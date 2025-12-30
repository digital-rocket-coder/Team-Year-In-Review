
import React, { useState, useEffect, useRef } from 'react';
import { TEAM_DNA } from '../constants';
import { Sparkles, Brain, Hammer, Heart, Megaphone, Star, Loader2, RefreshCw } from 'lucide-react';
import { generateCharacterAvatar } from '../services/geminiService';

export const TeamHoroscope: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false);

  const staticHoroscope = `Звезды (и Jira) говорят: в новом году наш код будет работать даже на калькуляторах.

Наше мощное Исполнение (68) позволит сворачивать горы до обеда, а Стратегия (60) — выбирать правильные горы.

⚠️ Осторожно: низкое Влияние может привести к тому, что о наших подвигах узнают только логи сервера.

Совет года: учимся хвалить себя громче, иначе Вселенная подумает, что мы просто скромничаем.`;

  const fetchData = async () => {
    setLoading(true);
    setAnimateBars(false);
    
    const avatarPromise = generateCharacterAvatar("A mystical futuristic cyberpunk female astrologer, purple neon aura, digital tarot cards, ethereal digital face, highly detailed, 8k, synthwave aesthetic.");
    
    // Мгновенный запуск анимации шкал ДНК
    setAnimateBars(true);
    
    // Ускоренная имитация загрузки астрального прогноза
    const [avatarUrl] = await Promise.all([
      avatarPromise,
      new Promise(resolve => setTimeout(resolve, 800))
    ]);

    if (avatarUrl) setAvatar(avatarUrl);
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Срабатывает мгновенно (threshold: 0.01)
        if (entry.isIntersecting && !hasLoaded.current) {
          hasLoaded.current = true;
          fetchData();
        }
      },
      { threshold: 0.01 } // Минимальный порог для моментального старта при скролле
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxVal = Math.max(
    TEAM_DNA.executing.value,
    TEAM_DNA.influencing.value,
    TEAM_DNA.relationship.value,
    TEAM_DNA.strategic.value
  );

  const getPercent = (val: number) => (val / maxVal) * 100;

  return (
    <div ref={sectionRef} className="glass-card p-8 rounded-2xl border border-neon-purple/30 relative overflow-hidden min-h-[500px]">
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
          .dna-bar-fill {
            transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1);
          }
        `}
      </style>
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple/20 blur-[80px] rounded-full" />

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Left: DNA Viz */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-neon-purple animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">ДНК Команды</h2>
          </div>

          <div className="space-y-8">
            {[TEAM_DNA.executing, TEAM_DNA.strategic, TEAM_DNA.relationship, TEAM_DNA.influencing].map((dna, idx) => {
              const isInfluencing = dna.label === 'Влияние';
              const Icon = idx === 0 ? Hammer : idx === 1 ? Brain : idx === 2 ? Heart : Megaphone;
              const barColorClass = dna.color.split(' ')[0];
              
              return (
                <div key={dna.label} className="group">
                  <div className="flex justify-between items-end mb-3 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-2 text-gray-300">
                        <Icon className={`w-4 h-4 ${isInfluencing ? 'text-yellow-500' : barColorClass.replace('bg-', 'text-')}`} /> 
                        {dna.label}
                    </span>
                    <span className={isInfluencing ? 'text-yellow-500' : barColorClass.replace('bg-', 'text-')}>{dna.value}</span>
                  </div>
                  <div className="h-3 bg-gray-900/80 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
                    <div 
                        className={`h-full ${barColorClass} dna-bar-fill shadow-[0_0_15px_currentColor] relative`} 
                        style={{ width: animateBars ? `${getPercent(dna.value)}%` : '0%' }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" style={{ width: '100px' }}></div>
                      
                      {/* Leading edge glow */}
                      <div className="absolute top-0 right-0 h-full w-2 bg-white blur-[2px] opacity-50"></div>
                    </div>
                    {isInfluencing && (
                      <div 
                        className="absolute top-0 h-full w-1 bg-red-500 animate-pulse shadow-[0_0_10px_red] transition-all duration-[1.5s] ease-out" 
                        style={{ left: animateBars ? `${getPercent(dna.value)}%` : '0%' }}
                      />
                    )}
                  </div>
                  {isInfluencing && (
                    <p className="text-[10px] text-red-400 mt-2 flex items-center gap-1 font-mono uppercase font-bold tracking-tighter opacity-80 animate-pulse">
                        <AlertIcon /> Критическая зона роста
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Astral Forecast */}
        <div className="flex-1 flex flex-col justify-center border-l border-white/5 pl-0 lg:pl-12 pt-8 lg:pt-0 min-h-[350px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-12">
               <div className="relative">
                  <div className="w-24 h-24 border-t-2 border-b-2 border-neon-purple rounded-full animate-spin"></div>
                  <Loader2 className="absolute inset-0 m-auto text-neon-purple animate-pulse w-10 h-10" />
               </div>
               <div className="space-y-3">
                 <h3 className="text-neon-purple font-mono text-base animate-pulse uppercase tracking-[0.4em] font-bold">
                   Сканирую звезды...
                 </h3>
               </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    {/* Astrologer Photo */}
                    <div className="w-24 h-24 rounded-full border-2 border-neon-purple p-1 relative group overflow-hidden bg-black shrink-0 shadow-[0_0_40px_rgba(188,19,254,0.4)]">
                         <img 
                            src={avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Astrologer&backgroundColor=c0aede&clothing=collarAndSweater&eyes=happy"} 
                            alt="Корпоративный Астролог" 
                            className="w-full h-full rounded-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-neon-purple font-display text-xl md:text-2xl flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter">
                          <Star className="w-6 h-6 fill-neon-purple" /> 
                          Астральный Прогноз
                      </h3>
                      <button onClick={fetchData} className="mt-1 text-[9px] font-mono text-gray-500 uppercase flex items-center gap-1 hover:text-neon-purple transition-colors mx-auto md:mx-0 group/btn">
                        <RefreshCw className="w-2 h-2 group-hover/btn:rotate-180 transition-transform duration-500" /> Перезагрузить
                      </button>
                    </div>
                </div>
                
                <div className="prose prose-invert bg-white/[0.03] p-6 rounded-xl border border-white/10 relative group hover:border-neon-purple/40 transition-colors shadow-inner">
                    <div className="absolute -top-4 -left-2 text-neon-purple opacity-20 text-7xl leading-none select-none font-serif">"</div>
                    <div className="text-sm md:text-base text-gray-200 font-serif italic space-y-4 relative z-10 text-fit leading-relaxed">
                        {staticHoroscope.split('\n\n').map((para, i) => (
                           <p key={i}>{para}</p>
                        ))}
                    </div>
                    <p className="text-[10px] text-neon-purple font-mono mt-8 text-right uppercase tracking-[0.2em] font-bold">— Ваш Agile-Астролог</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);
