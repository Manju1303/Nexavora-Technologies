import FadeIn from "./FadeIn";
import { Bot, Code2, Database, Smartphone, Cloud, Palette, CheckCircle2 } from "lucide-react";

const services = [
  {
    num: "01",
    title: "AI & Automation",
    theme: "theme-cyan",
    icon: Bot,
    description:
      "We develop AI-powered systems that help organizations automate repetitive processes and work with their information more effectively.",
    label: "What we build",
    items: [
      "AI assistants and chatbots",
      "AI agents and workflow automation",
      "Retrieval-Augmented Generation (RAG)",
      "Knowledge-based AI systems",
      "Document intelligence",
      "OCR and information extraction",
      "Predictive analytics",
      "AI-powered business tools",
    ],
  },
  {
    num: "02",
    title: "Web & Software Development",
    theme: "theme-blue",
    icon: Code2,
    description:
      "We build responsive, secure, and scalable web applications for businesses, institutions, startups, and organizations.",
    label: "What we build",
    items: [
      "Business websites",
      "Web applications",
      "SaaS platforms",
      "Management portals",
      "Admin dashboards",
      "Customer portals",
      "API-driven applications",
      "Custom software solutions",
    ],
  },
  {
    num: "03",
    title: "ERP & Business Systems",
    theme: "theme-violet",
    icon: Database,
    description:
      "We create centralized platforms that help organizations manage their operational workflows from a single system.",
    label: "Solutions include",
    items: [
      "Business ERP systems",
      "Institution management systems",
      "Inventory management",
      "Attendance management",
      "Billing and reporting",
      "Workflow management",
      "Complaint management",
      "Role-based administration",
      "Operational dashboards",
    ],
  },
  {
    num: "04",
    title: "Mobile Applications",
    theme: "theme-pink",
    icon: Smartphone,
    description:
      "We develop mobile experiences that connect users with business services and digital platforms.",
    label: "Solutions include",
    items: [
      "Android applications",
      "Cross-platform applications",
      "Business applications",
      "Field applications",
      "Notification systems",
      "API-connected mobile platforms",
    ],
  },
  {
    num: "05",
    title: "Cloud & DevOps",
    theme: "theme-emerald",
    icon: Cloud,
    description:
      "We help applications move from development to reliable production environments.",
    label: "Services include",
    items: [
      "Cloud deployment",
      "Docker-based environments",
      "CI/CD workflows",
      "Database deployment",
      "API infrastructure",
      "Monitoring and logging",
      "Backup strategies",
      "Application maintenance",
    ],
  },
  {
    num: "06",
    title: "UI/UX & Digital Experience",
    theme: "theme-amber",
    icon: Palette,
    description:
      "Good technology should also be easy to use. We design clean and intuitive interfaces that make complex workflows easier for users to understand and operate.",
    label: "Services include",
    items: [
      "UI/UX design",
      "Web interface design",
      "Design systems",
      "Responsive interfaces",
      "Interactive prototypes",
      "Usability improvements",
      "Performance-focused interfaces",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 4: Our Technology Services ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Our Technology Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We design, engineer, and deploy modern software, artificial intelligence, and enterprise systems tailored to your workflows.
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
                    {/* Header with Number and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--card-pill)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--card-text)" }} />
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-400">
                        {service.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span
                      className="block text-xs font-mono uppercase tracking-wider font-semibold mb-3"
                      style={{ color: "var(--card-text)" }}
                    >
                      {service.label}
                    </span>
                    <ul className="space-y-1.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-300/90">
                          <CheckCircle2
                            className="w-3.5 h-3.5 mt-0.5 shrink-0"
                            style={{ color: "var(--card-text)" }}
                          />
                          <span>{item}</span>
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
