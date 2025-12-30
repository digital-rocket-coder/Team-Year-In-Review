
import React, { useState, useEffect } from 'react';
import { 
  APP_CONFIG, 
  HIGHLIGHTS_STATS,
  PRODUCT_STATS,
  USAGE_STATS,
  QUALITY_STATS,
  TEAM_STATS,
  BUSINESS_STATS,
  FUN_STATS
} from './constants';
import { StatCard } from './components/StatCard';
import { GeminiSummary } from './components/GeminiSummary';
import { TeamHoroscope } from './components/TeamHoroscope';
import { DigitalSnow } from './components/DigitalSnow';
import { EasterEggAlina } from './components/EasterEggAlina';
import { Activity, Server, ArrowDown, Target, Zap, Coffee, BarChart3, Users, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [displayYear, setDisplayYear] = useState(2021);

  useEffect(() => {
    const targetYear = parseInt(APP_CONFIG.year);
    const startYear = 2021;
    const duration = 2000; // 2 секунды на анимацию
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Функция плавности (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentYear = Math.floor(startYear + (targetYear - startYear) * easeOutQuart);
      
      setDisplayYear(currentYear);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-blue selection:text-black overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <DigitalSnow />
      <EasterEggAlina />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-dark-bg/40 border-b border-white/5">
        <div className="font-display font-bold text-xl tracking-tighter">
          {APP_CONFIG.appName.split('_')[0]}<span className="text-neon-blue">_{APP_CONFIG.appName.split('_')[1]}</span>
        </div>
        <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
           <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_#0aff00]"></div>
           {APP_CONFIG.reportName}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 z-10 overflow-hidden">
        <div className="text-center relative">
          <div className="relative z-10">
            <h2 className="text-neon-blue font-mono text-xs md:text-sm tracking-[0.6em] uppercase mb-6 animate-[glitch_2s_infinite]">
              {APP_CONFIG.heroStatus}
            </h2>
            <h1 className="text-[100px] md:text-[240px] leading-[0.7] font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent select-none tabular-nums">
              {displayYear}
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-400 mt-8 tracking-[0.3em] font-display uppercase">
              {APP_CONFIG.heroTitle}
            </p>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4 animate-bounce opacity-50">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scroll to start</span>
            <ArrowDown className="text-neon-blue w-5 h-5" />
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-32 pb-32">
        
        {/* SECTION: HIGHLIGHTS */}
        <section className="relative z-10">
          <div className="mb-12 flex items-center gap-4 border-b border-white/5 pb-6">
            <Target className="text-neon-blue" size={32} />
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Главные Достижения</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {HIGHLIGHTS_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 100} />
             ))}
          </div>
        </section>

        {/* SECTION: PRODUCT & QUALITY (Charts removed) */}
        <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold uppercase border-l-4 border-neon-purple pl-4 flex items-center gap-3">
              Продукт и Разработки <Zap className="text-neon-purple w-5 h-5" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRODUCT_STATS.map((item, i) => (
                <StatCard key={item.id} item={item} delay={i * 80} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold uppercase border-l-4 border-neon-green pl-4 flex items-center gap-3">
              Качество и Надёжность <Activity className="text-neon-green w-5 h-5" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {QUALITY_STATS.map((item, i) => (
                <StatCard key={item.id} item={item} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: USAGE & SCALE */}
        <section className="relative z-10 space-y-12">
          <div className="flex items-center gap-4 border-b border-white/5 pb-6">
            <Users className="text-neon-blue" size={32} />
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Клиенты и использование</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {USAGE_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 70} />
             ))}
          </div>
        </section>

        {/* SECTION: BUSINESS EFFECT */}
        <section className="relative z-10 space-y-12">
          <div className="flex items-center gap-4 border-b border-white/5 pb-6">
            <BarChart3 className="text-neon-green" size={32} />
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Бизнес-эффект</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {BUSINESS_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 70} className={item.id === 'operations' ? 'md:col-span-2' : ''} />
             ))}
          </div>
        </section>

        {/* SECTION: TEAM & CULTURE */}
        <section className="relative z-10 space-y-12">
          <div className="flex items-center gap-4 border-b border-white/5 pb-6">
            <Heart className="text-neon-pink" size={32} />
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Команда и культура</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {TEAM_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 70} />
             ))}
          </div>
          <TeamHoroscope />
        </section>

        {/* SECTION: FUN WRAP-UP */}
        <section className="relative z-10">
          <div className="glass-card p-12 rounded-3xl space-y-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <Coffee className="text-neon-pink w-10 h-10 animate-float" />
              <h3 className="text-3xl font-display font-bold uppercase">«Живые и мемные»</h3>
              <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">The human side of development</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {FUN_STATS.map((item, i) => (
                <div key={item.id} className="flex flex-col items-center group">
                  <span className={`text-3xl md:text-4xl font-display font-bold mb-2 group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                    {item.value}
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase font-mono text-gray-500 tracking-widest text-center leading-tight h-8 flex items-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: AI SUMMARY */}
        <section className="relative z-10 pt-8">
          <GeminiSummary />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-16 border-t border-white/5 text-center font-mono text-[10px] text-gray-600 relative z-10 bg-black/40 backdrop-blur-md">
        <div className="flex justify-center gap-8 mb-4">
           <span className="flex items-center gap-2"><Server size={12} className="text-neon-blue" /> NODE: ACTIVE</span>
           <span className="flex items-center gap-2"><Activity size={12} className="text-neon-green" /> STATUS: SUCCESS</span>
        </div>
        <p className="tracking-[0.2em] uppercase">&copy; {APP_CONFIG.year} {APP_CONFIG.appName} // RECAP COMPLETED</p>
      </footer>
    </div>
  );
};

export default App;
