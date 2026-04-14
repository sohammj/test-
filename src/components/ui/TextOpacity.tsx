"use client";

import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

type TextOpacityProps = {
  children: React.ReactNode;
  trigger: HTMLElement | null;
};

export default function TextOpacity({
  children,
  trigger,
}: TextOpacityProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const element = containerRef.current;
    const scroller = document.querySelector("main");

    if (!element || !trigger || !scroller) return;

    const split = new SplitType(element, {
      types: "chars,words",
      tagName: "span",
      charClass: "quote-char",
      wordClass: "quote-word",
    });

    const chars = split.chars ?? [];
    if (!chars.length) return;

    chars.forEach((char, i) => {
      (char as HTMLElement).style.setProperty("--i", `${i}`);
    });

    const heroChars = chars.filter(() => Math.random() > 0.75);
    const softChars = chars.filter((char) => !heroChars.includes(char));

    gsap.set(heroChars, {
      opacity: 0,
      z: () => gsap.utils.random(500, 1100),
      x: () => gsap.utils.random(-180, 180),
      y: () => gsap.utils.random(-120, 120),
      rotationX: () => gsap.utils.random(-65, 65),
      rotationY: () => gsap.utils.random(-40, 40),
      filter: "blur(10px)",
      transformPerspective: 1200,
    });

    gsap.set(softChars, {
      opacity: 0,
      z: () => gsap.utils.random(40, 140),
      x: () => gsap.utils.random(-35, 35),
      y: () => gsap.utils.random(-20, 20),
      rotationX: () => gsap.utils.random(-10, 10),
      rotationY: () => gsap.utils.random(-8, 8),
      filter: "blur(3px)",
      transformPerspective: 1200,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        scroller,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      heroChars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        filter: "blur(0px)",
        ease: "power3.out",
        stagger: {
          each: 0.018,
          from: "random",
        },
      },
      0
    ).to(
      softChars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        filter: "blur(0px)",
        ease: "power2.out",
        stagger: {
          each: 0.01,
          from: "start",
        },
      },
      0
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      split.revert();
    };
  }, [trigger]);

  return (
    <div ref={containerRef} className="quote-text-inner">
      {children}
    </div>
  );
}