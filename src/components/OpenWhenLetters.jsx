import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen, X, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const letters = [
  {
    id: 'miss',
    title: "Намайг санасан үедээ нээгээрэй",
    subtitle: "When you miss me",
    color: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-400/30",
    glow: "rgba(244, 63, 94, 0.2)",
    iconColor: "text-rose-400",
    content: "Хэрэв чи намайг санаад энэ захиаг нээж байгаа бол... Би яг энэ хоромд бас чамайг л бодож байгаа шүү. Хол байгаа ч гэсэн миний зүрх сэтгэл, бодол үргэлж чамтай хамт байдаг. Чиний инээмсэглэл, хоолойны өнгө, над руу харж байсан тэр харц үргэлж сэтгэлд тодхон байдаг. Битгий ганцаардаарай, би удахгүй очоод чанга тэвэрнэ ээ. Над руу хүссэн цагтаа залгаарай ❤️"
  },
  {
    id: 'sad',
    title: "Гунигласан, ядарсан үедээ нээгээрэй",
    subtitle: "When you need comfort",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-400/30",
    glow: "rgba(245, 158, 11, 0.2)",
    iconColor: "text-amber-400",
    content: "Бүх зүйл нэг л болж өгөхгүй, ядарч гунигласан өдөр амьдралд тохиолддог оо. Гэхдээ битгий мартаарай: Чи бол миний мэддэг хамгийн хүчтэй, хамгийн дайчин, хамгийн гайхалтай охин. Чиний хажууд ямар ч үед ойлгож, сонсож, өмгөөлөх би үргэлж байна. Одоохондоо гүнзгий амьсгаа аваад, өөрийгөө амраагаарай. Маргааш цоо шинэ, сайхан өдөр эхэлнэ ээ ✨"
  },
  {
    id: 'smile',
    title: "Инээмсэглэмээр санагдсан үедээ нээгээрэй",
    subtitle: "When you want to smile",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-400/30",
    glow: "rgba(168, 85, 247, 0.2)",
    iconColor: "text-emerald-400",
    content: "Чи инээхээрээ ямар хөөрхөн болдог гээч? Дэлхий ертөнц тэр чигээрээ гэрэлтээд, миний өдөр ч гэсэн тэр чигтээ баяр баяслаар дүүрчихдэг. Чиний тэр цоглог, гэгээлэг инээмсэглэл бол надад хамгийн их аз жаргал өгдөг зүйл. Үргэлж ингэж инээмсэглэж яваарай 😊💖\n\nЗа тэээр инээлээ инээлээ инээлээ ххах 😄"
  },
  {
    id: 'mad',
    title: "Надад уурласан үедээ нээгээрэй",
    subtitle: "When you're mad at me",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-400/30",
    glow: "rgba(168, 85, 247, 0.2)",
    iconColor: "text-purple-400",
    content: "Хэрэв би чамайг гомдоосон эсвэл уурлуулсан бол намайг уучлаарай. Би хэзээ ч чамайг өчүүхэн ч болов гомдоож, дутуу үнэлэхийг хүсээгүй шүү. Чи бол миний амьдралын хамгийн нандин, хамгийн үнэ цэнтэй хүн. Чиний уурласан царай ч надад хөөрхөн санагддаг ч, чамайг гомдолгүй жаргалтай байлгах нь миний хамгийн том хүсэл. Надад бүх гомдлоо яриад, намайг зэмлэж болно оо, би үргэлж чамайг сонсоход бэлэн 🥺❤️"
  }
];

export default function OpenWhenLetters() {
  const [activeLetter, setActiveLetter] = useState(null);

  const handleOpenLetter = (letter) => {
    setActiveLetter(letter);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#ffb6c1', '#ffd700', '#f472b6']
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-10 md:my-14 z-20 px-4">
      <div className="text-center mb-8">
        <h3 className="text-pink-200/80 font-light text-xs md:text-sm uppercase tracking-[0.25em] font-sans flex items-center justify-center gap-2">
          <Sparkles size={15} /> Нээж Үзэх Дугтуйнууд <Sparkles size={15} />
        </h3>
        <p className="text-white/40 text-xs mt-1">Танд яг ийм мэдрэмж төрсөн үед дугтуй дээр товшиж уншаарай</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {letters.map((letter) => (
          <motion.div
            key={letter.id}
            whileHover={{ scale: 1.02, translateY: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpenLetter(letter)}
            className={`cursor-pointer relative p-5 rounded-2xl bg-gradient-to-br ${letter.color} backdrop-blur-md border ${letter.border} flex items-center space-x-4 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:border-white/40`}
          >
            <div className={`p-3 rounded-xl bg-white/10 ${letter.iconColor} flex items-center justify-center flex-shrink-0`}>
              <Mail size={22} />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h4 className="text-white/90 text-sm font-medium leading-snug">{letter.title}</h4>
              <span className="text-white/40 text-[11px] font-sans block mt-0.5">{letter.subtitle}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal reading view */}
      <AnimatePresence>
        {activeLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md" onClick={() => setActiveLetter(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#141219] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: activeLetter.glow }}
              />

              {/* Close button */}
              <button
                onClick={() => setActiveLetter(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-white/10 ${activeLetter.iconColor}`}>
                  <MailOpen size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-white">{activeLetter.title}</h3>
                  <p className="text-white/40 text-xs">{activeLetter.subtitle}</p>
                </div>
              </div>

              <div className="my-5 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-pink-100/90 font-serif leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {activeLetter.content}
                </p>
              </div>

              <div className="flex justify-between items-center pt-2 text-xs text-white/40">
                <span className="flex items-center gap-1.5 text-pink-300/80">
                  <Heart size={14} className="fill-pink-400 text-pink-400" /> Хайртай шүү
                </span>
                <button
                  onClick={() => setActiveLetter(null)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 font-medium transition-colors"
                >
                  Хаах
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
