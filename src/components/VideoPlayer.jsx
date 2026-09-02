import { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-sm md:max-w-lg lg:max-w-2xl mx-auto flex flex-col items-center my-6 md:my-10 z-20 px-2">
      <h3 className="text-pink-200/80 font-light mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-[0.2em] font-sans text-center">
        Заавал үзээрэй ✨
      </h3>
      <div className="relative w-full aspect-video bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl md:rounded-3xl shadow-[0_10px_40px_rgba(244,114,182,0.12)] overflow-hidden group">
        <video 
          src="/video1.mp4" 
          controls 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
        >
          Таны хөтөч видео дэмжихгүй байна.
        </video>

        {/* Custom play cover overlay if video not playing yet */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center pointer-events-none transition-opacity duration-500">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
              <Play fill="white" className="ml-1 text-white" size={32} />
            </div>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl ring-1 ring-inset ring-white/10"></div>
      </div>
    </div>
  );
}

