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
  Legend
} from 'recharts';
import { RELEASES_DATA, FEEDBACK_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 border border-neon-blue p-3 shadow-[0_0_10px_rgba(0,243,255,0.3)] backdrop-blur-md">
        <p className="font-mono text-neon-blue text-xs uppercase mb-1">{label || payload[0].name}</p>
        <p className="font-display text-xl font-bold text-white">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export const ReleasesChart: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-none md:rounded-lg relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px] flex flex-col group">
      {/* Decoration */}
      <div className="absolute top-0 right-0 p-2 opacity-50">
        <div className="flex gap-1">
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-neon-blue shadow-[0_0_8px_#00f3ff]"></span>
        <span className="tracking-widest uppercase text-sm md:text-base">Структура Релизов</span>
      </h3>
      
      <div className="flex-1 w-full h-full min-h-[250px] relative">
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
              formatter={(value) => <span className="font-mono text-xs text-gray-400 uppercase ml-2">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const FeedbackChart: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-none md:rounded-lg relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px] flex flex-col">
       <div className="absolute top-0 right-0 p-2 opacity-50">
        <div className="flex gap-1">
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
           <div className="w-1 h-1 bg-white/20"></div>
        </div>
      </div>

       <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-neon-pink shadow-[0_0_8px_#ff0055]"></span>
        <span className="tracking-widest uppercase text-sm md:text-base">Цикл Фич</span>
      </h3>
      <div className="flex-1 w-full h-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={FEEDBACK_DATA}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis 
              type="number" 
              stroke="#444" 
              fontSize={10} 
              tickFormatter={(value) => value.toLocaleString()} 
              fontFamily="JetBrains Mono"
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="#fff" 
              fontSize={12} 
              width={100} 
              fontFamily="JetBrains Mono"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
               cursor={{fill: 'rgba(255,255,255,0.05)'}}
               content={<CustomTooltip />}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20} animationDuration={2000}>
              {FEEDBACK_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};