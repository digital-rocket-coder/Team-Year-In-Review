
import React, { useState, useEffect, useCallback } from 'react';
import { X, ShieldAlert, Sparkles, Lock, MessageCircleHeart } from 'lucide-react';

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
    const interval = setInterval(moveBall, 2500);
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
    moveBall();
  };

  return (
    <>
      {/* The Elusive Ball */}
      {!isOpen && (
        <div 
          className="fixed z-[100] transition-all duration-[800ms] cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center gap-3 group pointer-events-none"
          style={{ 
            top: position.top, 
            left: position.left,
          }}
        >
          <button
            onClick={handleCatch}
            onMouseEnter={moveBall}
            className="w-10 h-10 rounded-full bg-neon-pink shadow-[0_0_25px_rgba(255,0,85,0.5)] flex items-center justify-center pointer-events-auto shrink-0 relative hover:scale-125 transition-transform"
            style={{ 
              animation: 'pulse 2s infinite'
            }}
          >
            <Sparkles size={18} className="text-white animate-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-neon-pink animate-ping opacity-30"></div>
          </button>
          
          <div className="bg-black/90 border border-neon-pink/30 backdrop-blur-md px-4 py-2 rounded-xl pointer-events-none transform -translate-y-1 shadow-[0_10px_25px_rgba(255,0,85,0.2)] animate-float">
             <span className="text-neon-pink font-mono text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
               SECRET_DATA.EXE
             </span>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-500">
          <div className="glass-card max-w-xl w-full p-10 md:p-14 rounded-[32px] border border-neon-pink/40 relative overflow-hidden shadow-[0_0_80px_rgba(255,0,85,0.2)]">
            
            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-pink/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-pink/10 blur-[100px] rounded-full"></div>

            <button 
                onClick={closeMessage}
                className="absolute top-6 right-6 text-gray-500 hover:text-neon-pink transition-all p-2 hover:bg-white/5 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-6 mb-10 border-b border-white/5 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 flex items-center justify-center text-neon-pink shrink-0 border border-neon-pink/30 shadow-inner">
                    <MessageCircleHeart size={32} className="animate-pulse" />
                </div>
                <div>
                    <h3 className="font-display text-xl md:text-2xl text-white uppercase tracking-tight">Послание Алины</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_8px_#ff0055]"></span>
                      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">SYSTEM_DECRYPTED // 2025-2026</p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="relative z-10 space-y-8">
                    <div className="text-gray-100 font-serif italic text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide space-y-6">
                        <p className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                          «Хочу сказать вам главное.
                        </p>
                        
                        <p>
                          За всеми релизами, цифрами и дедлайнами всегда стоят люди. 
                        </p>
                        
                        <p>
                          Люди, которые думают, переживают, поддерживают друг друга и каждый день делают сложное чуть проще.
                        </p>
                        
                        <p className="font-bold text-white not-italic border-l-2 border-neon-pink pl-6 py-2 bg-neon-pink/5 rounded-r-lg">
                          Именно вы превращаете идеи в работающие продукты и наполняете код смыслом.
                        </p>

                        <p>
                          В 2026-м не забывайте: даже самым сильным иногда нужно выдохнуть и перезагрузиться.
                        </p>

                        <div className="pt-4 flex flex-col gap-2">
                          <p className="text-white not-italic font-bold">Берегите себя.</p>
                          <p className="text-white not-italic font-bold">И продолжайте делать крутые вещи.»</p>
                        </div>
                    </div>
                </div>
                
                <ShieldAlert className="absolute -right-12 -bottom-12 text-neon-pink/5 w-64 h-64 -rotate-12 pointer-events-none" />
            </div>

            <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/5 pt-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-neon-pink/40"></div>
                    <span className="text-sm md:text-lg font-display text-neon-pink tracking-widest uppercase">— Алина</span>
                </div>
                <button 
                    onClick={closeMessage}
                    className="group relative px-6 py-3 bg-transparent overflow-hidden rounded-xl transition-all"
                >
                    <div className="absolute inset-0 bg-neon-pink/10 group-hover:bg-neon-pink transition-colors"></div>
                    <div className="absolute inset-0 border border-neon-pink/40 group-hover:border-neon-pink rounded-xl"></div>
                    <span className="relative z-10 text-neon-pink group-hover:text-white text-xs font-mono uppercase tracking-[0.2em] font-bold">
                        Завершить сеанс
                    </span>
                </button>
            </div>

            {/* Matrix-like footer decoration */}
            <div className="mt-8 font-mono text-[8px] text-gray-700 flex justify-between overflow-hidden whitespace-nowrap opacity-50">
                <span>01101000 01100101 01100001 01110010 01110100</span>
                <span className="mx-4 font-bold text-neon-pink/20">SECURED_HEART_PROTOCOL_ACTIVE</span>
                <span>01101100 01101111 01110110 01100101</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
