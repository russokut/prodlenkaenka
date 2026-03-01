import React, { useState } from 'react';
import { motion } from 'motion/react';
import { History, ArrowRight, Clock } from 'lucide-react';

interface HistoryComparisonProps {
  currentImg: string;
  pastImg: string;
}

export const HistoryComparison: React.FC<HistoryComparisonProps> = ({ currentImg, pastImg }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl group select-none">
      {/* Past Image (Bottom) */}
      <img 
        src={pastImg} 
        alt="Прошлое" 
        className="absolute inset-0 w-full h-full object-cover grayscale sepia brightness-90 contrast-125"
        referrerPolicy="no-referrer"
      />
      
      {/* Current Image (Top with Clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={currentImg} 
          alt="Настоящее" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center -translate-x-1/2 border-4 border-brand-blue">
          <History className="w-6 h-6 text-brand-blue" />
        </div>
      </div>

      {/* Invisible Range Input */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos} 
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />

      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest pointer-events-none">
        2015
      </div>
      <div className="absolute bottom-6 right-6 z-10 bg-brand-blue/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest pointer-events-none">
        Сегодня
      </div>
    </div>
  );
};
