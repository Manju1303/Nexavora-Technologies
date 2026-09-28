import FadeIn from "./FadeIn";
import { 
  Cpu, 
  Layers, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    code: "SVC-01",
    title: "AI and Machine Learning",
    description:
      "Custom AI systems that automate processes and extract insights from your data, not off-the-shelf tools with a new label.",
    capabilities: [
      "Conversational AI & custom workflow agents",
      "Document extraction, OCR & unstructured parsing",
      "Predictive analytics & operational forecasting",
      "RAG-based private knowledge retrieval",
    ],
  },
  {
    icon: Layers,
    code: "SVC-02",
    title: "Custom Software and ERP",
    description:
      "Business operating systems tailored to your workflows: inventory, billing, attendance, approvals, and reporting in one place.",
    capabilities: [
      "Multi-branch ERP & resource planning",
      "Client portals & automated workflows",
      "Role-based access control & audit trails",
      "High-concurrency database architecture",
    ],
  },
  {
    icon: Globe,
    code: "SVC-03",
    title: "Web Applications",
    description:
      "Fast, accessible web platforms built with modern frameworks, optimised for search engines, high security, and real users.",
    capabilities: [
      "Corporate & institutional public portals",
      "SaaS product architectures with multi-tenancy",
      "Progressive Web Applications (PWAs)",
      "Headless CMS & content delivery networks",
    ],
  },
  {
    icon: Smartphone,
    code: "SVC-04",
    title: "Mobile Applications",
    description:
      "Android and cross-platform mobile apps with offline capability, push notifications, and clean native interfaces.",
    capabilities: [
      "Native Android development with Kotlin",
      "Cross-platform applications via React Native",
      "Biometric security & hardware integrations",
      "Real-time geolocation & sensor tracking",
    ],
  },
  {
    icon: Cloud,
    code: "SVC-05",
    title: "Cloud and DevOps",
    description:
      "Infrastructure that scales with your business: cloud deployment, automated pipelines, and monitoring that catches problems early.",
    capabilities: [
      "Cloud architecture & containerized deployment",
      "Automated CI/CD pipelines & zero-downtime releases",
      "Database tuning, replication & backups",
      "Observability, alerts & error tracking",
    ],
  },
  {
    icon: Palette,
    code: "SVC-06",
    title: "Design and Digital Marketing",
    description:
      "User interfaces people actually want to use, paired with search and content strategies that bring the right visitors to your site.",
    capabilities: [
      "User research, wireframing & interactive prototypes",
      "Comprehensive design systems & token libraries",
      "Technical SEO audits & Core Web Vitals",
      "Conversion rate optimization & growth analytics",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Practices & Solutions</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Engineered capabilities built for institutional scale.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              We replace fragmented vendor tools with cohesive, custom-built systems designed for your specific compliance and workflow requirements.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 70} direction="up">
                <div className="mnc-card rounded-2xl p-7 flex flex-col justify-between h-full group">
                  <div>
                    {/* Top bar with icon & code */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs text-[var(--color-ink-subtle)] font-medium">
                        {service.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[var(--color-cyan)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <div className="pt-5 border-t border-[var(--color-rule)] space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2.5 text-xs text-[var(--color-ink-muted)]">
                          <CheckCircle2 size={14} className="text-[var(--color-cyan)] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] group-hover:text-[var(--color-cyan)] transition-colors">
                      <span>Explore Practice</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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
