import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Envelope from './Envelope';
import LoveCounter from './LoveCounter';
import Reasons from './Reasons';
import MusicPlayer from './MusicPlayer';
import AnoAI from './ui/animated-shader-background';
import VideoPlayer from './VideoPlayer';
import BirthdayCake from './BirthdayCake';
import FloatingMemories from './FloatingMemories';

export default function Surprise() {
  useEffect(() => {
    // Initial Confetti Explosion on mount!
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.3 },
        colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585', '#ffffff']
      });
    }, 800);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-x-hidden bg-black px-4 sm:px-6 md:px-12 pt-16 pb-48">
      {/* Background Shader - Pure Black + Subtle Gradient */}
      <AnoAI />

      {/* Decorative details to fill space */}
      <FloatingMemories />



      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-30 text-center mb-16 mt-6 md:mt-10 bg-black/40 px-8 py-6 md:px-16 md:py-10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(255,105,180,0.15)] max-w-[90vw] mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] tracking-wide leading-tight">
          Төрсөн өдрийн мэнд! 🎉
        </h1>
        <div className="w-32 md:w-48 h-1 md:h-1.5 mx-auto bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full mt-6 opacity-80"></div>
      </motion.div>

      <div className="z-30 w-full max-w-3xl flex flex-col items-center space-y-16 md:space-y-24 mt-4">
        <BirthdayCake />
        <Envelope />
        <VideoPlayer />
        <LoveCounter />
        <Reasons />
      </div>

      <MusicPlayer />
    </div>
  );
}
