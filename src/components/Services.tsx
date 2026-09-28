import FadeIn from "./FadeIn";

const services = [
  {
    title: "AI and Machine Learning",
    description:
      "Custom AI systems that automate operations and extract insights from your data, not off-the-shelf tools with a new label.",
    capabilities: [
      "Conversational AI & workflow agents",
      "Document extraction, OCR & parsing",
      "Predictive analytics & forecasting",
      "Private RAG knowledge retrieval",
    ],
  },
  {
    title: "Custom Software and ERP",
    description:
      "Business operating systems tailored to your workflows: inventory, billing, attendance, approvals, and reporting in one place.",
    capabilities: [
      "Multi-branch ERP systems",
      "Client portals & approval flows",
      "Role-based access & audit logs",
      "High-concurrency data models",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Fast, accessible web platforms built with modern frameworks, optimised for search engines, security, and real users.",
    capabilities: [
      "Institutional & healthcare portals",
      "Multi-tenant SaaS architectures",
      "Progressive Web Applications",
      "Headless content management",
    ],
  },
  {
    title: "Mobile Applications",
    description:
      "Android and cross-platform mobile apps with offline capability, push notifications, and clean native interfaces.",
    capabilities: [
      "Native Android development",
      "Cross-platform with React Native",
      "Biometric security & hardware sync",
      "Real-time geolocation & tracking",
    ],
  },
  {
    title: "Cloud and DevOps",
    description:
      "Infrastructure that scales with your business: cloud deployment, automated pipelines, and monitoring that catches issues early.",
    capabilities: [
      "Containerized Docker deployments",
      "Automated CI/CD release pipelines",
      "Database tuning & automated backups",
      "Cloud monitoring & error alerts",
    ],
  },
  {
    title: "Design and Digital Marketing",
    description:
      "User interfaces people actually want to use, paired with search and content strategies that bring the right visitors to your site.",
    capabilities: [
      "UI/UX research & interactive prototypes",
      "Design systems & component libraries",
      "Technical SEO & Core Web Vitals",
      "Conversion funnels & performance audits",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              What we build
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Custom software and AI systems designed for institutional scale, operational reliability, and long-term maintainability.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 60} direction="up">
              <div className="border-t border-[var(--color-rule)] pt-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-400">
                  {service.capabilities.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
