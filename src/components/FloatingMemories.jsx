import { motion } from 'framer-motion';

const memories = [
  { text: "Бидний аялал...", angle: -12, top: "25%", left: "5%" },
  { text: "Хамгийн хөөрхөн нь", angle: 15, top: "40%", left: "80%" },
  { text: "Тэр нэгэн орой", angle: -8, top: "70%", left: "8%" },
  { text: "Үргэлж хамт", angle: 12, top: "85%", left: "75%" }
];

export default function FloatingMemories() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {memories.map((mem, i) => (
        <motion.div
          key={i}
          className="absolute w-44 h-52 bg-white/10 backdrop-blur-md p-3 pb-10 rounded-lg border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col justify-end items-center hidden lg:flex"
          style={{ top: mem.top, left: mem.left, rotate: mem.angle }}
          animate={{
            y: [0, -20, 0],
            rotate: [mem.angle, mem.angle + 3, mem.angle],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-black/30 rounded border border-white/10 mb-4 flex items-center justify-center text-xs text-white/40 text-center px-2 font-serif uppercase tracking-widest">
            Зураг
          </div>
          <span className="font-handwriting text-pink-200 text-2xl drop-shadow-md">{mem.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
