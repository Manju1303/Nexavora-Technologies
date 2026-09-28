"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

interface ProjectArchetype {
  id: string;
  name: string;
  desc: string;
  icon: typeof Cpu;
  baseWeeks: number;
  engineers: number;
  stack: string[];
}

const archetypes: ProjectArchetype[] = [
  {
    id: "ai",
    name: "AI & Custom LLM System",
    desc: "Autonomous workflow agents, vector embeddings, RAG knowledge retrieval, and automated document extraction.",
    icon: Cpu,
    baseWeeks: 4,
    engineers: 2,
    stack: ["Python", "FastAPI", "VectorDB", "Next.js", "LangChain"],
  },
  {
    id: "erp",
    name: "Enterprise ERP & SaaS Platform",
    desc: "Multi-tenant architecture, double-entry ledger, inventory management, role-based access, and client portals.",
    icon: Layers,
    baseWeeks: 6,
    engineers: 3,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Tailwind"],
  },
  {
    id: "web",
    name: "High-Performance Web Portal",
    desc: "Ultra-fast corporate platforms, e-commerce, progressive web apps, and automated lead capture funnels.",
    icon: Sparkles,
    baseWeeks: 3,
    engineers: 2,
    stack: ["React", "Next.js", "Framer Motion", "Vercel Edge", "SEO"],
  },
  {
    id: "mobile",
    name: "Mobile & Hybrid Application",
    desc: "Cross-platform Android & iOS apps with real-time push notifications, offline data sync, and device camera integration.",
    icon: Zap,
    baseWeeks: 5,
    engineers: 2,
    stack: ["React Native", "Android SDK", "Firebase", "Node.js"],
  },
];

const scopeTiers = [
  { id: "mvp", name: "MVP / Rapid Launch", multiplier: 1, desc: "Fast-to-market validated release" },
  { id: "scale", name: "Growth & Production Core", multiplier: 1.5, desc: "Robust architecture with integrations" },
  { id: "enterprise", name: "Full Enterprise Grade", multiplier: 2.2, desc: "High availability, SOC-2 readiness & SLA" },
];

const addonFeatures = [
  { id: "auth", label: "Multi-Tenant Auth & RBAC", weeks: 0.5 },
  { id: "rag", label: "AI Copilot / RAG Knowledge", weeks: 1.0 },
  { id: "payments", label: "Payment Gateway & Subscriptions", weeks: 0.5 },
  { id: "telemetry", label: "Real-time Telemetry & WebSockets", weeks: 0.5 },
  { id: "seo", label: "SEO 99+ Core Web Vitals Audit", weeks: 0.5 },
  { id: "app", label: "Mobile Companion Sync", weeks: 1.5 },
];

export default function ProjectEstimator() {
  const [selectedArch, setSelectedArch] = useState<ProjectArchetype>(archetypes[0]);
  const [selectedTier, setSelectedTier] = useState(scopeTiers[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["auth", "rag"]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate estimated weeks
  const addonWeeks = selectedAddons.reduce((sum, addonId) => {
    const item = addonFeatures.find((a) => a.id === addonId);
    return sum + (item ? item.weeks : 0);
  }, 0);

  const totalWeeks = Math.ceil(selectedArch.baseWeeks * selectedTier.multiplier + addonWeeks);
  const engineerCount = Math.min(5, Math.ceil(selectedArch.engineers * (selectedTier.multiplier > 1.2 ? 1.5 : 1)));

  const handleConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section Divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Background glow overlay */}
      <div className="absolute top-1/2 right-1/4 w-[50rem] h-[30rem] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-pink/10 border border-accent-pink/20 text-accent-pink text-xs font-semibold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Scope & Velocity Calculator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your Build Velocity. <br />
            <span className="text-gradient-primary">Transparent Engineering Timelines.</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4 font-light">
            Configure your technical requirements below to instantly calculate sprint velocity, recommended technology stack, and engineering team allocation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto mt-6 rounded-full" />
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Project Archetype */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-3">
                1. Select Solution Archetype
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {archetypes.map((arch) => {
                  const Icon = arch.icon;
                  const isSelected = selectedArch.id === arch.id;
                  return (
                    <button
                      key={arch.id}
                      onClick={() => setSelectedArch(arch)}
                      className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-accent-violet/20 border-2 border-accent-violet shadow-lg shadow-accent-violet/15"
                          : "glass-card border border-white/5 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-accent-violet text-white" : "bg-white/5 text-text-secondary"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-white text-sm">
                          {arch.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-relaxed font-light line-clamp-2">
                        {arch.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Scope Tier */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-3">
                2. Choose Architecture Maturity Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scopeTiers.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-accent-cyan/20 border-2 border-accent-cyan shadow-lg shadow-accent-cyan/15"
                          : "glass-card border border-white/5 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <h4 className="font-bold text-white text-sm mb-1">
                        {tier.name}
                      </h4>
                      <p className="text-[10px] text-text-secondary font-light">
                        {tier.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Addon Capabilities */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-3">
                3. Configure Modular Addons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonFeatures.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl text-left text-xs transition-all cursor-pointer ${
                        isChecked
                          ? "bg-white/10 border border-accent-violet/40 text-white font-medium"
                          : "bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? "bg-accent-violet border-accent-violet text-white"
                              : "border-white/20 bg-transparent"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </span>
                        {addon.label}
                      </span>
                      <span className="text-[10px] font-mono text-text-secondary">
                        +{addon.weeks}w
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Calculation Summary Card (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl glass-card-premium border border-white/10 p-6 sm:p-8 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-violet font-bold">
                Project Blueprint Summary
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                READY TO SHIP
              </span>
            </div>

            {/* Main Calculated Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Est. Timeline</span>
                </div>
                <div className="text-3xl font-extrabold text-white font-mono">
                  {totalWeeks} <span className="text-sm font-normal text-text-secondary">Weeks</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 block mt-1">
                  High-velocity agile sprints
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-1">
                  <Users className="w-3.5 h-3.5 text-accent-violet" />
                  <span>Sprint Team</span>
                </div>
                <div className="text-3xl font-extrabold text-white font-mono">
                  {engineerCount} <span className="text-sm font-normal text-text-secondary">Engineers</span>
                </div>
                <span className="text-[9px] font-mono text-accent-violet block mt-1">
                  Led by Principal Architect
                </span>
              </div>
            </div>

            {/* Recommended Stack Tags */}
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block mb-2">
                Recommended Stack Matrix:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedArch.stack.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-accent-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Included Deliverables List */}
            <div className="space-y-2 mb-8 pt-4 border-t border-white/5 text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Full source code ownership & repository transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated CI/CD pipeline & zero-downtime deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>30-Day post-launch warranty & 24/7 incident SLA</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleConsultation}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-xl shadow-accent-violet/20 hover:shadow-accent-violet/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-on-hover cursor-pointer"
            >
              <span>Lock In This Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
