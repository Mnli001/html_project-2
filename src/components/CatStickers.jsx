import { motion } from 'framer-motion';

export default function CatStickers() {
  return (
    <>
      <motion.img 
        src="/cat.png" 
        alt="User Cat 1"
        className="absolute top-[8%] left-[2%] md:left-[10%] w-32 h-32 md:w-56 md:h-56 object-contain z-30 hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_25px_rgba(255,105,180,0.5)]"
        animate={{ rotate: [-6, 6, -6], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.img 
        src="/cat.png" 
        alt="User Cat 2"
        className="absolute top-[28%] right-[2%] md:right-[5%] w-36 h-36 md:w-64 md:h-64 object-contain z-30 hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_25px_rgba(255,105,180,0.5)]"
        style={{ transform: "scaleX(-1)" }}
        animate={{ rotate: [4, -4, 4], x: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.img 
        src="/cat.png" 
        alt="User Cat 3"
        className="absolute bottom-[22%] left-[2%] md:left-[5%] w-28 h-28 md:w-48 md:h-48 object-contain z-30 hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_25px_rgba(255,105,180,0.5)]"
        animate={{ scale: [1, 1.05, 1], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.img 
        src="/cat.png" 
        alt="User Cat 4"
        className="absolute bottom-[2%] right-[5%] md:right-[10%] w-32 h-32 md:w-64 md:h-64 object-contain z-30 hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_25px_rgba(255,105,180,0.5)]"
        style={{ transform: "scaleX(-1)" }}
        animate={{ rotate: [5, -5, 5], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
      />
    </>
  );
}
