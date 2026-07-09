import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AnoAI from './ui/animated-shader-background';

const CORRECT_CODE = "95157812";

export default function LockScreen({ onUnlock }) {
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("Нууц үг оруулна уу");
  const [messageColor, setMessageColor] = useState("text-white");
  const controls = useAnimation();

  useEffect(() => {
    if (passcode.length === 8) {
      if (passcode === CORRECT_CODE) {
        setMessage('Зөв байна');
        setMessageColor('text-green-400');
        
        const audio = document.getElementById('bg-music');
        if (audio) {
          audio.volume = 0.6;
          audio.play().catch(e => console.log("Audio play failed", e));
        }

        setTimeout(() => {
          onUnlock();
        }, 1000);
      } else {
        setMessage('Буруу байна');
        setMessageColor('text-rose-400');
        controls.start({
          x: [-10, 10, -10, 10, 0],
          transition: { duration: 0.4 }
        });
        setTimeout(() => {
          setPasscode("");
          setMessage("Нууц үг оруулна уу");
          setMessageColor("text-white");
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden select-none">
      
      <motion.div 
        animate={controls}
        className="z-20 w-full max-w-[340px] flex flex-col items-center bg-[#1e2330]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] py-12 px-6 shadow-2xl"
      >
        <p className={`font-medium tracking-wide text-lg mb-8 transition-colors duration-300 ${messageColor}`}>
          {message}
        </p>

        <div className="flex space-x-3 mb-10">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={`w-3.5 h-3.5 rounded-full border-[1.5px] transition-all duration-200 ${i < passcode.length ? 'bg-white border-white' : 'bg-transparent border-white/40'}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handlePress(num.toString())}
              className="w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center text-3xl font-light text-white bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors"
            >
              {num}
            </button>
          ))}
          <div />
          <button
            onClick={() => handlePress("0")}
            className="w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center text-3xl font-light text-white bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center text-white/70 hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
              <line x1="18" y1="9" x2="12" y2="15"></line>
              <line x1="12" y1="9" x2="18" y2="15"></line>
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
