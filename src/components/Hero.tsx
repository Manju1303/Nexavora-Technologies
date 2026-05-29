"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden bg-bg-dark"
    >
      {/* Background Glow Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-light-cyan blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-light-purple blur-3xl animate-pulse-glow" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/3 right-1/3 w-[30rem] h-[30rem] rounded-full bg-light-blue blur-3xl animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* Grid overlay for futuristic vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span className="text-xs font-semibold tracking-wider bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent uppercase">
              Next-Gen Enterprise Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
          >
            Building Smart{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent drop-shadow-sm">
              Digital Solutions
            </span>{" "}
            for the Future
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
          >
            Nexavaro Technologies designs and engineers high-end software solutions, from enterprise-grade ERP systems and scalable SaaS applications to advanced AI solutions and high-performance mobile apps.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-xl shadow-accent-cyan/15 hover:shadow-accent-cyan/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 glow-on-hover cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              View Services
            </button>
          </motion.div>
        </div>

        {/* 3D / SVG Visualization Area */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
          >
            {/* Visual element frame */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent-cyan/5 via-accent-blue/5 to-accent-purple/5 border border-white/5 backdrop-blur-[2px] shadow-2xl overflow-hidden animate-float">
              {/* Outer decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-white/5 animate-spin-slow" />
              
              {/* Interactive Neural Network SVG SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full p-8 relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="cyan-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="100%" stopColor="#9d4edd" />
                  </linearGradient>
                  <linearGradient id="blue-pink-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f72585" />
                  </linearGradient>
                </defs>

                {/* Connecting Paths (Background Neural Lines) */}
                <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5">
                  <line x1="200" y1="200" x2="80" y2="120" />
                  <line x1="200" y1="200" x2="320" y2="120" />
                  <line x1="200" y1="200" x2="80" y2="280" />
                  <line x1="200" y1="200" x2="320" y2="280" />
                  
                  <line x1="80" y1="120" x2="200" y2="60" />
                  <line x1="320" y1="120" x2="200" y2="60" />
                  <line x1="80" y1="280" x2="200" y2="340" />
                  <line x1="320" y1="280" x2="200" y2="340" />

                  <line x1="80" y1="120" x2="80" y2="280" />
                  <line x1="320" y1="120" x2="320" y2="280" />
                </g>

                {/* Light particles running along the paths */}
                <motion.circle
                  r="3.5"
                  fill="#00f2fe"
                  animate={{
                    cx: [200, 80, 80, 200],
                    cy: [200, 120, 280, 200]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  r="3.5"
                  fill="#9d4edd"
                  animate={{
                    cx: [200, 320, 320, 200],
                    cy: [200, 120, 280, 200]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 3 }}
                />

                {/* Cyber Nodes */}
                {/* Central Server Node */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="24"
                  fill="url(#cyan-purple-grad)"
                  className="shadow-lg shadow-accent-cyan/50"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <circle cx="200" cy="200" r="14" fill="#030014" />
                <circle cx="200" cy="200" r="6" fill="#00f2fe" />

                {/* Satellite Nodes */}
                {/* Node 1: AI (Top) */}
                <motion.g
                  className="cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="200" cy="60" r="16" fill="rgba(255,255,255,0.03)" stroke="url(#cyan-purple-grad)" strokeWidth="1.5" />
                  <circle cx="200" cy="60" r="8" fill="#00f2fe" />
                </motion.g>

                {/* Node 2: Mobile (Left-Top) */}
                <motion.g
                  className="cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <circle cx="80" cy="120" r="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <circle cx="80" cy="120" r="8" fill="#3b82f6" />
                </motion.g>

                {/* Node 3: Cloud (Right-Top) */}
                <motion.g
                  className="cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <circle cx="320" cy="120" r="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <circle cx="320" cy="120" r="8" fill="#9d4edd" />
                </motion.g>

                {/* Node 4: SaaS (Left-Bottom) */}
                <motion.g
                  className="cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <circle cx="80" cy="280" r="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <circle cx="80" cy="280" r="8" fill="#9d4edd" />
                </motion.g>

                {/* Node 5: ERP (Right-Bottom) */}
                <motion.g
                  className="cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <circle cx="320" cy="280" r="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <circle cx="320" cy="280" r="8" fill="#f72585" />
                </motion.g>

                {/* Node 6: Database (Bottom) */}
                <motion.g
                  className="cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                >
                  <circle cx="200" cy="340" r="16" fill="rgba(255,255,255,0.03)" stroke="url(#blue-pink-grad)" strokeWidth="1.5" />
                  <circle cx="200" cy="340" r="8" fill="#f72585" />
                </motion.g>
              </svg>

              {/* Float Glass Terminal Simulation */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-cyan shrink-0 animate-pulse" />
                <div className="text-[10px] text-emerald-400 font-mono overflow-hidden whitespace-nowrap text-ellipsis">
                  nexavaro@root:~$ start --service=ai_network_active
                </div>
              </div>
            </div>

            {/* Glowing orbs on the borders of the visual box */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent-cyan/20 blur-md" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-accent-purple/20 blur-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
