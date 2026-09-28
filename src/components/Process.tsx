import FadeIn from "./FadeIn";

const steps = [
  {
    step: "01",
    title: "Discover",
    duration: "1–2 weeks",
    phase: "Phase 1: Alignment",
    description:
      "We interview key operational stakeholders to map existing data flows, manual bottlenecks, and business outcomes. No generic slide decks—only tailored technical roadmaps.",
  },
  {
    step: "02",
    title: "Scope & Architecture",
    duration: "1 week",
    phase: "Phase 2: Blueprint",
    description:
      "Detailed technical specifications, schema definitions, system architecture diagrams, and fixed-milestone cost and schedule commitments with zero hidden scope.",
  },
  {
    step: "03",
    title: "Design & Prototype",
    duration: "2–3 weeks",
    phase: "Phase 3: Experience",
    description:
      "Accessible, responsive UI/UX prototypes tested against real department workflows before writing production code. High-contrast typography and intuitive interfaces.",
  },
  {
    step: "04",
    title: "Build & Test",
    duration: "4–10 weeks",
    phase: "Phase 4: Execution",
    description:
      "Agile 2-week sprints with transparent staging environments. Continuous integration, database stress-testing, and compliance security audits at every milestone.",
  },
  {
    step: "05",
    title: "Deploy & Support",
    duration: "Ongoing",
    phase: "Phase 5: Operations",
    description:
      "Zero-downtime production deployment, automated backup verification, documentation handoff, staff onboarding, and agreed maintenance SLAs with direct architect support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Delivery Framework</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                A disciplined lifecycle for mission-critical software.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              Every project follows a structured engineering methodology with transparent progress tracking and direct communication at every sprint.
            </p>
          </div>
        </FadeIn>

        {/* 5-Step Connected Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 90} direction="up">
              <div className="mnc-card rounded-2xl p-6 flex flex-col justify-between h-full relative group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-[var(--color-cyan)]">
                      {item.step}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--color-ink-subtle)] bg-[var(--color-rule)] px-2.5 py-0.5 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-ink-subtle)] block mb-1">
                    {item.phase}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-cyan)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-rule)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)]" />
                  <span className="text-[11px] font-mono text-[var(--color-ink-subtle)]">
                    Sprint Gate Checked
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* What Affects Cost and Timeline (MNC Advisory Guide) */}
        <FadeIn delay={300} direction="up">
          <div className="mt-16 p-8 rounded-3xl mnc-card border border-[var(--color-rule)]">
            <div className="max-w-2xl mb-8">
              <span className="font-mono text-xs text-[var(--color-cyan)] uppercase tracking-wider block mb-1">
                Transparency & Estimation
              </span>
              <h3 className="text-2xl font-display font-semibold text-[var(--color-ink)]">
                What drives software cost and delivery schedules
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] mt-2">
                We believe in straightforward financial models. Here are the three primary variables that determine your project investment:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[var(--color-ink-muted)] leading-relaxed">
              <div className="p-5 rounded-xl bg-[var(--color-page-alt)] border border-[var(--color-rule)] space-y-2">
                <strong className="block text-sm font-display font-semibold text-[var(--color-ink)]">
                  1. Scope & Legacy Integration
                </strong>
                <p className="text-xs">
                  Connecting into existing hospital information systems, ERPs, or proprietary hardware protocols demands dedicated middleware and rigorous regression safety.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--color-page-alt)] border border-[var(--color-rule)] space-y-2">
                <strong className="block text-sm font-display font-semibold text-[var(--color-ink)]">
                  2. Regulatory & Security Audits
                </strong>
                <p className="text-xs">
                  Clinical records, student identity registries, and monetary transactions require end-to-end encryption, strict role-based access, and audit trail validation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--color-page-alt)] border border-[var(--color-rule)] space-y-2">
                <strong className="block text-sm font-display font-semibold text-[var(--color-ink)]">
                  3. Phased Deployment Milestones
                </strong>
                <p className="text-xs">
                  We structure complex projects into high-leverage release stages. You validate real user adoption early and can choose to expand capabilities as value is proven.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
