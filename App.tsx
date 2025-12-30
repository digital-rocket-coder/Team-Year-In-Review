
import React, { useEffect } from 'react';
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
import { BugNinja } from './components/BugNinja';
import { ReleasesChart, FeedbackChart } from './components/Charts';
import { NewYearCountdown } from './components/NewYearCountdown';
import { QueryTerminal } from './components/QueryTerminal';
import { Activity, Server, ArrowDown, Target, Zap, Coffee, BarChart3, Users, Heart, CheckCircle2, TrendingUp } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Принудительно прокручиваем в начало при загрузке, 
    // чтобы предотвратить прыжки из-за автофокуса или кеша прокрутки браузера
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-blue selection:text-black overflow-x-hidden relative">
      
      {/* Global Visual Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      <div className="fixed inset-0 pointer-events-none z-[101] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <DigitalSnow />
      <EasterEggAlina />
      <BugNinja />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-dark-bg/40 border-b border-white/5">
        <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center border border-neon-blue/40">
            <Zap size={16} className="text-neon-blue" />
          </div>
          <span>{APP_CONFIG.appName.split('_')[0]}<span className="text-neon-blue">_{APP_CONFIG.appName.split('_')[1]}</span></span>
        </div>
        <div className="hidden md:flex text-[10px] font-mono text-gray-400 items-center gap-4">
           <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_#00f3ff] animate-pulse"></div>
              UPLINK: STABLE
           </div>
           <div className="opacity-40">LATENCY: 24ms</div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 z-10 overflow-hidden">
        <div className="text-center relative w-full max-w-5xl">
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-8 bg-neon-blue/40"></div>
               <h2 className="font-mono text-[10px] md:text-xs tracking-[0.8em] uppercase text-neon-blue animate-[glitch_3s_infinite]">
                 System Launch: 2026_PREVIEW
               </h2>
               <div className="h-px w-8 bg-neon-blue/40"></div>
            </div>
            
            <div className="mb-8 drop-shadow-[0_0_100px_rgba(0,243,255,0.3)]">
               <NewYearCountdown />
            </div>

            <p className="text-xl md:text-3xl font-light mt-16 tracking-[0.4em] font-display uppercase text-white opacity-80">
              {APP_CONFIG.heroTitle} 2025
            </p>
          </div>
          
          <div className="mt-24 flex flex-col items-center gap-4 animate-bounce opacity-40">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Accessing Achievements</span>
            <ArrowDown className="text-neon-blue w-5 h-5" />
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-32 pb-32">
        
        {/* SECTION: HIGHLIGHTS */}
        <section className="relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neon-blue/10 rounded-xl border border-neon-blue/20">
                <Target className="text-neon-blue" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Главные Достижения</h2>
            </div>
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-xs md:text-right">
              Ключевые показатели эффективности за прошедший фискальный период.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {HIGHLIGHTS_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 100} />
             ))}
          </div>
        </section>

        {/* SECTION: ANALYTICS DASHBOARD */}
        <section className="relative z-10 space-y-12">
          <div className="mb-12 flex items-center gap-4">
            <BarChart3 className="text-neon-purple" size={32} />
            <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight">Data Analytics Hub</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
             <ReleasesChart />
             <FeedbackChart />
          </div>
        </section>

        {/* SECTION: BUSINESS EFFECT */}
        <section className="relative z-10 space-y-12">
          <div className="flex items-center gap-4 border-b border-white/5 pb-6">
            <TrendingUp className="text-neon-green" size={32} />
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Бизнес-эффект</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {BUSINESS_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 100} />
             ))}
          </div>
        </section>

        {/* SECTION: PRODUCT & QUALITY */}
        <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between border-l-4 border-neon-purple pl-4">
              <h3 className="text-2xl font-display font-bold uppercase flex items-center gap-3">
                Разработки <Zap className="text-neon-purple w-5 h-5" />
              </h3>
              <span className="text-[10px] font-mono text-neon-purple/50">MODULE: DEV_CORE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRODUCT_STATS.map((item, i) => (
                <StatCard key={item.id} item={item} delay={i * 80} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between border-l-4 border-neon-green pl-4">
              <h3 className="text-2xl font-display font-bold uppercase flex items-center gap-3">
                Надёжность <Activity className="text-neon-green w-5 h-5" />
              </h3>
               <span className="text-[10px] font-mono text-neon-green/50">MODULE: QA_SRE</span>
            </div>
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

        {/* SECTION: AI SUMMARY */}
        <section className="relative z-10 py-12">
          <div className="flex items-center gap-4 mb-12">
             <div className="w-12 h-1 bg-neon-blue"></div>
             <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-widest">Executive Summary</h2>
          </div>
          <GeminiSummary />
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
          <div className="glass-card p-12 rounded-3xl space-y-12 border border-neon-pink/10">
            <div className="flex flex-col items-center gap-4 text-center">
              <Coffee className="text-neon-pink w-10 h-10 animate-float" />
              <h3 className="text-3xl font-display font-bold uppercase tracking-tighter">«Живые и мемные»</h3>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {FUN_STATS.map((item, i) => (
                <div key={item.id} className="flex flex-col items-center group">
                  <span className={`text-3xl md:text-5xl font-display font-bold mb-3 group-hover:scale-110 transition-all duration-500 ${item.color} drop-shadow-sm`}>
                    {item.value}
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase font-mono text-gray-500 tracking-widest text-center leading-tight h-10 flex items-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: INTERACTIVE TERMINAL */}
        <section className="relative z-10">
           <QueryTerminal />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center font-mono text-[10px] text-gray-600 relative z-10 bg-black/80 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-6">
           <div className="flex justify-center gap-12">
              <span className="flex items-center gap-2"><Server size={12} className="text-neon-blue" /> NODE: FINAL_01</span>
              <span className="flex items-center gap-2"><Activity size={12} className="text-neon-green" /> STATUS: DEPLOYED</span>
              <span className="hidden md:flex items-center gap-2"><CheckCircle2 size={12} className="text-neon-purple" /> SYNC: COMPLETE</span>
           </div>
           <div className="w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
           <p className="tracking-[0.4em] uppercase font-bold">&copy; {APP_CONFIG.year} {APP_CONFIG.appName} // NEW_ERA_AWAITS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
