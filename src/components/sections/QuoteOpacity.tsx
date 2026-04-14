"use client";

import { useEffect, useRef, useState } from "react";
import TextOpacity from "@/components/ui/TextOpacity";

export default function QuoteOpacity() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [trigger, setTrigger] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTrigger(rootRef.current);
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[220svh] w-full bg-[#f3f3ef]"
    >
      {/* 👇 anchor at END */}
      <div
        id="about"
        className="absolute bottom-200 h-px w-full scroll-mt-24"
      />

      <h3 className="sticky top-0 flex min-h-screen w-full items-center justify-center text-center text-[clamp(1.8rem,3.8vw,3.8rem)] font-normal leading-[1.1] tracking-[-0.05em] text-[#1a1a1a]">
        {trigger && (
          <TextOpacity trigger={trigger}>
            SovraTech is a digital studio at the intersection of design, data,
            and technology. 
            We help brands build a powerful online presence through
            visually stunning websites.
          </TextOpacity>
        )}
      </h3>
    </section>
  );
}