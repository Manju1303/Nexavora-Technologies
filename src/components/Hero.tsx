import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--color-accent)] opacity-15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-[var(--color-cyan)] opacity-10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 max-w-4xl">
        <FadeIn direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight font-display font-bold text-white leading-[1.1]">
            Software and AI systems built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan)] via-[#38BDF8] to-white">
              how your organisation actually works.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            Nexavora Technologies partners with hospitals, educational institutions, and businesses across India to build reliable custom software, ERPs, and AI integrations.
          </p>
        </FadeIn>

        <FadeIn delay={200} direction="up">
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn btn-primary gap-2 text-sm">
              Start a project <ArrowUpRight size={16} />
            </a>
            <a href="#work" className="btn btn-secondary text-sm">
              View our work
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
