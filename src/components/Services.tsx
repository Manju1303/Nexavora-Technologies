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
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  Activity,
  Zap,
  Shield,
} from "lucide-react";

const categories = [
  { id: "all", name: "All Offerings" },
  { id: "ai-dev", name: "AI & Software" },
  { id: "cloud-design", name: "Cloud & Design" },
  { id: "marketing", name: "Growth & SEO" },
];

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence & LLMs",
    icon: Cpu,
    category: "ai-dev",
    description:
      "Engineering autonomous agents, hybrid RAG pipelines, fine-tuned domain models, and vision OCR systems that turn raw enterprise data into operational intelligence.",
    list: [
      "Enterprise AI Agents & Autonomous Workflows",
      "Hybrid RAG & Vector Embeddings (Pinecone / Qdrant)",
      "Computer Vision & Document OCR Systems",
      "Predictive Analytics & Churn Modeling",
      "Fine-tuned LLMs & Private Model Hosting",
    ],
    color: "violet",
    tag: "High Demand",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-violet">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-ping" />
            NEX_RAG_AGENT: ACTIVE
          </span>
          <span className="text-text-secondary">32ms</span>
        </div>
        <div className="bg-white/5 p-2 rounded text-slate-300">
          <span className="text-accent-cyan">&gt; Context retrieved:</span> 4 docs (1536-dim)
          <br />
          <span className="text-emerald-400">&gt; Synthesis:</span> 99.8% relevance confidence
        </div>
      </div>
    ),
  },
  {
    id: "software",
    title: "Enterprise Software & ERP Systems",
    icon: Code2,
    category: "ai-dev",
    description:
      "Building mission-critical business operating systems, multi-tenant SaaS architectures, ERP & CRM suites, and automated double-entry financial ledgers.",
    list: [
      "Custom ERP & Multi-Branch Systems",
      "SaaS Multi-Tenant Platforms",
      "Automated Workflow & Approval Pipelines",
      "Role-Based Access Control (RBAC) & Audit Ledgers",
      "Legacy Codebase Modernization",
    ],
    color: "cyan",
    tag: "Mission Critical",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-cyan">
          <span>TX_LEDGER: ACID_VERIFIED</span>
          <span className="text-emerald-400">SYNCED</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[9px] text-text-secondary">
          <div className="p-1.5 rounded bg-white/5">
            <span>TENANT_ISOLATION:</span> <span className="text-white font-bold">100%</span>
          </div>
          <div className="p-1.5 rounded bg-white/5">
            <span>FAILOVER_TIME:</span> <span className="text-accent-cyan font-bold">&lt; 2s</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "web",
    title: "High-Performance Web Platforms",
    icon: Globe2,
    category: "ai-dev",
    description:
      "Crafting blazing-fast Next.js web applications, e-commerce engines, and corporate portals optimized for Google 100/100 Core Web Vitals and peak conversion.",
    list: [
      "Next.js SSR / ISR Corporate Platforms",
      "E-Commerce & Subscription Portals",
      "Progressive Web Apps (PWA) with Offline Sync",
      "Micro-Frontend Architectures",
      "Global Edge Caching & Headless CMS",
    ],
    color: "blue",
    tag: "120 FPS",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-blue">
          <span>LIGHTHOUSE_METRICS</span>
          <span className="text-emerald-400 font-bold">100 / 100</span>
        </div>
        <div className="flex justify-between items-center text-[9px] text-slate-300">
          <span>FCP: <strong className="text-white">0.4s</strong></span>
          <span>LCP: <strong className="text-white">0.8s</strong></span>
          <span>CLS: <strong className="text-emerald-400">0.00</strong></span>
        </div>
      </div>
    ),
  },
  {
    id: "mobile",
    title: "Native & Cross-Platform Mobile Apps",
    icon: Smartphone,
    category: "ai-dev",
    description:
      "Developing fluid, high-engagement mobile applications for Android and iOS with native performance, real-time push engines, and offline-first databases.",
    list: [
      "Native Android (Kotlin) & iOS (Swift)",
      "Cross-Platform Flutter & React Native",
      "Biometric Authentication & Offline Sync",
      "Real-Time Geolocation & Maps",
      "App Store & Google Play Deployment",
    ],
    color: "pink",
    tag: "Mobile First",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-pink">
          <span>MOBILE_SYNC_ENGINE</span>
          <span className="text-emerald-400 font-bold">ONLINE</span>
        </div>
        <div className="text-[9px] text-text-secondary bg-white/5 p-1.5 rounded flex justify-between">
          <span>FRAME_RATE: <strong className="text-white">120 FPS</strong></span>
          <span>OFFLINE_CACHE: <strong className="text-accent-pink">READY</strong></span>
        </div>
      </div>
    ),
  },
  {
    id: "cloud",
    title: "Cloud Architecture & DevOps Zero-Trust",
    icon: Cloud,
    category: "cloud-design",
    description:
      "Architecting zero-downtime AWS / Google Cloud infrastructure, automated Kubernetes orchestration, continuous CI/CD pipelines, and multi-region backups.",
    list: [
      "Kubernetes & Docker Containerization",
      "Automated CI/CD Pipelines (GitHub Actions / GitLab)",
      "Multi-Region Database Replication",
      "Zero-Trust mTLS Security & WAF Rules",
      "Cloud Cost Optimization & Telemetry",
    ],
    color: "amber",
    tag: "99.99% SLA",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-amber">
          <span>K8S_CLUSTER_STATUS</span>
          <span className="text-emerald-400 font-bold">HEALTHY</span>
        </div>
        <div className="text-[9px] text-text-secondary flex justify-between bg-white/5 p-1.5 rounded">
          <span>REPLICAS: <strong className="text-white">8/8 Pods</strong></span>
          <span>AUTOSCALE: <strong className="text-accent-amber">ACTIVE</strong></span>
        </div>
      </div>
    ),
  },
  {
    id: "design",
    title: "UI/UX & Design Systems",
    icon: Palette,
    category: "cloud-design",
    description:
      "Crafting world-class design systems, tactile glassmorphism, fluid micro-interactions, and conversion-focused customer journeys in Figma and code.",
    list: [
      "Enterprise Design Systems & Component Tokens",
      "Interactive High-Fidelity Prototypes",
      "Tactile Micro-Animations & Sound Design",
      "User Journey & Conversion Rate Optimization",
      "Mobile-First Responsive Wireframes",
    ],
    color: "violet",
    tag: "Pixel Perfect",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-violet">
          <span>DESIGN_TOKENS_V2</span>
          <span className="text-white font-bold">OUTFIT + INTER</span>
        </div>
        <div className="flex gap-2">
          <div className="h-4 flex-1 rounded bg-accent-violet/60" />
          <div className="h-4 flex-1 rounded bg-accent-cyan/60" />
          <div className="h-4 flex-1 rounded bg-accent-pink/60" />
          <div className="h-4 flex-1 rounded bg-accent-amber/60" />
        </div>
      </div>
    ),
  },
  {
    id: "marketing",
    title: "Growth Engineering & Search Intelligence",
    icon: TrendingUp,
    category: "marketing",
    description:
      "Data-driven organic search domination, technical Core Web Vitals audits, high-intent Google Ads funnels, and enterprise brand positioning.",
    list: [
      "Technical & Schema SEO Architecture",
      "Google Page #1 Ranking Campaigns",
      "High-Conversion PPC & Paid Search Funnels",
      "Data Analytics & Conversion Tracking",
      "Brand Narrative & Corporate Positioning",
    ],
    color: "cyan",
    tag: "High ROI",
    previewWidget: (
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2">
        <div className="flex items-center justify-between text-accent-cyan">
          <span>GOOGLE_SERP_POSITION</span>
          <span className="text-emerald-400 font-bold">RANK #1</span>
        </div>
        <div className="flex justify-between text-[9px] text-text-secondary bg-white/5 p-1.5 rounded">
          <span>ORGANIC_GROWTH: <strong className="text-white">+184%</strong></span>
          <span>CTR: <strong className="text-accent-cyan">8.4%</strong></span>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = services.filter(
    (s) => activeTab === "all" || s.category === activeTab
  );

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section Divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-light-violet blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-light-cyan blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Spectrum Digital Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Capabilities. <br />
            <span className="text-gradient-primary">Elite Engineering Standards.</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4 font-light">
            From autonomous AI agents and enterprise ERP engines to pixel-perfect mobile applications and cloud architectures — we design and ship software that propels market leaders.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Filter Pills (Linear / Vercel style) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-accent-violet text-white shadow-lg shadow-accent-violet/25 scale-105"
                  : "glass-card text-text-secondary hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Bento Grid Services Display with Spotlight Hover (Linear style) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;

              const colorThemes = {
                violet: {
                  badge: "bg-accent-violet/10 text-accent-violet border-accent-violet/20",
                  iconBg: "bg-accent-violet/10 text-accent-violet",
                  borderHover: "hover:border-accent-violet/40",
                  glowHover: "hover:shadow-accent-violet/10",
                },
                cyan: {
                  badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
                  iconBg: "bg-accent-cyan/10 text-accent-cyan",
                  borderHover: "hover:border-accent-cyan/40",
                  glowHover: "hover:shadow-accent-cyan/10",
                },
                blue: {
                  badge: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
                  iconBg: "bg-accent-blue/10 text-accent-blue",
                  borderHover: "hover:border-accent-blue/40",
                  glowHover: "hover:shadow-accent-blue/10",
                },
                pink: {
                  badge: "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
                  iconBg: "bg-accent-pink/10 text-accent-pink",
                  borderHover: "hover:border-accent-pink/40",
                  glowHover: "hover:shadow-accent-pink/10",
                },
                amber: {
                  badge: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
                  iconBg: "bg-accent-amber/10 text-accent-amber",
                  borderHover: "hover:border-accent-amber/40",
                  glowHover: "hover:shadow-accent-amber/10",
                },
              };

              const theme = colorThemes[service.color as keyof typeof colorThemes] || colorThemes.violet;

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  onMouseMove={handleCardMouseMove}
                  className={`spotlight-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group ${theme.borderHover} ${theme.glowHover}`}
                >
                  <div>
                    {/* Top Row: Icon + Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.iconBg} border border-white/5 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border ${theme.badge}`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-text-secondary leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Interactive Live Mini-Widget */}
                    <div className="mb-6">
                      {service.previewWidget}
                    </div>

                    {/* Capabilities List */}
                    <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      {service.list.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-between pt-4 border-t border-white/5 text-xs font-semibold text-white group-hover:text-accent-cyan transition-colors cursor-pointer"
                  >
                    <span>Consult on {service.title.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
