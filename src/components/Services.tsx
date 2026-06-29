"use client";
 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe2,
  Smartphone,
  Building2,
  GraduationCap,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  LineChart,
} from "lucide-react";
 
const categories = [
  { id: "all", name: "All Services" },
  { id: "development", name: "Development & ERP" },
  { id: "marketing", name: "Marketing & Growth" },
  { id: "design", name: "Design & Consulting" },
];
 
const services = [
  {
    title: "Custom Website Development",
    icon: Globe2,
    category: "development",
    description:
      "High-performance, secure, and fully customized web systems, SaaS platforms, and enterprise sites tailored for your business success.",
    list: [
      "Corporate Websites",
      "Progressive Web Apps (PWA)",
      "Custom Web Portals",
      "Responsive Layout Designs",
    ],
    color: "cyan",
  },
  {
    title: "Software & SaaS Development",
    icon: Code2,
    category: "development",
    description:
      "Engineering robust custom software architectures, desktop systems, SaaS frameworks, and business management consoles tailored for operational excellence.",
    list: [
      "Custom Software Systems",
      "SaaS Product Engineering",
      "Desktop Application Dev",
      "Management Dashboards",
    ],
    color: "blue",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    category: "development",
    description:
      "Designing and deploying feature-rich native Android applications and cross-platform mobile business workflows optimized for high retention.",
    list: [
      "Android Applications",
      "Business Mobile Solutions",
      "Educational App Modules",
      "Healthcare Apps Integration",
    ],
    color: "pink",
  },
  {
    title: "ERP & Management Systems",
    icon: Building2,
    category: "development",
    description:
      "Automating campus administrative workflows, staff monitoring matrices, attendance record engines, and customized enterprise resource software.",
    list: [
      "College ERP Solutions",
      "Staff Monitoring Systems",
      "Attendance Management Systems",
      "Workflow Automation Tools",
    ],
    color: "cyan",
  },
  {
    title: "Digital Marketing & Lead Gen",
    icon: Megaphone,
    category: "marketing",
    description:
      "Data-driven performance campaigns, high-converting PPC systems, and optimized lead flows designed to explode your pipeline.",
    list: [
      "Lead Generation Funnels",
      "Performance Marketing",
      "Social Media Campaigns",
      "PPC Advertising Audits",
    ],
    color: "purple",
  },
  {
    title: "SEO & Performance Tuning",
    icon: Search,
    category: "marketing",
    description:
      "Advanced search engine indexing strategies, organic keyword ranking, and technical speed audits that place you on Google's top page.",
    list: [
      "Keyword Ranking & Research",
      "Technical SEO Audits",
      "On-Page & Off-Page SEO",
      "Core Web Vitals Speed Tuning",
    ],
    color: "cyan",
  },
  {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    category: "marketing",
    description:
      "Full-featured digital storefronts, checkout flow optimizations, secure gateways, and enterprise integrations that drive massive sales.",
    list: [
      "Storefront Customization",
      "Secure Payment Gateways",
      "Checkout Flow Optimization",
      "Inventory & Order Syncing",
    ],
    color: "pink",
  },
  {
    title: "Graphic Design & Brand Identity",
    icon: Palette,
    category: "design",
    description:
      "Distinctive corporate logos, beautiful marketing collaterals, and cohesive visual systems that reflect your company's core values.",
    list: [
      "Corporate Logo Design",
      "Brand Identity Packages",
      "Marketing Collaterals",
      "UI/UX Visual Styling Guidelines",
    ],
    color: "purple",
  },
  {
    title: "Technology & Business Consulting",
    icon: LineChart,
    category: "design",
    description:
      "High-agency roadmap guidance, custom software architecture planning, tech-stack consulting, and structural business audit scaling.",
    list: [
      "Roadmap Guidance",
      "Architecture Design Plans",
      "Tech-Stack Evaluations",
      "Structural Scalability Audits",
    ],
    color: "blue",
  },
  {
    title: "Professional Training & Internships",
    icon: GraduationCap,
    category: "design",
    description:
      "Empowering students and aspiring engineers through practical software internships and coding academies in Full-Stack, Python, Java, AI, and UI/UX.",
    list: [
      "Full Stack & Python/Java Academy",
      "AI & Machine Learning Basics",
      "Web Development Internships",
      "Mobile App & UI/UX Internships",
    ],
    color: "blue",
  },
];
 
export default function Services() {
  const [activeTab, setActiveTab] = useState("all");
 
  const filteredServices = services.filter(
    (s) => activeTab === "all" || s.category === activeTab
  );
 
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-light-cyan blur-3xl opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-light-purple blur-3xl opacity-15 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Services that Drive Growth
          </motion.h3>
          <p className="text-text-secondary text-sm mt-4 font-light max-w-xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions that transform how businesses engage with their audiences.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>
 
        {/* Interactive Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "text-white border-accent-cyan bg-accent-cyan/10 shadow-lg shadow-accent-cyan/15"
                    : "text-text-secondary border-white/5 hover:text-white hover:border-white/20 bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 rounded-full border border-accent-cyan bg-accent-cyan/5 z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {cat.name}
              </button>
            );
          })}
        </div>
 
        {/* Services Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;
 
              // Color theme class names
              const glowColors = {
                cyan: "group-hover:border-accent-cyan/40 group-hover:shadow-accent-cyan/5 text-accent-cyan bg-accent-cyan/5 border-accent-cyan/10",
                purple: "group-hover:border-accent-purple/40 group-hover:shadow-accent-purple/5 text-accent-purple bg-accent-purple/5 border-accent-purple/10",
                blue: "group-hover:border-accent-blue/40 group-hover:shadow-accent-blue/5 text-accent-blue bg-accent-blue/5 border-accent-blue/10",
                pink: "group-hover:border-accent-pink/40 group-hover:shadow-accent-pink/5 text-accent-pink bg-accent-pink/5 border-accent-pink/10",
              };
 
              const iconColors = {
                cyan: "bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white",
                purple: "bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple group-hover:text-white",
                blue: "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white",
                pink: "bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white",
              };
 
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={service.title}
                  className={`group flex flex-col p-8 rounded-3xl glass-card border border-white/5 shadow-lg shadow-black/10 hover:-translate-y-1.5 transition-all duration-300 ${
                    glowColors[service.color as keyof typeof glowColors]
                  }`}
                >
                  {/* Icon wrapper */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/5 transition-all duration-300 ${
                      iconColors[service.color as keyof typeof iconColors]
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
 
                  {/* Title */}
                  <h4 className="font-extrabold text-white text-lg mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                    {service.title}
                  </h4>
 
                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed font-light flex-grow">
                    {service.description}
                  </p>
 
                  {/* List Details */}
                  <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-4 text-xs font-light text-slate-400 group-hover:text-slate-300 transition-colors">
                    {service.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-left">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            service.color === "cyan"
                              ? "bg-accent-cyan/60 group-hover:bg-accent-cyan"
                              : service.color === "purple"
                              ? "bg-accent-purple/60 group-hover:bg-accent-purple"
                              : service.color === "blue"
                              ? "bg-accent-blue/60 group-hover:bg-accent-blue"
                              : "bg-accent-pink/60 group-hover:bg-accent-pink"
                          } transition-colors`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
 
                  {/* Micro-arrow CTA inside card */}
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-transparent group-hover:text-accent-cyan transition-all duration-300">
                    <span>Learn more</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
