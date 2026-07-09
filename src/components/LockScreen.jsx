import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Delete } from 'lucide-react';

export default function LockScreen({ onUnlock }) {
  const [passcode, setPasscode] = useState('');
  const [shake, setShake] = useState(false);
  const [message, setMessage] = useState('Нууц үг оруулна уу');
  const [messageColor, setMessageColor] = useState('text-white');

  const CORRECT_CODE = '95157812';

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
        setMessageColor('text-red-400');
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setPasscode('');
          setMessage('Нууц үг оруулна уу');
          setMessageColor('text-white');
        }, 800);
      }
    }
  }, [passcode, onUnlock]);

  const handleKeyPress = (num) => {
    if (passcode.length < 8) {
      setPasscode(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setPasscode(prev => prev.slice(0, -1));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-slate-900 select-none">
      {/* Background Orbs for Liquid Glassmorphism */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob animation-delay-4000"></div>

      {/* Lock Screen Glass Panel */}
      <motion.div
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="z-10 flex flex-col items-center w-full max-w-[340px] p-8 pb-10 space-y-12 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl"
      >
        <div className="flex flex-col items-center space-y-5">
          <p className={`text-[1.1rem] font-medium tracking-wide transition-colors duration-300 ${messageColor}`}>
            {message}
          </p>
          <div className="flex space-x-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`w-3.5 h-3.5 rounded-full border-[1.5px] transition-all duration-200 ${
                  i < passcode.length ? 'bg-white border-white' : 'border-white/50 bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num)}
              className="flex items-center justify-center w-16 h-16 text-3xl font-light text-white transition-all rounded-full bg-white/5 hover:bg-white/20 active:bg-white/30 active:scale-95 backdrop-blur-md cursor-pointer"
            >
              {num}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleKeyPress(0)}
            className="flex items-center justify-center w-16 h-16 text-3xl font-light text-white transition-all rounded-full bg-white/5 hover:bg-white/20 active:bg-white/30 active:scale-95 backdrop-blur-md cursor-pointer"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center w-16 h-16 text-white transition-all rounded-full hover:bg-white/10 active:bg-white/20 active:scale-95 cursor-pointer"
          >
            <Delete size={26} strokeWidth={1.5} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
