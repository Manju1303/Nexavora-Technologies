import FadeIn from "./FadeIn";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Senior Full-Stack Systems Engineer",
    theme: "theme-cyan",
    department: "Distributed Engineering",
    location: "Kallakurichi, Tamil Nadu / Hybrid",
    type: "Full-Time",
    emailSubject: "Application: Senior Full-Stack Systems Engineer",
    summary:
      "Architect high-concurrency enterprise web portals, real-time WebSocket pipelines, and distributed PostgreSQL data models using Next.js, Node.js, and Python.",
  },
  {
    title: "Applied AI & Machine Learning Engineer",
    theme: "theme-pink",
    department: "AI & Intelligence Systems",
    location: "Remote / Hybrid",
    type: "Full-Time",
    emailSubject: "Application: Applied AI & Machine Learning Engineer",
    summary:
      "Design private retrieval-augmented generation (RAG) engines, deterministic workflow agents, and multimodal document processing pipelines using PyTorch and LangChain.",
  },
  {
    title: "Frontend Engineering Intern",
    theme: "theme-violet",
    department: "Interface Engineering",
    location: "Kallakurichi / Remote",
    type: "Internship (6 Months)",
    emailSubject: "Application: Frontend Engineering Intern",
    summary:
      "Craft fluid, accessible, high-performance UI components with Next.js, TypeScript, Tailwind CSS, and modern interactive animation systems.",
  },
  {
    title: "Product UI/UX Design Lead",
    theme: "theme-amber",
    department: "Product Design",
    location: "Remote / Hybrid",
    type: "Full-Time / Contract",
    emailSubject: "Application: Product UI/UX Design Lead",
    summary:
      "Lead user research, design token architectures, ergonomic clinical and educational workflows, and interactive design systems in Figma.",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Careers & Engineering Talent
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We invite ambitious systems engineers, AI practitioners, and interface designers to build mission-critical digital infrastructure with uncompromising technical standards.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <FadeIn key={job.title} delay={i * 80} direction="up">
              <div className={`portfolio-card ${job.theme} p-7 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" style={{ color: "var(--card-text)" }} />
                      {job.department}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-white/10"
                      style={{ color: "var(--card-text)", background: "var(--card-pill)" }}
                    >
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {job.summary}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                  <a
                    href={`mailto:careers@nexavora.com?subject=${encodeURIComponent(
                      job.emailSubject
                    )}&body=${encodeURIComponent(
                      "Hi Nexavora Team,\n\nI am writing to apply for the position of " +
                        job.title +
                        ". Please find my resume and portfolio attached.\n\nName:\nPhone:\nLinkedIn / GitHub:\n"
                    )}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "var(--card-text)" }}
                  >
                    <span>Submit Application</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
