"use client";

import { useEffect, useState } from "react";
import { teamMembers } from "@/data/team";
import IdCardCanvas from "./IdCardCanvas";
import IdCardStatic from "./IdCardStatic";

export default function AboutTeam3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userSelected, setUserSelected] = useState(false);

  useEffect(() => {
    if (userSelected) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [userSelected]);

  const activeMember = teamMembers[activeIndex];

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setUserSelected(true);
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#f3f3ef] px-6 py-12 text-black md:px-10 lg:px-16"
    >
      {/* Desktop only — full physics scene as absolute background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <IdCardCanvas
          key={activeIndex}
          glbPath={teamMembers[activeIndex].glb}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pointer-events-none">
        <div className="pointer-events-none grid lg:min-h-[800px] grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="pointer-events-auto max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-black/45">
              Meet the Team
            </p>
            <h2 className="mt-5 text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em] text-black">
              {activeMember.name}
            </h2>
            <p className="mt-3 text-[1.05rem] tracking-[0.08em] uppercase text-black/50">
              {activeMember.role}
            </p>
            <p className="mt-8 max-w-xl text-[1rem] leading-8 text-black/70">
              {activeMember.bio}
            </p>
            <a
              href={activeMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.12em] text-[#004aad] transition hover:underline"
            >
              LinkedIn →
            </a>
            <div className="mt-10 flex flex-wrap gap-3">
              {teamMembers.map((member, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleSelect(index)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-black/20 bg-black/5 text-black/70 hover:border-black/40 hover:bg-black/10 hover:text-black"
                    }`}
                  >
                    {member.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>

        {/* Mobile/tablet — static floating card, no rope */}
        <div className="pointer-events-auto h-[460px] w-full lg:hidden">
          <IdCardStatic
            key={`static-${activeIndex}`}
            glbPath={teamMembers[activeIndex].glb}
          />
        </div>
      </div>
    </section>
  );
}