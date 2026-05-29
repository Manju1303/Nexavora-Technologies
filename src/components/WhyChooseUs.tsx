"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Cpu,
  LayoutTemplate,
  Lightbulb,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";
import InteractiveConsole from "@/components/InteractiveConsole";

const heightKeyframes = [
  ["30%", "70%", "30%"],
  ["50%", "90%", "50%"],
  ["40%", "75%", "40%"],
  ["60%", "45%", "60%"],
  ["35%", "80%", "35%"],
  ["45%", "85%", "45%"],
];

export default function WhyChooseUs() {
  const [speedVal, setSpeedVal] = useState(0);

  // Speed counter animation for the Performance card
  useEffect(() => {
    const handle = setTimeout(() => {
      let val = 0;
      const interval = setInterval(() => {
        val += 3;
        if (val >= 99) {
          setSpeedVal(99);
          clearInterval(interval);
        } else {
          setSpeedVal(val);
        }
      }, 30);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(handle);
  }, []);

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#05021a]">
      {/* Vercel-style background radial neon rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70rem] h-[35rem] bg-[radial-gradient(ellipse_at_top,rgba(0,242,254,0.06)_0%,rgba(157,78,221,0.03)_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3">
            Architectural Focus
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Linear Engineering. Vercel Performance.
          </h3>
          <p className="text-text-secondary text-sm mt-4 font-light max-w-xl mx-auto">
            Drawing core system principles from top-tier silicon products to build lightweight, zero-latency business architectures.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Innovative Solutions (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between min-h-[300px] group overflow-hidden relative"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/5 blur-2xl rounded-full opacity-50 group-hover:bg-accent-cyan/10 transition-colors pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="space-y-4 max-w-md">
                <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan w-fit">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-white text-xl">Innovative AI Solutions</h4>
                <p className="text-text-secondary text-xs font-light leading-relaxed">
                  Integrating customized large language models, structured agent systems, and automated pipelines directly to optimize business workflows.
                </p>
              </div>

              {/* Polished IDE console */}
              <div className="w-full md:w-64 bg-[#0a061e] border border-white/10 rounded-xl overflow-hidden shadow-inner shrink-0 relative">
                <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/5 text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[8px] font-mono tracking-wider">nexavaro_ai_agent.py</span>
                </div>
                <div className="p-3 font-mono text-[9px] leading-normal space-y-1 select-none">
                  <p><span className="text-purple-400 font-semibold">import</span> nexavaro_core <span className="text-purple-400 font-semibold">as</span> nc</p>
                  <p>agent = nc.<span className="text-blue-400">Agent</span>(model=<span className="text-amber-300">&quot;aurora-v1&quot;</span>)</p>
                  <p>agent.<span className="text-yellow-400">add_memory</span>(store=<span className="text-amber-300">&quot;chromadb&quot;</span>)</p>
                  <p>agent.<span className="text-yellow-400">deploy</span>(host=<span className="text-amber-300">&quot;vercel&quot;</span>)</p>
                  <p className="text-emerald-400 mt-2 font-semibold">{"// Output: Uplink Active [2ms]"}</p>
                </div>
              </div>
            </div>
            
            <span className="text-[10px] text-accent-cyan uppercase tracking-widest font-bold mt-6 group-hover:translate-x-1.5 transition-transform duration-300 block">
              Learn workflow →
            </span>
          </motion.div>

          {/* Card 2: Fast Performance (Col span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between min-h-[300px] group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-blue/5 blur-2xl rounded-full pointer-events-none" />

            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-xl">Fast Performance</h4>
              <p className="text-text-secondary text-xs font-light leading-relaxed">
                Optimized serverless caching and lightweight JS payloads yielding 100% scores on Core Web Vitals.
              </p>
            </div>

            {/* Performance gauge visual with glow backdrop */}
            <div className="flex items-center gap-4 border border-white/5 bg-white/5 rounded-2xl p-4 mt-6 relative overflow-hidden">
              <div className="absolute -left-2 -bottom-2 w-16 h-16 rounded-full bg-accent-cyan/10 blur-xl pointer-events-none" />
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="#00f2fe"
                    strokeWidth="4"
                    strokeDasharray={125}
                    strokeDashoffset={125 - (125 * speedVal) / 100}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <span className="absolute text-[10px] text-white font-bold">{speedVal}%</span>
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Speed Index</span>
                <span className="text-[9px] text-emerald-400">Excellent (A+)</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Secure Systems (Col span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between min-h-[300px] group relative"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-purple/5 blur-2xl rounded-full pointer-events-none" />

            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple w-fit">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-xl">Secure Architecture</h4>
              <p className="text-text-secondary text-xs font-light leading-relaxed">
                Utilizing AES-256 database encryption, strict SSL handshakes, and OAuth2 security parameters.
              </p>
            </div>

            {/* Simulated Radar Matrix scanning */}
            <div className="h-16 w-full bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center mt-6">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-purple/40 animate-pulse" style={{ animationDuration: "1.5s" }} />
              <span className="font-mono text-[9px] text-accent-purple flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-ping" />
                DATABASE COMPLIANCE: 100%
              </span>
            </div>
          </motion.div>

          {/* Card 4: Scalable Architecture (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between min-h-[300px] group relative"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-pink/5 blur-2xl rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="space-y-4 max-w-md">
                <div className="p-3 rounded-2xl bg-accent-pink/10 text-accent-pink w-fit">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-white text-xl">Scalable Clusters</h4>
                <p className="text-text-secondary text-xs font-light leading-relaxed">
                  Deploying on containerized clusters with auto-replication configurations that handle rapid user spikes smoothly.
                </p>
              </div>

              {/* Cluster nodes SVG */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl w-full md:w-60 shrink-0">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center text-[8px] font-mono text-slate-400">
                    <span>NODE_CLUSTER</span>
                    <span className="text-accent-pink">AUTO-SCALING</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                      <div key={idx} className="h-6 w-full rounded bg-accent-pink/20 relative overflow-hidden">
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-accent-pink"
                          animate={{ height: heightKeyframes[(idx - 1) % heightKeyframes.length] }}
                          transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[10px] text-accent-pink uppercase tracking-widest font-bold mt-6 group-hover:translate-x-1.5 transition-transform duration-300 block">
              Examine cluster topology →
            </span>
          </motion.div>

          {/* Card 5: Modern UI/UX (Col span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between min-h-[300px] group relative"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-cyan/5 blur-2xl rounded-full pointer-events-none" />

            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan w-fit">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-xl">Modern UI/UX</h4>
              <p className="text-text-secondary text-xs font-light leading-relaxed">
                Stunning glassmorphism details, Outfit typography styling, and smooth desktop-to-mobile layouts.
              </p>
            </div>

            {/* Interactive styled hover card wrapper */}
            <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between text-[10px] text-white mt-6 group-hover:border-accent-cyan/35 transition-colors">
              <span>Interactive Elements</span>
              <span className="text-accent-cyan font-bold font-mono">120 FPS</span>
            </div>
          </motion.div>

          {/* Card 6: AI Integration (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between min-h-[300px] group relative"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/5 blur-2xl rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="space-y-4 max-w-md">
                <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple w-fit">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-white text-xl">Intelligent Integrations</h4>
                <p className="text-text-secondary text-xs font-light leading-relaxed">
                  Native hooks to vector databases like Pinecone/pgvector, prompt analytics monitors, and customized semantic search caches.
                </p>
              </div>

              {/* Data vectors simulated screen */}
              <div className="w-full md:w-60 bg-black/50 border border-white/10 p-4 rounded-xl font-mono text-[8px] text-slate-400 shrink-0">
                <div className="flex justify-between items-center text-accent-purple border-b border-white/5 pb-2 mb-2 font-bold">
                  <span>VECTOR_SEARCH_UPLINK</span>
                  <span>99% SIMILARITY</span>
                </div>
                <div className="space-y-1">
                  <p>QUERY: &quot;ai agency bangalore&quot;</p>
                  <p className="text-white">MATCH_01: id_8429 [Dist: 0.984]</p>
                  <p className="text-white">MATCH_02: id_3920 [Dist: 0.892]</p>
                </div>
              </div>
            </div>

            <span className="text-[10px] text-accent-purple uppercase tracking-widest font-bold mt-6 group-hover:translate-x-1.5 transition-transform duration-300 block">
              Read integration guides →
            </span>
          </motion.div>

          {/* Card 7: Command Line Uplink (Full width md:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-3 p-8 rounded-3xl glass-card border border-white/5 flex flex-col lg:flex-row gap-8 items-center justify-between min-h-[300px] group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-lg relative z-10">
              <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan w-fit">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-2xl">Virtual Uplink Control Console</h4>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Interact directly with our system services. Click the quick query controls below to scan active ERP matrices, core tech stacks, organizational missions, and verified communication lines in real-time.
              </p>
            </div>

            <div className="w-full lg:w-[500px] shrink-0 relative z-10">
              <InteractiveConsole />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
