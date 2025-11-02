import { motion } from 'motion/react';
import { Leaf } from './DecorativeElements';

const testimonials = [
  {
    quote: "The art therapy sessions gave me a safe space to process emotions I didn't even know I had. Truly transformative.",
    name: "Anonymous Client",
  },
  {
    quote: "I found peace in the creative process. Every session felt like coming home to myself.",
    name: "Workshop Participant",
  },
  {
    quote: "Enso Mind Matters helped me reconnect with my inner child through playful, healing art practices.",
    name: "Group Session Member",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#E5F2EC]/10 to-white relative overflow-hidden">
      {/* Background leaf decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-20">
        <Leaf />
      </div>
      <div className="absolute bottom-20 right-10 w-32 h-32 opacity-20">
        <Leaf />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#0E1E2A] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Community Voices
          </h2>
          <p className="text-[#0E1E2A]/60 max-w-2xl mx-auto">
            Stories from those who've found healing and connection through our programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#0E1E2A]/5">
                {/* Decorative brush line */}
                <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-[#F9E7E1] to-[#E5F2EC] rounded-full -translate-y-1/2" />
                
                <div className="space-y-4">
                  <svg className="w-8 h-8 text-[#E5F2EC]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-[#0E1E2A]/70 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  <div className="pt-4 border-t border-[#0E1E2A]/10">
                    <p className="text-[#0E1E2A]/50">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
