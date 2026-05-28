"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Server,
  Database,
  Flame,
  Binary,
  Cpu,
  Wind,
} from "lucide-react";

const technologies = [
  { name: "React", icon: Code, role: "Frontend UI", color: "cyan" },
  { name: "Next.js", icon: Layers, role: "SSR Framework", color: "white" },
  { name: "Node.js", icon: Server, role: "Backend API", color: "emerald" },
  { name: "MongoDB", icon: Database, role: "Database Layer", color: "green" },
  { name: "Firebase", icon: Flame, role: "Real-time DB", color: "orange" },
  { name: "Python", icon: Binary, role: "Data Science", color: "blue" },
  { name: "AI / ML", icon: Cpu, role: "Intelligence", color: "purple" },
  { name: "Tailwind CSS", icon: Wind, role: "Styling System", color: "cyan" },
];

export default function TechStack() {
  // Duplicate for seamless infinite scroll
  const scrollItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-20 relative overflow-hidden bg-bg-dark border-t border-b border-white/5">
      {/* Absolute glow points */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-accent-cyan/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-accent-purple/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-2"
        >
          Our Stack
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-extrabold text-white"
        >
          Technologies We Master
        </motion.h3>
      </div>

      {/* Infinite slider container */}
      <div className="relative flex overflow-x-hidden w-full py-4 mask-gradient select-none">
        {/* Mask overlays to fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling row */}
        <motion.div
          className="flex gap-6 shrink-0 whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {scrollItems.map((tech, index) => {
            const Icon = tech.icon;

            const glowBorder = {
              cyan: "hover:border-accent-cyan/30 hover:shadow-accent-cyan/5",
              white: "hover:border-white/30 hover:shadow-white/5",
              emerald: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
              green: "hover:border-green-500/30 hover:shadow-green-500/5",
              orange: "hover:border-orange-500/30 hover:shadow-orange-500/5",
              blue: "hover:border-accent-blue/30 hover:shadow-accent-blue/5",
              purple: "hover:border-accent-purple/30 hover:shadow-accent-purple/5",
            };

            const iconColors = {
              cyan: "text-accent-cyan bg-accent-cyan/10",
              white: "text-white bg-white/10",
              emerald: "text-emerald-400 bg-emerald-400/10",
              green: "text-green-400 bg-green-400/10",
              orange: "text-orange-400 bg-orange-400/10",
              blue: "text-accent-blue bg-accent-blue/10",
              purple: "text-accent-purple bg-accent-purple/10",
            };

            return (
              <div
                key={`${tech.name}-${index}`}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/5 shadow-md min-w-[220px] transition-all duration-300 ${
                  glowBorder[tech.color as keyof typeof glowBorder]
                }`}
              >
                <div className={`p-3 rounded-xl ${iconColors[tech.color as keyof typeof iconColors]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-white text-sm">{tech.name}</span>
                  <span className="text-[10px] text-text-secondary mt-0.5 font-medium">
                    {tech.role}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Styled mask styles inside CSS context */}
      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
