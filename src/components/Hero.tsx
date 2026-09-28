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
      {/* 1. Cinematic Ambient Looping Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 brightness-[0.75] contrast-[1.1]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
      />

      {/* 2. Dual Atmospheric Legibility Veil */}
      <div className="hero-veil z-[1]" />

      {/* 3. Hero Content */}
      <div className="container relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_10px_var(--color-cyan)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-200 font-medium">
              Next-Gen Software & AI Studio
            </span>
          </div>

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

        {/* 4. Strategic Pillars with Glowing Chevrons */}
        <FadeIn delay={320} direction="up">
          <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl w-full">
            {keyPillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300 py-2 px-3 rounded-lg border border-white/5 bg-black/20 backdrop-blur-sm"
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

        {/* 5. Glowing Vertical Divider Rule */}
        <FadeIn delay={400} direction="up">
          <div className="mt-12 w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--color-cyan)] to-transparent opacity-75" />
        </FadeIn>
      </div>
    </section>
  );
}
