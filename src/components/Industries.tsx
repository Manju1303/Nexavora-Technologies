import FadeIn from "./FadeIn";
import { HeartPulse, GraduationCap, Building2, Rocket, CheckCircle2 } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    theme: "theme-emerald",
    icon: HeartPulse,
    tag: "Clinical & Operations",
    description:
      "Digital systems designed around healthcare workflows, compliance processes, administrative operations, and information management.",
    solutions: [
      "Hospital management platforms",
      "Compliance systems",
      "Appointment workflows",
      "Department management",
      "Audit and checklist systems",
      "Healthcare dashboards",
    ],
  },
  {
    name: "Education",
    theme: "theme-violet",
    icon: GraduationCap,
    tag: "Colleges & Institutions",
    description:
      "Technology for colleges, educational organizations, and institutions looking to simplify administrative and operational processes.",
    solutions: [
      "Student management systems",
      "Campus ERP",
      "Attendance systems",
      "Hostel and mess management",
      "Admission workflows",
      "Institutional dashboards",
    ],
  },
  {
    name: "Businesses",
    theme: "theme-cyan",
    icon: Building2,
    tag: "Enterprise & Operations",
    description:
      "Custom technology that helps businesses manage operations, customers, data, and internal workflows.",
    solutions: [
      "Business management systems",
      "ERP platforms",
      "Inventory systems",
      "Customer portals",
      "Reporting dashboards",
      "Workflow automation",
    ],
  },
  {
    name: "Startups",
    theme: "theme-pink",
    icon: Rocket,
    tag: "Ideas to Products",
    description:
      "Technology support for startups turning ideas into working products.",
    solutions: [
      "MVP development",
      "SaaS platforms",
      "AI products",
      "Web applications",
      "API development",
      "Product prototypes",
      "Automation systems",
    ],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 6: Industries ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Technology for Different Operational Environments
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our solutions can be adapted to organizations with different workflows, users, and operational requirements.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={ind.name} delay={i * 70} direction="up">
                <div className={`portfolio-card ${ind.theme} p-8 h-full flex flex-col justify-between group`}>
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--card-pill)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--card-text)" }} />
                      </div>
                      <span
                        className="text-xs font-mono font-medium px-3 py-1 rounded-full border border-white/10"
                        style={{ color: "var(--card-text)", background: "var(--card-pill)" }}
                      >
                        {ind.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-white transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span
                      className="block text-xs font-mono uppercase tracking-wider font-semibold mb-3"
                      style={{ color: "var(--card-text)" }}
                    >
                      Solutions
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.solutions.map((sol) => (
                        <li key={sol} className="flex items-center gap-2 text-xs text-slate-300/90">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: "var(--card-text)" }}
                          />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
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
