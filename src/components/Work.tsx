import FadeIn from "./FadeIn";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Arockia Medical Centre",
    category: "Healthcare Infrastructure",
    problem:
      "A multi-speciality hospital in Tamil Nadu needed a public-facing portal to manage patient appointments, list clinical departments, and present NABH accreditation standards clearly.",
    outcome:
      "Delivered a responsive web portal with real-time appointment booking, doctor rosters, and emergency direct-connect integration.",
    stack: ["React", "Next.js", "Tailwind CSS", "REST API"],
    link: "https://arockiamedicalcentre.in/",
    previewType: "hospital",
  },
  {
    title: "Insta Educational Guidance Platform",
    category: "Higher Education & Admissions",
    problem:
      "An educational counselling organisation required a high-capacity platform to list universities, capture student leads, and support study-abroad inquiries.",
    outcome:
      "Built a secure lead-capture engine with multi-criteria college filtering, enquiry routing, and counselling content management.",
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    link: null,
    previewType: "education",
  },
  {
    title: "STEPCOUNT Staff Monitoring System",
    category: "Enterprise Workforce Automation",
    problem:
      "A collegiate administration needed to digitise faculty and staff attendance tracking with verifiable check-ins and executive reporting.",
    outcome:
      "Engineered an employee tracking portal with real-time biometric logs, visual analytics, shift management, and administrative audit trails.",
    stack: ["FastAPI", "React", "PostgreSQL", "Docker"],
    link: "https://stepcount-eight.vercel.app/",
    previewType: "workforce",
  },
  {
    title: "NABH Documentation & Compliance System",
    category: "Clinical Regulatory Compliance",
    problem:
      "A hospital preparing for NABH accreditation required a centralized digital system to manage compliance manuals, audits, and department checklists.",
    outcome:
      "Created a secure compliance platform with automated version control, audit-readiness tracking, and departmental sign-off workflows.",
    stack: ["React", "PostgreSQL", "Docker", "Linux"],
    link: null,
    previewType: "compliance",
  },
];

export default function Work() {
  return (
    <section id="work" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Production Deployments</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Case studies in digital transformation.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              Real projects shipped to production for hospitals, academic institutions, and growing enterprises across India.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80} direction="up">
              <article className="mnc-card rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual Browser Mockup */}
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-xl overflow-hidden border border-[var(--color-rule)] bg-[var(--color-page-alt)] shadow-2xl">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-rule)] bg-[var(--color-page)]/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="font-mono text-[11px] text-[var(--color-ink-subtle)] bg-[var(--color-page-alt)] px-3 py-0.5 rounded border border-[var(--color-rule)] max-w-[220px] truncate">
                        {project.link ? project.link.replace("https://", "") : `portal.nexavora.internal/${project.previewType}`}
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Architectural Preview Graphic */}
                    <div className="aspect-[16/10] p-6 flex flex-col justify-between bg-gradient-to-br from-[var(--color-page-alt)] to-[var(--color-page)] relative overflow-hidden">
                      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[var(--color-accent)]/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between z-10">
                        <span className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--color-cyan)] bg-[var(--color-cyan)]/10 px-2.5 py-1 rounded-full border border-[var(--color-cyan)]/20">
                          {project.category}
                        </span>
                        {project.link && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--color-emerald)]">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                            Live in Production
                          </span>
                        )}
                      </div>

                      <div className="z-10 my-auto">
                        <h4 className="text-xl sm:text-2xl font-display font-semibold text-[var(--color-ink)] mb-2">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] line-clamp-2">
                          {project.outcome}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 z-10 pt-2 border-t border-[var(--color-rule)]">
                        {project.stack.map((tech) => (
                          <span key={tech} className="font-mono text-[10px] text-[var(--color-ink-muted)] bg-[var(--color-rule)] px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-6 space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-cyan)]">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[var(--color-ink)]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <div className="p-4 rounded-xl bg-[var(--color-page-alt)] border border-[var(--color-rule)]">
                      <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--color-ink-subtle)] mb-1">
                        Operational Challenge
                      </strong>
                      <p className="text-[var(--color-ink-muted)]">{project.problem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[var(--color-page-alt)] border border-[var(--color-rule)]">
                      <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--color-emerald)] mb-1">
                        Engineering Outcome
                      </strong>
                      <p className="text-[var(--color-ink)]">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono text-xs text-[var(--color-cyan)] bg-[var(--color-accent)]/10 px-2.5 py-1 rounded-md border border-[var(--color-accent)]/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-xs gap-1.5 py-2 px-4"
                      >
                        Visit Live Deployment <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[var(--color-ink-subtle)] flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-[var(--color-cyan)]" /> Private Institutional Deployment
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* JKKMCT Mess ERP Highlight */}
        <FadeIn delay={300} direction="up">
          <div className="mt-12 p-6 sm:p-8 rounded-2xl mnc-card border border-[var(--color-rule)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)]">
                Institutional Campus Systems
              </span>
              <h4 className="text-lg sm:text-xl font-display font-semibold text-[var(--color-ink)]">
                Hostel Mess ERP for JKKMCT
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] max-w-2xl leading-relaxed">
                Automated student mess billing, attendance reconciliation, and kitchen inventory management for multi-campus student hostels.
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn-secondary text-xs whitespace-nowrap gap-1.5"
            >
              Request ERP Architecture Deck <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
