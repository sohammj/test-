import { motion } from 'motion/react';
import { BrushStroke } from './DecorativeElements';

export const InspirationalQuote = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9E7E1]/20 via-white to-[#E5F2EC]/20" />
      
      {/* Decorative brush strokes */}
      <div className="absolute top-10 left-0 w-full opacity-30">
        <BrushStroke />
      </div>
      <div className="absolute bottom-10 right-0 w-full opacity-30 rotate-180">
        <BrushStroke />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          {/* Handwritten quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-[#0E1E2A]/80 text-center italic leading-relaxed"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "Overthinking often lives where control ends. Breathe. Release what isn't yours to carry."
          </motion.blockquote>

          {/* Small decorative element */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-[#0E1E2A]/20 mx-auto rounded-full"
          />

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-[#0E1E2A]/50"
          >
            — Enso Reflections
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
