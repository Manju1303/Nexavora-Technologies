import FadeIn from "./FadeIn";
import { Cpu, ShieldCheck, FileCode, Users } from "lucide-react";

const values = [
  {
    title: "Direct Engineering Collaboration",
    theme: "theme-cyan",
    icon: Users,
    description:
      "You collaborate directly with the principal engineers and system architects building your platform. Zero intermediary account handlers, maximum technical clarity.",
  },
  {
    title: "Resilient Systems Architecture",
    theme: "theme-violet",
    icon: Cpu,
    description:
      "We build on battle-tested, high-concurrency technologies designed for decades of maintainability, sub-second latency, and seamless operational handoff.",
  },
  {
    title: "Security & Governance by Default",
    theme: "theme-emerald",
    icon: ShieldCheck,
    description:
      "From clinical healthcare records to enterprise ledgers, end-to-end encryption, strict role-based access controls, and immutable audit logs are built into the foundation.",
  },
  {
    title: "Absolute Code & IP Ownership",
    theme: "theme-pink",
    icon: FileCode,
    description:
      "You receive 100% ownership of your clean git repositories, Docker containers, schemas, and configurations. Zero vendor lock-in, total institutional data sovereignty.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Studio & Engineering Ethos
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              An elite software engineering and artificial intelligence studio founded in Tamil Nadu, architecting mission-critical digital infrastructure for institutions nationwide.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-[var(--color-rule)] items-stretch">
          <div className="lg:col-span-8 portfolio-card theme-blue p-8 sm:p-10 flex flex-col justify-center">
            <FadeIn direction="up">
              <h3 className="text-2xl font-display font-bold text-white mb-5">
                Technical Manifesto & Purpose
              </h3>
              <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Nexavora Technologies was founded to bridge the critical divide between cutting-edge computational engineering and everyday enterprise operations. Far too many hospitals, universities, and commercial enterprises are trapped with bloated legacy software that forces rigid workflows and creates fragile data silos. We build purpose-crafted, high-performance web platforms, autonomous AI pipelines, and distributed ERP systems that solve exact operational bottlenecks.
                </p>
                <p>
                  Our vision is to equip institutions across India with resilient digital systems that execute deterministically under heavy concurrent loads, protect sensitive institutional records with zero-trust architectures, and scale sustainably for the decades ahead.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 flex">
            <FadeIn delay={100} direction="up" className="w-full h-full flex">
              <div className="portfolio-card theme-cyan p-8 w-full flex flex-col justify-between group">
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10"
                    style={{ background: "var(--card-pill)" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "var(--card-text)" }} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Manjunath
                  </h4>
                  <p
                    className="text-xs font-mono font-semibold tracking-wider uppercase mt-1"
                    style={{ color: "var(--card-text)" }}
                  >
                    Founder & Principal Systems Architect
                  </p>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    Specializing in Distributed Systems, Generative AI Architectures, and Cloud Operations. Directs software architecture, systems engineering, and deployment delivery across all client ecosystems.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Tamil Nadu, India</span>
                  <span className="text-[var(--color-cyan)] font-semibold">Active Deployments</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Operating Values as Dynamic Cards */}
        <div className="pt-16">
          <FadeIn direction="up">
            <div className="mb-8">
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
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white/10"
                        style={{ background: "var(--card-pill)" }}
                      >
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
