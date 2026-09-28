import FadeIn from "./FadeIn";

const steps = [
  {
    step: "01",
    title: "Discover",
    duration: "1–2 weeks",
    description:
      "We interview key stakeholders to understand your workflows, existing technical debt, and business goals. No generic proposals—only tailored roadmaps.",
  },
  {
    step: "02",
    title: "Scope & Architecture",
    duration: "1 week",
    description:
      "Detailed technical specifications, architecture diagrams, data models, and milestone-based cost and time estimates. Fixed deliverables with clear expectations.",
  },
  {
    step: "03",
    title: "Design & Prototype",
    duration: "2–3 weeks",
    description:
      "Accessible, responsive UI/UX prototypes tested against real user requirements before writing production code. High-contrast typography and clean interfaces.",
  },
  {
    step: "04",
    title: "Build & Test",
    duration: "4–10 weeks",
    description:
      "Agile 2-week sprints with transparent staging deployments. Rigorous integration testing, database validation, and security auditing at every release.",
  },
  {
    step: "05",
    title: "Deploy & Support",
    duration: "Ongoing",
    description:
      "Production deployment, automated backups, documentation handoff, staff training, and agreed-upon maintenance SLAs with direct developer support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-[var(--foreground)]">
              Our Process
            </h2>
            <p className="mt-4 text-base text-[var(--muted-foreground)] leading-relaxed">
              Predictable, transparent engineering from requirements gathering to long-term operations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 100}>
              <div className="flex flex-col h-full border-t border-[var(--border)] pt-6">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--muted-foreground)] font-medium">
                    {item.step}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {item.duration}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Cost & Timeline Factors Guide */}
        <FadeIn delay={300}>
          <div className="mt-16 pt-12 border-t border-[var(--border)]">
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
              What affects cost and timeline
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[var(--muted-foreground)] leading-relaxed">
              <div>
                <strong className="block text-[var(--foreground)] font-medium mb-1">Scope & Integration Complexity</strong>
                Legacy system connectors, specialized third-party APIs, and compliance requirements determine the core engineering hours needed.
              </div>
              <div>
                <strong className="block text-[var(--foreground)] font-medium mb-1">Data & Security Requirements</strong>
                Medical records, financial transactions, or automated pipelines require rigorous encryption, testing, and audit trails.
              </div>
              <div>
                <strong className="block text-[var(--foreground)] font-medium mb-1">Iterative Milestones</strong>
                Projects can be phased into high-impact MVPs followed by planned feature increments to manage budget and launch quickly.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
