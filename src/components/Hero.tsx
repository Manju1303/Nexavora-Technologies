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
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
          >
            Nexavora Technologies designs and engineers high-end software solutions, from enterprise-grade ERP systems and scalable SaaS applications to advanced AI solutions and high-performance mobile apps.
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

              {/* Float Glass Terminal Simulation */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-cyan shrink-0 animate-pulse" />
                <div className="text-[10px] text-emerald-400 font-mono overflow-hidden whitespace-nowrap text-ellipsis">
                  nexavora@root:~$ start --service=ai_network_active
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
