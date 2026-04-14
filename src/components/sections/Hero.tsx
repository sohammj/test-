"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-screen h-full w-full  overflow-hidden flex flex-col justify-center items-center text-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/hero.jpg')",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 px-4">
        {/* <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[1rem] md:text-[1.15rem] tracking-[0.35em] uppercase text-white font-poppins font-semibold mb-6"
        >
          SOVRATECH
        </motion.h1> */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-4xl md:text-5xl font-medium leading-snug tracking-[-0.04em] text-white"
        >
          Empowering Your Digital Presence
        </motion.h2>
      </div>
    </section>
  );
}
