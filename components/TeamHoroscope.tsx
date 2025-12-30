
import React, { useState, useEffect, useRef } from 'react';
import { TEAM_DNA } from '../constants';
import { Sparkles, Brain, Hammer, Heart, Megaphone, Star, Loader2 } from 'lucide-react';

export const TeamHoroscope: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false);

  const astrologerAvatarUrl = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=256&h=256&auto=format&fit=crop";

  const staticHoroscope = `Звёзды (и Jira) говорят:
в новом году наш код будет работать даже на калькуляторах —
стабильно, быстро и без лишнего шума.

Сильное Исполнение позволит сворачивать горы до обеда,
Стратегия — выстраивать единую финансово-нефинансовую платформу,
а ИИ — понимать запросы, находить нужное
и помогать совершать операции в один клик.

Совет года от Вселенной:
меньше сомнений, больше масштаба.
Хвалим себя громче — мы это точно заслужили.

2026 — год Влияния. ✨`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded.current) {
          hasLoaded.current = true;
          setTimeout(() => {
            setAnimateBars(true);
            setLoading(false);
          }, 800);
        }
      },
      { threshold: 0.1 }
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
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-neon-purple animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">ДНК Команды</h2>
          </div>

          <div className="space-y-8">
            {[TEAM_DNA.executing, TEAM_DNA.strategic, TEAM_DNA.relationship, TEAM_DNA.influencing].map((dna, idx) => {
              const Icon = idx === 0 ? Hammer : idx === 1 ? Brain : idx === 2 ? Heart : Megaphone;
              const barColorClass = dna.color.split(' ')[0];
              
              return (
                <div key={dna.label} className="group">
                  <div className="flex justify-between items-end mb-3 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-2 text-gray-300">
                        <Icon className={`w-4 h-4 ${barColorClass.replace('bg-', 'text-')}`} /> 
                        {dna.label}
                    </span>
                    <span className={barColorClass.replace('bg-', 'text-')}>{dna.value}</span>
                  </div>
                  <div className="h-3 bg-gray-900/80 rounded-full overflow-hidden relative border border-white/5">
                    <div 
                        className={`h-full ${barColorClass} dna-bar-fill relative`} 
                        style={{ width: animateBars ? `${getPercent(dna.value)}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ width: '100px' }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center border-l border-white/5 pl-0 lg:pl-12 pt-8 lg:pt-0 min-h-[350px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-12">
               <Loader2 className="text-neon-purple animate-spin w-10 h-10" />
               <h3 className="text-neon-purple font-mono text-base animate-pulse uppercase tracking-[0.4em] font-bold">
                 DATA_SYNC_ACTIVE...
               </h3>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full border-2 border-neon-purple p-1 bg-black overflow-hidden shadow-[0_0_30px_rgba(188,19,254,0.3)]">
                         <img src={astrologerAvatarUrl} alt="Astrologer" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-neon-purple font-display text-xl md:text-2xl flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter">
                          <Star className="w-6 h-6 fill-neon-purple" /> 
                          Астральный Прогноз
                      </h3>
                    </div>
                </div>
                <div className="prose prose-invert bg-white/[0.03] p-6 rounded-xl border border-white/10 relative">
                    <div className="text-sm md:text-base text-gray-200 font-serif italic space-y-4 relative z-10 leading-relaxed whitespace-pre-wrap">
                        {staticHoroscope}
                    </div>
                    <p className="text-[10px] text-neon-purple font-mono mt-8 text-right uppercase tracking-[0.2em] font-bold">— Offline Advisor</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
