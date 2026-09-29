import FadeIn from "./FadeIn";
import { Brain, Database, Globe, Smartphone, Cloud, Palette } from "lucide-react";

const services = [
  {
    title: "Autonomous AI & Intelligence Systems",
    theme: "theme-cyan",
    icon: Brain,
    description:
      "Production-grade generative AI architectures, private retrieval-augmented generation (RAG), and deterministic workflow agents tailored to your institutional data.",
  },
  {
    title: "Distributed Enterprise ERP & Operations",
    theme: "theme-violet",
    icon: Database,
    description:
      "High-throughput enterprise operating cores unifying multi-branch billing, inventory supply chains, compliance tracking, and administrative governance.",
  },
  {
    title: "High-Availability Web Platforms",
    theme: "theme-blue",
    icon: Globe,
    description:
      "Sub-second, accessible web architectures engineered with Next.js and distributed edge caching, hardened for enterprise security and peak concurrent demand.",
  },
  {
    title: "Next-Gen Mobile Applications",
    theme: "theme-pink",
    icon: Smartphone,
    description:
      "Native Android and cross-platform mobile experiences featuring encrypted local caching, biometric security, and low-latency cloud synchronization.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    theme: "theme-emerald",
    icon: Cloud,
    description:
      "Resilient, auto-scaling cloud deployments with automated zero-downtime CI/CD release pipelines and 24/7 telemetry monitoring to safeguard system uptime.",
  },
  {
    title: "Strategic Design & Digital Growth",
    theme: "theme-amber",
    icon: Palette,
    description:
      "Human-centered user experience design paired with technical search engine optimization and Core Web Vitals engineering to establish market authority.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Engineering Capabilities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Bespoke software architectures, autonomous AI pipelines, and distributed digital infrastructure designed for operational resilience, absolute data sovereignty, and long-term maintainability.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 70} direction="up">
                <div className={`portfolio-card ${service.theme} p-7 sm:p-8 h-full flex flex-col justify-start group`}>
                  {/* Glowing Icon Header */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--card-pill)" }}
                  >
                    <Icon className="w-6 h-6 transition-colors" style={{ color: "var(--card-text)" }} />
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
