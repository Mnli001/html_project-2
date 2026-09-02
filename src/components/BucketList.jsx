import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Coffee, Film, Compass, Gift, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const promises = [
  {
    id: 1,
    icon: Plane,
    title: "Онцгой Аялал",
    detail: "Хамтдаа очихыг хүсдэг байгалийн үзэсгэлэнт газар руу аялах ✈️",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    icon: Coffee,
    title: "Тусгай Кофены Цаг",
    detail: "Ажлын дараа хамгийн тухтай кафед тухлан ярилцах ☕",
    color: "from-amber-500 to-orange-400"
  },
  {
    id: 3,
    icon: Film,
    title: "Киноны Шөнө",
    detail: "Дуртай амттанаа бэлдээд тухтай кино марафон хийх 🎬",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    icon: Compass,
    title: "Шинэ Зүйл Турших",
    detail: "Хамтдаа урьд өмнө хийж үзээгүй шинэ сонирхолтой зүйл турших 🌟",
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: 5,
    icon: Gift,
    title: "Дараа Жилийн Баяр",
    detail: "Дараа жилийн төрсөн өдрийг улам бүр гоё сюрпризтэй тэмдэглэх 🎂",
    color: "from-rose-500 to-pink-400"
  }
];

export default function BucketList() {
  const [unlocked, setUnlocked] = useState([]);

  const toggleUnlock = (id) => {
    if (!unlocked.includes(id)) {
      setUnlocked(prev => [...prev, id]);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffb6c1', '#ffffff', '#fbbf24']
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-10 md:my-16 z-20 px-4">
      <h3 className="text-pink-200/80 font-light mb-3 text-xs md:text-sm uppercase tracking-[0.25em] font-sans text-center">
        Ирээдүйд Хамтдаа Хийх Зүйлс
      </h3>
      <p className="text-white/50 text-xs text-center mb-8 font-sans">
        (Карт дээр дарж нээгээрэй ✨)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {promises.map((item) => {
          const Icon = item.icon;
          const isOpen = unlocked.includes(item.id);

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleUnlock(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                isOpen 
                  ? 'bg-white/[0.08] border-pink-400/40 shadow-[0_10px_30px_rgba(244,114,182,0.15)]' 
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-serif text-base font-medium">
                      {item.title}
                    </h4>
                    {isOpen && <Check size={16} className="text-emerald-400" />}
                  </div>
                  <p className="text-white/70 text-xs mt-1.5 leading-relaxed font-sans">
                    {isOpen ? item.detail : "🔒 Дараад нээх..."}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
