import FadeIn from "./FadeIn";
import { Terminal, Database, Server, Cpu, Cloud, Check } from "lucide-react";

const stackGroups = [
  {
    icon: Terminal,
    category: "Frontend & Digital Interfaces",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    note: "Server-rendered, accessible, and fast-loading web applications with sub-second time to interactive.",
  },
  {
    icon: Server,
    category: "Backend & Distributed Systems",
    technologies: ["Node.js", "Express", "Python", "FastAPI", "RESTful APIs", "WebSockets"],
    note: "High-throughput microservices and modular monoliths designed for resilient uptime.",
  },
  {
    icon: Database,
    category: "Data Architecture & Storage",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma ORM"],
    note: "ACID-compliant transactional databases, NoSQL document stores, and low-latency cache layers.",
  },
  {
    icon: Cpu,
    category: "Machine Learning & AI Integration",
    technologies: ["Python", "PyTorch", "Scikit-learn", "LangChain", "OpenAI API", "Hugging Face"],
    note: "Private LLM workflows, automated OCR parsing, predictive modeling, and RAG architectures.",
  },
  {
    icon: Cloud,
    category: "Cloud, Infrastructure & DevOps",
    technologies: ["Docker", "Linux", "GitHub Actions", "AWS", "Cloudflare", "Nginx"],
    note: "Containerized reproducible builds, automated CI/CD deployment pipelines, and global SSL caching.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Architecture & Tech Stack</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Open ecosystems. Zero proprietary dependencies.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              We select battle-tested, active open-source platforms with global support so your engineering teams retain full autonomy over your codebase.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={index * 60} direction="up">
                <div className="mnc-card rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
                  <div className="flex items-start sm:items-center gap-4 lg:w-1/3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-display font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-cyan)] transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-[var(--color-ink-muted)] mt-0.5 line-clamp-1">
                        {group.note}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:w-2/3 lg:justify-end">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[var(--color-ink)] bg-[var(--color-page-alt)] border border-[var(--color-rule)] px-3 py-1 rounded-lg group-hover:border-[var(--color-rule-active)] transition-colors flex items-center gap-1.5"
                      >
                        <Check size={12} className="text-[var(--color-cyan)]" /> {tech}
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
