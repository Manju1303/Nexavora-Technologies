import FadeIn from "./FadeIn";
import { ArrowUpRight, Lock, Activity, GraduationCap, Users, ShieldCheck, Utensils } from "lucide-react";

const projects = [
  {
    title: "Arockia Medical Centre",
    theme: "theme-cyan",
    icon: Activity,
    problem:
      "A multi-speciality hospital in Tamil Nadu needed a public-facing website to manage patient appointments, list clinical departments, and present NABH accreditation standards clearly.",
    outcome:
      "Delivered a responsive web portal with real-time appointment booking, department directories, and emergency contact integration.",
    stack: ["React", "Next.js", "Tailwind CSS", "REST API"],
    link: "https://arockiamedicalcentre.in/",
  },
  {
    title: "Insta Educational Guidance Platform",
    theme: "theme-violet",
    icon: GraduationCap,
    problem:
      "An educational counselling organisation required a high-capacity platform to list universities, capture student leads, and support study-abroad inquiries.",
    outcome:
      "Built a secure lead-capture engine with college directories, enquiry routing, and counselling content management.",
    stack: ["React", "Next.js", "Tailwind CSS", "Lead Engine"],
    link: null,
  },
  {
    title: "STEPCOUNT Staff Monitoring System",
    theme: "theme-emerald",
    icon: Users,
    problem:
      "A collegiate administration needed to digitise staff attendance tracking with verifiable check-ins and executive reporting.",
    outcome:
      "Engineered an employee tracking portal with real-time attendance logs, analytics, shift management, and administrative audit trails.",
    stack: ["FastAPI", "React", "PostgreSQL", "Analytics"],
    link: "https://stepcount-eight.vercel.app/",
  },
  {
    title: "NABH Documentation & Digital Support",
    theme: "theme-pink",
    icon: ShieldCheck,
    problem:
      "A hospital preparing for NABH accreditation required a centralized digital system to manage compliance manuals, audits, and department checklists.",
    outcome:
      "Created a compliance platform with automated version control, audit-readiness tracking, and departmental checklists.",
    stack: ["React", "PostgreSQL", "Docker", "Audit Logs"],
    link: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Real projects shipped to production for hospitals, academic institutions, and growing businesses across India.
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
                          Visit deployment <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-slate-400 bg-white/5 border border-white/5">
                          <Lock size={11} /> Institutional
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <strong className="text-slate-100 font-semibold block text-xs uppercase tracking-wider mb-1" style={{ color: "var(--card-text)" }}>Challenge</strong>
                        {project.problem}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <strong className="text-slate-100 font-semibold block text-xs uppercase tracking-wider mb-1 text-white">Solution & Outcome</strong>
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* JKKMCT Entry Glass Card */}
        <FadeIn delay={200} direction="up">
          <div className="mt-8 portfolio-card theme-amber p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10" style={{ background: "var(--card-pill)" }}>
                <Utensils className="w-5 h-5" style={{ color: "var(--card-text)" }} />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Enterprise Deployment: We also engineered the{" "}
                <strong className="text-white font-semibold">Hostel Mess ERP for JKKMCT</strong>, managing student mess billing, automated attendance reconciliation, and kitchen inventory across hostel campuses.
              </p>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20">
              Campus ERP
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
