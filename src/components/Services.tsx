import FadeIn from "./FadeIn";

const services = [
  {
    title: "AI and Machine Learning",
    description:
      "Custom AI systems that automate processes and extract insights from your data, not off-the-shelf tools with a new label.",
    capabilities: [
      "Conversational AI and chatbots",
      "Document extraction and OCR",
      "Predictive analytics and forecasting",
      "RAG-based knowledge retrieval",
    ],
  },
  {
    title: "Custom Software and ERP",
    description:
      "Business operating systems tailored to your workflows: inventory, billing, attendance, approvals, and reporting in one place.",
    capabilities: [
      "Multi-branch ERP systems",
      "CRM and client management",
      "Workflow automation",
      "Role-based access and audit logging",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Fast, accessible web platforms built with modern frameworks, optimised for search engines and real users.",
    capabilities: [
      "Corporate and portfolio websites",
      "E-commerce and subscription platforms",
      "Progressive web applications",
      "Content management systems",
    ],
  },
  {
    title: "Mobile Applications",
    description:
      "Android and cross-platform mobile apps with offline capability, push notifications, and clean native interfaces.",
    capabilities: [
      "Native Android development",
      "Cross-platform with React Native",
      "Biometric authentication",
      "Real-time location features",
    ],
  },
  {
    title: "Cloud and DevOps",
    description:
      "Infrastructure that scales with your business: cloud deployment, automated pipelines, and monitoring that catches problems early.",
    capabilities: [
      "Cloud deployment and migration",
      "CI/CD pipeline configuration",
      "Database design and optimisation",
      "Container orchestration",
    ],
  },
  {
    title: "Design and Digital Marketing",
    description:
      "User interfaces people actually want to use, paired with search and content strategies that bring the right visitors to your site.",
    capabilities: [
      "UI/UX research and prototyping",
      "Design systems and component libraries",
      "Technical SEO and content strategy",
      "Google Ads and conversion optimisation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <FadeIn>
          <p className="section-label">Services</p>
          <h2 className="text-3xl md:text-4xl max-w-xl">What we build</h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 50}>
              <div
                className="py-8"
                style={{ borderTop: "1px solid var(--color-rule)" }}
              >
                <h3 className="text-lg mb-2">{service.title}</h3>
                <p
                  className="text-base mb-4 readable"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {service.description}
                </p>
                <ul className="pl-5 list-disc space-y-1">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="text-sm"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      {cap}
                    </li>
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
