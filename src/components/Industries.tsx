import FadeIn from "./FadeIn";
import { HeartPulse, GraduationCap, Building2, Rocket } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    theme: "theme-emerald",
    icon: HeartPulse,
    tag: "Clinical & NABH",
    description:
      "Hospital web portals, appointment booking systems, NABH documentation tools, and clinical databases for healthcare institutions across Tamil Nadu.",
  },
  {
    name: "Education",
    theme: "theme-violet",
    icon: GraduationCap,
    tag: "Higher Ed & Portals",
    description:
      "College administration portals, student recruitment systems, study-abroad guidance platforms, and faculty tracking systems.",
  },
  {
    name: "Enterprise ERP & SaaS",
    theme: "theme-cyan",
    icon: Building2,
    tag: "Operations & Flow",
    description:
      "Multi-branch inventory systems, employee attendance tracking, subscription billing platforms, and automated workflow tools.",
  },
  {
    name: "Startups & Scaleups",
    theme: "theme-pink",
    icon: Rocket,
    tag: "Rapid MVP & Scale",
    description:
      "Fast-turnaround minimum viable products, investor-ready web applications, mobile apps, and scalable cloud architectures.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">Target Domains</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Sectors we serve
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Tailored software systems built around vertical domain requirements and regulatory compliance.
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

                    <h3 className="text-2xl font-display font-semibold text-white mb-3">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {ind.description}
                    </p>
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
