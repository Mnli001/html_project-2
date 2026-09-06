import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const wishes = [
  "Чиний инээмсэглэл үргэлж энэ ертөнцийг гэрэлтүүлж явах болтугай ✨",
  "Хүссэн сургууль, ажил, мөрөөдөл бүхэн чинь саадгүй биелэх болтугай 🌟",
  "Эрүүл энх, аз жаргалаар дүүрэн өдрүүд чамайг үргэлж угтах болтугай 💖",
  "Хамгийн хүнд хэцүү өдөр ч итгэл найдвараа алдахгүй гэрэлтэж яваарай 🕊️",
  "Бид хоёрын хайр, нандин дурсамжууд он цаг өнгөрөх тусам улам гүн бат болох болтугай 🌹",
  "Өдөр бүр чамд баяр хөөр, урам зориг, шинэ амжилт авчрах болтугай 💫",
  "Энэ орчлонгийн хамгийн азтай, хамгийн хайрлагдсан хүн нь чи байх болтугай ❤️"
];

export default function BirthdayWishJar() {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [openedCount, setOpenedCount] = useState(1);

  const handleNextWish = () => {
    const nextIndex = (revealedIndex + 1) % wishes.length;
    setRevealedIndex(nextIndex);
    setOpenedCount(prev => prev + 1);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ffd700', '#f472b6', '#60a5fa']
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center my-10 md:my-14 z-20 px-4">
      <div className="text-center mb-6">
        <h3 className="text-pink-200/80 font-light text-xs md:text-sm uppercase tracking-[0.25em] font-sans flex items-center justify-center gap-2">
          <Star size={16} className="text-amber-300 fill-amber-300" /> Оддын Ерөөл & Хүслүүд <Star size={16} className="text-amber-300 fill-amber-300" />
        </h3>
        <p className="text-white/40 text-xs mt-1">Одон дээр товшиж түүнд зориулсан хүслүүдийг нээгээрэй</p>
      </div>

      <div className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-purple-950/20 backdrop-blur-xl border border-white/15 text-center relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-pink-500/20 border border-amber-300/30 flex items-center justify-center mb-4 text-amber-300 shadow-lg shadow-amber-400/10"
          >
            <Sparkles size={30} />
          </motion.div>

          <span className="text-[11px] uppercase tracking-widest text-amber-200/70 mb-3 font-sans">
            Ерөөл №{revealedIndex + 1} / {wishes.length}
          </span>

          <AnimatePresence mode="wait">
            <motion.p
              key={revealedIndex}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="text-white/90 font-serif italic text-base sm:text-lg min-h-[70px] flex items-center justify-center leading-relaxed"
            >
              "{wishes[revealedIndex]}"
            </motion.p>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextWish}
            className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400/20 via-pink-500/20 to-purple-500/20 hover:from-amber-400/30 hover:to-pink-500/30 border border-white/20 text-white text-xs sm:text-sm tracking-wide font-sans flex items-center gap-2 transition-all shadow-md"
          >
            <Star size={15} className="text-amber-300 fill-amber-300" />
            Дараагийн хүслийг нээх ✨
          </motion.button>
        </div>
      </div>
    </div>
  );
}
