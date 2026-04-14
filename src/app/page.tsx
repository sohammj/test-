import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuoteOpacity from "@/components/sections/QuoteOpacity";
import ScrollSection from "@/components/sections/ScrollSection";
import AboutTeam3D from "@/components/sections/AboutTeam3D";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen overflow-y-auto overflow-x-hidden">
        <Hero />
        <QuoteOpacity />
        <ScrollSection />
        {/* <TestimonialSlider /> */}
        <AboutTeam3D />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}