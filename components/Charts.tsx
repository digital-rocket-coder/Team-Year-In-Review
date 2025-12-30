
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList
} from 'recharts';
import { RELEASES_DATA, FEEDBACK_DATA } from '../constants';

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
    <div className="glass-card p-6 rounded-none md:rounded-lg relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px] flex flex-col group">
      {/* Digital Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Decoration */}
      <div className="absolute top-0 right-0 p-2 opacity-50">
        <div className="flex gap-1">
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
        <span className="w-1 h-6 bg-neon-blue shadow-[0_0_8px_#00f3ff]"></span>
        <span className="tracking-widest uppercase text-sm md:text-base">Структура Релизов</span>
      </h3>
      
      <div className="flex-1 w-full h-full min-h-[250px] relative z-10">
         {/* Background circle decoration */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-48 h-48 rounded-full border border-dashed border-white animate-[spin_20s_linear_infinite]"></div>
         </div>
         
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
              animationBegin={200}
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
    <div className="glass-card p-6 rounded-none md:rounded-lg relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px] flex flex-col group">
       {/* Digital Background Pattern */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"></div>

       <div className="absolute top-0 right-0 p-2 opacity-50">
        <div className="flex gap-1">
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
        </div>
      </div>

       <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
        <span className="w-1 h-6 bg-neon-pink shadow-[0_0_8px_#ff0055]"></span>
        <span className="tracking-widest uppercase text-sm md:text-base">Цикл Фич (%)</span>
      </h3>
      <div className="flex-1 w-full h-full min-h-[250px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={FEEDBACK_DATA}
            margin={{ top: 20, right: 80, left: 20, bottom: 20 }}
          >
            <XAxis 
              type="number" 
              stroke="#444" 
              fontSize={10} 
              hide
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="#ccc" 
              fontSize={11} 
              width={100} 
              fontFamily="JetBrains Mono"
              tickLine={false}
              axisLine={false}
              className="uppercase tracking-widest"
            />
            <Tooltip
               cursor={{fill: 'rgba(255,255,255,0.03)'}}
               content={<CustomTooltip />}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32} animationDuration={2000}>
              {FEEDBACK_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList 
                dataKey="value" 
                position="right" 
                fill="#fff" 
                fontSize={14} 
                fontFamily="Russo One"
                formatter={(val: number) => `${val}%`}
                offset={15}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
