
import React, { useState, useEffect, useCallback } from 'react';
import { X, ShieldAlert, Sparkles, Lock } from 'lucide-react';

export const EasterEggAlina: React.FC = () => {
  const [position, setPosition] = useState({ top: '20%', left: '20%' });
  const [isOpen, setIsOpen] = useState(false);
  const [isCaught, setIsCaught] = useState(false);

  const moveBall = useCallback(() => {
    if (isOpen) return;
    const newTop = Math.floor(Math.random() * 80 + 10) + '%';
    const newLeft = Math.floor(Math.random() * 80 + 10) + '%';
    setPosition({ top: newTop, left: newLeft });
  }, [isOpen]);

  useEffect(() => {
    const interval = setInterval(moveBall, 1800);
    return () => clearInterval(interval);
  }, [moveBall]);

  const handleCatch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCaught(true);
    setIsOpen(true);
  };

  const closeMessage = () => {
    setIsOpen(false);
    setIsCaught(false);
    // После закрытия шарик улетает далеко, чтобы не мешать сразу
    moveBall();
  };

  return (
    <>
      {/* The Elusive Ball */}
      {!isOpen && (
        <div 
          className="fixed z-[100] transition-all duration-[600ms] cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center gap-3 group pointer-events-none"
          style={{ 
            top: position.top, 
            left: position.left,
          }}
        >
          <button
            onClick={handleCatch}
            onMouseEnter={moveBall} // Улетает при попытке навести, если не успел кликнуть
            className="w-8 h-8 rounded-full bg-neon-pink shadow-[0_0_20px_#ff0055] flex items-center justify-center pointer-events-auto shrink-0 relative"
            style={{ 
              animation: 'pulse 2s infinite'
            }}
          >
            <span className="text-xs font-bold text-white font-mono animate-pulse">A</span>
            <div className="absolute inset-0 rounded-full border border-neon-pink animate-ping opacity-40"></div>
          </button>
          
          <div className="bg-black/80 border border-neon-pink/40 backdrop-blur-sm px-3 py-1.5 rounded-lg pointer-events-none transform -translate-y-1 shadow-[0_4px_15px_rgba(255,0,85,0.2)] animate-float">
             <span className="text-neon-pink font-mono text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
               Нажми меня!
             </span>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="glass-card max-w-md w-full p-8 rounded-2xl border-2 border-neon-pink relative overflow-hidden shadow-[0_0_50px_rgba(255,0,85,0.3)]">
            
            {/* Decoration Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-neon-pink/10 blur-3xl rounded-full"></div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-30">
                <div className="w-1 h-1 bg-neon-pink"></div>
                <div className="w-1 h-1 bg-neon-pink"></div>
                <div className="w-1 h-1 bg-neon-pink"></div>
            </div>

            <button 
                onClick={closeMessage}
                className="absolute top-4 right-4 text-gray-500 hover:text-neon-pink transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 mb-6 border-b border-neon-pink/20 pb-4">
                <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink shrink-0">
                    <Lock size={24} className="animate-pulse" />
                </div>
                <div>
                    <h3 className="font-display text-lg text-white uppercase tracking-tighter">Encrypted Message</h3>
                    <p className="text-[10px] font-mono text-neon-pink uppercase tracking-widest font-bold">From: Advisor_Alina.dec</p>
                </div>
            </div>

            <div className="relative">
                <ShieldAlert className="absolute -right-2 -top-2 text-neon-pink/10 w-24 h-24 rotate-12 pointer-events-none" />
                <div className="prose prose-invert relative z-10">
                    <p className="text-gray-100 font-serif italic text-lg leading-relaxed mb-6">
                        "Павел видит цифры, а я вижу людей, которые за ними стоят. Вы — тот самый секретный ингредиент, который превращает код в магию. 
                    </p>
                    <p className="text-gray-100 font-serif italic text-lg leading-relaxed">
                        В 2026-м не забывайте: даже самым мощным серверам нужно иногда остыть. Берегите себя и жгите!"
                    </p>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-neon-pink" />
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">— Алина</span>
                </div>
                <button 
                    onClick={closeMessage}
                    className="px-4 py-2 bg-neon-pink/10 border border-neon-pink/40 text-neon-pink text-xs font-mono uppercase hover:bg-neon-pink hover:text-white transition-all rounded"
                >
                    Close Session
                </button>
            </div>

            {/* Matrix-like footer decoration */}
            <div className="mt-6 font-mono text-[8px] text-neon-pink/30 flex justify-between overflow-hidden whitespace-nowrap">
                <span>0101010101 ALINA_ADVISOR 111000101</span>
                <span>SECURED_LINE_STABLE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
