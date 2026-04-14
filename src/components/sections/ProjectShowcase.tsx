"use client";

type FeaturedProject = {
  label: string;
  subtitle: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
};

type ClientProject = {
  name: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
};

const featuredProject: FeaturedProject = {
  label: "Featured Project",
  subtitle: "Enso Mind Matters",
  description:
    "A therapy and mental wellness platform designed to feel safe, calm, and human. Built with a strong focus on clarity, accessibility, and emotional trust.",
  link: "https://www.ensomindmatters.com/",
  linkLabel: "View Project",
  image: "/projects/enso.jpg",
};

const clientProjects: ClientProject[] = [
  {
    name: "Hridmann",
    description:
      "A mindful psychology consultancy website - visually calm yet deeply human. A showcase of minimal design and trust-focused UI.",
    link: "https://hridmann.com/",
    linkLabel: "Visit Project",
    image: "/projects/hridmann.jpg",
  },
  {
    name: "Truckin' Taste",
    description:
      "A vibrant food truck website with bold visuals and smooth animations. Built to capture the energy and flavor of street food culture.",
    link: "https://truckin-taste-s3vg.vercel.app/",
    linkLabel: "Visit Project",
    image: "/projects/truckin-taste.jpg",
  },
  {
    name: "WhatsApp Integration Module",
    description:
      "Real-time WhatsApp communication inside Odoo CRM and Sales. Send updates, track messages, and automate alerts directly within your ERP.",
    link: "https://apps.odoo.com/apps/modules/18.0/media_whatsapp_integration",
    linkLabel: "Explore Module",
    image: "/projects/whatsapp-odoo.jpg",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="relative mt-20 md:mt-24 scale-[0.94] origin-top" id="clients">
      <div className="mb-10 md:mb-14">
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#004aad]/70">
          Client Projects
        </p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-7xl">
          Work that feels distinct, thoughtful, and built to last.
        </h2>
      </div>

      <div className="grid gap-6 md:gap-7">
        <article className="group relative overflow-hidden rounded-[32px] border border-white/55 bg-white/10 shadow-[0_12px_50px_rgba(0,0,0,0.06)] backdrop-blur-[28px]">
          <div className="pointer-events-none absolute inset-0 bg-white/18" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.08)_100%)]" />
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-[#004aad]/10 blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="h-full overflow-hidden md:min-h-[420px]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.subtitle}
                  className="h-[280px] w-full object-cover object-[15%_30%] transition duration-700 group-hover:scale-[1.03] md:h-full"
                />
              </div>
            </div>

            <div className="p-8 md:col-span-5 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[12px] uppercase tracking-[0.24em] text-[#004aad]">
                  {featuredProject.label}
                </span>
                <span className="h-px flex-1 bg-[#004aad]/12" />
              </div>

              <h3 className="max-w-[14ch] text-3xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#111] md:text-5xl">
                {featuredProject.subtitle}
              </h3>

              <p className="mt-5 text-[16px] leading-7 text-[#3a3a3a] md:text-[17px]">
                {featuredProject.description}
              </p>

              <div className="mt-7">
                <a
                  href={featuredProject.link}
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-[#111] transition hover:text-[#004aad]"
                >
                  {featuredProject.linkLabel}
                  <span className="text-[#004aad]">→</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-3">
          {clientProjects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-[28px] border border-[#004aad]/10 bg-[#f8f8f5] shadow-[0_10px_35px_rgba(20,25,40,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,25,40,0.08)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[220px] w-full object-[15%_30%] transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="relative p-7 md:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />
                <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-[#004aad]/6 blur-2xl" />

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#004aad]" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#6a6a6a]">
                    Selected Work
                  </span>
                </div>

                <h3 className="text-2xl font-semibold leading-[1] tracking-[-0.04em] text-[#111]">
                  {project.name}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#424242]">
                  {project.description}
                </p>

                <div className="mt-7">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-[#111] transition hover:text-[#004aad]"
                  >
                    {project.linkLabel}
                    <span className="text-[#004aad]">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}