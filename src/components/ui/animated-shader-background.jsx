import React from 'react';

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0f1a] pointer-events-none">
      
      {/* Calm, gentle twinkling stars */}
      <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: 'radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1.5px 1.5px at 30% 60%, rgba(255,255,255,0.9), transparent), radial-gradient(2px 2px at 80% 40%, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 60% 80%, white, transparent), radial-gradient(2px 2px at 90% 90%, rgba(255,255,255,0.6), transparent)', backgroundSize: '100px 100px', animation: 'gentle-twinkle 4s infinite ease-in-out' }} />
      <div className="absolute inset-0 z-0 opacity-60" style={{ backgroundImage: 'radial-gradient(1px 1px at 20% 80%, white, transparent), radial-gradient(2px 2px at 70% 20%, white, transparent), radial-gradient(1px 1px at 40% 40%, rgba(255,255,255,0.8), transparent), radial-gradient(1.5px 1.5px at 10% 90%, white, transparent)', backgroundSize: '150px 150px', animation: 'gentle-twinkle 6s infinite ease-in-out 2s' }} />
      <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: 'radial-gradient(1.5px 1.5px at 50% 10%, white, transparent), radial-gradient(1px 1px at 15% 50%, white, transparent), radial-gradient(2px 2px at 85% 50%, rgba(255,255,255,0.7), transparent), radial-gradient(1.5px 1.5px at 50% 85%, white, transparent)', backgroundSize: '200px 200px', animation: 'gentle-twinkle 8s infinite ease-in-out 4s' }} />

      {/* Gentle Shooting Star (occasional, subtle) */}
      <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-[-45deg] animate-gentle-shooting-star opacity-0 top-[15%] left-[80%]" style={{ animationDelay: '3s' }} />
      <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-[-45deg] animate-gentle-shooting-star opacity-0 top-[10%] left-[40%]" style={{ animationDelay: '12s' }} />

      {/* Crescent Moon - Static, clean, and elegant glow */}
      <div className="absolute top-16 right-[10%] md:top-24 md:right-[15%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-transparent shadow-[-10px_10px_0_0_#fdfbf7] md:shadow-[-16px_16px_0_0_#fdfbf7] rotate-[-25deg] filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10" />

      {/* Global CSS for custom calm animations */}
      <style>{`
        @keyframes gentle-twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 1; }
          100% { opacity: 0.1; }
        }
        @keyframes gentle-shooting-star {
          0% { opacity: 0; transform: translateX(0) translateY(0) rotate(-45deg); }
          5% { opacity: 1; }
          15% { opacity: 0; transform: translateX(-300px) translateY(300px) rotate(-45deg); }
          100% { opacity: 0; transform: translateX(-300px) translateY(300px) rotate(-45deg); }
        }
      `}</style>
    </div>
  );
}
