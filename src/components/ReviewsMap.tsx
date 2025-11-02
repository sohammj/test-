import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "A truly nurturing space for healing. The therapists are compassionate and skilled.",
    date: "2 weeks ago",
  },
  {
    name: "Rajesh M.",
    rating: 5,
    text: "The art therapy sessions helped me express what words couldn't. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Ananya K.",
    rating: 5,
    text: "Beautiful space, beautiful people, beautiful experience. Thank you Enso!",
    date: "3 weeks ago",
  },
];

export const ReviewsMap = () => {
  return (
    <section className="py-24 bg-white">
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
            Find Us & Read What People Say
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F9E7E1] text-[#F9E7E1]" />
                ))}
              </div>
              <span className="text-[#0E1E2A]">5.0 on Google</span>
              <span className="text-[#0E1E2A]/50">(48 reviews)</span>
            </div>

            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F9E7E1]/20 rounded-2xl p-6 border border-[#0E1E2A]/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[#0E1E2A]">{review.name}</p>
                    <p className="text-[#0E1E2A]/50">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F9E7E1] text-[#F9E7E1]" />
                    ))}
                  </div>
                </div>
                <p className="text-[#0E1E2A]/70">{review.text}</p>
              </motion.div>
            ))}

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0E1E2A] hover:text-[#0E1E2A]/70 transition-colors"
            >
              View all reviews →
            </a>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#E5F2EC]/30 to-[#DDEBF4]/30 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Map placeholder */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDAwdjQwMEgweiIgZmlsbD0iI0U1RjJFQyIgZmlsbC1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0xMDAgMTAwaDIwMHYyMDBIMTAweiIgc3Ryb2tlPSIjMEUxRTJBIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-[#0E1E2A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#0E1E2A]">Enso Mind Matters</p>
                <p className="text-[#0E1E2A]/60">Indiranagar, Bangalore</p>
              </div>
            </div>

            <div className="space-y-3 bg-white rounded-2xl p-6 shadow-lg border border-[#0E1E2A]/5">
              <h3 className="text-[#0E1E2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Visit Us
              </h3>
              <p className="text-[#0E1E2A]/70">
                123 Art Therapy Lane,<br />
                Matunga, mumbai - 400065 example<br />
                mumbai, India
              </p>
              <div className="pt-3 border-t border-[#0E1E2A]/10">
                <p className="text-[#0E1E2A]/70">
                  <strong>Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM
                </p>
              </div>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#0E1E2A] text-white rounded-full hover:bg-[#0E1E2A]/90 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
