import FadeIn from "./FadeIn";
import { ArrowUpRight, Lock, ShieldCheck, BookOpen, Utensils, Users, Layers } from "lucide-react";

const projects = [
  {
    title: "HealthGuard AI",
    subtitle: "NABH Pre-Entry Compliance Platform",
    theme: "theme-cyan",
    icon: ShieldCheck,
    description:
      "A digital platform designed to help healthcare organizations assess their readiness for NABH pre-entry requirements. The system organizes compliance requirements, checklists, assessments, scoring, and gap identification into a centralized workflow.",
    stack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Supabase"],
    link: null,
  },
  {
    title: "Scriptara",
    subtitle: "Research Publication Management Platform",
    theme: "theme-violet",
    icon: BookOpen,
    description:
      "A research management ERP designed to organize publication-related workflows and provide a centralized platform for managing research activities and information.",
    stack: ["Modern Web Architecture", "Database Systems", "API Integration"],
    link: null,
  },
  {
    title: "JKKM Mess ERP",
    subtitle: "Campus Mess Management Platform",
    theme: "theme-amber",
    icon: Utensils,
    description:
      "A digital management system designed to simplify campus mess operations through attendance management, meal planning, inventory tracking, complaints, reporting, and operational dashboards.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    link: null,
  },
  {
    title: "StepCount",
    subtitle: "Workforce Attendance & Monitoring Platform",
    theme: "theme-emerald",
    icon: Users,
    description:
      "A digital attendance and workforce monitoring system designed to reduce manual attendance processes and provide administrators with centralized operational information.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL"],
    link: "https://stepcount-eight.vercel.app/",
  },
];

const otherSolutions = [
  "AI assistants",
  "Computer vision",
  "OCR",
  "RAG applications",
  "Business automation",
  "Management dashboards",
  "Custom web platforms",
];

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 5: Featured Projects ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Built for Real-World Problems
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our projects focus on practical applications of software, AI, automation, and digital systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={i * 80} direction="up">
                <article className={`portfolio-card ${project.theme} p-8 h-full flex flex-col justify-between group`}>
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--card-pill)" }}
                      >
                        <Icon className="w-6 h-6 transition-colors" style={{ color: "var(--card-text)" }} />
                      </div>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10 hover:border-white/30 transition-all duration-200"
                          style={{ background: "var(--card-pill)", color: "var(--card-text)" }}
                        >
                          View Project <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-slate-400 bg-white/5 border border-white/5">
                          <Lock size={11} /> Enterprise Private
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono font-medium tracking-wide uppercase mb-4" style={{ color: "var(--card-text)" }}>
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Technology
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-white/5 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Other Solutions Card */}
        <FadeIn delay={200} direction="up">
          <div className="mt-8 portfolio-card theme-pink p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                  style={{ background: "var(--card-pill)" }}
                >
                  <Layers className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                </div>
                <h4 className="text-xl font-display font-bold text-white">
                  Other Solutions
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We also develop experimental and production-oriented systems involving:
              </p>
              <div className="flex flex-wrap gap-2">
                {otherSolutions.map((sol) => (
                  <span
                    key={sol}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium text-slate-200 border border-white/10"
                    style={{ background: "var(--card-pill)" }}
                  >
                    {sol}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-cyan)]" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
