import React, { useState } from 'react';
import { generateYearSummary } from '../services/geminiService';
import { MessageSquareQuote, Sparkles, Terminal } from 'lucide-react';

export const GeminiSummary: React.FC = () => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const text = await generateYearSummary();
    setSummary(text);
    setLoading(false);
  };

  return (
    <div className="glass-card p-8 rounded-2xl col-span-1 md:col-span-2 lg:col-span-4 border-t-4 border-t-neon-blue mt-8 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <MessageSquareQuote size={120} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-neon-blue/10 rounded-full border border-neon-blue/30">
            <Terminal className="w-8 h-8 text-neon-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white font-display">Слово P.N.</h2>
            <p className="text-gray-400 text-sm font-mono">AI-генерация на основе метрик</p>
          </div>
        </div>

        {!summary && !loading && (
          <button
            onClick={handleGenerate}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-blue-600 text-black font-bold font-display rounded-sm hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.4)] uppercase tracking-wider"
          >
            <Sparkles className="w-5 h-5" />
            Получить напутствие
          </button>
        )}
      </div>

      {loading && (
        <div className="mt-8 font-mono text-neon-blue animate-pulse p-4 border-l-2 border-neon-blue bg-black/30">
          &gt; P.N. подключается... <br/>
          &gt; Анализ 14 000 багов... <br/>
          &gt; Загрузка контекста Markswebb... <br/>
          &gt; Формулирование речи...
        </div>
      )}

      {summary && (
        <div className="mt-8 relative">
          <div className="absolute -top-3 -left-2 text-6xl text-neon-blue opacity-30 font-serif">"</div>
          <div className="p-6 md:p-8 bg-black/40 rounded-xl border border-white/10 backdrop-blur-md">
            <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-100 italic">
               {summary}
            </p>
            <div className="mt-4 flex justify-end items-center gap-2 opacity-70">
               <div className="h-[1px] w-12 bg-neon-blue"></div>
               <span className="font-display font-bold text-neon-blue">P.N.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};