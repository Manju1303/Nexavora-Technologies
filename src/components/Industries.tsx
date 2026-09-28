import FadeIn from "./FadeIn";
import { Stethoscope, GraduationCap, Building2, Rocket, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    sectorCode: "SEC-MED",
    name: "Healthcare & Life Sciences",
    focus: "Clinical Systems & Compliance",
    description:
      "Hospital web portals, automated appointment engines, NABH documentation management, and secure medical record databases built for healthcare providers across Tamil Nadu.",
  },
  {
    icon: GraduationCap,
    sectorCode: "SEC-EDU",
    name: "Higher Education & Academics",
    focus: "Admissions & Campus Operations",
    description:
      "Collegiate administration portals, student recruitment pipelines, study-abroad guidance engines, and faculty tracking systems designed for colleges and universities.",
  },
  {
    icon: Building2,
    sectorCode: "SEC-ERP",
    name: "Enterprise ERP & SaaS",
    focus: "Resource Planning & Multi-Branch Ops",
    description:
      "Integrated multi-branch inventory tracking, automated shift attendance, custom subscription billing, and departmental approval workflows for commercial businesses.",
  },
  {
    icon: Rocket,
    sectorCode: "SEC-STP",
    name: "Startups & Growth Ventures",
    focus: "Accelerated MVPs & Architecture",
    description:
      "Fast-turnaround minimum viable products, investor-grade web platforms, native mobile applications, and resilient cloud architectures for high-velocity teams.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Industry Sectors</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Domain expertise across key vertical markets.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              We understand the regulatory and operational realities specific to Indian healthcare, educational institutions, and multi-branch enterprises.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={ind.name} delay={i * 80} direction="up">
                <div className="mnc-card rounded-2xl p-8 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs text-[var(--color-ink-subtle)] font-medium">
                        {ind.sectorCode}
                      </span>
                    </div>

                    <div className="space-y-1 mb-4">
                      <span className="font-mono text-xs text-[var(--color-cyan)] uppercase tracking-wider block">
                        {ind.focus}
                      </span>
                      <h3 className="text-2xl font-display font-semibold group-hover:text-[var(--color-cyan)] transition-colors">
                        {ind.name}
                      </h3>
                    </div>

                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--color-rule)] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] group-hover:text-[var(--color-cyan)] transition-colors">
                    <span>Discuss Sector Requirements</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
