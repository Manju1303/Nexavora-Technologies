"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  "AI-Powered Solutions",
  "Custom Software Development",
  "Cloud & DevOps",
  "Web & Mobile Applications",
  "Digital Transformation",
  "UI/UX Design",
];

// Generate constellation particles
const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 8 + 8,
}));

// Generate connection lines between nearby particles
const connections = particles.slice(0, 20).map((p, i) => {
  const target = particles[(i + 3) % particles.length];
  return { x1: p.x, y1: p.y, x2: target.x, y2: target.y, id: i };
});

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (href: string) => {
    const target = document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg-dark"
    >
      {/* ── CONSTELLATION PARTICLE BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connection lines */}
          {connections.map((line) => (
            <motion.line
              key={`line-${line.id}`}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="rgba(139, 92, 246, 0.06)"
              strokeWidth="0.05"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: line.id * 0.3 }}
            />
          ))}
          {/* Floating particles */}
          {particles.map((p) => (
            <motion.circle
              key={`particle-${p.id}`}
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size * 0.08}
              fill={p.id % 3 === 0 ? "rgba(139, 92, 246, 0.4)" : p.id % 3 === 1 ? "rgba(6, 182, 212, 0.3)" : "rgba(245, 158, 11, 0.25)"}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                cy: [`${p.y}%`, `${p.y - 3}%`, `${p.y}%`],
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

      {/* ── AMBIENT GLOW ORBS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-[30rem] h-[30rem] rounded-full bg-light-violet blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-light-cyan blur-3xl animate-pulse-glow" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-light-blue blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* ── GRID OVERLAY ── */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-60" />

      {/* ── CONTENT ── */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            AI-First Technology Company
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-gradient-hero">Innovating the Future</span>
          <br />
          <span className="text-white">with AI & Technology</span>
        </motion.h1>

        {/* Animated Service Cycling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 h-8 flex items-center justify-center gap-2"
        >
          <span className="text-text-secondary text-sm sm:text-base font-light">Specializing in</span>
          <div className="relative h-7 overflow-hidden min-w-[200px]">
            {services.map((service, idx) => (
              <motion.span
                key={service}
                initial={{ y: 30, opacity: 0 }}
                animate={
                  idx === currentService
                    ? { y: 0, opacity: 1 }
                    : { y: -30, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 text-sm sm:text-base font-semibold text-accent-violet whitespace-nowrap"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          We help businesses, startups, and organizations leverage modern technologies to solve real-world challenges and accelerate growth through intelligent, scalable digital solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => handleScroll("contact")}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-xl shadow-accent-violet/20 hover:shadow-accent-violet/35 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 glow-on-hover cursor-pointer"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-violet/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "120+", label: "Projects Delivered" },
            { value: "15+", label: "Technologies" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">{stat.value}</span>
              <span className="text-[10px] sm:text-xs text-text-secondary mt-1 font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none z-10" />
    </section>
  );
}
