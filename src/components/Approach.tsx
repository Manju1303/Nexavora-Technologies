import FadeIn from "./FadeIn";
import { Layout, Server, Database, Brain, Cloud } from "lucide-react";

const stackCategories = [
  {
    category: "Frontend & Interfaces",
    theme: "theme-cyan",
    icon: Layout,
    focus: "Sub-Second Edge SSR",
    colSpan: "lg:col-span-2",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend & Systems",
    theme: "theme-blue",
    icon: Server,
    focus: "High-Throughput APIs",
    colSpan: "lg:col-span-2",
    technologies: [
      "Node.js",
      "Python",
      "FastAPI",
      "Express",
      "Go",
      "REST & GraphQL",
    ],
  },
  {
    category: "Data & Storage",
    theme: "theme-violet",
    icon: Database,
    focus: "ACID & Low-Latency Cache",
    colSpan: "lg:col-span-2",
    technologies: [
      "PostgreSQL",
      "Redis Cluster",
      "MongoDB",
      "Prisma ORM",
      "ClickHouse",
      "Supabase",
    ],
  },
  {
    category: "Applied AI & Intelligence",
    theme: "theme-pink",
    icon: Brain,
    focus: "Private RAG & Autonomous Agents",
    colSpan: "md:col-span-1 lg:col-span-3",
    technologies: [
      "PyTorch",
      "LangChain",
      "LlamaIndex",
      "Vector DBs",
      "OpenAI API",
      "Hugging Face",
      "Ollama",
    ],
  },
  {
    category: "Cloud & DevOps",
    theme: "theme-emerald",
    icon: Cloud,
    focus: "Zero-Downtime Infrastructure",
    colSpan: "md:col-span-2 lg:col-span-3",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Cloudflare Edge",
      "GitHub Actions CI/CD",
      "Linux / Nginx",
      "Zero-Trust SSL",
    ],
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
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Battle-tested frameworks, distributed databases, and cloud primitives engineered for speed, resilience, and complete intellectual property ownership.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid Matrix: 3 cards top, 2 cards bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {stackCategories.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={index * 60} direction="up" className={group.colSpan}>
                <div className={`portfolio-card ${group.theme} p-7 h-full flex flex-col justify-between group`}>
                  <div>
                    {/* Header: Icon, Category & Focus Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--card-pill)" }}
                      >
                        <Icon className="w-6 h-6 transition-colors" style={{ color: "var(--card-text)" }} />
                      </div>
                      <span
                        className="text-[11px] font-mono font-medium px-3 py-1 rounded-full border border-white/10 shrink-0"
                        style={{ color: "var(--card-text)", background: "var(--card-pill)" }}
                      >
                        {group.focus}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-white transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Interactive Tech Chips */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {group.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-[var(--color-cyan)]/50 hover:bg-white/10 hover:text-white transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Architectural Standards Bar */}
        <FadeIn delay={250} direction="up">
          <div className="mt-10 p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan)]" />
              Zero Vendor Lock-in
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
              100% Client Code Ownership
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
              End-to-End Encryption
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC4899] shadow-[0_0_8px_#EC4899]" />
              Automated CI/CD Workflows
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
