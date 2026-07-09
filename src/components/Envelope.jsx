import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const text = "Бид анх Улаанбаатарын марафон дээр танилцаж байсан тэр өдөр... Түүнээс хойш өдөр бүр илүү ихээр дасалцаж, чамтай байх үнэхээр сайхан байдаг болсон. Энэ бол зөвхөн эхлэл юм шүү. Цаашдаа илүү олон сайхан дурсамжуудыг хамтдаа бүтээнэ гэдэгт итгэж байна. ❤️";

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto my-4 cursor-pointer group z-30" onClick={() => { setIsOpen(true); setTimeout(() => setShowLetter(true), 800) }}>
      
      {!isOpen && (
        <motion.div 
          className="relative w-80 h-56 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center border border-white/40"
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="absolute top-0 w-0 h-0 border-l-[160px] border-r-[160px] border-t-[112px] border-l-transparent border-r-transparent border-t-purple-300/80 rounded-t-lg z-10" />
          <p className="text-purple-900 font-handwriting z-20 mt-12 font-bold text-3xl drop-shadow-sm">Чамд зориулав 💌</p>
        </motion.div>
      )}

      {isOpen && !showLetter && (
        <motion.div className="relative w-80 h-56 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center border border-white/40">
          <motion.div 
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 180 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 w-0 h-0 border-l-[160px] border-r-[160px] border-t-[112px] border-l-transparent border-r-transparent border-t-purple-300/80 origin-top z-0" 
          />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -80, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute w-72 h-64 bg-white/95 rounded shadow-xl z-10 p-4 flex items-center justify-center"
          >
            <p className="text-xl font-handwriting text-gray-500">Нээгдэж байна...</p>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {showLetter && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={(e) => { e.stopPropagation(); setShowLetter(false); setIsOpen(false); }}
          >
            <div className="w-full max-w-2xl p-8 md:p-16 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] bg-[#fdfbf7] rounded-md shadow-[0_0_60px_rgba(255,255,255,0.2)] relative border-2 border-purple-100 min-h-[400px] flex flex-col justify-center" onClick={e => e.stopPropagation()}>
              <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl" onClick={() => { setShowLetter(false); setIsOpen(false); }}>✕</button>
              <h2 className="text-4xl md:text-5xl font-serif text-purple-800 mb-8 pb-6 text-center border-b border-purple-200">Хонгор чамдаа 💖</h2>
              <p className="text-gray-800 leading-relaxed font-handwriting text-3xl md:text-4xl">
                {text.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
