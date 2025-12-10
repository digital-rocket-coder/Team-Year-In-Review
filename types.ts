import React from 'react';

export interface StatItem {
  id: string;
  label: string;
  value: string | number;
  subValue?: string;
  icon?: React.ReactNode;
  color?: string; // Tailwind color class for text
  colSpan?: string; // Tailwind grid span class
  maxValue?: number; // For progress bars/scales
  type?: 'default' | 'rank' | 'scale'; // To distinguish visual style
}

export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export enum ThemeColor {
  BLUE = 'text-neon-blue',
  PURPLE = 'text-neon-purple',
  GREEN = 'text-neon-green',
  PINK = 'text-neon-pink',
  WHITE = 'text-white',
  GOLD = 'text-yellow-400'
}