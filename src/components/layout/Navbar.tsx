"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuBackground from "./MenuBackground";


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
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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
    setOpen(false);
  };
  

  useEffect(() => {
    const main = document.querySelector("main");

    const handleScroll = () => {
      const scrollTop = main ? main.scrollTop : window.scrollY;
      setScrolled(scrollTop > window.innerHeight * 0.8);
    };

    handleScroll();

    if (main) {
      main.addEventListener("scroll", handleScroll);
      return () => main.removeEventListener("scroll", handleScroll);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-[100] w-full">
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
        <a
          href="/"
          className={`relative z-[120] text-[2rem] font-black tracking-[-0.06em] transition-colors duration-300 md:text-[2.35rem] ${
            open ? "text-white" : scrolled ? "text-[#004aad]" : "text-white"
          }`}
        >
          SovraTech
        </a>

        <div className="relative z-[120] flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hidden rounded-full border border-black/0 bg-white px-5 py-3 text-[13px] font-medium uppercase tracking-[-0.02em] text-black shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition hover:scale-[1.02] hover:bg-[#004aad] hover:text-white sm:inline-flex"
          >
            Get in touch
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition-colors duration-300 ${
              open ? "bg-white" : "bg-[#004aad]"
            }`}
          >
            <span
              className={`absolute block h-[2px] w-6 rounded-[2px] transition-all duration-300 ease-out ${
                open ? "bg-[#004aad]" : "bg-white"
              }`}
              style={{
                transform: open ? "rotate(45deg)" : "translateY(-4px)",
              }}
            />
            <span
              className={`absolute block h-[2px] w-6 rounded-[2px] transition-all duration-300 ease-out ${
                open ? "bg-[#004aad]" : "bg-white"
              }`}
              style={{
                transform: open ? "rotate(-45deg)" : "translateY(4px)",
              }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] overflow-hidden bg-black"
          >
            <div className="absolute inset-0">
              <MenuBackground />
            </div>

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative flex h-full w-full flex-col px-5 pt-24 pb-24 md:px-8 lg:px-10">
              <div className="grid h-full grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                <div className="hidden lg:flex lg:flex-col lg:justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
                    className="max-w-[420px] self-start pl-1 -translate-y-8"
                  >

                    <h2 className="mt-5 text-[clamp(3rem,4.8vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                      <span className="block">LET&apos;S BUILD</span>
                      <span className="block">SOMETHING AMAZING</span>
                      <span className="block">TOGETHER!</span>
                    </h2>
                  </motion.div>
                </div>

                <div className="flex h-full flex-col">
                  <div className="flex flex-1 items-center justify-center lg:justify-end lg:pr-10 lg:pb-0 pb-10">
                    <div className="w-full lg:w-auto space-y-3 md:space-y-0">
                      {links.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={`/#${link.id}`}
                          onClick={(e) => scrollToSection(e, link.id)}
                          initial={{ opacity: 0, y: 28 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.12 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className="group relative block text-center lg:text-right text-[clamp(3.8rem,9vw,8.5rem)] font-semibold leading-[1.1] md:leading-[0.95] tracking-[-0.07em] text-white transition-all duration-300 hover:opacity-90"
                        >
                          <span className="relative inline-block">
                            {/* glow */}
                            <span className="absolute left-0 top-1/2 h-[18%] w-0 -translate-y-1/2 rounded-full bg-[#004aad]/80 blur-[10px] transition-all duration-300 group-hover:w-full group-active:w-full" />

                            {/* main line */}
                            <span className="absolute left-0 top-1/2 h-[10%] w-0 -translate-y-1/2 rounded-full bg-[#004aad] transition-all duration-300 group-hover:w-full group-active:w-full" />

                            {/* text */}
                            <span className="relative transition-transform duration-300 group-hover:translate-x-[-4px] lg:group-hover:translate-x-[-8px] active:translate-x-[-3px]">
                              {link.label}
                            </span>
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.45, delay: 0.34, ease: "easeOut" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
                    // className="flex items-center justify-center gap-4 pb-2 lg:justify-center lg:pb-4"
                  >
                    <a
                      href="https://linkedin.com/company/sovratech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-md transition hover:scale-[1.05] hover:border-[#004aad] hover:bg-white hover:text-[#004aad]"
                    >
                      <LinkedInIcon className="h-[18px] w-[18px]" />
                    </a>

                    <a
                      href="https://www.instagram.com/sovratech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-md transition hover:scale-[1.05] hover:border-[#004aad] hover:bg-white hover:text-[#004aad]"
                    >
                      <InstagramIcon className="h-[18px] w-[18px]" />
                    </a>

                    <a
                      href="mailto:hello@sovratech.com"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-md transition hover:scale-[1.05] hover:border-[#004aad] hover:bg-white hover:text-[#004aad]"
                    >
                      <MailIcon className="h-[18px] w-[18px]" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}