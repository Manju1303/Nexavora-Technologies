"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Command,
  Activity,
  Zap,
  Shield,
  Layers,
  Cpu,
  Terminal,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const services = [
  "Autonomous AI & LLM Systems",
  "Enterprise ERP & CRM Platforms",
  "High-Performance Cloud & DevOps",
  "Scalable Next.js & Mobile Apps",
  "Full-Scale Digital Transformation",
  "FinTech & Double-Entry Ledgers",
];

// Interactive constellation particles
const particles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 7,
}));

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleScroll = (href: string) => {
    const target = document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-dark"
    >
      {/* ── DYNAMIC CURSOR-TRACKED SPOTLIGHT ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.05) 40%, transparent 70%)`,
        }}
      />

      {/* ── AMBIENT AURORA WAVES (Stripe style) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/4 w-[45rem] h-[45rem] rounded-full bg-light-violet blur-[140px] opacity-40 animate-pulse-glow"
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[40rem] h-[40rem] rounded-full bg-light-cyan blur-[140px] opacity-30 animate-pulse-glow"
          style={{ animationDelay: "-3.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[35rem] rounded-full bg-light-blue blur-[160px] opacity-20 pointer-events-none"
        />
      </div>

      {/* ── CONSTELLATION SVG MESH ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {particles.slice(0, 16).map((p, i) => {
            const next = particles[(i + 4) % particles.length];
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${p.x}%`}
                y1={`${p.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="rgba(139, 92, 246, 0.08)"
                strokeWidth="0.06"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.05, 0.35, 0.05] }}
                transition={{ duration: 7, repeat: Infinity, delay: i * 0.4 }}
              />
            );
          })}
          {particles.map((p) => (
            <motion.circle
              key={`particle-${p.id}`}
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size * 0.07}
              fill={p.id % 3 === 0 ? "rgba(139, 92, 246, 0.6)" : p.id % 3 === 1 ? "rgba(6, 182, 212, 0.5)" : "rgba(245, 158, 11, 0.4)"}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.7, 0.2],
                cy: [`${p.y}%`, `${p.y - 2.5}%`, `${p.y}%`],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* ── GEOMETRIC GRID OVERLAY ── */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_65%,transparent_100%)] z-0 pointer-events-none opacity-50" />

      {/* ── HERO CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10 w-full">
        {/* Luminous Top Pill Badge (Linear & Stripe style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-violet/15 via-accent-cyan/10 to-accent-violet/15 border border-accent-violet/30 text-white text-xs font-semibold shadow-lg shadow-accent-violet/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-accent-cyan tracking-wide font-mono text-[11px] uppercase">
              Nexavora Core v2.4
            </span>
            <span className="text-white/30">|</span>
            <span className="text-text-primary text-[11px]">
              Next-Gen Enterprise Engineering & AI
            </span>
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.06] tracking-tight mb-6 max-w-5xl"
        >
          <span className="text-gradient-hero">Engineering Intelligent</span>
          <br />
          <span className="text-white">Software for the Modern World</span>
        </motion.h1>

        {/* Animated Service Cycling Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 h-9 flex items-center justify-center gap-2"
        >
          <span className="text-text-secondary text-sm sm:text-base font-light font-mono">
            Architecting:
          </span>
          <div className="relative h-8 overflow-hidden min-w-[260px] sm:min-w-[340px]">
            {services.map((service, idx) => (
              <motion.span
                key={service}
                initial={{ y: 25, opacity: 0 }}
                animate={
                  idx === currentService
                    ? { y: 0, opacity: 1 }
                    : { y: -25, opacity: 0 }
                }
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 text-sm sm:text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink whitespace-nowrap"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Nexavora Technologies partners with high-growth startups, ambitious founders, and enterprise organizations to build robust SaaS platforms, AI automation pipelines, and resilient digital architectures.
        </motion.p>

        {/* Primary CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-accent-violet via-accent-purple to-accent-cyan text-white shadow-2xl shadow-accent-violet/25 hover:shadow-accent-violet/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 glow-on-hover cursor-pointer"
          >
            <span>Start Your Build</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleScroll("architecture")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <Cpu className="w-4 h-4 text-accent-cyan" />
            <span>Explore Architecture</span>
          </button>

          <button
            onClick={() => handleScroll("estimator")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white border border-white/10 hover:border-accent-pink/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <Activity className="w-4 h-4 text-accent-pink" />
            <span>Calculate Velocity</span>
          </button>
        </motion.div>

        {/* Interactive Floating Micro-HUD Card (Linear / Datadog style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-4xl p-4 sm:p-5 rounded-3xl glass-card-premium border border-white/10 shadow-2xl shadow-black/60 mb-12 backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            <div className="flex flex-col items-center text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient-primary font-mono">
                120+
              </span>
              <span className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold mt-1">
                Completed Deployments
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center gap-1">
                99.99<span className="text-accent-cyan text-lg">%</span>
              </span>
              <span className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold mt-1">
                Enterprise SLA Uptime
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-accent-cyan font-mono flex items-center gap-1">
                &lt; 15<span className="text-text-secondary text-sm font-normal">ms</span>
              </span>
              <span className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold mt-1">
                Global Edge Latency
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                100%
              </span>
              <span className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold mt-1">
                Client Satisfaction
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into following sections */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none z-10" />
    </section>
  );
}
