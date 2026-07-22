import { useState, useEffect } from 'react';

export default function LoveCounter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2026-05-23T09:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 my-4 bg-white/[0.05] backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)] w-full max-w-[90vw] md:max-w-md mx-auto">
      <h3 className="text-pink-200/70 font-light mb-5 md:mb-6 text-xs md:text-sm uppercase tracking-[0.2em]">Марафон дээр танилцсанаас хойш</h3>
      <div className="flex justify-between w-full text-center px-2 md:px-4 gap-1">
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">{time.days}</span>
          <span className="text-[10px] md:text-xs text-pink-200/60 mt-1.5 md:mt-2 tracking-wider">ӨДӨР</span>
        </div>
        <span className="text-2xl md:text-3xl text-pink-300/30 mt-0.5">:</span>
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">{time.hours.toString().padStart(2, '0')}</span>
          <span className="text-[10px] md:text-xs text-pink-200/60 mt-1.5 md:mt-2 tracking-wider">ЦАГ</span>
        </div>
        <span className="text-2xl md:text-3xl text-pink-300/30 mt-0.5">:</span>
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">{time.minutes.toString().padStart(2, '0')}</span>
          <span className="text-[10px] md:text-xs text-pink-200/60 mt-1.5 md:mt-2 tracking-wider">МИНУТ</span>
        </div>
        <span className="text-2xl md:text-3xl text-pink-300/30 mt-0.5">:</span>
        <div className="flex flex-col items-center flex-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md tabular-nums">{time.seconds.toString().padStart(2, '0')}</span>
          <span className="text-[10px] md:text-xs text-pink-200/60 mt-1.5 md:mt-2 tracking-wider">СЕК</span>
        </div>
      </div>
    </div>
  );
}
