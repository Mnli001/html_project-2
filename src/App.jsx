import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LockScreen from './components/LockScreen';
import Surprise from './components/Surprise';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black">
      <audio id="bg-music" src="/bg-music.m4a" loop preload="auto" />
      
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-screen"
          >
            <LockScreen onUnlock={() => setIsUnlocked(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
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
