"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Building2,
  ShoppingBag,
  Home as HomeIcon,
  Factory,
  Workflow,
  Users,
  ShieldCheck,
  Award,
  Lock,
  Zap,
} from "lucide-react";

const clientsRow1 = [
  { name: "Barcelona Salon", industry: "Lifestyle & Salon", icon: ShoppingBag, color: "from-pink-500/20 to-rose-500/20 text-rose-400" },
  { name: "Aura Beauty Studio", industry: "Skincare & Cosmetics", icon: Sparkles, color: "from-amber-500/20 to-orange-500/20 text-amber-400" },
  { name: "Indian National Congress", industry: "Political Organization", icon: Users, color: "from-emerald-500/20 to-teal-500/20 text-emerald-400" },
  { name: "Radhe Developers", industry: "Real Estate & Construction", icon: Building2, color: "from-blue-500/20 to-cyan-500/20 text-cyan-400" },
  { name: "Shreenathji Villa", industry: "Luxury Residential", icon: HomeIcon, color: "from-indigo-500/20 to-purple-500/20 text-indigo-400" },
  { name: "Shree Krishnam Rubtech", industry: "Industrial Manufacturing", icon: Factory, color: "from-orange-500/20 to-red-500/20 text-orange-400" },
  { name: "Tulsi Traders", industry: "Agro Commodities", icon: Workflow, color: "from-teal-500/20 to-emerald-500/20 text-teal-400" },
];

const enterpriseBadges = [
  { label: "SOC-2 Type II Aligned", icon: ShieldCheck, color: "text-emerald-400" },
  { label: "ISO 27001 Security Protocols", icon: Lock, color: "text-accent-cyan" },
  { label: "99.998% High Availability SLA", icon: Zap, color: "text-accent-amber" },
  { label: "NABH Accreditation Compliant", icon: Award, color: "text-accent-pink" },
  { label: "Zero-Trust Architecture", icon: ShieldCheck, color: "text-accent-violet" },
  { label: "Automated Failover & DR", icon: Zap, color: "text-accent-blue" },
];

export default function Clients() {
  const marqueeItems1 = [...clientsRow1, ...clientsRow1, ...clientsRow1];
  const marqueeItems2 = [...enterpriseBadges, ...enterpriseBadges, ...enterpriseBadges];

  return (
    <section id="clients" className="py-20 relative overflow-hidden bg-bg-dark">
      {/* Section divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[22rem] bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12 text-center">
        <h2 className="text-xs font-bold tracking-widest uppercase text-accent-violet mb-3 font-mono">
          Trusted Ecosystem & Enterprise Partners
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Brands & Organizations Powered by Nexavora
        </h3>
        <p className="text-text-secondary text-sm mt-4 font-light max-w-xl mx-auto">
          Partnering with ambitious enterprises, startups, and leaders across industries to engineer resilient digital platforms.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-5 rounded-full" />
      </div>

      {/* Infinite scrolling marquee Row 1 (Leftwards) */}
      <div className="relative w-full overflow-hidden py-3 flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: [0, -1100] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
          whileHover={{ transition: { duration: 60 } }}
        >
          {marqueeItems1.map((client, idx) => {
            const IconComponent = client.icon;
            return (
              <div
                key={`c1-${idx}`}
                className="inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl glass-card border border-white/5 bg-white/5 shadow-md min-w-[270px] hover:border-accent-violet/30 hover:shadow-accent-violet/10 transition-all duration-300 group shrink-0 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${client.color} flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-sm font-bold tracking-tight group-hover:text-accent-violet transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-text-secondary mt-0.5 font-medium tracking-wide">
                    {client.industry}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Infinite scrolling marquee Row 2: Enterprise Standards (Rightwards) */}
      <div className="relative w-full overflow-hidden py-3 flex items-center mt-2">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: [-1100, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
          whileHover={{ transition: { duration: 65 } }}
        >
          {marqueeItems2.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={`b2-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-text-secondary hover:text-white hover:border-white/20 transition-all shrink-0 font-mono text-xs"
              >
                <Icon className={`w-3.5 h-3.5 ${badge.color}`} />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
