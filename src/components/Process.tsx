import FadeIn from "./FadeIn";

const steps = [
  {
    step: "01",
    theme: "theme-cyan",
    title: "Discover",
    duration: "1–2 weeks",
    description:
      "We interview key stakeholders to understand your workflows, existing technical debt, and business goals. No generic proposals—only tailored roadmaps.",
  },
  {
    step: "02",
    theme: "theme-blue",
    title: "Scope",
    duration: "1 week",
    description:
      "Detailed technical specifications, architecture diagrams, data models, and milestone-based cost and time estimates with clear deliverables.",
  },
  {
    step: "03",
    theme: "theme-violet",
    title: "Design",
    duration: "2–3 weeks",
    description:
      "Accessible, responsive UI/UX prototypes tested against real user requirements before writing production code.",
  },
  {
    step: "04",
    theme: "theme-pink",
    title: "Build",
    duration: "4–10 weeks",
    description:
      "Agile 2-week sprints with staging environments. Continuous testing, database validation, and security auditing at each release.",
  },
  {
    step: "05",
    theme: "theme-emerald",
    title: "Support",
    duration: "Ongoing",
    description:
      "Production deployment, automated backups, documentation handoff, staff onboarding, and ongoing maintenance with direct developer access.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Predictable, transparent engineering from requirements gathering to long-term operations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 60} direction="up">
              <div className={`portfolio-card ${item.theme} p-6 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
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
                  <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-white transition-colors">
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

        {/* Short What Affects Cost and Timeline */}
        <FadeIn delay={200} direction="up">
          <div className="mt-12 portfolio-card theme-cyan p-6 sm:p-8">
            <h3 className="text-lg font-display font-semibold text-white mb-2">
              What affects project cost and delivery timelines
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Project investment depends primarily on legacy integration complexity (connecting to existing hospital systems or proprietary APIs), regulatory data requirements (HIPAA/NABH compliance, encryption, audit logging), and whether the engagement is delivered as a rapid MVP or full enterprise rollout.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
