"use client";

import { useEffect, useState } from "react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 7l7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const ist = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(ist);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  const links = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
  ];

  return (
   <footer className="relative border-t border-black/10 bg-[#f3f3ef] px-6 py-16 text-black md:px-10 md:py-20 lg:px-16">
    <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#004aad]/10 blur-3xl" />

    <div className="relative mx-auto w-full max-w-7xl">
      <div className="grid items-start gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.2fr_0.9fr_1fr]">
        <div className="flex flex-col items-center md:items-start">
          <a
            href="/"
            onClick={scrollToTop}
            className="text-[1.75rem] font-black tracking-[-0.05em] text-[#004aad]"
          >
            SovraTech
          </a>

          <p className="mt-4 max-w-sm text-[14px] leading-6 text-black/60">
            Building thoughtful, high-performance digital products at the intersection of design, data, and technology.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-start">
          <p className="text-[11px] uppercase tracking-[0.25em] text-black/40">
            Site
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center md:text-left">
            {links.map((link) => (
              <a
                key={link.id}
                href="/"
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-[15px] text-black/70 transition hover:text-[#004aad]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-[11px] uppercase tracking-[0.25em] text-black/40">
            Connect
          </p>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <a
              href="https://linkedin.com/company/sovratech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:scale-[1.05] hover:border-[#004aad] hover:text-[#004aad]"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>

            <a
              href="https://www.instagram.com/sovratech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:scale-[1.05] hover:border-[#004aad] hover:text-[#004aad]"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>

            <a
              href="mailto:hello@sovratech.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:scale-[1.05] hover:border-[#004aad] hover:text-[#004aad]"
            >
              <MailIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <p className="text-[11px] uppercase tracking-[0.25em] text-black/40">
            Mumbai, India · {time} IST
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
}