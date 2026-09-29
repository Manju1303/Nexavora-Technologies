import FadeIn from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    theme: "theme-cyan",
    title: "Discover",
    description:
      "We understand your business, users, existing processes, challenges, and objectives.",
  },
  {
    step: "02",
    theme: "theme-blue",
    title: "Plan",
    description:
      "We define the project scope, technical approach, architecture, milestones, and development priorities.",
  },
  {
    step: "03",
    theme: "theme-violet",
    title: "Design",
    description:
      "We transform requirements into user flows, interface designs, database structures, and system architecture.",
  },
  {
    step: "04",
    theme: "theme-pink",
    title: "Develop",
    description:
      "Our team builds the application in iterative stages, integrating the required features, APIs, databases, and AI capabilities.",
  },
  {
    step: "05",
    theme: "theme-emerald",
    title: "Test",
    description:
      "We validate functionality, usability, performance, security requirements, and real-world workflows.",
  },
  {
    step: "06",
    theme: "theme-amber",
    title: "Deploy",
    description:
      "The completed system is deployed to the appropriate production environment and prepared for operational use.",
  },
  {
    step: "07",
    theme: "theme-cyan",
    title: "Improve",
    description:
      "Technology evolves. We can continue improving the system through maintenance, new features, integrations, and optimization.",
  },
];

const whyNexavora = [
  {
    title: "Problem First",
    theme: "theme-cyan",
    description:
      "We begin by understanding the actual problem before choosing the technology.",
  },
  {
    title: "Custom Solutions",
    theme: "theme-blue",
    description:
      "Your business processes determine the system architecture—not the other way around.",
  },
  {
    title: "AI When It Makes Sense",
    theme: "theme-violet",
    description:
      "We use AI and automation where they can provide meaningful value rather than adding AI simply for the sake of it.",
  },
  {
    title: "Modern Technology",
    theme: "theme-emerald",
    description:
      "We work with modern development frameworks, databases, APIs, AI technologies, and cloud platforms.",
  },
  {
    title: "Transparent Development",
    theme: "theme-pink",
    description:
      "We maintain clear communication throughout the development process and keep project requirements visible.",
  },
  {
    title: "Built to Evolve",
    theme: "theme-amber",
    description:
      "We design systems with future improvements and changing business requirements in mind.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 8: Our Development Process ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              From Idea to Production
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our Development Process: A structured, transparent pathway from requirements to continuous improvement.
            </p>
          </div>
        </FadeIn>

        {/* 7-Step Horizontal / Grid Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-20">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 50} direction="up">
              <div className={`portfolio-card ${item.theme} p-5 h-full flex flex-col justify-between group`}>
                <div>
                  <span
                    className="font-mono text-sm font-bold px-2 py-1 rounded-md border border-white/10 inline-block mb-3"
                    style={{ color: "var(--card-text)", background: "var(--card-pill)" }}
                  >
                    {item.step}
                  </span>
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

        {/* ── Section 7: Why Nexavora ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Built Around Your Requirements
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Why organizations choose Nexavora Technologies to engineer their systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyNexavora.map((item, index) => (
            <FadeIn key={item.title} delay={index * 60} direction="up">
              <div className={`portfolio-card ${item.theme} p-6 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                    <h4 className="text-lg font-display font-semibold text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
