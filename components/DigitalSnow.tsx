
import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
  char: string;
}

export const DigitalSnow: React.FC = () => {
  const particles = useMemo(() => {
    const chars = ['0', '1', '+', '▪', '▫', '·'];
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * -20}s`,
      size: `${Math.random() * 8 + 6}px`,
      opacity: Math.random() * 0.4 + 0.1,
      char: chars[Math.floor(Math.random() * chars.length)]
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>
        {`
          @keyframes digital-fall {
            0% {
              transform: translateY(-10vh) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: var(--base-opacity);
            }
            90% {
              opacity: var(--base-opacity);
            }
            100% {
              transform: translateY(110vh) translateX(20px);
              opacity: 0;
            }
          }
          .digital-flake {
            position: absolute;
            top: 0;
            color: #00f3ff;
            font-family: 'JetBrains Mono', monospace;
            text-shadow: 0 0 5px rgba(0, 243, 255, 0.5);
            animation: digital-fall var(--fall-duration) linear infinite;
            animation-delay: var(--fall-delay);
          }
        `}
      </style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="digital-flake"
          style={{
            left: p.left,
            fontSize: p.size,
            '--fall-duration': p.duration,
            '--fall-delay': p.delay,
            '--base-opacity': p.opacity,
          } as React.CSSProperties}
        >
          {p.char}
        </div>
      ))}
    </div>
  );
};
