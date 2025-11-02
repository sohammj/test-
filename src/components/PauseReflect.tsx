import { motion } from 'motion/react';
import { WatercolorBlob } from './DecorativeElements';

const reflectiveQuestions = [
  "What emotion needs space today?",
  "Where in your body do you feel most at peace?",
  "What color represents your current state of mind?",
  "What are you ready to release?",
];

export const PauseReflect = () => {
  const randomQuestion = reflectiveQuestions[Math.floor(Math.random() * reflectiveQuestions.length)];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#E5F2EC]/30 to-[#DDEBF4]/20">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 opacity-50">
        <WatercolorBlob />
      </div>
      <div className="absolute bottom-10 right-10 w-80 h-80 opacity-40">
        <WatercolorBlob />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#0E1E2A]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Pause & Reflect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-[#0E1E2A]/60 italic max-w-2xl mx-auto"
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          {randomQuestion}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-[#E5F2EC] to-transparent mx-auto"
        />
      </div>
    </section>
  );
};
