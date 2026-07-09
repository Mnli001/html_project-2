import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const reasons = [
  "Чиний хамгийн хөөрхөн инээмсэглэл ✨",
  "Чамтай байхад яг л өөртөө байгаа мэт тухтай байдаг 😌",
  "Чиний ухаалаг, бас хөгжилтэй яриа 🗣️",
  "Миний өдрийг гэрэлтүүлж чаддаг чадвар чинь ☀️",
  "Үргэлж шинийг сурч, өсөж хөгжихийг хичээдэгт чинь 📚",
];

export default function Reasons() {
  const [activeReason, setActiveReason] = useState("Одод дээр дарна уу...");

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-12 px-4 z-20">
      <h3 className="text-center text-indigo-200/80 font-light mb-10 text-sm md:text-base uppercase tracking-[0.2em] font-serif">
        Яагаад чамд татагдсан бэ?
      </h3>
      
      {/* Central Text Display - Responsive height and perfect centering */}
      <div className="w-full min-h-[160px] md:min-h-[180px] flex items-center justify-center p-6 md:p-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-[0_0_30px_rgba(255,255,255,0.05)] mb-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeReason}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="text-white/90 font-serif text-2xl md:text-3xl tracking-wide leading-relaxed drop-shadow-md"
          >
            {activeReason}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Floating Stars Container - Flex wrap for perfect mobile support */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full px-2">
        {reasons.map((reason, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveReason(reason)}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ 
              y: {
                repeat: Infinity, 
                duration: 3 + index * 0.4, 
                ease: "easeInOut",
                delay: index * 0.2
              }
            }}
            className="p-3 rounded-full hover:bg-white/5 transition-colors group focus:outline-none"
          >
            <Star 
              className="text-yellow-100/80 group-hover:text-yellow-200 transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
              fill="currentColor" 
              size={36} 
              strokeWidth={1} 
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
