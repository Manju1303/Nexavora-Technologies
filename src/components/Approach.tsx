import FadeIn from "./FadeIn";
import { Layout, Server, Database, Brain, Cloud, ShieldCheck } from "lucide-react";

const stackGroups = [
  {
    category: "Frontend",
    theme: "theme-cyan",
    icon: Layout,
    technologies: "Next.js · React · TypeScript · JavaScript · Tailwind CSS",
  },
  {
    category: "Backend",
    theme: "theme-blue",
    icon: Server,
    technologies: "Python · FastAPI · Node.js · NestJS · REST APIs",
  },
  {
    category: "Databases",
    theme: "theme-violet",
    icon: Database,
    technologies: "PostgreSQL · Prisma · Supabase · MongoDB · Vector Databases",
  },
  {
    category: "AI & Machine Learning",
    theme: "theme-pink",
    icon: Brain,
    technologies: "Python · LLMs · RAG · AI Agents · LangChain · Ollama · Computer Vision · OCR",
  },
  {
    category: "Infrastructure",
    theme: "theme-emerald",
    icon: Cloud,
    technologies: "Docker · Git · GitHub · Linux · Cloud Platforms · CI/CD",
  },
];

const approachPrinciples = [
  {
    title: "Understand Before Building",
    theme: "theme-cyan",
    description: "Good software starts with understanding the problem.",
  },
  {
    title: "Keep Systems Maintainable",
    theme: "theme-blue",
    description: "We aim for clean architectures that can be understood and improved over time.",
  },
  {
    title: "Protect Business Data",
    theme: "theme-violet",
    description:
      "Access control, authentication, secure data handling, and appropriate security practices are considered throughout development.",
  },
  {
    title: "Avoid Unnecessary Complexity",
    theme: "theme-pink",
    description: "Technology should solve problems—not create new ones.",
  },
  {
    title: "Build With Ownership in Mind",
    theme: "theme-emerald",
    description:
      "Where appropriate, clients receive access to their project code, documentation, and deployment resources according to the agreed engagement.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 9: Technology Stack ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Technologies We Work With
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our Technology Stack: We select modern tools tailored to project constraints rather than forcing a single rigid stack.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4 mb-8">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={index * 50} direction="up">
                <div className={`portfolio-card ${group.theme} p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group`}>
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                      style={{ background: "var(--card-pill)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold text-white group-hover:text-white transition-colors">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <div className="md:w-2/3 flex flex-wrap gap-2 md:justify-end">
                    {group.technologies.split(" · ").map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono font-medium text-slate-200 border border-white/10"
                        style={{ background: "var(--card-pill)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200} direction="up">
          <p className="text-xs sm:text-sm font-mono text-slate-400 italic mb-20">
            We choose technologies according to the project&apos;s requirements rather than forcing every project into the same technology stack.
          </p>
        </FadeIn>

        {/* ── Section 10: Our Approach ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Simple Principles. Strong Engineering.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Our engineering philosophy ensures reliable, maintainable systems that serve your long-term goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachPrinciples.map((item, index) => (
            <FadeIn key={item.title} delay={index * 60} direction="up">
              <div className={`portfolio-card ${item.theme} p-6 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                    <h4 className="text-base font-display font-semibold text-white group-hover:text-white transition-colors">
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
