import FadeIn from "./FadeIn";
import { Layout, Server, Database, Brain, Cloud } from "lucide-react";

const stackGroups = [
  {
    category: "Frontend & Real-Time Interfaces",
    theme: "theme-cyan",
    icon: Layout,
    technologies: "Next.js, React 19, TypeScript, Tailwind CSS, WebSockets",
    note: "Sub-second server-rendered architectures, zero-shift hydration, and real-time event telemetry.",
  },
  {
    category: "Distributed Backend & Systems",
    theme: "theme-blue",
    icon: Server,
    technologies: "Node.js, Express, Python, FastAPI, Go, REST, GraphQL",
    note: "High-throughput asynchronous runtimes engineered for deterministic low-latency processing.",
  },
  {
    category: "Relational & High-Speed Data",
    theme: "theme-violet",
    icon: Database,
    technologies: "PostgreSQL, MongoDB, Redis Cluster, ClickHouse, Prisma",
    note: "ACID-compliant transactional schemas, sub-millisecond memory caching, and immutable audit logs.",
  },
  {
    category: "Autonomous AI & Intelligence",
    theme: "theme-pink",
    icon: Brain,
    technologies: "Python, PyTorch, LangChain, LlamaIndex, OpenAI, Vector DBs",
    note: "Private retrieval-augmented generation (RAG), autonomous workflow agents, and multimodal extraction.",
  },
  {
    category: "Cloud Infrastructure & Zero-Trust",
    theme: "theme-emerald",
    icon: Cloud,
    technologies: "Docker, Kubernetes, AWS, Cloudflare Edge, GitHub Actions CI/CD",
    note: "Reproducible container topologies, zero-downtime rolling deploys, and edge security.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Technology Stack & Architecture
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We curate battle-tested, open-source technologies with vibrant global foundations. Every component is chosen for horizontal scalability, zero runtime lock-in, and uncompromising system reliability.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={index * 50} direction="up">
                <div className={`portfolio-card ${group.theme} p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group`}>
                  <div className="flex items-center gap-4 md:w-2/5">
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
                      <p className="text-xs text-slate-400 mt-0.5">
                        {group.note}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-3/5 flex flex-wrap gap-2 md:justify-end">
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
