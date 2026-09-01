import { useState, useEffect } from 'react';

export default function LoveCounter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Start date of meeting (May 23, 2026 / Marathon day)
    const startDate = new Date('2026-05-23T09:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, now - startDate);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 my-4 bg-white/[0.05] backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(255,182,193,0.08)] w-full max-w-[92vw] md:max-w-md mx-auto transition-all">
      <h3 className="text-pink-200/80 font-light mb-5 md:mb-6 text-xs md:text-sm uppercase tracking-[0.2em] font-sans text-center">
        Марафон дээр танилцсанаас хойш
      </h3>
      <div className="flex justify-between w-full text-center px-2 md:px-4 gap-1 sm:gap-2">
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">
            {time.days}
          </span>
          <span className="text-[10px] md:text-xs text-pink-200/70 mt-1.5 md:mt-2 tracking-wider font-medium">ӨДӨР</span>
        </div>
        <span className="text-2xl md:text-3xl text-pink-300/40 mt-0.5">:</span>
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">
            {time.hours.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-pink-200/70 mt-1.5 md:mt-2 tracking-wider font-medium">ЦАГ</span>
        </div>
        <span className="text-2xl md:text-3xl text-pink-300/40 mt-0.5">:</span>
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">
            {time.minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-pink-200/70 mt-1.5 md:mt-2 tracking-wider font-medium">МИНУТ</span>
        </div>
        <span className="text-2xl md:text-3xl text-pink-300/40 mt-0.5">:</span>
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">
            {time.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-pink-200/70 mt-1.5 md:mt-2 tracking-wider font-medium">СЕК</span>
        </div>
      </div>
    </div>
  );
}

