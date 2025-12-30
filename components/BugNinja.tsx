
import React, { useEffect, useRef, useState } from 'react';
import { Bug, Zap } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  time: number;
}

interface GameObject {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  isSliced: boolean;
  type: 'bug' | 'feature' | 'error';
  color: string;
}

export const BugNinja: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);
  const objects = useRef<GameObject[]>([]);
  const trail = useRef<Point[]>([]);
  const lastTime = useRef<number>(0);
  const spawnTimer = useRef<number>(0);

  const colors = {
    bug: '#ff0055',    // neon-pink
    feature: '#00f3ff', // neon-blue
    error: '#bc13fe',   // neon-purple
  };

  const initObject = (type: GameObject['type']): GameObject => {
    const side = Math.random() > 0.5 ? 'left' : 'right';
    const x = side === 'left' ? -50 : window.innerWidth + 50;
    const y = window.innerHeight * (0.5 + Math.random() * 0.4);
    
    return {
      id: Math.random(),
      x,
      y,
      vx: side === 'left' ? (Math.random() * 5 + 3) : -(Math.random() * 5 + 3),
      vy: -(Math.random() * 10 + 12),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      isSliced: false,
      type,
      color: colors[type],
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isActive) return;
    trail.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    if (trail.current.length > 15) trail.current.shift();
    checkCollisions(e.clientX, e.clientY);
  };

  const checkCollisions = (mx: number, my: number) => {
    objects.current.forEach(obj => {
      if (!obj.isSliced) {
        const dist = Math.sqrt(Math.pow(obj.x - mx, 2) + Math.pow(obj.y - my, 2));
        if (dist < 40) {
          obj.isSliced = true;
          // Split effect is handled in draw
        }
      }
    });
  };

  const update = (time: number) => {
    const dt = (time - lastTime.current) / 16;
    lastTime.current = time;

    // Spawn logic
    spawnTimer.current += dt;
    if (spawnTimer.current > 80) {
      const types: GameObject['type'][] = ['bug', 'bug', 'error', 'feature'];
      objects.current.push(initObject(types[Math.floor(Math.random() * types.length)]));
      spawnTimer.current = 0;
    }

    // Physics
    objects.current.forEach(obj => {
      obj.x += obj.vx * dt;
      obj.y += obj.vy * dt;
      obj.vy += 0.25 * dt; // Gravity
      obj.rotation += obj.rotationSpeed * dt;
    });

    // Cleanup
    objects.current = objects.current.filter(obj => obj.y < window.innerHeight + 100);
    
    // Cleanup trail
    const now = Date.now();
    trail.current = trail.current.filter(p => now - p.time < 150);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Trail
    if (trail.current.length > 1) {
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#00f3ff';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00f3ff';
      
      ctx.moveTo(trail.current[0].x, trail.current[0].y);
      for (let i = 1; i < trail.current.length; i++) {
        ctx.lineTo(trail.current[i].x, trail.current[i].y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Draw Objects
    objects.current.forEach(obj => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate((obj.rotation * Math.PI) / 180);
      
      const size = 30;
      ctx.font = `${size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const icon = obj.type === 'bug' ? '🐞' : obj.type === 'error' ? '👾' : '🚀';

      if (obj.isSliced) {
        // Draw halves
        ctx.save();
        ctx.translate(-10, -5);
        ctx.fillText(icon, 0, 0); // Left half
        ctx.restore();
        
        ctx.save();
        ctx.translate(10, 5);
        ctx.fillText(icon, 0, 0); // Right half
        ctx.restore();

        // Add "FIXED" text
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = obj.color;
        ctx.fillText(obj.type === 'bug' ? 'FIXED' : 'DEPLOYED', 0, -30);
      } else {
        // Glow effect for unsliced
        ctx.shadowBlur = 10;
        ctx.shadowColor = obj.color;
        ctx.fillText(icon, 0, 0);
      }
      
      ctx.restore();
    });

    requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const loop = (time: number) => {
      if (isActive) {
        update(time);
      }
      draw();
    };

    const animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isActive]);

  return (
    <>
      {/* Ninja Mode Toggle */}
      <div className="fixed bottom-6 right-6 z-[120]">
        <button 
          onClick={() => {
            setIsActive(!isActive);
            if (!isActive) objects.current = [];
          }}
          className={`flex items-center gap-3 px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-lg border ${
            isActive 
              ? 'bg-neon-pink text-white border-neon-pink shadow-[0_0_20px_rgba(255,0,85,0.4)]' 
              : 'bg-black/60 text-neon-blue border-neon-blue/30 backdrop-blur-md hover:bg-neon-blue/10'
          }`}
        >
          {isActive ? <Zap size={16} className="animate-pulse" /> : <Bug size={16} />}
          {isActive ? 'Ninja Mode: ON' : 'Start Bug Ninja'}
        </button>
      </div>

      {/* Game Overlay */}
      <canvas 
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-[115] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {isActive && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[116] pointer-events-none animate-bounce">
            <div className="bg-black/80 backdrop-blur-md border border-neon-blue/30 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                <span className="text-[10px] font-mono text-neon-blue uppercase tracking-[0.3em] font-bold">Slice the bugs! Don't let them crash the prod.</span>
            </div>
        </div>
      )}
    </>
  );
};
