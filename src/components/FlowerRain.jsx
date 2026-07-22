import { useMemo } from 'react';

// Different flower types as SVG components
function Rose({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <ellipse cx="20" cy="12" rx="8" ry="10" fill={color} opacity="0.85" transform="rotate(0,20,20)"/>
      <ellipse cx="28" cy="18" rx="8" ry="10" fill={color} opacity="0.8" transform="rotate(72,20,20)"/>
      <ellipse cx="26" cy="28" rx="8" ry="10" fill={color} opacity="0.75" transform="rotate(144,20,20)"/>
      <ellipse cx="14" cy="28" rx="8" ry="10" fill={color} opacity="0.8" transform="rotate(216,20,20)"/>
      <ellipse cx="12" cy="18" rx="8" ry="10" fill={color} opacity="0.85" transform="rotate(288,20,20)"/>
      <circle cx="20" cy="20" r="5" fill={color} opacity="0.95" filter="brightness(0.9)"/>
      <circle cx="20" cy="20" r="3" fill={color} opacity="1" filter="brightness(0.8)"/>
    </svg>
  );
}

function Daisy({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      {[0,45,90,135,180,225,270,315].map(angle => (
        <ellipse key={angle} cx="20" cy="10" rx="4" ry="9" fill={color} opacity="0.85"
          transform={`rotate(${angle},20,20)`}/>
      ))}
      <circle cx="20" cy="20" r="5" fill="#f9a825" opacity="0.9"/>
      <circle cx="20" cy="20" r="3" fill="#fdd835"/>
    </svg>
  );
}

function CherryBlossom({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle} cx="20" cy="10" rx="6" ry="10" fill={color} opacity="0.8"
          transform={`rotate(${angle},20,20)`}/>
      ))}
      <circle cx="20" cy="20" r="4" fill="#fff" opacity="0.9"/>
      {[0,72,144,216,288].map(angle => (
        <circle key={`s${angle}`} cx="20" cy="14" r="1" fill="#e91e63" opacity="0.6"
          transform={`rotate(${angle},20,20)`}/>
      ))}
    </svg>
  );
}

function TulipPetal({ size, color }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 20 28">
      <path d="M10 0 C5 5, 0 10, 2 18 C4 24, 8 28, 10 28 C12 28, 16 24, 18 18 C20 10, 15 5, 10 0Z" fill={color} opacity="0.85"/>
      <path d="M10 2 C8 8, 7 14, 9 22" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

function Cosmos({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      {[0,45,90,135,180,225,270,315].map(angle => (
        <path key={angle} d="M20 20 L18 8 Q20 4 22 8 Z" fill={color} opacity="0.8"
          transform={`rotate(${angle},20,20)`}/>
      ))}
      <circle cx="20" cy="20" r="4" fill="#7b1fa2" opacity="0.7"/>
      <circle cx="20" cy="20" r="2.5" fill="#9c27b0" opacity="0.9"/>
    </svg>
  );
}

function SmallPetal({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <ellipse cx="10" cy="10" rx="8" ry="5" fill={color} opacity="0.8" transform="rotate(30,10,10)"/>
    </svg>
  );
}

const FLOWER_TYPES = ['rose', 'daisy', 'cherry', 'tulip', 'cosmos', 'petal'];
const PREMIUM_PALETTE = [
  '#ffb6c1', '#f8bbd0', '#f48fb1', '#f06292', '#e0a96d',
  '#ffffff', '#fdfbf7', '#ffd700', '#ffeb3b', '#e6d5c3'
];

export default function FlowerRain({ count = 40 }) {
  const flowers = useMemo(() => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      type: FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)],
      color: PREMIUM_PALETTE[Math.floor(Math.random() * PREMIUM_PALETTE.length)],
      left: Math.random() * 105 - 2.5,
      size: 14 + Math.random() * 24, // slightly smaller, more elegant
      delay: (i / count) * 10, // spread out more
      duration: 12 + Math.random() * 8, // much slower fall
      rotation: Math.random() * 360,
      swayX: (Math.random() - 0.5) * 150, // wider sway
    }));
  }, [count]);

  const renderFlower = (f) => {
    switch(f.type) {
      case 'rose': return <Rose size={f.size} color={f.color} />;
      case 'daisy': return <Daisy size={f.size} color={f.color} />;
      case 'cherry': return <CherryBlossom size={f.size} color={f.color} />;
      case 'tulip': return <TulipPetal size={f.size} color={f.color} />;
      case 'cosmos': return <Cosmos size={f.size} color={f.color} />;
      case 'petal': return <SmallPetal size={f.size} color={f.color} />;
      default: return <Rose size={f.size} color={f.color} />;
    }
  };

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {flowers.map(f => (
        <div
          key={f.id}
          className="absolute"
          style={{
            left: `${f.left}%`,
            top: '-60px',
            transform: `rotate(${f.rotation}deg)`,
            animation: `flower-rain-fall ${f.duration}s cubic-bezier(0.4, 0, 0.2, 1) ${f.delay}s infinite`,
            '--sway-x': `${f.swayX}px`,
            filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.1))'
          }}
        >
          {renderFlower(f)}
        </div>
      ))}
      <style>{`
        @keyframes flower-rain-fall {
          0% { 
            transform: translateY(-60px) translateX(0) rotate(0deg); 
            opacity: 0; 
          }
          10% { opacity: 0.8; }
          50% { 
            transform: translateY(50vh) translateX(var(--sway-x)) rotate(360deg);
            opacity: 0.6;
          }
          90% { opacity: 0.8; }
          100% { 
            transform: translateY(115vh) translateX(calc(var(--sway-x) * -0.5)) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
