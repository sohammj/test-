import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PauseReflect } from './components/PauseReflect';
import { AboutEnso } from './components/AboutEnso';
import { Programs } from './components/Programs';
import { InspirationalQuote } from './components/InspirationalQuote';
import { Testimonials } from './components/Testimonials';
import { ReviewsMap } from './components/ReviewsMap';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Caveat:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <PauseReflect />
        <AboutEnso />
        <Programs />
        <InspirationalQuote />
        <Testimonials />
        <ReviewsMap />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
