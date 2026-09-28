import FadeIn from "./FadeIn";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const capabilities = [
  "Healthcare & Hospital Portals",
  "Institutional ERP & Mess Systems",
  "RAG & Generative AI Solutions",
  "Staff Monitoring & Attendance",
  "NABH Digital Documentation",
  "Cloud Architecture & DevOps",
  "Automated Data Pipelines",
];

const metrics = [
  { value: "100%", label: "Direct Engineering", sub: "Architects on every call" },
  { value: "< 24h", label: "Response Window", sub: "Rapid requirement scoping" },
  { value: "Zero", label: "Vendor Lock-in", sub: "Full code & IP ownership" },
  { value: "Tamil Nadu", label: "Engineering Hub", sub: "Serving clients across India" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden enterprise-grid radial-mask">
      {/* Ambient background glow spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--color-accent)] opacity-15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-[var(--color-cyan)] opacity-10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container relative z-10">
        <FadeIn direction="up">
          <div className="eyebrow">
            Enterprise Digital & AI Solutions
          </div>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] max-w-4xl tracking-tight font-display">
            Software and AI systems built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-cyan)] to-[var(--color-accent)]">
              how your organisation actually works.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200} direction="up">
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-[var(--color-ink-muted)] leading-relaxed">
            Nexavora Technologies partners with hospitals, educational institutions, and growing businesses across India to design, build, and operate resilient software that eliminates operational friction.
          </p>
        </FadeIn>

        <FadeIn delay={300} direction="up">
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn btn-primary gap-2 text-sm">
              Start a project <ArrowUpRight size={16} />
            </a>
            <a href="#work" className="btn btn-secondary gap-2 text-sm">
              Explore case studies <ArrowDown size={14} />
            </a>
          </div>
        </FadeIn>

        {/* Enterprise Operational Metrics Bar */}
        <FadeIn delay={400} direction="up">
          <div className="mt-16 pt-8 border-t border-[var(--color-rule)] grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="border-l border-[var(--color-rule)] pl-4">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
                  {m.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-cyan)] mt-1">
                  {m.label}
                </div>
                <div className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Cognizant/KPMG-Style Scrolling Capability Marquee */}
      <div className="mt-16 py-4 border-y border-[var(--color-rule)] bg-[var(--color-page-card)] overflow-hidden">
        <div className="animate-marquee gap-8 items-center text-xs font-mono uppercase tracking-widest text-[var(--color-ink-muted)]">
          {capabilities.concat(capabilities).map((cap, i) => (
            <div key={`${cap}-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="hover:text-[var(--color-cyan)] transition-colors cursor-default">
                {cap}
              </span>
              <span className="text-[var(--color-rule-active)] font-sans">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
