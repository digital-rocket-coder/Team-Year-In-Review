import React from 'react';
import { MessageSquareQuote, Quote } from 'lucide-react';

export const GeminiSummary: React.FC = () => {
  return (
    <div className="glass-card p-8 rounded-2xl col-span-1 md:col-span-2 lg:col-span-4 border-t-4 border-t-neon-blue mt-8 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <MessageSquareQuote size={120} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Avatar Section */}
        <div className="flex flex-col items-center justify-center md:items-start min-w-[150px]">
          <div className="w-32 h-32 rounded-full border-4 border-neon-blue/30 p-1 relative group overflow-hidden bg-black">
             {/* PLACEHOLDER: Замените src на реальное фото, например /pavel.jpg или URL */}
            <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pavel&backgroundColor=b6e3f4&clothing=hoodie&eyebrows=default&eyes=happy" 
                alt="Павел Наумов" 
                className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <h3 className="text-xl font-bold font-display text-white">Павел Наумов</h3>
            <p className="text-neon-blue text-sm font-mono uppercase tracking-wider">Team Lead</p>
          </div>
        </div>

        {/* Speech Section */}
        <div className="flex-1">
            <div className="mb-4 text-neon-blue opacity-50">
                <Quote size={40} />
            </div>
            
            <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-100 italic font-serif">
                "Команда, это был легендарный год! 🚀 <br/><br/>
                Мы пробили планку в 80 миллиардов событий и ворвались в Топ-3 Markswebb. 
                99,99% Crash Free — это уровень, о котором другие только мечтают. Вы выловили 14 000 багов и сделали продукт, которым пользуются миллионы. <br/><br/>
                В 2026-м году мы не сбавляем темп. Наша цель — абсолютное лидерство и идеальный код. 
                Горжусь работать с вами. Вы — настоящие рок-звезды IT!"
                </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
               <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
               <span className="font-mono text-xs text-gray-500 uppercase">Message Encrypted & Delivered</span>
            </div>
        </div>
      </div>
    </div>
  );
};