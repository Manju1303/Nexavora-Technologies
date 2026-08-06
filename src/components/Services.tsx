"use client";
 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Code2,
  Globe2,
  Smartphone,
  Cloud,
  Palette,
  TrendingUp,
} from "lucide-react";
 
const categories = [
  { id: "all", name: "All Services" },
  { id: "ai-dev", name: "AI & Development" },
  { id: "cloud-design", name: "Cloud & Design" },
  { id: "marketing", name: "Marketing & Growth" },
];
 
const services = [
  {
    title: "Artificial Intelligence",
    icon: Cpu,
    category: "ai-dev",
    description:
      "Building intelligent systems powered by machine learning, computer vision, and generative AI to automate processes and unlock insights from data.",
    list: [
      "AI Chatbots & Automation",
      "Machine Learning Solutions",
      "Computer Vision & OCR Systems",
      "Predictive Analytics",
      "Generative AI Applications",
    ],
    color: "violet",
  },
  {
    title: "Software Development",
    icon: Code2,
    category: "ai-dev",
    description:
      "Engineering robust enterprise applications, ERP & CRM systems, SaaS platforms, and custom business software for operational excellence.",
    list: [
      "Enterprise Applications",
      "ERP & CRM Systems",
      "SaaS Platforms",
      "Custom Business Software",
      "Workflow Automation",
    ],
    color: "cyan",
  },
  {
    title: "Web Development",
    icon: Globe2,
    category: "ai-dev",
    description:
      "Designing high-performance, responsive web experiences from corporate websites and e-commerce platforms to progressive web applications.",
    list: [
      "Corporate & Portfolio Websites",
      "E-Commerce Platforms",
      "Landing Pages",
      "Progressive Web Apps (PWA)",
      "Custom Web Portals",
    ],
    color: "blue",
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    category: "ai-dev",
    description:
      "Developing feature-rich native and cross-platform mobile applications optimized for performance, engagement, and business growth.",
    list: [
      "Android Development",
      "iOS Development",
      "Cross-Platform Apps",
      "Business Applications",
    ],
    color: "pink",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    category: "cloud-design",
    description:
      "Deploying scalable cloud infrastructure, robust APIs, and containerized workflows with continuous integration and delivery pipelines.",
    list: [
      "Cloud Deployment & Migration",
      "API Development & Integration",
      "Database Design & Optimization",
      "Docker & Containerization",
      "CI/CD Pipelines",
    ],
    color: "amber",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    category: "cloud-design",
    description:
      "Crafting stunning, user-centric interfaces through deep research, wireframing, interactive prototyping, and responsive design systems.",
    list: [
      "User Research & Strategy",
      "Wireframing & Prototyping",
      "Modern Interface Design",
      "Responsive Experiences",
      "Design Systems",
    ],
    color: "violet",
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    category: "marketing",
    description:
      "Driving growth through data-driven SEO strategies, social media campaigns, Google Ads management, branding, and content strategy.",
    list: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Google Ads & PPC",
      "Branding & Identity",
      "Content Strategy",
    ],
    color: "cyan",
  },
];
 
export default function Services() {
  const [activeTab, setActiveTab] = useState("all");
 
  const filteredServices = services.filter(
    (s) => activeTab === "all" || s.category === activeTab
  );
 
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-light-violet blur-3xl opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-light-cyan blur-3xl opacity-15 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-violet mb-3"
          >
            What We Do
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
            From concept to deployment, we deliver end-to-end technology solutions across AI, software, cloud, and digital marketing.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-5 rounded-full" />
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
                    ? "text-white border-accent-violet bg-accent-violet/10 shadow-lg shadow-accent-violet/15"
                    : "text-text-secondary border-white/5 hover:text-white hover:border-white/20 bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 rounded-full border border-accent-violet bg-accent-violet/5 z-[-1]"
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
 
              const glowColors = {
                violet: "group-hover:border-accent-violet/30 group-hover:shadow-accent-violet/5",
                cyan: "group-hover:border-accent-cyan/30 group-hover:shadow-accent-cyan/5",
                blue: "group-hover:border-accent-blue/30 group-hover:shadow-accent-blue/5",
                pink: "group-hover:border-accent-pink/30 group-hover:shadow-accent-pink/5",
                amber: "group-hover:border-accent-amber/30 group-hover:shadow-accent-amber/5",
              };
 
              const iconColors = {
                violet: "bg-accent-violet/10 text-accent-violet group-hover:bg-accent-violet group-hover:text-white",
                cyan: "bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white",
                blue: "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white",
                pink: "bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white",
                amber: "bg-accent-amber/10 text-accent-amber group-hover:bg-accent-amber group-hover:text-white",
              };

              const dotColors = {
                violet: "bg-accent-violet/60 group-hover:bg-accent-violet",
                cyan: "bg-accent-cyan/60 group-hover:bg-accent-cyan",
                blue: "bg-accent-blue/60 group-hover:bg-accent-blue",
                pink: "bg-accent-pink/60 group-hover:bg-accent-pink",
                amber: "bg-accent-amber/60 group-hover:bg-accent-amber",
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
                  <h4 className="font-extrabold text-white text-lg mb-3 tracking-tight">
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
                            dotColors[service.color as keyof typeof dotColors]
                          } transition-colors`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
 
                  {/* Micro-arrow CTA inside card */}
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-transparent group-hover:text-accent-violet transition-all duration-300">
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
