import { EnsoCircle } from './DecorativeElements';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#F5F3F0] border-t-4 border-[#E5F2EC]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <EnsoCircle className="w-full h-full" />
              </div>
              <span className="text-[#0E1E2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Enso
              </span>
            </div>
            <p className="text-[#0E1E2A]/60 leading-relaxed">
              Creating space for growth, healing, and community through art-based therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0E1E2A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Our Programs', 'Services', 'Gallery', 'Our Journey'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#0E1E2A]/60 hover:text-[#0E1E2A] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[#0E1E2A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Programs
            </h4>
            <ul className="space-y-3">
              {['Cope', 'Grow', 'Express', 'Reconnect', 'Mindful Art', 'Flourish'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#0E1E2A]/60 hover:text-[#0E1E2A] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#0E1E2A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#0E1E2A]/60">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@ensomindmatters.com" className="hover:text-[#0E1E2A] transition-colors">
                  hello@ensomindmatters.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#0E1E2A]/60">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#0E1E2A] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#0E1E2A]/60">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  123 Art Therapy Lane,<br />
                  Indiranagar, Bangalore
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#0E1E2A]/20 flex items-center justify-center hover:bg-[#0E1E2A] hover:text-white hover:border-[#0E1E2A] transition-colors text-[#0E1E2A]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#0E1E2A]/20 flex items-center justify-center hover:bg-[#0E1E2A] hover:text-white hover:border-[#0E1E2A] transition-colors text-[#0E1E2A]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0E1E2A]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#0E1E2A]/50">
            © 2025 Enso Mind Matters. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#0E1E2A]/50 hover:text-[#0E1E2A] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#0E1E2A]/50 hover:text-[#0E1E2A] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
