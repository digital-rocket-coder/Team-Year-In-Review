
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Loader2, CornerDownLeft } from 'lucide-react';

interface ResponseMap {
  [key: string]: string;
}

const STATIC_RESPONSES: ResponseMap = {
  'help': 'AVAILABLE_COMMANDS: [stats, bugs, coffee, markswebb, crash, team, clear]',
  'stats': 'CORE_REPORT: 80B events, 2.3K features, 4.8M MAU peak. System nominal.',
  'bugs': 'BUG_TRACKER: 14,000 entities neutralized. QA coverage at 94%.',
  'coffee': 'FUEL_LEVEL: 16,800 liters consumed by the team. Caffeine saturation high.',
  'markswebb': 'RANKING_SERVICE: TOP-3 achievement unlocked (2x times in 2025).',
  'crash': 'STABILITY_LOG: 99.99% Crash-Free rate maintained. Uptime optimal.',
  'team': 'COLLECTIVE_ID: Team Core. 13 reshuffles completed. Culture stable.',
  'hello': 'GREETINGS_USER. System online. How can I assist with 2025 data?',
};

export const QueryTerminal: React.FC = () => {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<{ type: 'user' | 'system', text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = query.trim().toLowerCase();
    if (!cmd || loading) return;

    setQuery('');
    setHistory(prev => [...prev, { type: 'user', text: cmd }]);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    setLoading(true);

    // Имитация "обработки" для атмосферности (300мс)
    setTimeout(() => {
      const response = STATIC_RESPONSES[cmd] || `ERROR: COMMAND_NOT_FOUND. Type 'help' for options.`;
      setHistory(prev => [...prev, { type: 'system', text: response }]);
      setLoading(false);
    }, 400);
  };

  return (
    <div className="glass-card overflow-hidden border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <TerminalIcon size={14} className="text-neon-blue" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">Query Terminal v4.0.5 [LOCAL_EMU]</span>
         </div>
         <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
         </div>
      </div>

      <div className="p-0">
        {/* Output Area */}
        <div 
          ref={scrollRef}
          className="h-[300px] overflow-y-auto bg-black/40 p-6 font-mono text-xs md:text-sm space-y-3 scrollbar-thin scrollbar-thumb-white/10"
        >
          {history.length === 0 && (
            <div className="text-gray-600 opacity-60 flex flex-col gap-1">
              <p>&gt; CORE_OS v4.0.5 KERNEL BOOTED...</p>
              <p>&gt; ALL SYSTEMS OPERATIONAL.</p>
              <p>&gt; TYPE 'help' TO BEGIN DATA RETRIEVAL.</p>
            </div>
          )}
          
          {history.map((entry, i) => (
            <div key={i} className={`flex gap-3 animate-in fade-in slide-in-from-left-2 duration-200`}>
              <span className={`shrink-0 font-bold ${entry.type === 'user' ? 'text-neon-blue' : 'text-neon-green'}`}>
                {entry.type === 'user' ? 'USER@CORE:~$' : 'SYS_OUT>'}
              </span>
              <span className={entry.type === 'user' ? 'text-white' : 'text-neon-green/90 italic'}>
                {entry.text}
              </span>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-neon-blue animate-pulse">
              <Loader2 className="animate-spin w-3 h-3" />
              <span className="text-[10px]">ACCESSING_LOCAL_STORAGE...</span>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 bg-black/60 border-t border-white/5">
           <div className="max-w-3xl mx-auto flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg shadow-inner group focus-within:border-neon-blue/50 transition-all">
              <span className="text-neon-blue font-mono font-bold text-xs">$</span>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Введите команду (help, stats, bugs...)" 
                className="bg-transparent border-none outline-none flex-1 font-mono text-sm text-gray-200 placeholder:text-gray-700"
                autoFocus
              />
              <button 
                type="submit"
                disabled={loading || !query.trim()}
                className="text-gray-500 hover:text-neon-blue transition-colors disabled:opacity-30"
              >
                <CornerDownLeft size={16} />
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};
