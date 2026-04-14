// ScrollServices.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    image: "/webdev.jpg",
    slug: "webdevelopment",
    text: "We design and develop fully custom websites from the ground up - no templates, no limitations. Every line of code, interaction, and animation is handcrafted to fit your brand's identity and goals.",
  },
  {
    number: "02",
    title: "Odoo Customization",
    image:
      "/odoo.jpg",
    slug: "odooustomization",
    text: "End-to-end customization of Odoo to automate your sales, inventory, and finance workflows - seamlessly integrated with your business processes.",
  },
  {
    number: "03",
    title: "AI & Dashboard Solutions",
    image:
      "/ai.jpg",
    slug: "aidashboard-solutions",
    text: "We build intelligent dashboards and workflow automations powered by AI - transforming data into actionable insights for smarter decisions.",
  },
];

export default function ScrollServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Refs for inner elements we want to blur-reveal independently
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const heading = headingRef.current;
    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    const imgs = imgRefs.current.filter(Boolean) as HTMLDivElement[];
    const texts = textRefs.current.filter(Boolean) as HTMLDivElement[];
    const scroller = document.querySelector("main");

    if (!section || !path || !heading || !rows.length) return;

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();

      // --- SVG path draw ---
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // --- Heading: blur + slide from top ---
      gsap.set(heading, {
        y: 40,
        opacity: 0,
        filter: "blur(12px)",
      });

      gsap.to(heading, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 88%",
          toggleActions: "play none none reverse",
          scroller: scroller || undefined,
        },
      });

      // --- SVG path draw on scroll ---
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom bottom",
          scrub: true,
          scroller: scroller || undefined,
        },
      });

      // --- Each row: subtle blur + slide (the outer border-top container) ---
      rows.forEach((row) => {
        gsap.set(row, { opacity: 0 });

        gsap.to(row, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse",
            scroller: scroller || undefined,
          },
        });
      });

      // --- Image blocks: blur + scale up from slightly small ---
      imgs.forEach((img) => {
        gsap.set(img, {
          scale: 0.96,
          opacity: 0,
          filter: "blur(16px)",
        });

        gsap.to(img, {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 88%",
            toggleActions: "play none none reverse",
            scroller: scroller || undefined,
          },
        });
      });

      // --- Text blocks: staggered blur + slide per child element ---
      texts.forEach((textBlock) => {
        if (!textBlock) return;

        // Select the animatable children inside each text block
        const children = textBlock.querySelectorAll<HTMLElement>(
          ".service-number, h3, p, .service-link"
        );

        gsap.set(children, {
          y: 24,
          opacity: 0,
          filter: "blur(8px)",
        });

        gsap.to(children, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,          // each child reveals 100ms after the previous
          scrollTrigger: {
            trigger: textBlock,
            start: "top 85%",
            toggleActions: "play none none reverse",
            scroller: scroller || undefined,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#f3f3ef] py-28 md:py-40"
    >
      <svg
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-[1800px] -translate-x-1/2"
        viewBox="-480 0 2300 3000"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          stroke="#004aad"
          strokeWidth="90"
          opacity="0.12"
          d="M-841 100H584c124 0 225 101 225 225v0c0 124-101 225-225 225h-95a281 281 0 00-281 281v0c0 155 125 281 281 281h442c167 0 304 136 304 304v0c0 168-137 304-304 304H795a439 439 0 00-439 439v82c0 150 122 272 272 272h355c187 0 338 151 338 338v0c0 187-151 338-338 338H677"
        />
      </svg>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <div ref={headingRef} className="mb-18 md:mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#004aad]/70">
            Our Services
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-7xl">
            Crafted to look sharper, work smarter, and grow with your business.
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { rowRefs.current[index] = el; }}
              className="border-t border-[#004aad]/10 pt-8 md:pt-10"
            >
              <div
                className={`grid items-start gap-8 md:grid-cols-12 md:gap-12 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image — blur + scale reveal */}
                <div
                  className="md:col-span-5"
                  ref={(el) => { imgRefs.current[index] = el; }}
                >
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[260px] w-full object-cover md:h-[340px]"
                    />
                  </div>
                </div>

                {/* Text block — staggered blur reveal per child */}
                <div
                  className="md:col-span-7 md:pt-2"
                  ref={(el) => { textRefs.current[index] = el; }}
                >
                  <div className="service-number mb-5 flex items-center gap-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.24em] text-[#004aad]">
                      {service.number}
                    </span>
                    <span className="h-px flex-1 bg-[#004aad]/12" />
                  </div>

                  <h3 className="max-w-[11ch] text-3xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#111] md:text-5xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[56ch] text-[17px] leading-8 text-[#3a3a3a] md:text-[18px]">
                    {service.text}
                  </p>

                  <div className="service-link mt-7">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-[#111] transition hover:text-[#004aad]"
                    >
                      Learn More
                      <span className="text-[#004aad]">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ProjectShowcase />
          <div className="mt-32 md:mt-40">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
}