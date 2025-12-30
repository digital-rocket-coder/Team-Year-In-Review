import React from 'react';
import { TEAM_DNA } from '../constants';
import { Sparkles, Brain, Hammer, Heart, Megaphone, Star } from 'lucide-react';

export const TeamHoroscope: React.FC = () => {
  const maxVal = Math.max(
    TEAM_DNA.executing.value,
    TEAM_DNA.influencing.value,
    TEAM_DNA.relationship.value,
    TEAM_DNA.strategic.value
  );

  const getPercent = (val: number) => (val / maxVal) * 100;

  return (
    <div className="glass-card p-8 rounded-2xl border border-neon-purple/30 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple/20 blur-[80px] rounded-full" />

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Left: DNA Viz */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-neon-purple animate-pulse" />
            <h2 className="text-3xl font-display font-bold text-white">ДНК Команды</h2>
          </div>

          <div className="space-y-6">
            {/* Executing */}
            <div className="group">
              <div className="flex justify-between items-end mb-2 text-sm font-mono">
                <span className="flex items-center gap-2 text-gray-300">
                    <Hammer className="w-4 h-4 text-neon-purple" /> {TEAM_DNA.executing.label}
                </span>
                <span className="text-neon-purple font-bold">{TEAM_DNA.executing.value}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className={`h-full ${TEAM_DNA.executing.color.split(' ')[0]} transition-all duration-1000 ease-out group-hover:brightness-125`} 
                    style={{ width: `${getPercent(TEAM_DNA.executing.value)}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{TEAM_DNA.executing.desc}</p>
            </div>

            {/* Strategic */}
            <div className="group">
              <div className="flex justify-between items-end mb-2 text-sm font-mono">
                <span className="flex items-center gap-2 text-gray-300">
                    <Brain className="w-4 h-4 text-red-500" /> {TEAM_DNA.strategic.label}
                </span>
                <span className="text-red-500 font-bold">{TEAM_DNA.strategic.value}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className={`h-full ${TEAM_DNA.strategic.color.split(' ')[0]} transition-all duration-1000 ease-out group-hover:brightness-125`} 
                    style={{ width: `${getPercent(TEAM_DNA.strategic.value)}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{TEAM_DNA.strategic.desc}</p>
            </div>

            {/* Relationship */}
            <div className="group">
              <div className="flex justify-between items-end mb-2 text-sm font-mono">
                <span className="flex items-center gap-2 text-gray-300">
                    <Heart className="w-4 h-4 text-neon-blue" /> {TEAM_DNA.relationship.label}
                </span>
                <span className="text-neon-blue font-bold">{TEAM_DNA.relationship.value}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className={`h-full ${TEAM_DNA.relationship.color.split(' ')[0]} transition-all duration-1000 ease-out group-hover:brightness-125`} 
                    style={{ width: `${getPercent(TEAM_DNA.relationship.value)}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{TEAM_DNA.relationship.desc}</p>
            </div>

             {/* Influencing */}
             <div className="group">
              <div className="flex justify-between items-end mb-2 text-sm font-mono">
                <span className="flex items-center gap-2 text-gray-300">
                    <Megaphone className="w-4 h-4 text-yellow-500" /> {TEAM_DNA.influencing.label}
                </span>
                <span className="text-yellow-500 font-bold">{TEAM_DNA.influencing.value}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                <div 
                    className={`h-full ${TEAM_DNA.influencing.color.split(' ')[0]} transition-all duration-1000 ease-out group-hover:brightness-125`} 
                    style={{ width: `${getPercent(TEAM_DNA.influencing.value)}%` }}
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-red-500 animate-pulse" style={{ left: `${getPercent(TEAM_DNA.influencing.value)}%`}} title="Critical Level" />
              </div>
               <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                   <AlertIcon /> Зона роста: мы не умеем "продавать" себя
               </p>
            </div>
          </div>
        </div>

        {/* Right: Static Horoscope */}
        <div className="flex-1 flex flex-col justify-center border-l border-white/10 pl-0 lg:pl-12 pt-8 lg:pt-0">
             <div className="animate-float">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    {/* Astrologer Photo */}
                    <div className="w-24 h-24 rounded-full border-2 border-neon-purple p-1 relative group overflow-hidden bg-black shrink-0 shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                         {/* TODO: Замените src на URL фото, которое вы прислали */}
                         <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=AstrologerGirl&backgroundColor=c0aede&clothing=collarAndSweater&eyebrows=default&eyes=happy&hair=shortHair&mouth=smile&top=shortHair" 
                            alt="Корпоративный Астролог" 
                            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    
                    <h3 className="text-neon-purple font-display text-2xl flex items-center gap-3">
                        <Star className="w-6 h-6 fill-neon-purple" /> 
                        Гороскоп на 2026
                    </h3>
                </div>
                
                <div className="prose prose-invert bg-white/5 p-6 rounded-xl border border-white/5 relative">
                    {/* Decorative quote mark */}
                    <div className="absolute -top-3 -left-2 text-neon-purple opacity-30 text-6xl leading-none select-none">"</div>
                    
                    <p className="text-lg text-gray-200 font-serif italic mb-4 relative z-10">
                        Звезды (и Jira) говорят: в новом году наш код будет работать даже на калькуляторах. 
                    </p>
                    <p className="text-lg text-gray-200 font-serif italic mb-4 relative z-10">
                         Наше мощное <b>Исполнение (68)</b> позволит сворачивать горы до обеда, а <b>Стратегия (60)</b> — выбирать правильные горы.
                    </p>
                    <p className="text-lg text-gray-200 font-serif italic mb-4 relative z-10">
                        ⚠️ Осторожно: низкое <b>Влияние</b> может привести к тому, что о наших подвигах узнают только логи сервера. 
                        <b>Совет года:</b> учимся хвалить себя громче, иначе Вселенная подумает, что мы просто скромничаем.
                    </p>
                    <p className="text-md text-neon-purple font-mono mt-6 text-right">
                        — Ваш Agile-Астролог
                    </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-500 uppercase">P.S. Баги боятся нас больше, чем ретроградного Меркурия.</span>
                    <span className="text-xs font-mono text-neon-purple uppercase animate-pulse">Status: Prophecy Loaded</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);