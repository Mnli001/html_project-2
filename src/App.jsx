import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LockScreen from './components/LockScreen';
import Surprise from './components/Surprise';
import MouseEffects from './components/MouseEffects';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black relative font-sans text-white">
      <audio id="bg-music" src="/bg-music.m4a" loop preload="auto" />
      
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-screen"
          >
            <LockScreen onUnlock={() => setIsUnlocked(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full min-h-screen"
          >
            <Surprise />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
