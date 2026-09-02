import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

const quizData = [
  {
    question: "Бид хоёр анх хаана уулзсан бэ?",
    options: ["Улаанбаатарын марафон", "Кофе шоп", "Парк", "Сургууль"],
    correctIndex: 0,
    reaction: "Яг зөв! Марафон дээр анх уулзсан тэр өдөр ❤️"
  },
  {
    question: "Бид хоёрын хамгийн нандин зүйл юу вэ?",
    options: ["Өдөр бүрийн яриа", "Хамтдаа байх тухтай байдал", "Инээмсэглэл", "Бүгдээрээ! ✨"],
    correctIndex: 3,
    reaction: "Мэдээж! Бүгдээрээ маш нандин ❤️"
  }
];

export default function LoveQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSelect = (index) => {
    setSelectedOption(index);
    const q = quizData[currentStep];

    if (index === q.correctIndex) {
      setFeedback(q.reaction);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
      });

      setTimeout(() => {
        if (currentStep + 1 < quizData.length) {
          setCurrentStep(prev => prev + 1);
          setSelectedOption(null);
          setFeedback("");
        } else {
          setCompleted(true);
        }
      }, 2000);
    } else {
      setFeedback("Дахин нэг бодоод үз дээ 😉");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center my-10 md:my-16 z-20 px-4">
      <h3 className="text-pink-200/80 font-light mb-6 text-xs md:text-sm uppercase tracking-[0.25em] font-sans text-center flex items-center gap-2">
        <Sparkles size={16} /> Бидний тухай асуулт <Sparkles size={16} />
      </h3>

      <div className="w-full p-6 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.4)] text-center relative overflow-hidden">
        {!completed ? (
          <div>
            <span className="text-[11px] text-pink-300 uppercase tracking-widest block mb-2 font-mono">
              Асуулт {currentStep + 1} / {quizData.length}
            </span>

            <h4 className="text-white font-serif text-lg sm:text-xl mb-6 font-medium">
              {quizData[currentStep].question}
            </h4>

            <div className="grid grid-cols-1 gap-3 mb-6">
              {quizData[currentStep].options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelect(i)}
                  className={`py-3 px-5 rounded-xl border text-sm font-sans transition-all text-left flex items-center justify-between ${
                    selectedOption === i
                      ? i === quizData[currentStep].correctIndex
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                        : 'bg-rose-500/20 border-rose-400 text-rose-200'
                      : 'bg-white/[0.03] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30'
                  }`}
                >
                  <span>{opt}</span>
                  {selectedOption === i && <Heart size={16} className="fill-current text-pink-400" />}
                </motion.button>
              ))}
            </div>

            {feedback && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs sm:text-sm text-pink-200 font-sans tracking-wide"
              >
                {feedback}
              </motion.p>
            )}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-4">
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400 mx-auto mb-4 animate-bounce" />
            <h4 className="text-white font-serif text-xl sm:text-2xl mb-2">Чи намайг ямар сайн мэддэг юм бэ! ✨</h4>
            <p className="text-white/70 text-xs sm:text-sm font-sans">
              Бидний хамтын дурсамж бүхэн хамгийн нандин ❤️
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
