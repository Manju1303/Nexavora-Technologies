"use client";

import { motion } from "framer-motion";
import { Compass, Eye } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: 120, label: "Projects Completed", suffix: "+", id: "projects" },
  { value: 15, label: "Technologies Used", suffix: "+", id: "tech" },
  { value: 99, label: "Client Satisfaction", suffix: "%", id: "satisfaction" },
  { value: 24, label: "Support Response", suffix: "/7", id: "support" },
];

export default function About() {
  const [counts, setCounts] = useState({
    projects: 0,
    tech: 0,
    satisfaction: 0,
    support: 0,
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        projects: Math.floor((stats[0].value / steps) * currentStep),
        tech: Math.floor((stats[1].value / steps) * currentStep),
        satisfaction: Math.floor((stats[2].value / steps) * currentStep),
        support: 24, // Keep static 24
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          projects: stats[0].value,
          tech: stats[1].value,
          satisfaction: stats[2].value,
          support: 24,
        });
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05021a]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-light-purple blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3"
          >
            About Company
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Pioneering Smart Tech Infrastructures
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-white"
            >
              Who We Are
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary leading-relaxed font-light"
            >
              Nexavora Technologies is a world-class IT software engineering and digital consulting company. We craft next-generation enterprise SaaS architectures, implement powerful ERP workflows, and deploy high-performance mobile and web products optimized for the digital era.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary leading-relaxed font-light"
            >
              As a fully remote, globally distributed startup, we dismantle geographical boundaries to assemble elite engineering talent. Operating without physical offices allows us to run a lean, agile workflow that provides round-the-clock development and deployment cycles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-secondary leading-relaxed font-light"
            >
              Fueled by intelligence and driven by performance, we partner with visionary companies to build secure, highly scalable, cloud-native infrastructures. Our mission is to accelerate digital growth through clean engineering and premium user experience design.
            </motion.p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl glass-card border border-white/5 text-center flex flex-col justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-accent-cyan">
                    {counts[stat.id as keyof typeof counts]}{stat.suffix}
                  </span>
                  <span className="text-[10px] sm:text-xs text-text-secondary mt-1 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Founder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] rounded-3xl glass-card border border-white/10 p-6 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Outer decorative light */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent-purple/20 blur-xl" />

              {/* Founder Avatar Placeholder with premium neon border */}
              <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-purple mb-6 shadow-lg shadow-accent-cyan/10">
                <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center overflow-hidden">
                  {/* Premium vector portrait avatar */}
                  <svg viewBox="0 0 100 100" className="w-20 h-20 text-text-secondary" fill="currentColor">
                    <path d="M50 10A20 20 0 1 0 50 50A20 20 0 1 0 50 10Z" fill="url(#founder-grad-light)" />
                    <path d="M50 60C30 60 10 72 10 90H90C90 72 70 60 50 60Z" fill="url(#founder-grad-dark)" />
                    <defs>
                      <linearGradient id="founder-grad-light" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00f2fe" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="founder-grad-dark" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#9d4edd" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Details */}
              <span className="font-extrabold text-white text-xl">Manjunath</span>
              <span className="text-xs font-semibold text-accent-cyan uppercase tracking-widest mt-1">
                Founder & CEO
              </span>
              <span className="text-[10px] text-text-secondary font-medium tracking-wide mt-1">
                AI Engineer & Vibe Coder | B.Tech AI & Data Science
              </span>

              {/* CEO Quote */}
              <p className="text-sm text-text-secondary mt-6 italic font-light relative px-4">
                &quot;My mission is to engineer AI-driven products that simplify technology, accelerate learning, and automate complex digital workflows, converting technical intricacy into guided, accessible intelligent experiences.&quot;
              </p>

              {/* Signature lookalike */}
              <span className="font-serif text-white/50 text-lg mt-6 tracking-widest font-semibold block">
                Manjunath
              </span>
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl glass-card border border-white/5 p-8 flex flex-col md:flex-row gap-6 items-start group"
          >
            <div className="p-4 rounded-2xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 group-hover:scale-110 transition-transform duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h5 className="font-extrabold text-white text-xl">Our Mission</h5>
              <p className="text-text-secondary leading-relaxed font-light text-sm">
                To build high-performance, secure, and user-centric digital products that optimize enterprise efficiency and generate sustainable competitive advantages for businesses worldwide.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl glass-card border border-white/5 p-8 flex flex-col md:flex-row gap-6 items-start group glass-card-purple"
          >
            <div className="p-4 rounded-2xl bg-accent-purple/10 text-accent-purple border border-accent-purple/20 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h5 className="font-extrabold text-white text-xl">Our Vision</h5>
              <p className="text-text-secondary leading-relaxed font-light text-sm">
                To stand as the leading globally recognized software agency, orchestrating digital transformations driven by advanced AI algorithms, robust cloud infrastructures, and elite user interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
