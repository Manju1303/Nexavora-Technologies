import FadeIn from "./FadeIn";

const steps = [
  {
    step: "01",
    theme: "theme-cyan",
    title: "Strategic Discovery & Audit",
    duration: "Weeks 1–2",
    description:
      "Deep technical audit of existing workflows, legacy data topology, regulatory constraints, and architectural feasibility to formulate a deterministic execution blueprint.",
  },
  {
    step: "02",
    theme: "theme-blue",
    title: "System Architecture & Schema",
    duration: "Week 2–3",
    description:
      "Formalizing low-level entity-relationship schemas, API contracts, zero-trust security postures, and high-concurrency database models before writing production code.",
  },
  {
    step: "03",
    theme: "theme-violet",
    title: "Interface Systems & UX",
    duration: "Weeks 3–4",
    description:
      "Translating complex operational workflows into high-fidelity, accessible UI prototypes and design token systems validated against real user scenarios.",
  },
  {
    step: "04",
    theme: "theme-pink",
    title: "Iterative Agile Engineering",
    duration: "Weeks 5–10",
    description:
      "Rapid bi-weekly sprints deployed to staging environments with continuous integration, automated regression testing, database stress tests, and security audits.",
  },
  {
    step: "05",
    theme: "theme-emerald",
    title: "Production Cutover & SLA Support",
    duration: "Continuous",
    description:
      "Zero-downtime deployment, automated encrypted disaster backups, telemetry observability dashboards, staff operational onboarding, and SLA-backed maintenance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Engineering Delivery Methodology
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              A disciplined, milestone-governed lifecycle engineered to eliminate technical ambiguity, enforce strict architectural standards, and guarantee on-time deployment.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 60} direction="up">
              <div className={`portfolio-card ${item.theme} p-6 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-mono text-lg font-bold px-2.5 py-1 rounded-md border border-white/10"
                      style={{ color: "var(--card-text)", background: "var(--card-pill)" }}
                    >
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Investment & Timeline Governance Callout */}
        <FadeIn delay={200} direction="up">
          <div className="mt-12 portfolio-card theme-cyan p-6 sm:p-8">
            <h3 className="text-lg font-display font-semibold text-white mb-2">
              Architectural Predictability & Investment Governance
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Every project follows transparent, milestone-gated deliverables. Investment parameters are governed strictly by integration depth (connecting to legacy EHR/ERP protocols), concurrency thresholds (100,000+ daily operational records), and regulatory compliance standards (NABH/HIPAA clinical audit trails).
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
