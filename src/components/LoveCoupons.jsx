import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Ticket, CheckCircle2, Sparkles, Coffee, Film, Utensils, HeartHandshake } from 'lucide-react';

const initialCoupons = [
  {
    id: 1,
    title: "Кофе эсвэл Амттан",
    desc: "Хүссэн амттанг дуртай газраас чинь авч өгөх тасалбар ☕🍰",
    icon: Coffee,
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-400/30",
    badge: "Special Treat"
  },
  {
    id: 2,
    title: "Кино Сонгох Эрх",
    desc: "Ямар кино үзэхийг 100% чи шийдэх эрхийн бичиг 🎬🍿",
    icon: Film,
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-400/30",
    badge: "Movie Night"
  },
  {
    id: 3,
    title: "Оройн Хоолны Сюрприз",
    desc: "Хүссэн хоолоо захиалах эсвэл хамтдаа гоё газар хооллох 🍝✨",
    icon: Utensils,
    color: "from-rose-500/20 to-red-500/10",
    border: "border-rose-400/30",
    badge: "Dinner Date"
  },
  {
    id: 4,
    title: "Сэтгэлийг нь Амраах Цаг",
    desc: "Бүх ажлыг чинь хариуцаж, бүтэн тайвшруулах массаж / анхаарал 💆‍♀️🤍",
    icon: HeartHandshake,
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-400/30",
    badge: "Comfort Care"
  }
];

export default function LoveCoupons() {
  const [redeemed, setRedeemed] = useState([]);

  const handleRedeem = (id) => {
    if (redeemed.includes(id)) return;

    setRedeemed(prev => [...prev, id]);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#34d399', '#f472b6', '#fbbf24']
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-10 md:my-14 z-20 px-4">
      <div className="text-center mb-8">
        <h3 className="text-pink-200/80 font-light text-xs md:text-sm uppercase tracking-[0.25em] font-sans flex items-center justify-center gap-2">
          <Ticket size={16} /> Хайрын Купонууд <Ticket size={16} />
        </h3>
        <p className="text-white/40 text-xs mt-1">Хүссэн цагтаа нэхэж ашиглаарай! Товшиж идэвхжүүлнэ</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {initialCoupons.map((coupon) => {
          const Icon = coupon.icon;
          const isUsed = redeemed.includes(coupon.id);

          return (
            <motion.div
              key={coupon.id}
              whileHover={!isUsed ? { scale: 1.02, translateY: -2 } : {}}
              whileTap={!isUsed ? { scale: 0.98 } : {}}
              onClick={() => handleRedeem(coupon.id)}
              className={`relative overflow-hidden p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer select-none ${
                isUsed 
                  ? 'bg-white/[0.02] border-white/10 opacity-70' 
                  : `bg-gradient-to-br ${coupon.color} ${coupon.border} shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:border-white/40`
              }`}
            >
              {/* Ticket cutouts */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full border-r border-white/20" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full border-l border-white/20" />

              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/70 font-sans">
                  {coupon.badge}
                </span>
              </div>

              <h4 className="text-white font-medium text-base mb-1.5">{coupon.title}</h4>
              <p className="text-white/60 text-xs leading-relaxed font-sans mb-4">{coupon.desc}</p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/40 font-mono">№ LOVE-00{coupon.id}</span>
                {isUsed ? (
                  <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-medium">
                    <CheckCircle2 size={14} /> Ашигласан
                  </span>
                ) : (
                  <span className="text-pink-300 text-xs font-medium group-hover:underline">
                    Ашиглах ✨
                  </span>
                )}
              </div>

              {/* Stamp effect when used */}
              {isUsed && (
                <motion.div 
                  initial={{ scale: 2, opacity: 0, rotate: -25 }}
                  animate={{ scale: 1, opacity: 1, rotate: -12 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="border-2 border-emerald-400/80 text-emerald-400 font-bold uppercase tracking-widest text-sm px-4 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm">
                    REDEEMED
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
