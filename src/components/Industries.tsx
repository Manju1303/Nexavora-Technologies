import FadeIn from "./FadeIn";

const industries = [
  {
    name: "Healthcare",
    description:
      "Hospital web portals, appointment booking systems, NABH documentation tools, and clinical databases for healthcare institutions across Tamil Nadu.",
  },
  {
    name: "Education",
    description:
      "College administration portals, student recruitment systems, study-abroad guidance platforms, and faculty tracking systems.",
  },
  {
    name: "Enterprise ERP and SaaS",
    description:
      "Multi-branch inventory systems, employee attendance tracking, subscription billing platforms, and automated workflow tools.",
  },
  {
    name: "Startups",
    description:
      "Fast-turnaround minimum viable products, investor-ready web applications, mobile apps, and scalable cloud architectures.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              Sectors we serve
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Tailored software systems built around vertical domain requirements and regulatory compliance.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 50} direction="up">
              <div className="border-t border-[var(--color-rule)] pt-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
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
