"use client";

import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

const keyPillars = [
  "Autonomous AI Architecture",
  "High-Throughput ERPs",
  "Zero-Trust Security",
  "100% Code Ownership",
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden text-center">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--color-cyan)] opacity-10 blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Content */}
      <div className="container relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <FadeIn direction="up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight font-display font-bold text-white leading-[1.15] sm:leading-[1.12] max-w-4xl">
            Architecting Intelligent Systems for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan)] via-[#60A5FA] to-white">
              Next Era of Enterprise.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={120} direction="up">
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Nexavora Technologies engineers mission-critical custom software, distributed ERP networks, and autonomous AI integrations for hospitals, universities, and high-growth commercial enterprises across India.
          </p>
        </FadeIn>

        <FadeIn delay={220} direction="up">
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a href="#contact" className="cta-luxury group w-full sm:w-auto text-center justify-center">
              <span>Initiate consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto text-center px-7 py-3 rounded-full text-sm font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200 backdrop-blur-md"
            >
              Explore production systems
            </a>
          </div>
        </FadeIn>

        {/* Strategic Pillars with Glowing Chevrons */}
        <FadeIn delay={320} direction="up">
          <ul className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl w-full">
            {keyPillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-slate-300/90 text-center"
              >
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--color-cyan)] shrink-0"
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
          <div className="mt-10 sm:mt-12 w-[1px] h-10 sm:h-12 bg-gradient-to-b from-transparent via-[var(--color-cyan)] to-transparent opacity-75" />
        </FadeIn>
      </div>
    </section>
  );
}
