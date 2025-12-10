import React from 'react';
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
import { Activity, Server, ArrowDown, ChevronRight, Zap, Coffee } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-blue selection:text-black overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-15 transform perspective-500 rotate-x-6 scale-125" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-dark-bg/50 border-b border-white/5">
        <div className="font-display font-bold text-xl tracking-tighter">
          {APP_CONFIG.appName.split('_')[0]}<span className="text-neon-blue">_{APP_CONFIG.appName.split('_')[1]}</span>
        </div>
        <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
           <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
           {APP_CONFIG.reportName}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 z-10">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none opacity-20 md:opacity-100"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-neon-blue/20 rounded-full animate-[spin_40s_reverse_linear_infinite] pointer-events-none opacity-20 md:opacity-100"></div>
          
          <h2 className="text-neon-blue font-mono text-sm md:text-lg tracking-[0.5em] uppercase mb-4 animate-[glitch_2s_infinite]">
            {APP_CONFIG.heroStatus}
          </h2>
          <h1 className="text-[120px] md:text-[200px] leading-[0.8] font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent select-none relative z-10">
            {APP_CONFIG.year}
          </h1>
          <p className="text-2xl md:text-4xl font-light text-gray-300 mt-4 tracking-widest font-display uppercase">
            {APP_CONFIG.heroTitle}
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-4 animate-bounce">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Листай вниз</span>
            <ArrowDown className="text-neon-blue" />
          </div>
        </div>
      </section>

      {/* SECTION: HIGHLIGHTS (🔥 Из твоего списка) */}
      <section className="relative py-24 px-4 md:px-12 z-10 max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-neon-blue pl-6 flex justify-between items-end">
          <div>
             <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">Главное</h2>
             <p className="text-gray-400 font-mono mt-2 text-lg">Key Highlights & Achievements</p>
          </div>
          <Zap className="hidden md:block w-12 h-12 text-neon-blue opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {HIGHLIGHTS_STATS.map((item, i) => (
             <StatCard 
               key={item.id} 
               item={item} 
               delay={i * 100} 
               className={i === 0 ? "md:col-span-2 bg-gradient-to-br from-neon-blue/10 to-transparent border-neon-blue/40" : ""}
             />
           ))}
        </div>
      </section>

      {/* SECTION: PRODUCT & QUALITY (🚀 Продукт + 📈 Качество) */}
      <section className="relative py-24 px-4 md:px-12 z-10 bg-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Product Column */}
              <div>
                <div className="mb-8 flex items-center gap-4">
                   <div className="p-3 rounded bg-neon-purple/10 text-neon-purple"><Zap /></div>
                   <h3 className="text-3xl font-display font-bold">Продукт и Разработка</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   {PRODUCT_STATS.map((item, i) => (
                      <StatCard key={item.id} item={item} delay={i * 100} />
                   ))}
                </div>
              </div>

              {/* Quality Column */}
              <div>
                <div className="mb-8 flex items-center gap-4">
                   <div className="p-3 rounded bg-neon-green/10 text-neon-green"><Activity /></div>
                   <h3 className="text-3xl font-display font-bold">Качество и Надёжность</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   {QUALITY_STATS.map((item, i) => (
                      <StatCard key={item.id} item={item} delay={i * 100} />
                   ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION: USAGE & BUSINESS (👥 Клиенты + 💰 Бизнес) */}
      <section className="relative py-24 px-4 md:px-12 z-10 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Usage Column */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                 <div className="p-3 rounded bg-neon-blue/10 text-neon-blue"><Server /></div>
                 <h3 className="text-3xl font-display font-bold">Клиенты и Использование</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {USAGE_STATS.map((item, i) => (
                    <StatCard key={item.id} item={item} delay={i * 100} className="md:col-span-1" />
                 ))}
              </div>
            </div>

            {/* Business Column */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                 <div className="p-3 rounded bg-yellow-400/10 text-yellow-400"><ChevronRight /></div>
                 <h3 className="text-3xl font-display font-bold">Бизнес-эффект</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 {BUSINESS_STATS.map((item, i) => (
                    <StatCard key={item.id} item={item} delay={i * 100} />
                 ))}
              </div>
            </div>
         </div>
      </section>

      {/* SECTION: TEAM (🧠 Команда) */}
      <section className="relative py-24 px-4 md:px-12 z-10 bg-gradient-to-b from-black to-dark-bg border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
             <h2 className="text-4xl font-display font-bold uppercase text-white">Команда и Культура</h2>
             <div className="w-24 h-1 bg-neon-pink mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
             {TEAM_STATS.map((item, i) => (
               <StatCard key={item.id} item={item} delay={i * 100} className="bg-white/5 hover:bg-white/10" />
             ))}
          </div>
        </div>
      </section>

      {/* SECTION: FUN (😄 Мемные) */}
      <section className="relative py-16 px-4 z-10 overflow-hidden bg-neon-purple/5">
        <div className="max-w-7xl mx-auto">
           <div className="flex items-center gap-4 mb-8 justify-center opacity-70">
              <Coffee className="text-neon-pink" />
              <h3 className="font-mono text-xl uppercase tracking-widest text-neon-pink">Живые моменты</h3>
              <Coffee className="text-neon-pink" />
           </div>

           <div className="flex flex-wrap justify-center gap-6">
              {FUN_STATS.map((item, i) => (
                 <div key={item.id} className="glass-card px-6 py-4 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 border-neon-pink/20">
                    <span className="text-neon-pink">{item.icon}</span>
                    <div className="flex flex-col">
                       <span className="text-2xl font-bold font-display">{item.value}</span>
                       <span className="text-xs uppercase font-mono text-gray-400">{item.label}</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION: AI INSIGHTS */}
      <section className="relative py-24 px-4 md:px-12 z-10 max-w-5xl mx-auto">
        <GeminiSummary />
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/10 bg-black text-center font-mono text-xs text-gray-600">
        <div className="flex justify-center items-center gap-8 mb-4">
           <span className="flex items-center gap-2"><Activity className="w-4 h-4" /> SYSTEM OK</span>
           <span className="flex items-center gap-2"><Server className="w-4 h-4" /> SERVER {APP_CONFIG.year}</span>
        </div>
        <p>&copy; {APP_CONFIG.year} {APP_CONFIG.appName} DIGITAL REPORT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;