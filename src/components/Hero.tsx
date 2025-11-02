import { motion } from 'motion/react';
import { EnsoCircle } from './DecorativeElements';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F9E7E1]/30 via-white to-[#DDEBF4]/30">
      {/* Animated Background Enso Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96"
        >
          <EnsoCircle className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
        >
          <EnsoCircle className="w-full h-full" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#0E1E2A]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Creating space for growth, healing, and community through Art-Based Therapy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#0E1E2A]/70 max-w-xl"
          >
            At Enso Mind Matters, we nurture emotional well-being through creativity, mindfulness, and connection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#0E1E2A]/60 italic"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Release your worries into the circle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4 pt-4"
          >
            <button className="px-8 py-3 bg-[#0E1E2A] text-white rounded-full hover:bg-[#0E1E2A]/90 transition-colors shadow-lg hover:shadow-xl">
              Book a Session
            </button>
            <button className="px-8 py-3 bg-white/80 text-[#0E1E2A] rounded-full hover:bg-white transition-colors border border-[#0E1E2A]/20">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Keep space for video motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[500px] hidden lg:block"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <EnsoCircle className="w-96 h-96 opacity-20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
