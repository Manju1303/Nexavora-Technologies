"use client";

import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

const keyPillars = [
  "Strategic Partner",
  "End-to-End Delivery",
  "Enterprise Scalability",
  "Full Code Ownership",
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-center">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--color-cyan)] opacity-10 blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Content */}
      <div className="container relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <FadeIn direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight font-display font-bold text-white leading-[1.12] max-w-4xl">
            Software and AI systems built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan)] via-[#60A5FA] to-white">
              how your organisation actually works.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={120} direction="up">
          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Nexavora Technologies partners with hospitals, educational institutions, and businesses across India to build reliable custom software, ERPs, and AI integrations.
          </p>
        </FadeIn>

        <FadeIn delay={220} direction="up">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="cta-luxury group">
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#work"
              className="px-7 py-3 rounded-full text-sm font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200 backdrop-blur-md"
            >
              View selected work
            </a>
          </div>
        </FadeIn>

        {/* Strategic Pillars with Glowing Chevrons */}
        <FadeIn delay={320} direction="up">
          <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl w-full">
            {keyPillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300/90"
              >
                <svg
                  className="w-3 h-3 text-[var(--color-cyan)] shrink-0"
                  viewBox="0 0 11 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M1.15 1.15 L9.6 10 L1.15 18.85" />
                </svg>
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Glowing Vertical Divider Rule */}
        <FadeIn delay={400} direction="up">
          <div className="mt-12 w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--color-cyan)] to-transparent opacity-75" />
        </FadeIn>
      </div>
    </section>
  );
}
