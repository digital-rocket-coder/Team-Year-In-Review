
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
    const duration = 2600; 
    const target = targetValueRef.current;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      
      const current = easeOutExpo(progress) * target;
      
      setDisplayValue(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [startAnimation, value, isFloat]);

  if (displayValue >= targetValueRef.current * 0.999 && typeof value === 'string') {
      return <span className={className}>{value}</span>;
  }

  let formatted = displayValue.toLocaleString('ru-RU');
  if (isFloat) {
      formatted = displayValue.toLocaleString('ru-RU', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  }
  
  if(typeof value === 'string') {
    if (value.includes('#') && !formatted.includes('#')) formatted = '#' + formatted;
    if (value.includes('+') && !formatted.includes('+')) formatted = '+' + formatted;
    if (value.includes('-') && !formatted.includes('-')) formatted = '-' + Math.abs(displayValue).toLocaleString('ru-RU');
    if (value.includes('%') && !formatted.includes('%')) formatted = formatted + '%';
    if (value.includes('млн') && !formatted.includes('млн')) formatted = formatted + ' млн.';
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
      { threshold: 0.1 }
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
    const sVal = String(val);
    const len = sVal.length;
    
    // Более агрессивное уменьшение шрифта для средних и длинных строк
    if (len > 18) return 'text-lg md:text-xl';
    if (len > 14) return 'text-xl md:text-2xl';
    if (len > 10) return 'text-2xl md:text-3xl';
    if (len > 6) return 'text-3xl md:text-4xl'; // Для "39 млн." и "> 7 дней"
    return 'text-4xl md:text-6xl';
  };

  const fontSizeClass = getFontSize(item.value);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-5 md:p-8 rounded-none md:rounded-lg relative overflow-hidden group transition-all duration-1000 transform hover:scale-[1.02] hover:bg-white/[0.07] ${containerClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="tech-corner tech-corner-tl" />
      <div className="tech-corner tech-corner-tr" />
      <div className="tech-corner tech-corner-bl" />
      <div className="tech-corner tech-corner-br" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent -translate-y-full group-hover:animate-[scanline_2s_linear_infinite] pointer-events-none" />

      <div className="flex flex-col justify-between h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2.5 rounded-lg bg-white/5 border border-white/10 ${item.color} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow duration-500`}>
            {/* Added check for valid element and cast to any to resolve className property error */}
            {isRank ? (
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            ) : (
              React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<any>, { 
                className: "w-6 h-6 md:w-8 md:h-8" 
              })
            )}
          </div>
        </div>
        
        <div className="min-w-0">
          <div className="mb-2">
            <h3 className={`${fontSizeClass} font-display font-bold tracking-tight ${item.color} leading-tight whitespace-nowrap overflow-hidden text-ellipsis`}>
              <CountUp value={item.value} startAnimation={isVisible} />
            </h3>
          </div>
          
          <div className="flex items-start gap-2 mt-4 border-t border-white/10 pt-4">
            {!isScale && (
              <span className={`h-[2px] w-3 mt-2 bg-gray-600 group-hover:w-6 transition-all duration-700 ${item.color && item.color.replace('text-', 'bg-')}`}></span>
            )}
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <p className="text-gray-300 text-[9px] md:text-xs uppercase tracking-[0.15em] font-mono font-bold leading-snug break-words">
                {item.label}
              </p>
              {item.subValue && (
                 <span className="text-neon-blue text-[8px] md:text-[9px] font-mono opacity-90 border border-neon-blue/30 px-1.5 py-0.5 rounded bg-neon-blue/10 whitespace-nowrap self-start">
                   {item.subValue}
                 </span>
              )}
            </div>
          </div>

          {isScale && item.maxValue && (
            <div className="mt-4 w-full bg-gray-800/50 h-2 rounded-full overflow-hidden relative border border-white/5">
              <div 
                className={`h-full rounded-full transition-all duration-[2500ms] ease-out ${item.color ? item.color.replace('text-', 'bg-') : 'bg-white'}`}
                style={{ width: `${width}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ width: '40px' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
