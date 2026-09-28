import FadeIn from "./FadeIn";

const industries = [
  {
    name: "Healthcare",
    description:
      "Hospital websites, appointment systems, NABH documentation tools, and clinical database management for medical institutions across Tamil Nadu.",
  },
  {
    name: "Education",
    description:
      "College administration portals, student lead management, study-abroad counselling platforms, and career guidance systems.",
  },
  {
    name: "Enterprise ERP and SaaS",
    description:
      "Multi-branch inventory systems, employee attendance tracking, subscription billing platforms, and automated workflow tools for growing businesses.",
  },
  {
    name: "Startups",
    description:
      "Rapid MVPs, investor-ready web applications, mobile apps, and serverless architectures for early-stage companies that need to move fast.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <FadeIn>
          <p className="section-label">Industries</p>
          <h2 className="text-3xl md:text-4xl max-w-xl">Sectors we serve</h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 50}>
              <div
                className="py-6"
                style={{ borderTop: "1px solid var(--color-rule)" }}
              >
                <h3 className="text-lg mb-2">{ind.name}</h3>
                <p
                  className="readable"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {ind.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
