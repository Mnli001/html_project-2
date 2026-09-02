import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

export default function FireworksFinale() {
  const [clickCount, setClickCount] = useState(0);

  const handleTap = (e) => {
    setClickCount(prev => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    confetti({
      particleCount: 50,
      spread: 80,
      origin: { x: Math.max(0.1, Math.min(0.9, x)), y: Math.max(0.1, Math.min(0.9, y)) },
      colors: ['#ffb6c1', '#ffd700', '#ffffff', '#e0a96d', '#ff69b4', '#38bdf8']
    });
  };

  return (
    <div 
      onClick={handleTap}
      className="w-full max-w-2xl mx-auto flex flex-col items-center my-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-rose-950/20 backdrop-blur-xl border border-white/15 text-center cursor-pointer relative overflow-hidden group select-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <motion.div 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mb-4 text-pink-300"
      >
        <Sparkles size={36} />
      </motion.div>

      <h3 className="text-2xl sm:text-4xl font-serif text-white mb-4 tracking-wide font-medium leading-relaxed drop-shadow-md">
        Хамгийн аз жаргалтай төрсөн өдрийн мэнд хүргэе! ❤️
      </h3>

      <p className="text-white/70 font-serif italic text-sm sm:text-base mb-6 max-w-md">
        "Инээмсэглэл бүхэн чинь орчлонг гийгүүлж, хүсэл бүхэн чинь биелэх болтугай."
      </p>

      <div className="inline-flex items-center space-x-2 text-xs text-pink-200/80 uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <Heart size={14} className="fill-pink-400 text-pink-400" />
        <span>Дэлгэц дээр дарж салют буудуулаарай ({clickCount})</span>
      </div>
    </div>
  );
}
