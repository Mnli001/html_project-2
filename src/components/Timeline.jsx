import { motion } from 'framer-motion';
import { Flag, MessageCircleHeart, Sparkles, Cake } from 'lucide-react';

const milestones = [
  {
    icon: Flag,
    title: "Анхны Уулзалт",
    date: "Улаанбаатарын Марафон",
    description: "Бүх зүйл эхэлсэн тэр нэгэн дурсгалтай өдөр. Анхны харц, анхны яриа...",
    color: "from-rose-500 to-pink-500",
    border: "border-rose-500/30"
  },
  {
    icon: MessageCircleHeart,
    title: "Өдөр Бүрийн Яриа",
    date: "Дасалцсан өдрүүд",
    description: "Өдөр бүр илүү ихээр бие биедээ дасаж, чамтай байх үнэхээр сайхан байдаг болсон.",
    color: "from-pink-500 to-purple-500",
    border: "border-pink-500/30"
  },
  {
    icon: Sparkles,
    title: "Нандин Дурсамжууд",
    date: "Бүтээсэн мөч бүхэн",
    description: "Хамтдаа инээлдэж, нэг нэгнээ ойлгож, илүү дотноссон цаг хугацаа.",
    color: "from-purple-500 to-indigo-500",
    border: "border-purple-500/30"
  },
  {
    icon: Cake,
    title: "Өнөөдөр",
    date: "Төрсөн Өдрийн Баяр",
    description: "Чамдаа зориулсан энэхүү онцгой сюрприз ба шинэ эхлэл ✨",
    color: "from-amber-400 to-rose-500",
    border: "border-amber-400/40"
  }
];

export default function Timeline() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-10 md:my-16 z-20 px-4">
      <h3 className="text-pink-200/80 font-light mb-10 text-xs md:text-sm uppercase tracking-[0.25em] font-sans text-center">
        Бидний Аяллын Замнал
      </h3>

      <div className="relative w-full flex flex-col items-center">
        {/* Central glowing vertical line */}
        <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-rose-500/50 via-purple-500/40 to-amber-400/50 rounded-full" />

        <div className="w-full flex flex-col space-y-8 relative z-10">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`flex items-center w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className="w-[44%] sm:w-[45%]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border ${item.border} shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all`}
                  >
                    <span className="text-[10px] sm:text-xs text-pink-300/80 uppercase tracking-widest font-mono block mb-1">
                      {item.date}
                    </span>
                    <h4 className="text-white font-serif text-base sm:text-lg mb-1.5 font-medium">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Node Icon */}
                <div className="w-[12%] sm:w-[10%] flex justify-center z-20">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr ${item.color} p-0.5 shadow-[0_0_15px_rgba(244,114,182,0.4)]`}>
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <Icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="w-[44%] sm:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
