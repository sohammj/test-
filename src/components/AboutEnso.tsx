import { motion } from 'motion/react';
import { Dragonfly } from './DecorativeElements';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutEnso = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654331046252-c1a938237ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwYWJzdHJhY3QlMjBwYXN0ZWx8ZW58MXx8fHwxNzYyMDY5NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Watercolor abstract art"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative watercolor overlay */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#F9E7E1]/40 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#E5F2EC]/40 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <h2
                className="text-[#0E1E2A]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                About Enso Mind Matters
              </h2>
              {/* Dragonfly motif */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-16 h-16 mx-auto mt-2"
              >
                <Dragonfly className="w-full h-full" />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#0E1E2A]/70"
            >
              We believe that creativity and reflection open pathways to healing and growth. Our art-based therapy programs help individuals and groups reconnect with themselves and the world around them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#0E1E2A]/70"
            >
              Through mindful art practices, expressive workshops, and therapeutic guidance, we create a safe and nurturing environment where healing happens naturally. Each brushstroke, each moment of stillness, becomes a step toward understanding and peace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 pt-4"
            >
              <div className="space-y-1">
                <div className="text-[#0E1E2A]" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
                <div className="text-[#0E1E2A]/60">Sessions Held</div>
              </div>
              <div className="w-px bg-[#0E1E2A]/20" />
              <div className="space-y-1">
                <div className="text-[#0E1E2A]" style={{ fontFamily: 'Playfair Display, serif' }}>200+</div>
                <div className="text-[#0E1E2A]/60">Lives Touched</div>
              </div>
              <div className="w-px bg-[#0E1E2A]/20" />
              <div className="space-y-1">
                <div className="text-[#0E1E2A]" style={{ fontFamily: 'Playfair Display, serif' }}>5 Years</div>
                <div className="text-[#0E1E2A]/60">Of Practice</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
