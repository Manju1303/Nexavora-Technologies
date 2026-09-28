import FadeIn from "./FadeIn";
import { ShieldCheck, Terminal, Cpu, KeyRound } from "lucide-react";

const values = [
  {
    icon: Terminal,
    title: "Direct Engineering Access",
    description:
      "You engage directly with senior system architects who write and deploy the code. No middle account managers, no miscommunicated specifications.",
  },
  {
    icon: Cpu,
    title: "Practical Architecture",
    description:
      "We build on battle-tested frameworks rather than fragile trend-chasing. Systems are structured for low latency, predictable maintenance, and seamless team handoff.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance by Default",
    description:
      "Whether handling confidential clinical databases or enterprise ERP records, data isolation, role-based encryption, and auditability are non-negotiable fundamentals.",
  },
  {
    icon: KeyRound,
    title: "Zero Proprietary Lock-in",
    description:
      "Every contract includes complete intellectual property handoff: clean git repositories, Dockerized containers, and comprehensive architectural documentation.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Studio & Leadership</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Engineering-led software studio based in Tamil Nadu.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              Serving healthcare systems, universities, and commercial enterprises across India with high-accountability digital engineering.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7">
            <FadeIn direction="up">
              <div className="mnc-card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] block mb-2">
                    Our Mission
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[var(--color-ink)] mb-4">
                    Closing the gap between complex software and practical operational reality.
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed mb-4">
                    Many institutions are forced to compromise between bloated enterprise platforms that fail to match their everyday workflows and fragile disconnected spreadsheets. Nexavora Technologies builds custom, high-velocity digital infrastructure that resolves exact operational bottlenecks.
                  </p>
                  <p className="text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
                    Our focus is delivering scalable software systems that perform reliably under heavy concurrent traffic, protect sensitive institutional data, and operate without ongoing licensing bloat.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-rule)] flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--color-ink-subtle)]">
                  <span>HEADQUARTERS: KALLAKURICHI, TN</span>
                  <span>·</span>
                  <span>CLIENT REGIONS: PAN-INDIA</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={150} direction="up">
              <div className="mnc-card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)]">
                      Technical Leadership
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-emerald)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                      Active Engagement
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[var(--color-ink)]">
                    Manjunath
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-cyan)] mt-1">
                    Founder & Engineering Lead
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] mt-5 leading-relaxed">
                    Student entrepreneur specializing in Artificial Intelligence and Data Science. Manjunath directs technical architecture, data modeling, and production deployment across all client initiatives, maintaining direct technical accountability on every engagement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-page-alt)] border border-[var(--color-rule)] text-xs text-[var(--color-ink-muted)] leading-relaxed">
                  <span className="font-semibold text-[var(--color-ink)] block mb-1">
                    Direct Partner Involvement
                  </span>
                  No outsourcing to third-party offshore contractors. Your architecture is planned, authored, and monitored by core studio engineering.
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Operating Values */}
        <div>
          <FadeIn direction="up">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] block mb-1">
                Foundational Tenets
              </span>
              <h3 className="text-2xl font-display font-semibold text-[var(--color-ink)]">
                Operating principles that guide our work
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 80} direction="up">
                  <div className="mnc-card rounded-2xl p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 mb-4">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-base font-display font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-cyan)] transition-colors">
                        {v.title}
                      </h4>
                      <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
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
