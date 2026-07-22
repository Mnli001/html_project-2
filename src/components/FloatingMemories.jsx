import { motion } from 'framer-motion';

// Elegant SVG line-art flower for polaroids
function LineArtFlower({ color = '#e0a96d' }) {
  return (
    <svg width="40" height="60" viewBox="0 0 40 60" className="inline-block opacity-70">
      <path d="M20 5 C15 15, 10 25, 20 35 C30 25, 25 15, 20 5Z" fill="none" stroke={color} strokeWidth="1.5"/>
      <path d="M20 35 C15 40, 18 50, 20 60" fill="none" stroke={color} strokeWidth="1.5"/>
      <path d="M20 45 C10 40, 5 35, 15 30" fill="none" stroke={color} strokeWidth="1"/>
      <path d="M20 42 C30 38, 35 32, 25 28" fill="none" stroke={color} strokeWidth="1"/>
    </svg>
  );
}

const memories = [
  { text: "Бидний аялал...", angle: -6, top: "18%", left: "5%" },
  { text: "Хамгийн хөөрхөн нь", angle: 4, top: "35%", left: "76%" },
  { text: "Тэр нэгэн орой", angle: -3, top: "65%", left: "8%" },
  { text: "Үргэлж хамт", angle: 5, top: "75%", left: "72%" },
];

export default function FloatingMemories() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {memories.map((mem, i) => (
        <motion.div
          key={i}
          className="absolute w-40 h-52 md:w-48 md:h-64 bg-[#fdfbf7] p-3 pb-12 md:p-4 md:pb-16 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex-col justify-end items-center hidden lg:flex border border-white/50"
          style={{ 
            top: mem.top, 
            left: mem.left, 
            rotate: mem.angle,
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" 
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [mem.angle, mem.angle + 3, mem.angle],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + i * 2,
            ease: "easeInOut"
          }}
        >
          {/* Inner Photo Frame */}
          <div className="w-full h-full bg-[#1a181e] mb-3 md:mb-4 flex items-center justify-center relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(224,169,109,0.1)_0%,_transparent_70%)]" />
            <LineArtFlower />
          </div>
          {/* Caption */}
          <span className="font-handwriting text-[#2a2426] text-xl md:text-2xl drop-shadow-sm opacity-80">{mem.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
