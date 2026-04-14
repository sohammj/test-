"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Soham showed remarkable patience, dedication, and openness to ideas throughout the process. He truly listened, explored every possibility, and translated my vision into a website that represents my work beautifully.",
    name: "Parul Dewal",
    role: "Founder, Enso Counseling and Art Therapy Centre",
  },
  {
    id: 2,
    quote:
      "Soham truly understood my vision from the very beginning and translated it into a beautifully designed website with strong aesthetic appeal. He was approachable, clear, responsive, and delivered within the committed timeline.",
    name: "Harshana Kuveskar",
    role: "Founder, Hridmann Organizational Psychology Consulting",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(() => testimonials[activeIndex], [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  const goTo = (i: number) => setActiveIndex(i);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6">
      <div className="relative w-full overflow-hidden rounded-[28px] border border-white/55 bg-white/10 p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)] backdrop-blur-[32px] md:p-14">
        <div className="pointer-events-none absolute inset-0 bg-white/18" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.22)_22%,rgba(255,255,255,0.08)_48%,rgba(255,255,255,0.18)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />
        <div className="pointer-events-none absolute -top-16 left-8 h-40 w-40 rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 text-[3rem] leading-none text-[#004aad]">“</div>

          <div key={active.id} className="animate-[fadeIn_0.5s_ease]">
            <p className="text-xl leading-[1.5] text-gray-800 md:text-2xl">
              {active.quote}
            </p>

            <div className="mt-8">
              <p className="text-sm font-medium text-gray-900">
                {active.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                {active.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        {/* <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/25 text-gray-700 backdrop-blur-xl transition hover:bg-white/40"
        >
          ←
        </button> */}

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === i ? "w-6 bg-gray-900" : "w-2.5 bg-gray-400/60"
              }`}
            />
          ))}
        </div>

        {/* <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/25 text-gray-700 backdrop-blur-xl transition hover:bg-white/40"
        >
          →
        </button> */}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}