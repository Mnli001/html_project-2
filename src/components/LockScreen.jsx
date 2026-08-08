import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import FlowerRain from './FlowerRain';

const CORRECT_CODE = "95157812";

export default function LockScreen({ onUnlock }) {
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("Нууц үг оруулна уу");
  const [messageColor, setMessageColor] = useState("text-white/60");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (passcode.length === 8) {
      if (passcode === CORRECT_CODE) {
        setMessage('Зөв байна ✨');
        setMessageColor('text-emerald-400');
        setIsCorrect(true);
        setShowFlowers(true);
        
        const audio = document.getElementById('bg-music');
        if (audio) {
          audio.volume = 0.4;
          audio.play().catch(e => console.log("Audio play failed", e));
        }

        setTimeout(() => {
          onUnlock();
        }, 3000);
      } else {
        setMessage('Буруу байна');
        setMessageColor('text-rose-400');
        controls.start({
          x: [-12, 12, -12, 12, 0],
          transition: { duration: 0.4 }
        });
        setTimeout(() => {
          setPasscode("");
          setMessage("Нууц үг оруулна уу");
          setMessageColor("text-white/60");
        }, 1000);
      }
    }
  }, [passcode, controls, onUnlock]);

  const handlePress = (num) => {
    if (passcode.length < 8) {
      setPasscode(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setPasscode(prev => prev.slice(0, -1));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden select-none">
      
      {/* Success glow effect */}
      {isCorrect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"
        />
      )}
      
      <motion.div 
        animate={controls}
        className="z-20 w-[90vw] max-w-[320px] md:max-w-[340px] flex flex-col items-center py-10 md:py-12 px-5 md:px-6 rounded-3xl"
      >
        {/* Message */}
        <motion.p 
          className={`font-sans tracking-[0.15em] text-sm md:text-base mb-8 transition-colors duration-500 ${messageColor}`}
          animate={isCorrect ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.6 }}
        >
          {message}
        </motion.p>

        {/* Passcode dots */}
        <div className="flex space-x-2.5 md:space-x-3 mb-10">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i} 
              className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border transition-all duration-300 ${
                i < passcode.length 
                  ? isCorrect 
                    ? 'bg-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]' 
                    : 'bg-white border-white shadow-[0_0_12px_rgba(255,255,255,0.5)]' 
                  : 'bg-transparent border-white/20'
              }`}
              animate={i < passcode.length ? { scale: [0.8, 1.2, 1] } : {}}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 md:gap-x-5 md:gap-y-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.button
              key={num}
              onClick={() => handlePress(num.toString())}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.9, backgroundColor: 'rgba(255,255,255,0.2)' }}
              className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center text-2xl md:text-3xl font-light text-white/90 bg-transparent transition-all border border-transparent hover:border-white/10"
            >
              {num}
            </motion.button>
          ))}
          <div />
          <motion.button
            onClick={() => handlePress("0")}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.9, backgroundColor: 'rgba(255,255,255,0.2)' }}
            className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center text-2xl md:text-3xl font-light text-white/90 bg-transparent transition-all border border-transparent hover:border-white/10"
          >
            0
          </motion.button>
          <motion.button
            onClick={handleDelete}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.9 }}
            className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
              <line x1="18" y1="9" x2="12" y2="15"></line>
              <line x1="12" y1="9" x2="18" y2="15"></line>
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
