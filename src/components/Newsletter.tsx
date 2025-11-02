import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#F9E7E1]/40 via-[#E5F2EC]/40 to-[#DDEBF4]/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-2xl">🪷</span>
              <p className="text-[#0E1E2A]">
                Open to new clients this month — book a session today.
              </p>
            </div>
            <p className="text-[#0E1E2A]/60">
              Subscribe to receive mindful reflections and updates from Enso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white border border-[#0E1E2A]/20 focus:outline-none focus:border-[#0E1E2A] transition-colors flex-1 md:w-80"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0E1E2A] text-white rounded-full hover:bg-[#0E1E2A]/90 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
