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
        colors: ['#ffb6c1', '#e0a96d', '#ffffff', '#ffd700'],
        disableForReducedMotion: true
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-8 md:my-16 z-30 cursor-pointer group" onClick={handleBlowOut}>
      <h3 className="text-[#a38a6d] font-light mb-10 md:mb-14 text-sm md:text-base uppercase tracking-[0.4em] font-serif transition-colors group-hover:text-[#e0a96d]">
        {blownOut ? "Хүсэл чинь биелэх болтугай ✨" : "Лаагаа үлээгээрэй"}
      </h3>
      
      <div className="transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] relative">
        {/* Ambient glow behind cake */}
        {!blownOut && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#e0a96d]/10 blur-3xl rounded-full pointer-events-none" />
        )}

        {/* Candles */}
        <div className="flex justify-center space-x-12 md:space-x-16 mb-[-4px] relative z-20">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* Flame */}
              {!blownOut && (
                <motion.div 
                  className="mb-2"
                  animate={{ scale: [1, 1.15, 0.95, 1], rotate: [-2, 3, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.4, ease: "easeInOut" }}
                >
                  <svg width="14" height="24" viewBox="0 0 14 24">
                    <defs>
                      <radialGradient id={`flame${i}`} cx="50%" cy="70%" r="50%">
                        <stop offset="0%" stopColor="#ffffff"/>
                        <stop offset="40%" stopColor="#ffe699"/>
                        <stop offset="100%" stopColor="#e0a96d"/>
                      </radialGradient>
                      <filter id={`glow${i}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    <path d="M7 0 C7 0 14 10 14 16 C14 20 10.866 24 7 24 C3.134 24 0 20 0 16 C0 10 7 0 7 0 Z" fill={`url(#flame${i})`} filter={`url(#glow${i})`}/>
                  </svg>
                  <div className="absolute inset-0 bg-[#e0a96d]/20 blur-xl w-8 h-8 -left-2 -top-2 rounded-full mix-blend-screen" />
                </motion.div>
              )}
              {/* Smoke (when blown out) */}
              {blownOut && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 0.6, 0], y: -40, x: [0, i % 2 === 0 ? 10 : -10] }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="mb-2 w-1 h-8 rounded-full blur-md bg-white/40"
                />
              )}
              {/* Candle stick */}
              <div className="w-1.5 h-12 md:h-14 bg-gradient-to-b from-[#fdfbf7] to-[#e6d5c3] rounded-t-sm shadow-sm" />
            </div>
          ))}
        </div>
        
        {/* Cake top layer */}
        <div className="w-56 md:w-64 h-14 md:h-16 bg-[#fdfbf7] rounded-t-sm relative mx-auto border-t border-[#ffffff]/60 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] z-10 flex items-center justify-center">
            {/* Minimalist frosting line */}
            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#e0a96d]/20" />
            <div className="absolute bottom-2 left-8 right-8 h-[1px] bg-[#e0a96d]/10" />
        </div>

        {/* Cake bottom layer */}
        <div className="w-60 md:w-72 h-16 md:h-20 bg-[#f4e6d4] rounded-sm relative mx-auto shadow-premium z-0 overflow-hidden border border-white/30">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
          {/* Decorative stripe */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#e0a96d]/30 transform -translate-y-1/2" />
        </div>
        
        {/* Elegant Plate / Stand */}
        <div className="w-64 md:w-80 h-2 bg-gradient-to-r from-[#1a1a1a] via-[#333333] to-[#1a1a1a] rounded-sm mx-auto mt-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-t border-white/10" />
        <div className="w-48 md:w-56 h-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-b-lg mx-auto" />
      </div>
    </div>
  );
}
