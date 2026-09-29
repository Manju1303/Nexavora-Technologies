import FadeIn from "./FadeIn";
import { Layout, Server, Database, Brain, Cloud } from "lucide-react";

const stackGroups = [
  {
    category: "Frontend & Interfaces",
    theme: "theme-cyan",
    icon: Layout,
    technologies: "React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3",
    note: "Server-rendered, accessible, and fast-loading web applications.",
  },
  {
    category: "Backend & Systems",
    theme: "theme-blue",
    icon: Server,
    technologies: "Node.js, Express, Python, FastAPI, REST APIs, WebSockets",
    note: "Robust microservices and monolithic architectures built for high uptime.",
  },
  {
    category: "Data & Storage",
    theme: "theme-violet",
    icon: Database,
    technologies: "PostgreSQL, MongoDB, Redis, Firebase",
    note: "ACID-compliant relational models, document stores, and low-latency cache layers.",
  },
  {
    category: "Machine Learning & AI",
    theme: "theme-pink",
    icon: Brain,
    technologies: "Python, PyTorch, Scikit-learn, LangChain, OpenAI API",
    note: "Workflow automation, LLM integration, OCR parsing, and private knowledge retrieval.",
  },
  {
    category: "Cloud & Deployment",
    theme: "theme-emerald",
    icon: Cloud,
    technologies: "Docker, Linux, GitHub Actions, AWS, Cloudflare, Nginx",
    note: "Reproducible CI/CD pipelines, containerized workloads, and SSL security.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Approach & Technology
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We select battle-tested tools with vibrant ecosystems. Every piece of tech is chosen because it solves your problem reliably and leaves you with complete code ownership.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={index * 50} direction="up">
                <div className={`portfolio-card ${group.theme} p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group`}>
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10" style={{ background: "var(--card-pill)" }}>
                      <Icon className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold text-white group-hover:text-white transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {group.note}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3 flex flex-wrap gap-2 md:justify-end">
                    {group.technologies.split(", ").map((tech) => (
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
      </div>
    </section>
  );
}
