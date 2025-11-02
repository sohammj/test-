import { motion } from 'motion/react';
import { Paintbrush, Leaf, Sun, CircleDot, Heart, Sparkles } from 'lucide-react';

const programs = [
  {
    icon: Heart,
    name: 'Cope',
    description: 'Navigate difficult emotions through guided art therapy.',
    color: 'bg-[#F9E7E1]',
  },
  {
    icon: Sparkles,
    name: 'Grow',
    description: 'Develop self-awareness and personal growth.',
    color: 'bg-[#E5F2EC]',
  },
  {
    icon: Paintbrush,
    name: 'Express',
    description: 'Find your voice through creative expression.',
    color: 'bg-[#DDEBF4]',
  },
  {
    icon: CircleDot,
    name: 'Reconnect',
    description: 'Build meaningful connections with yourself and others.',
    color: 'bg-[#F9E7E1]',
  },
  {
    icon: Leaf,
    name: 'Mindful Art',
    description: 'Practice presence through meditative creativity.',
    color: 'bg-[#E5F2EC]',
  },
  {
    icon: Sun,
    name: 'Flourish',
    description: 'Celebrate progress and embrace transformation.',
    color: 'bg-[#DDEBF4]',
  },
];

export const Programs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F9E7E1]/10">
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
            Our Programs & Services
          </h2>
          <p className="text-[#0E1E2A]/60 max-w-2xl mx-auto">
            Explore our carefully crafted programs designed to support your journey toward healing and self-discovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${program.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#0E1E2A]" strokeWidth={1.5} />
                  </div>
                  
                  <h3
                    className="text-[#0E1E2A]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {program.name}
                  </h3>
                  
                  <p className="text-[#0E1E2A]/70">
                    {program.description}
                  </p>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-[#0E1E2A] hover:gap-2 transition-all group"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:ml-2 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
