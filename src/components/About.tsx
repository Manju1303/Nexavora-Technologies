import FadeIn from "./FadeIn";
import { Cpu, ShieldCheck, FileCode, Users } from "lucide-react";

const values = [
  {
    title: "Direct Engineering",
    theme: "theme-cyan",
    icon: Users,
    description: "You speak and plan directly with the engineers building your systems. No account managers.",
  },
  {
    title: "Practical Architecture",
    theme: "theme-violet",
    icon: Cpu,
    description: "We choose battle-tested technologies designed for predictable operations and easy handoff.",
  },
  {
    title: "Security by Default",
    theme: "theme-emerald",
    icon: ShieldCheck,
    description: "Whether managing healthcare records or financial flows, data protection and audit logging are standard.",
  },
  {
    title: "Full Code Ownership",
    theme: "theme-pink",
    icon: FileCode,
    description: "Clean repositories, comprehensive documentation, and direct code ownership with zero proprietary lock-in.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">Studio & Leadership</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              About Nexavora
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              An engineering-led software studio founded in Kallakurichi, Tamil Nadu, developing custom digital infrastructure for businesses, hospitals, and educational institutions across India.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-[var(--color-rule)] items-stretch">
          <div className="lg:col-span-8 portfolio-card theme-blue p-8 flex flex-col justify-center">
            <FadeIn direction="up">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Mission & Technical Ethos
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Nexavora Technologies was founded to bridge the gap between complex software engineering and practical business operations. Many organizations struggle with bloated enterprise software that fails to match their operational reality, or fragmented tools that introduce data silos. We build focused, bespoke web platforms, AI tools, and enterprise management systems that solve exact bottlenecks.
                </p>
                <p>
                  Our vision is to empower institutions across healthcare, education, and mid-market commerce with high-reliability digital systems that perform reliably under load, protect sensitive institutional records, and scale sustainably.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 flex">
            <FadeIn delay={100} direction="up" className="w-full h-full flex">
              <div className="portfolio-card theme-cyan p-8 w-full flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10" style={{ background: "var(--card-pill)" }}>
                    <Users className="w-6 h-6" style={{ color: "var(--card-text)" }} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Manjunath
                  </h4>
                  <p className="text-xs font-mono font-semibold tracking-wider uppercase mt-1" style={{ color: "var(--card-text)" }}>
                    Founder & Engineering Lead
                  </p>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    Specializing in Artificial Intelligence, Cloud Infrastructure, and Data Systems. Leads architecture, systems design, and engineering delivery across all client deployments from Tamil Nadu.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Tamil Nadu, India</span>
                  <span className="text-cyan-400 font-semibold">Active Studio</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Operating Values as Dynamic Cards */}
        <div className="pt-16">
          <FadeIn direction="up">
            <div className="mb-8">
              <span className="eyebrow">Core Standards</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Operating Principles
              </h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 60} direction="up">
                  <div className={`portfolio-card ${v.theme} p-6 h-full flex flex-col justify-between group`}>
                    <div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white/10" style={{ background: "var(--card-pill)" }}>
                        <Icon className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                      </div>
                      <h4 className="text-base font-display font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
