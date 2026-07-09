import { motion } from 'framer-motion';

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* Deep Space Gradients */}
      <div className="absolute w-[200vw] h-[200vh] top-[-50vh] left-[-50vw] bg-[radial-gradient(circle_at_50%_50%,_rgba(30,10,60,0.5),_rgba(10,5,20,0.9),_black_65%)] animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[150vw] h-[150vh] top-[-25vh] left-[-25vw] bg-[radial-gradient(circle_at_30%_70%,_rgba(60,20,100,0.4),_rgba(10,30,80,0.3),_transparent_70%)] animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Stars Generation */}
      {[...Array(150)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            boxShadow: `0 0 ${Math.random() * 5 + 2}px white`
          }}
          animate={{
            opacity: [Math.random() * 0.8 + 0.2, Math.random() * 0.2, Math.random() * 0.8 + 0.2],
            scale: [1, Math.random() * 0.5 + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Twinkling Colorful Stars (Nebula effect) */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`color-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? '#fbcfe8' : '#c4b5fd',
            boxShadow: `0 0 15px ${i % 2 === 0 ? '#fbcfe8' : '#c4b5fd'}`
          }}
          animate={{
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
}
