import FadeIn from "./FadeIn";

const values = [
  {
    title: "Direct Engineering",
    description: "You speak and plan directly with the engineers building your systems. No account managers.",
  },
  {
    title: "Practical Architecture",
    description: "We choose battle-tested technologies designed for predictable operations and easy handoff.",
  },
  {
    title: "Security by Default",
    description: "Whether managing healthcare records or financial flows, data protection and audit logging are standard.",
  },
  {
    title: "Full Code Ownership",
    description: "Clean repositories, comprehensive documentation, and direct code ownership with zero proprietary lock-in.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              About Nexavora
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              An engineering-led software studio founded in Kallakurichi, Tamil Nadu, developing custom digital infrastructure for businesses, hospitals, and educational institutions across India.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-rule)]">
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <FadeIn direction="up">
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Mission & Approach
              </h3>
              <p>
                Nexavora Technologies was founded to bridge the gap between complex software engineering and practical business operations. Many organizations struggle with bloated enterprise software that fails to match their operational reality, or fragmented tools that introduce data silos. We build focused, bespoke web platforms, AI tools, and enterprise management systems that solve exact bottlenecks.
              </p>
              <p className="pt-2">
                Our vision is to empower institutions across healthcare, education, and mid-market commerce with high-reliability digital systems that perform reliably under load, protect sensitive institutional records, and scale sustainably.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <FadeIn delay={100} direction="up">
              <div className="border border-[var(--color-rule)] p-6 bg-[var(--color-page-alt)] rounded-2xl">
                <h4 className="text-lg font-display font-semibold text-white">
                  Manjunath
                </h4>
                <p className="text-xs font-mono text-[var(--color-cyan)] mt-0.5">
                  Founder & Engineering Lead
                </p>
                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  Student entrepreneur specializing in Artificial Intelligence and Data Science. Leads architecture and engineering execution across all client deployments from Tamil Nadu.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Operating Values as a Simple Clean List */}
        <div className="pt-16">
          <FadeIn direction="up">
            <h3 className="text-xl font-display font-semibold text-white mb-8">
              Operating Principles
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 60} direction="up">
                <div className="border-t border-[var(--color-rule)] pt-4">
                  <h4 className="text-sm font-display font-semibold text-white mb-1.5">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
