import FadeIn from "./FadeIn";
import { HeartPulse, GraduationCap, Building2, Rocket } from "lucide-react";

const industries = [
  {
    name: "Healthcare & Life Sciences",
    theme: "theme-emerald",
    icon: HeartPulse,
    tag: "NABH & Clinical Workflows",
    description:
      "Architecting patient intake portals, emergency triage telemetry, electronic medical records, and automated NABH clinical audit compliance engines with zero-trust data governance.",
    focusAreas: [
      "Hospital Management Portals",
      "NABH Compliance & Audit Vaults",
      "OPD & Emergency Queue Telemetry",
    ],
  },
  {
    name: "Higher Education & Universities",
    theme: "theme-violet",
    icon: GraduationCap,
    tag: "Collegiate ERP & Portals",
    description:
      "Powering campus operations with end-to-end collegiate ERPs, high-concurrency admission pipelines, biometric faculty attendance telemetry, and multi-campus hostel logistics.",
    focusAreas: [
      "Student Information Systems",
      "Campus Operations & Mess ERP",
      "Automated Lead & Admission Routing",
    ],
  },
  {
    name: "Enterprise ERP & Commerce",
    theme: "theme-cyan",
    icon: Building2,
    tag: "Supply Chain & Operations",
    description:
      "Unifying multi-branch inventory logistics, real-time financial ledger auditing, automated billing, and high-concurrency event streaming engineered for 100,000+ daily operational transactions.",
    focusAreas: [
      "Multi-Branch Ledger Reconciliation",
      "Automated Tax & Billing Workflows",
      "Immutable Role-Based Governance",
    ],
  },
  {
    name: "High-Growth Startups & Tech",
    theme: "theme-pink",
    icon: Rocket,
    tag: "AI Architecture & Velocity",
    description:
      "Accelerating high-conviction ventures from zero to market leadership with production-hardened microservices, enterprise SaaS architectures, and autonomous AI pipelines ready for global scale.",
    focusAreas: [
      "Autonomous AI & Agent Workflows",
      "Production-Hardened Cloud SaaS",
      "Sub-Second Edge Infrastructure",
    ],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Industry Verticals & Strategic Domains
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Purpose-built software architectures, data pipelines, and regulatory-grade compliance cores engineered to meet the operational demands of critical institutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={ind.name} delay={i * 60} direction="up">
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
                    <ul className="space-y-1.5">
                      {ind.focusAreas.map((area) => (
                        <li key={area} className="text-xs font-mono text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--card-text)" }} />
                          <span>{area}</span>
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
