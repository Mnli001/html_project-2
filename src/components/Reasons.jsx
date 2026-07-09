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
    <div className="relative w-full max-w-3xl flex flex-col items-center my-16 mx-auto min-h-[500px] z-20">
      <h3 className="text-center text-indigo-200 font-light mb-16 text-sm uppercase tracking-[0.2em] font-serif">Яагаад чамд татагдсан бэ?</h3>
      
      {/* Central Fixed Text Box */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 min-h-[140px] flex items-center justify-center p-6 text-center bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] z-0">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeReason}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-white font-handwriting text-3xl tracking-wide leading-relaxed"
          >
            {activeReason}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Orbiting Stars */}
      <div className="relative w-full h-[400px] flex items-center justify-center pointer-events-none">
        {reasons.map((reason, index) => {
          const angle = (index / reasons.length) * Math.PI * 2 - Math.PI / 2;
          const radiusX = 220; // Elliptical orbit
          const radiusY = 160;
          const x = Math.cos(angle) * radiusX;
          const y = Math.sin(angle) * radiusY;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer pointer-events-auto"
              style={{ x, y }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveReason(reason)}
              animate={{
                y: [y - 15, y + 15, y - 15],
              }}
              transition={{ repeat: Infinity, duration: 4 + index * 0.5, ease: "easeInOut" }}
            >
              <Star className="text-yellow-100 drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" fill="#fef08a" size={48} strokeWidth={1} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
