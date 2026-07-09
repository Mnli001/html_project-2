import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function BirthdayCake() {
  const [blownOut, setBlownOut] = useState(false);

  const handleBlowOut = () => {
    if (!blownOut) {
      setBlownOut(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585', '#ffffff']
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-4 z-30 cursor-pointer group" onClick={handleBlowOut}>
      <h3 className="text-pink-200 font-light mb-10 text-sm md:text-base uppercase tracking-[0.3em] font-serif transition-colors group-hover:text-pink-100">
        {blownOut ? "Хүсэл чинь биелэх болтугай! ✨" : "Лаагаа үлээгээрэй 🎂 (Энд дар)"}
      </h3>
      
      <div className="relative transform hover:scale-105 transition-transform duration-500">
        {/* Candles */}
        <div className="flex justify-center space-x-6 mb-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative w-3.5 h-14 bg-gradient-to-b from-white to-pink-200 rounded-sm shadow-md z-10">
              <div className="absolute top-2 w-full h-1 bg-pink-400" />
              <div className="absolute top-6 w-full h-1 bg-pink-400" />
              <div className="absolute top-10 w-full h-1 bg-pink-400" />
              {/* Flame */}
              {!blownOut && (
                <motion.div 
                  className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-4 h-7 bg-yellow-400 rounded-t-full rounded-b-md shadow-[0_0_20px_rgba(250,204,21,1)]"
                  animate={{ scale: [1, 1.2, 1], rotate: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5 }}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Cake Layers */}
        <div className="w-56 h-20 bg-pink-300 rounded-t-3xl rounded-b-lg border-t-8 border-pink-100 shadow-[inset_0_-10px_rgba(0,0,0,0.1)] relative overflow-hidden mx-auto z-10">
           {/* Drips */}
           <div className="absolute top-0 left-4 w-6 h-10 bg-pink-100 rounded-b-full shadow-sm" />
           <div className="absolute top-0 left-16 w-8 h-12 bg-pink-100 rounded-b-full shadow-sm" />
           <div className="absolute top-0 right-14 w-7 h-9 bg-pink-100 rounded-b-full shadow-sm" />
           <div className="absolute top-0 right-4 w-4 h-6 bg-pink-100 rounded-b-full shadow-sm" />
        </div>
        <div className="w-64 h-24 bg-pink-400 rounded-xl -mt-2 border-t-[10px] border-pink-200 shadow-[inset_0_-12px_rgba(0,0,0,0.2),0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden flex items-center justify-center z-0">
          <span className="text-white/40 font-serif text-2xl tracking-[0.3em] font-bold">HAPPY B-DAY</span>
        </div>
        
        {/* Plate */}
        <div className="w-72 h-6 bg-gray-200 rounded-full -ml-4 mt-1 shadow-[0_15px_30px_rgba(255,255,255,0.15)] border-b-[6px] border-gray-400" />
      </div>
    </div>
  );
}
