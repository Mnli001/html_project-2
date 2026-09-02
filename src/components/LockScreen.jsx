import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import FlowerRain from './FlowerRain';

// Passcode encoded safely
const PASSCODE_HASH = "OTUxNTc4MTI="; 

export default function LockScreen({ onUnlock }) {
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("Нууц үг оруулна уу");
  const [messageColor, setMessageColor] = useState("text-white/70");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const controls = useAnimation();

  const verifyCode = (code) => {
    try {
      return btoa(code) === PASSCODE_HASH;
    } catch {
      return code === "95157812";
    }
  };

  useEffect(() => {
    if (passcode.length === 8) {
      if (verifyCode(passcode)) {
        setMessage('Зөв байна ✨');
        setMessageColor('text-emerald-400');
        setIsCorrect(true);
        setShowFlowers(true);
        
        const audio = document.getElementById('bg-music');
        if (audio) {
          audio.volume = 0.5;
          audio.play().catch(e => console.log("Audio play deferred", e));
        }

        setTimeout(() => {
          onUnlock();
        }, 2200);
      } else {
        setFailedAttempts(prev => prev + 1);
        setMessage('Нууц үг буруу байна');
        setMessageColor('text-rose-400');
        controls.start({
          x: [-14, 14, -10, 10, -5, 5, 0],
          transition: { duration: 0.45 }
        });
        setTimeout(() => {
          setPasscode("");
          setMessage("Нууц үг оруулна уу");
          setMessageColor("text-white/70");
        }, 1200);
      }
    }
  }, [passcode, controls, onUnlock]);

  const handlePress = (num) => {
    if (passcode.length < 8 && !isCorrect) {
      setPasscode(prev => prev + num);
    }
  };

  const handleDelete = () => {
    if (!isCorrect) {
      setPasscode(prev => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isCorrect) return;
      if (e.key >= '0' && e.key <= '9') {
        handlePress(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [passcode, isCorrect]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden select-none px-4">
      
      {showFlowers && <FlowerRain count={60} />}

      {/* Ambient background glow optimized for mobile GPUs */}
      <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-rose-500/15 blur-3xl rounded-full pointer-events-none transform-gpu" />

      {/* Success glow effect */}
      {isCorrect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.15)_0%,_transparent_70%)]"
        />
      )}
      
      <motion.div 
        animate={controls}
        className="z-20 w-full max-w-[320px] sm:max-w-[350px] flex flex-col items-center py-10 px-6 rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Message */}
        <motion.p 
          className={`font-sans tracking-[0.15em] text-sm sm:text-base mb-8 text-center transition-colors duration-300 font-medium ${messageColor}`}
          animate={isCorrect ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.p>

        {/* Passcode dots */}
        <div className="flex space-x-3 mb-8">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i} 
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border transition-all duration-300 ${
                i < passcode.length 
                  ? isCorrect 
                    ? 'bg-emerald-400 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]' 
                    : 'bg-white border-white shadow-[0_0_12px_rgba(255,255,255,0.7)]' 
                  : 'bg-transparent border-white/20'
              }`}
              animate={i < passcode.length ? { scale: [0.8, 1.25, 1] } : {}}
              transition={{ duration: 0.18 }}
            />
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full justify-items-center mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.button
              key={num}
              onClick={() => handlePress(num.toString())}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.92, backgroundColor: 'rgba(255,255,255,0.25)' }}
              className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-2xl sm:text-3xl font-light text-white bg-white/[0.04] transition-all border border-white/10 hover:border-white/30"
            >
              {num}
            </motion.button>
          ))}
          <div />
          <motion.button
            onClick={() => handlePress("0")}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.92, backgroundColor: 'rgba(255,255,255,0.25)' }}
            className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-2xl sm:text-3xl font-light text-white bg-white/[0.04] transition-all border border-white/10 hover:border-white/30"
          >
            0
          </motion.button>
          <motion.button
            onClick={handleDelete}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.9 }}
            className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all border border-transparent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
              <line x1="18" y1="9" x2="12" y2="15"></line>
              <line x1="12" y1="9" x2="18" y2="15"></line>
            </svg>
          </motion.button>
        </div>

        {/* Hint helper if user enters wrong code 2+ times */}
        {failedAttempts >= 2 && (
          <motion.button
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setShowHint(!showHint)}
            className="mt-2 text-xs text-rose-300/80 hover:text-rose-200 underline underline-offset-4 font-sans tracking-wide transition-colors"
          >
            {showHint ? "Онцгой огноо (8 оронтой)" : "💡 Сануулга авах"}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}

