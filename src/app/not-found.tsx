import Link from "next/link";
import MenuBackground from "@/components/layout/MenuBackground";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      {/* Same background as the nav menu */}
      <div className="absolute inset-0">
        <MenuBackground />
      </div>
      <div className="absolute inset-0 bg-black/0" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[clamp(8rem,30vw,22rem)] font-black leading-none tracking-[-0.05em] text-white">
          404
        </h1>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
          This page could not be found
        </p>

        <Link
          href="/"
          className="mt-3 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-white/40 underline underline-offset-4 transition-colors hover:text-white"
        >
          Go to the homepage
        </Link>
      </div>
    </main>
  );
}