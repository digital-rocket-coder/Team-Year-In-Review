
import React, { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const NewYearCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 md:gap-6 relative">
        {/* Days */}
        <div className="digital-segment">
          <div className="countdown-digits neon-text animate-[glitch_7s_infinite]">{formatNum(timeLeft.days)}</div>
          <div className="countdown-label">Days</div>
        </div>

        <div className="countdown-digits neon-text opacity-40 -translate-y-2 md:-translate-y-4">:</div>

        {/* Hours */}
        <div className="digital-segment">
          <div className="countdown-digits neon-text animate-[glitch_5s_infinite]">{formatNum(timeLeft.hours)}</div>
          <div className="countdown-label">Hrs</div>
        </div>

        <div className="countdown-digits neon-text opacity-40 -translate-y-2 md:-translate-y-4">:</div>

        {/* Minutes */}
        <div className="digital-segment">
          <div className="countdown-digits neon-text animate-[glitch_8s_infinite]">{formatNum(timeLeft.minutes)}</div>
          <div className="countdown-label">Min</div>
        </div>

        <div className="countdown-digits neon-text opacity-40 -translate-y-2 md:-translate-y-4">:</div>

        {/* Seconds */}
        <div className="digital-segment">
          <div className="countdown-digits neon-text animate-[glitch_4s_infinite] text-neon-blue">{formatNum(timeLeft.seconds)}</div>
          <div className="countdown-label">Sec</div>
        </div>
      </div>

      {/* Static Status Badge */}
      <div className="mt-8 md:mt-12 flex flex-col items-center">
        <div className="flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/30 px-4 md:px-6 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.1)]">
           <div className="w-2 h-2 bg-neon-blue rounded-full animate-ping mr-2"></div>
           <span className="text-neon-blue font-mono text-[9px] md:text-xs uppercase tracking-[0.5em] font-bold">Project_2026 // Time_To_Launch</span>
        </div>
      </div>
    </div>
  );
};
