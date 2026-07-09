import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc3 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      setIsPlaying(!audio.paused);
      
      const updateState = () => setIsPlaying(!audio.paused);
      audio.addEventListener('play', updateState);
      audio.addEventListener('pause', updateState);
      return () => {
        audio.removeEventListener('play', updateState);
        audio.removeEventListener('pause', updateState);
      };
    }
  }, []);

  const togglePlay = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        onClick={togglePlay}
        className="bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full shadow-2xl flex items-center space-x-4 cursor-pointer hover:bg-white/10 transition-colors"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="flex items-center justify-center bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full w-10 h-10 shadow-[0_0_15px_rgba(244,114,182,0.5)] border-2 border-white/20"
        >
          <Disc3 className="text-white" size={24} />
        </motion.div>
        
        <div className="flex flex-col">
          <p className="text-[10px] text-pink-300 uppercase tracking-[0.2em] leading-none font-medium mb-1.5">
            {isPlaying ? "Тоглож байна" : "Зогссон"}
          </p>
          <p className="text-sm text-white font-light leading-none tracking-wide">290 - Be My Summer</p>
        </div>
      </div>
    </div>
  );
}
