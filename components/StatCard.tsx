import React, { useEffect, useState, useRef } from 'react';
import { StatItem } from '../types';
import { Trophy } from 'lucide-react';

interface StatCardProps {
  item: StatItem;
  delay?: number;
  className?: string;
}

const CountUp: React.FC<{ value: string | number; className?: string; startAnimation: boolean }> = ({ value, className, startAnimation }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValueRef = useRef(0);
  const isFloat = typeof value === 'string' && value.includes(',') && value.replace(/[^0-9]/g, '').length < 8;
  
  useEffect(() => {
    // Extract numeric part considering negatives and commas/dots
    const numericPart = typeof value === 'string' 
      ? parseFloat(value.replace(/[^0-9.,-]/g, '').replace(',', '.')) 
      : value;
      
    if (!isNaN(numericPart)) {
      targetValueRef.current = numericPart;
    }
  }, [value]);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    const duration = 2000;
    const target = targetValueRef.current;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      
      const current = easeOutQuart(progress) * target;
      
      setDisplayValue(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [startAnimation, value, isFloat]);

  // When animation finishes, always return the exact original string if it was a string
  if (displayValue === targetValueRef.current && typeof value === 'string') {
      return <span className={className}>{value}</span>;
  }

  let formatted = displayValue.toLocaleString('ru-RU');
  if (isFloat) {
      formatted = displayValue.toLocaleString('ru-RU', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  }
  
  // Basic prefix/suffix recovery during animation
  if(typeof value === 'string') {
    if (value.includes('#') && !formatted.includes('#')) formatted = '#' + formatted;
    if (value.includes('+') && !formatted.includes('+')) formatted = '+' + formatted;
    if (value.includes('-') && !formatted.includes('-')) formatted = '-' + Math.abs(displayValue).toLocaleString('ru-RU');
    if (value.includes('%') && !formatted.includes('%')) formatted = formatted + '%';
    if (value.includes('млн') && !formatted.includes('млн')) formatted = formatted + ' млн';
  }

  return <span className={className}>{formatted}</span>;
};

export const StatCard: React.FC<StatCardProps> = ({ item, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (item.maxValue) {
              let val = parseFloat(String(item.value).replace(/[^0-9.]/g, ''));
              if (isNaN(val)) val = 0;
              const pct = Math.min((val / item.maxValue) * 100, 100);
              setWidth(pct);
            }
          }, delay);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay, item.value, item.maxValue]);

  const isRank = item.type === 'rank';
  const isScale = item.type === 'scale' || item.maxValue;

  const containerClasses = className || (item.colSpan || 'col-span-1');

  const getFontSize = (val: string | number) => {
    const len = String(val).length;
    if (len > 12) return 'text-2xl md:text-3xl';
    if (len > 9) return 'text-3xl md:text-4xl';
    if (len > 7) return 'text-4xl md:text-5xl';
    return 'text-5xl md:text-6xl';
  };

  const fontSizeClass = getFontSize(item.value);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-6 md:p-8 rounded-none md:rounded-lg relative overflow-hidden group transition-all duration-700 transform hover:scale-[1.02] hover:bg-white/5 ${containerClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="tech-corner tech-corner-tl" />
      <div className="tech-corner tech-corner-tr" />
      <div className="tech-corner tech-corner-bl" />
      <div className="tech-corner tech-corner-br" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent -translate-y-full group-hover:animate-[scanline_1.5s_linear_infinite] pointer-events-none" />

      {isRank && (
        <div className="absolute -right-4 -top-4 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
      )}

      <div className="flex flex-col justify-between h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${item.color} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow duration-500`}>
            {isRank ? <Trophy className="w-8 h-8 text-yellow-400" /> : React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
          </div>
        </div>
        
        <div>
          <h3 className={`${fontSizeClass} font-display font-bold tracking-tight mb-2 ${item.color} ${isRank ? 'drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]' : ''} leading-tight break-all`}>
            <CountUp value={item.value} startAnimation={isVisible} />
          </h3>
          
          <div className="flex items-center gap-3 mt-4 border-t border-white/10 pt-4">
            {!isScale && (
              <span className={`h-[2px] w-4 bg-gray-600 group-hover:w-8 transition-all duration-500 ${item.color && item.color.replace('text-', 'bg-')}`}></span>
            )}
            <p className="text-gray-300 text-xs md:text-sm uppercase tracking-widest font-mono font-bold leading-tight">
              {item.label}
            </p>
            {item.subValue && (
               <span className="text-neon-blue text-[10px] font-mono ml-auto opacity-90 border border-neon-blue/30 px-2 py-0.5 rounded bg-neon-blue/10 whitespace-nowrap">{item.subValue}</span>
            )}
          </div>

          {isScale && item.maxValue && (
            <div className="mt-6 w-full bg-gray-800/50 h-3 rounded-full overflow-hidden relative">
              <div 
                className={`h-full rounded-full transition-all duration-[2000ms] ease-out ${item.color ? item.color.replace('text-', 'bg-') : 'bg-white'}`}
                style={{ width: `${width}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};