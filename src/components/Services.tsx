import FadeIn from "./FadeIn";
import { Brain, Database, Globe, Smartphone, Cloud, Palette, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "AI and Machine Learning",
    theme: "theme-cyan",
    icon: Brain,
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
    theme: "theme-violet",
    icon: Database,
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
    theme: "theme-blue",
    icon: Globe,
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
    theme: "theme-pink",
    icon: Smartphone,
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
    theme: "theme-emerald",
    icon: Cloud,
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
    theme: "theme-amber",
    icon: Palette,
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
    <section id="services" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              What we build
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Custom software and AI systems designed for institutional scale, operational reliability, and long-term maintainability.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 70} direction="up">
                <div className={`portfolio-card ${service.theme} p-7 h-full flex flex-col justify-between group`}>
                  <div>
                    {/* Glowing Icon Header */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--card-pill)" }}>
                      <Icon className="w-6 h-6 transition-colors" style={{ color: "var(--card-text)" }} />
                    </div>

                    <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--card-text)" }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
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
