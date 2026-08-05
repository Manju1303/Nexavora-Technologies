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

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10 w-full py-12">
        {/* Text Area */}
        <div className="flex flex-col items-center justify-center">
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Nexavora Technologies designs and engineers high-end software solutions, from enterprise-grade ERP systems and scalable SaaS applications to advanced AI solutions and high-performance mobile apps.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
      </div>
    </section>
  );
}
