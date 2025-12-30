
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { RELEASES_DATA, HUB_VITAL_STATS } from '../constants';
import { Activity, Zap, ShieldCheck } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/95 border border-neon-blue p-3 shadow-[0_0_15px_rgba(0,243,255,0.3)] backdrop-blur-xl">
        <p className="font-mono text-neon-blue text-[10px] uppercase mb-1 tracking-widest">{label || payload[0].name}</p>
        <p className="font-display text-xl font-bold text-white">
          {payload[0].value.toLocaleString()}{payload[0].unit || ''}
        </p>
      </div>
    );
  }
  return null;
};

export const ReleasesChart: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-none md:rounded-lg relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px] flex flex-col group">
      {/* Digital Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
        <span className="w-1 h-6 bg-neon-blue shadow-[0_0_8px_#00f3ff]"></span>
        <span className="tracking-widest uppercase text-sm md:text-base">Структура Релизов</span>
      </h3>
      
      <div className="flex-1 w-full h-full min-h-[250px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={RELEASES_DATA}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
              animationDuration={2000}
            >
              {RELEASES_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} className="stroke-dark-card stroke-2" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="rect"
              formatter={(value) => <span className="font-mono text-[10px] text-gray-400 uppercase ml-2 tracking-widest">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const FeedbackChart: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-none md:rounded-lg relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px] flex flex-col group border-l-4 border-l-neon-purple/50">
       {/* Digital Grid Decoration */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"></div>

       <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center justify-between relative z-10">
         <div className="flex items-center gap-3">
            <span className="w-1 h-6 bg-neon-purple shadow-[0_0_8px_#bc13fe]"></span>
            <span className="tracking-widest uppercase text-sm md:text-base">Digital Vital Signs</span>
         </div>
         <div className="flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></div>
            <span className="text-[8px] font-mono text-neon-green font-bold">SYSTEM_HEALTH: 100%</span>
         </div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 relative z-10">
        {HUB_VITAL_STATS.map((stat, i) => (
          <div 
            key={i} 
            className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-all group/item flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-1.5 rounded-lg bg-black/40 border border-white/5 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="flex gap-0.5">
                {[1,2,3].map(dot => (
                  <div key={dot} className={`w-1 h-3 rounded-full ${i % 2 === 0 ? 'bg-neon-blue/20' : 'bg-neon-purple/20'}`}></div>
                ))}
              </div>
            </div>
            
            <div>
              <div className={`text-2xl font-display font-bold mb-1 tracking-tight ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>

            {/* Micro-graph decoration */}
            <div className="mt-3 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
               <div 
                 className={`h-full opacity-50 ${stat.color.replace('text-', 'bg-')}`} 
                 style={{ width: `${Math.random() * 40 + 60}%`, transition: 'width 2s' }}
                ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between font-mono text-[8px] text-gray-600 border-t border-white/5 pt-4">
        <span>ID: 0x2A_DIGITAL_CHANNELS</span>
        <span className="flex items-center gap-1">
          <Activity size={8} /> LIVE_SYNC_ACTIVE
        </span>
        <span>LATENCY: 0.04ms</span>
      </div>
    </div>
  );
};
