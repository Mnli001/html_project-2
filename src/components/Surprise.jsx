import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Envelope from './Envelope';
import LoveCounter from './LoveCounter';
import Reasons from './Reasons';
import MusicPlayer from './MusicPlayer';
import SpaceBackground from './ui/animated-shader-background';
import CatStickers from './CatStickers';
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
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-x-hidden bg-black p-4 pt-16 pb-48">
      {/* Background Shader - Galaxy/Space */}
      <SpaceBackground />

      {/* Decorative details to fill space */}
      <FloatingMemories />
      <CatStickers />

      {/* Background Hearts/Stars Particle System */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400/50 pointer-events-none z-10"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{
            top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          }}
          transition={{
            duration: Math.random() * 40 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '✨' : '💖'}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-30 text-center mb-12 mt-4 bg-black/40 px-12 py-8 rounded-[3rem] backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(255,105,180,0.15)]"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] tracking-wide">
          Төрсөн өдрийн мэнд! 🎉
        </h1>
        <div className="w-48 h-1.5 mx-auto bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full mt-6 opacity-80"></div>
      </motion.div>

      <div className="z-30 w-full max-w-4xl flex flex-col items-center space-y-24 mt-8">
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
