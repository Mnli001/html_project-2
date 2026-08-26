import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';

export default function Envelope({ onLetterClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const text = "Бид анх Улаанбаатарын марафон дээр танилцаж байсан тэр өдөр... Түүнээс хойш өдөр бүр илүү ихээр дасалцаж, чамтай байх үнэхээр сайхан байдаг болсон. Энэ бол зөвхөн эхлэл юм шүү. Цаашдаа илүү олон сайхан дурсамжуудыг хамтдаа бүтээнэ гэдэгт итгэж байна. ❤️";

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.4 },
        colors: ['#ffb6c1', '#ffffff', '#e0a96d', '#ff69b4'],
        disableForReducedMotion: true
      });

      // Show letter exactly after the flap opens
      setTimeout(() => setShowLetter(true), 1200);
    }
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
    setIsOpen(false);
    if (onLetterClose) onLetterClose();
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-lg mx-auto my-12 cursor-pointer group z-50 perspective-1000" onClick={handleOpen}>
      
      {/* The Envelope Assembly */}
      <motion.div 
        className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex items-end justify-center"
        initial={{ y: 0, rotate: -2 }}
        animate={{ y: [0, -10, 0] }}
        whileHover={!isOpen ? { scale: 1.02, rotate: 0 } : {}}
        transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" }, rotate: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
      >
        
        {/* Envelope Back / Base */}
        <div className="absolute inset-0 bg-[#e6d5c3] rounded-sm shadow-premium overflow-hidden border border-white/20">
            {/* Paper Texture overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
            {/* Inner Dark shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.1)]"></div>
        </div>

        {/* The Letter (slides up) */}
        {isOpen && (
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: -80, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[280px] h-[190px] md:w-[360px] md:h-[240px] bg-[#fdfbf7] rounded-sm shadow-lg z-10 p-6 flex flex-col items-center justify-center border border-[#e0a96d]/30"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/handmade-paper.png')" }}
            >
                <div className="w-12 h-12 rounded-full border border-[#e0a96d] flex items-center justify-center mb-4 opacity-80">
                    <span className="text-[#e0a96d] font-serif text-xl">M</span>
                </div>
                <p className="text-gray-400 font-serif text-sm tracking-widest uppercase">Нээгдэж байна</p>
            </motion.div>
        )}

        {/* Envelope Front Left Wing */}
        <div className="absolute inset-0 z-20 overflow-hidden rounded-sm pointer-events-none">
            <svg viewBox="0 0 400 260" className="absolute inset-0 w-full h-full drop-shadow-md">
                <path d="M0,0 L200,130 L0,260 Z" fill="#f4e6d4" />
            </svg>
        </div>

        {/* Envelope Front Right Wing */}
        <div className="absolute inset-0 z-20 overflow-hidden rounded-sm pointer-events-none">
            <svg viewBox="0 0 400 260" className="absolute inset-0 w-full h-full drop-shadow-md">
                <path d="M400,0 L200,130 L400,260 Z" fill="#ebdcd0" />
            </svg>
        </div>

        {/* Envelope Front Bottom Wing */}
        <div className="absolute inset-0 z-30 overflow-hidden rounded-sm pointer-events-none">
            <svg viewBox="0 0 400 260" className="absolute inset-0 w-full h-full drop-shadow-xl">
                <path d="M0,260 L200,120 L400,260 Z" fill="#fcf3e8" />
            </svg>
        </div>

        {/* Envelope Flap (Top Wing) */}
        <motion.div 
            className="absolute top-0 left-0 right-0 z-40 origin-top"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 5 : 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <svg viewBox="0 0 400 150" className="w-full h-auto drop-shadow-xl">
                <path d="M0,0 L200,140 L400,0 Z" fill="#fdfaf6" />
                {/* Wax seal */}
                {!isOpen && (
                    <circle cx="200" cy="130" r="18" fill="#b02b36" className="drop-shadow-md" />
                )}
            </svg>
        </motion.div>

        {/* Text over Wax Seal */}
        {!isOpen && (
            <motion.div 
                className="absolute z-50 flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
            >
                <p className="text-[#8c7355] font-serif italic text-lg md:text-xl drop-shadow-sm tracking-wide">Чамд зориулав</p>
            </motion.div>
        )}

      </motion.div>

      {/* Fullscreen Reading View (Rendered via Portal to escape containing blocks) */}
      {createPortal(
        <AnimatePresence>
          {showLetter && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60"
              onClick={(e) => { e.stopPropagation(); handleCloseLetter(); }}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 30, rotateX: 5 }}
                animate={{ scale: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-full max-w-lg md:max-w-2xl max-h-[85vh] overflow-y-auto p-10 md:p-16 bg-[#fdfbf7] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative border-l-4 border-[#e0a96d]" 
                onClick={e => e.stopPropagation()}
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
              >
                <button 
                  className="absolute top-6 right-6 text-[#a38a6d] hover:text-black transition-colors rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light" 
                  onClick={handleCloseLetter}
                >
                  ✕
                </button>
                
                <div className="flex justify-center mb-8">
                  {/* Elegant SVG ornament */}
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 0 L40 10 L30 20 L20 10 Z" fill="#e0a96d" opacity="0.6"/>
                      <line x1="0" y1="10" x2="20" y2="10" stroke="#e0a96d" strokeWidth="1" opacity="0.4"/>
                      <line x1="40" y1="10" x2="60" y2="10" stroke="#e0a96d" strokeWidth="1" opacity="0.4"/>
                  </svg>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif text-[#2a2426] mb-10 pb-6 text-center border-b border-[#e0a96d]/20 tracking-wide">Хонгор чамдаа</h2>
                
                <p className="text-[#3a3335] leading-[2.2] font-serif text-lg md:text-2xl text-pretty first-letter:text-6xl first-letter:font-bold first-letter:text-[#e0a96d] first-letter:mr-2 first-letter:float-left">
                  {text.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.02 + 0.5 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </p>

                <div className="mt-16 text-center">
                   <motion.button 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: text.length * 0.02 + 1.5, duration: 1 }}
                      onClick={handleCloseLetter}
                      className="px-8 py-3 border border-[#e0a96d] text-[#8c7355] font-serif uppercase tracking-widest text-sm hover:bg-[#e0a96d] hover:text-white transition-all duration-500 rounded-sm"
                   >
                      Зүрхэнд хадгалах
                   </motion.button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
