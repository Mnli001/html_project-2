import { useState, useEffect } from 'react';

export default function LoveCounter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Ulaanbaatar Marathon 2026 was May 23, 2026
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
    <div className="flex flex-col items-center justify-center p-8 my-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-md mx-auto">
      <h3 className="text-pink-200 font-light mb-6 text-sm uppercase tracking-[0.2em]">Марафон дээр танилцсанаас хойш</h3>
      <div className="flex justify-between w-full text-center px-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">{time.days}</span>
          <span className="text-xs text-pink-200 mt-2 tracking-wider">ӨДӨР</span>
        </div>
        <span className="text-3xl text-pink-300/50 mt-1">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">{time.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs text-pink-200 mt-2 tracking-wider">ЦАГ</span>
        </div>
        <span className="text-3xl text-pink-300/50 mt-1">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">{time.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs text-pink-200 mt-2 tracking-wider">МИНУТ</span>
        </div>
        <span className="text-3xl text-pink-300/50 mt-1 hidden md:block">:</span>
        <div className="flex-col items-center hidden md:flex">
          <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">{time.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs text-pink-200 mt-2 tracking-wider">СЕК</span>
        </div>
      </div>
    </div>
  );
}
