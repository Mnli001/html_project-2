import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from './Envelope';
import LoveCounter from './LoveCounter';
import Reasons from './Reasons';
import SpaceBackground from './ui/animated-shader-background';
import VideoPlayer from './VideoPlayer';
import BirthdayCake from './BirthdayCake';
import FlowerRain from './FlowerRain';
import Timeline from './Timeline';
import BucketList from './BucketList';
import LoveQuiz from './LoveQuiz';
import FireworksFinale from './FireworksFinale';

export default function Surprise() {
  const [isLetterClosed, setIsLetterClosed] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-x-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-32 md:pb-48">
      {/* Space background */}
      <SpaceBackground />

      {/* Continuous flower rain */}
      <FlowerRain count={50} />

      {/* Main content */}
      <div className={`z-30 w-full max-w-2xl lg:max-w-3xl flex flex-col items-center transition-all duration-1000 ${isLetterClosed ? 'space-y-12 md:space-y-20 mt-4' : 'justify-center min-h-[60vh] mt-0'}`}>
        
        <Envelope onLetterClose={() => setIsLetterClosed(true)} />
        
        <AnimatePresence>
          {isLetterClosed && (
            <motion.div 
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col items-center space-y-16 md:space-y-24 relative z-10"
            >
              {/* Staggered interactive components */}
              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.6, duration: 1.2 }}>
                <BirthdayCake />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.0, duration: 1.2 }}>
                <LoveCounter />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.4, duration: 1.2 }}>
                <Timeline />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.8, duration: 1.2 }}>
                <VideoPlayer />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 2.2, duration: 1.2 }}>
                <Reasons />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 2.6, duration: 1.2 }}>
                <BucketList />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 3.0, duration: 1.2 }}>
                <LoveQuiz />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 3.4, duration: 1.2 }}>
                <FireworksFinale />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

