"use client";

import FadeIn from "./FadeIn";
import { ArrowRight, Bot, Code, Database, Cloud } from "lucide-react";

const keyPillars = [
  "AI & Automation",
  "Software & ERP",
  "Digital Solutions",
  "Cloud & Infrastructure",
];

const whatWeBuild = [
  {
    icon: Bot,
    theme: "theme-cyan",
    title: "AI & Intelligent Automation",
    description:
      "Build AI-powered applications that can understand information, automate workflows, retrieve knowledge, and assist teams with everyday tasks.",
  },
  {
    icon: Code,
    theme: "theme-blue",
    title: "Custom Software & Web Applications",
    description:
      "Modern web platforms and business applications designed around your users, processes, and operational requirements.",
  },
  {
    icon: Database,
    theme: "theme-violet",
    title: "ERP & Business Management Systems",
    description:
      "Connected systems that bring business operations, records, workflows, reporting, and management into one platform.",
  },
  {
    icon: Cloud,
    theme: "theme-emerald",
    title: "Cloud & Digital Infrastructure",
    description:
      "Reliable deployment architectures, APIs, databases, integrations, and cloud-ready infrastructure for modern applications.",
  },
];

export default function Hero() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden text-center">
        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--color-cyan)] opacity-10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight font-display font-bold text-white leading-[1.12] max-w-4xl">
              Build Smarter. Automate Better.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan)] via-[#60A5FA] to-white">
                Grow Digitally.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={100} direction="up">
            <p className="mt-8 text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mx-auto">
              Nexavora Technologies builds modern software, AI-powered solutions, ERP platforms, and digital systems that help organizations solve real operational challenges.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From business applications and enterprise workflows to intelligent automation and custom AI systems, we turn ideas and processes into practical technology.
            </p>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="cta-luxury group">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="px-7 py-3 rounded-full text-sm font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200 backdrop-blur-md"
              >
                Explore Our Work
              </a>
            </div>
          </FadeIn>

          {/* Strategic Pillars with Chevrons */}
          <FadeIn delay={300} direction="up">
            <ul className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl w-full">
              {keyPillars.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300"
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
        </div>
      </section>

      {/* ── Section 2: What We Build ── */}
      <section className="py-20 border-t border-[var(--color-rule)] relative">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Technology Designed Around Your Business
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Every organization has different workflows, challenges, and goals. We build technology around those requirements instead of forcing businesses into rigid, one-size-fits-all systems.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeBuild.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 70} direction="up">
                  <div className={`portfolio-card ${item.theme} p-7 h-full flex flex-col justify-between group`}>
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--card-pill)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--card-text)" }} />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2.5 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={250} direction="up">
            <div className="mt-10 flex justify-center sm:justify-start">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--color-cyan)]" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
