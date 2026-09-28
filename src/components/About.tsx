import FadeIn from "./FadeIn";

const values = [
  {
    title: "Direct Engineering",
    description:
      "You speak and plan directly with the engineers building your systems. No account managers or lost requirements in translation.",
  },
  {
    title: "Practical Architecture",
    description:
      "We choose battle-tested, maintainable technologies over transient hype. Systems are designed for predictable operations and easy handoff.",
  },
  {
    title: "Security & Compliance from Day One",
    description:
      "Whether managing healthcare records or internal financial flows, data protection, audit logging, and access control are standard foundations.",
  },
  {
    title: "Transparent Long-Term Ownership",
    description:
      "Clean repositories, comprehensive documentation, and direct code ownership with no proprietary vendor lock-in.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-[var(--foreground)]">
              About Nexavora
            </h2>
            <p className="mt-4 text-base text-[var(--muted-foreground)] leading-relaxed">
              An engineering-led software studio founded in Kallakurichi, Tamil Nadu, developing custom digital infrastructure for businesses, hospitals, and educational institutions across India.
            </p>
          </div>
        </FadeIn>

        {/* Bio & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[var(--border)]">
          <div className="lg:col-span-8 space-y-6 text-base text-[var(--foreground)] leading-relaxed">
            <FadeIn>
              <h3 className="text-xl font-medium tracking-tight">Mission & Approach</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">
                Nexavora Technologies was founded to bridge the gap between complex software engineering and practical business operations. Many organizations struggle with bloated enterprise software that fails to match their operational reality, or fragmented tools that introduce data silos. We build focused, bespoke web platforms, AI tools, and enterprise management systems that solve exact bottlenecks.
              </p>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Our vision is to empower institutions across healthcare, education, and mid-market commerce with high-reliability digital systems that perform reliably under load, protect sensitive institutional records, and scale sustainably without recurring bloat.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <FadeIn delay={150}>
              <div className="border border-[var(--border)] p-6 bg-[var(--card-bg)]">
                <h4 className="text-base font-medium text-[var(--foreground)]">
                  Manjunath
                </h4>
                <p className="text-xs font-mono text-[var(--muted-foreground)] mt-0.5">
                  Founder & Engineering Lead
                </p>
                <p className="mt-4 text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Student entrepreneur specializing in Artificial Intelligence and Data Science. Leads architecture and engineering execution across all Nexavora client deployments from Tamil Nadu.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Values */}
        <div className="pt-16">
          <FadeIn>
            <h3 className="text-xl font-medium text-[var(--foreground)] mb-8">
              Operating Principles
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="border-t border-[var(--border)] pt-4">
                  <h4 className="text-sm font-medium text-[var(--foreground)] mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
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
