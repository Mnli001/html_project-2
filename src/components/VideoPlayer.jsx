export default function VideoPlayer() {
  return (
    <div className="w-full max-w-sm md:max-w-lg lg:max-w-2xl mx-auto flex flex-col items-center my-4 md:my-8 z-20 px-2">
      <h3 className="text-indigo-200/70 font-light mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-[0.2em] font-serif text-center">Бидний дурсамж</h3>
      <div className="relative w-full aspect-video bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] overflow-hidden group">
        <video 
          src="/video1.mp4" 
          controls 
          className="w-full h-full object-cover rounded-xl md:rounded-2xl"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%23555' text-anchor='middle' dominant-baseline='middle'%3E▶ Видео тоглуулах%3C/text%3E%3C/svg%3E"
        >
          Таны хөтөч видео дэмжихгүй байна.
        </video>
        <div className="absolute inset-0 pointer-events-none rounded-xl md:rounded-2xl ring-1 ring-inset ring-white/[0.06]"></div>
      </div>
    </div>
  );
}
