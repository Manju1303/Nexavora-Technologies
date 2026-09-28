import FadeIn from "./FadeIn";

const stackGroups = [
  {
    category: "Frontend & Interfaces",
    technologies: "React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3",
    note: "Server-rendered, accessible, and fast-loading web applications.",
  },
  {
    category: "Backend & Systems",
    technologies: "Node.js, Express, Python, FastAPI, REST APIs, WebSockets",
    note: "Robust microservices and monolithic architectures built for high uptime.",
  },
  {
    category: "Data & Storage",
    technologies: "PostgreSQL, MongoDB, Redis, Firebase",
    note: "ACID-compliant relational models, document stores, and low-latency cache layers.",
  },
  {
    category: "Machine Learning & AI",
    technologies: "Python, PyTorch, Scikit-learn, LangChain, OpenAI API",
    note: "Workflow automation, LLM integration, OCR parsing, and private knowledge retrieval.",
  },
  {
    category: "Cloud & Deployment",
    technologies: "Docker, Linux, GitHub Actions, AWS, Cloudflare, Nginx",
    note: "Reproducible CI/CD pipelines, containerized workloads, and SSL security.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              Approach & Technology
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We select mature, supported tools with open ecosystems. Every tool is chosen because it solves your problem reliably and leaves you in full control of your codebase.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-[var(--color-rule)]">
          {stackGroups.map((group, index) => (
            <FadeIn key={group.category} delay={index * 50} direction="up">
              <div className="py-6 border-b border-[var(--color-rule)] grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-4">
                  <h3 className="text-base font-display font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="md:col-span-5 font-mono text-sm text-[var(--color-cyan)]">
                  {group.technologies}
                </div>
                <div className="md:col-span-3 text-xs text-slate-400">
                  {group.note}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
