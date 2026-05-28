"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";

const categories = ["All", "AI Systems", "Health Tech", "SaaS & Utilities"];

const projects = [
  {
    title: "AURORA (AI Conversational Avatar)",
    category: "AI Systems",
    description:
      "A next-generation 3D conversational agent leveraging large language models and real-time speech processing. Built for context-aware natural interactions with high-fidelity speech-to-avatar rendering.",
    tech: ["Python", "LLM", "Speech APIs", "NLP"],
    link: "https://github.com/Manju1303",
    color: "cyan",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>AURORA_AGENT_v1.0</span>
          <span className="text-accent-cyan flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" /> LISTENING
          </span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="flex justify-between text-xs text-white">
            <span>Voice Input:</span>
            <span className="text-accent-cyan font-bold">"Hello Aurora..."</span>
          </div>
          <div className="flex gap-0.5 justify-center items-end h-8">
            <div className="w-1 bg-accent-cyan h-4 animate-pulse" />
            <div className="w-1 bg-accent-cyan h-6 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-1 bg-accent-cyan h-2 animate-pulse" style={{ animationDelay: "0.4s" }} />
            <div className="w-1 bg-accent-cyan h-8 animate-pulse" style={{ animationDelay: "0.1s" }} />
            <div className="w-1 bg-accent-cyan h-5 animate-pulse" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded border border-white/5 text-center text-[7px] text-accent-cyan">
          NLP RESPONSE: LATENCY 140ms
        </div>
      </div>
    ),
  },
  {
    title: "Memora (AI Agent)",
    category: "AI Systems",
    description:
      "An intelligent RAG-based search agent with persistent semantic memory across user sessions, utilizing vectorized embeddings and ChromaDB index retrieval pipelines.",
    tech: ["Python", "Vector DB", "ChromaDB", "Semantic Search"],
    link: "https://github.com/Manju1303/Memora",
    color: "purple",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>MEMORA_RAG_DB</span>
          <span className="text-accent-purple">EMBEDDINGS: ACTIVE</span>
        </div>
        <div className="space-y-1 my-2">
          <div className="flex justify-between">
            <span>Vector Dimensions:</span>
            <span className="text-white">1536</span>
          </div>
          <div className="flex justify-between">
            <span>ChromaDB Index:</span>
            <span className="text-white font-bold">12,480 Nodes</span>
          </div>
          <div className="flex justify-between">
            <span>Retrieval Hits:</span>
            <span className="text-emerald-400 font-bold">99.2% Relevance</span>
          </div>
        </div>
        <div className="bg-white/5 p-1.5 rounded border border-white/5 text-center text-[7px] text-accent-purple">
          QUERY: "User preferences"
        </div>
      </div>
    ),
  },
  {
    title: "HealthGuard AI",
    category: "Health Tech",
    description:
      "A healthcare audit automation dashboard utilizing predictive data analytics for medical compliance scoring and NABH pre-entry facility pre-assessments.",
    tech: ["FastAPI", "React", "PostgreSQL", "Data Analytics"],
    link: "https://nabh.vercel.app",
    color: "blue",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>NABH_AUDIT_SYSTEM</span>
          <span className="text-accent-blue">AUDITING</span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="flex justify-between">
            <span>Compliance Score:</span>
            <span className="text-white font-bold">92.4%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[92%] h-full bg-accent-blue" />
          </div>
          <div className="flex justify-between text-[8px]">
            <span>Gaps Identified:</span>
            <span className="text-rose-400">4 / 250 checked</span>
          </div>
        </div>
        <div className="bg-white/5 p-1.5 rounded border border-white/5 text-center text-[8px] text-emerald-400">
          REPORT GENERATED
        </div>
      </div>
    ),
  },
  {
    title: "Air Canva",
    category: "AI Systems",
    description:
      "An immersive spatial creativity canvas powered by Computer Vision. Tracks real-time hand coordinates and finger gestures for zero-touch digital drawing using MediaPipe.",
    tech: ["JavaScript", "MediaPipe", "Canvas API", "Computer Vision"],
    link: "https://manju1303.github.io/Air-canva/",
    color: "pink",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>MEDIAPIPE_CANVA</span>
          <span className="text-accent-pink">GESTURE: ON</span>
        </div>
        <div className="flex items-center justify-center h-14 relative">
          <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-pink top-3 left-5" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-pink top-5 left-10" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-pink top-7 left-14" />
          <div className="absolute w-2 h-2 rounded-full bg-white top-1 left-12" />
          <svg className="w-full h-full stroke-accent-pink/30" strokeWidth="1">
            <line x1="20" y1="12" x2="40" y2="20" />
            <line x1="40" y1="20" x2="60" y2="28" />
            <line x1="60" y1="28" x2="52" y2="6" />
          </svg>
        </div>
        <div className="flex justify-between text-[8px] text-slate-400">
          <span>BRUSH COORDS:</span>
          <span className="text-accent-pink font-bold">X:124, Y:58</span>
        </div>
      </div>
    ),
  },
  {
    title: "Theft Detection System",
    category: "AI Systems",
    description:
      "An AI-powered video security monitoring engine. Analyzes streams in real time utilizing custom-trained Computer Vision models to flag suspicious activities and trigger warnings.",
    tech: ["Python", "OpenCV", "TensorFlow", "Threat Alerting"],
    link: "https://github.com/Manju1303",
    color: "pink",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>THEFT_DETECT_CV</span>
          <span className="text-rose-500 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" /> SCANNING
          </span>
        </div>
        <div className="relative h-12 border border-dashed border-rose-500/20 my-1 rounded flex items-center justify-center">
          <div className="absolute inset-0 bg-rose-500/5 animate-pulse" />
          <div className="border border-rose-500 w-16 h-8 flex flex-col items-start p-1 text-[5px] text-rose-500 font-bold relative">
            <span className="absolute -top-3 left-0">SUSPECT_A: 98%</span>
            <div className="w-1 h-1 border-t border-l border-rose-500 absolute top-0 left-0" />
            <div className="w-1 h-1 border-b border-r border-rose-500 absolute bottom-0 right-0" />
          </div>
        </div>
        <div className="text-[6px] text-rose-400 flex justify-between">
          <span>INTRUSION:</span>
          <span>WARNING_TRIGGERED</span>
        </div>
      </div>
    ),
  },
  {
    title: "Step Count",
    category: "Health Tech",
    description:
      "Real-time pedometer and health analyzer tracking native device motion sensor data and accelerometers, styled with highly reactive and low-latency metrics.",
    tech: ["JavaScript", "Sensors API", "Vercel", "Mobile Web"],
    link: "https://stepcount-eight.vercel.app/",
    color: "cyan",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>STEPCOUNT_API</span>
          <span className="text-accent-cyan">DEVICE_LINKED</span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="flex justify-between">
            <span>Steps Today:</span>
            <span className="text-white font-bold">8,421 / 10k</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[84%] h-full bg-accent-cyan" />
          </div>
          <div className="flex justify-between text-[8px]">
            <span>Active Calories:</span>
            <span className="text-accent-cyan">340 kcal</span>
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded text-center text-[7px] text-slate-400 border border-white/5">
          ACCELEROMETER: ACTIVE
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#05021a]">
      {/* Background neon lights */}
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] rounded-full bg-light-purple blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[35rem] h-[35rem] rounded-full bg-light-cyan blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3">
              Case Studies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Engineering Projects
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mt-4 rounded-full" />
          </div>

          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-card border border-white/5 bg-white/5 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-md shadow-accent-cyan/10"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const borderColors = {
                cyan: "hover:border-accent-cyan/20",
                purple: "hover:border-accent-purple/20",
                blue: "hover:border-accent-blue/20",
                pink: "hover:border-accent-pink/20",
              };

              const badgeColors = {
                cyan: "bg-accent-cyan/10 text-accent-cyan",
                purple: "bg-accent-purple/10 text-accent-purple",
                blue: "bg-accent-blue/10 text-accent-blue",
                pink: "bg-accent-pink/10 text-accent-pink",
              };

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className={`group rounded-3xl glass-card border border-white/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-stretch justify-between ${
                    borderColors[project.color as keyof typeof borderColors]
                  }`}
                >
                  {/* Left Column (Info) */}
                  <div className="flex flex-col justify-between flex-grow md:max-w-[60%]">
                    <div>
                      {/* Category Badge */}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${
                          badgeColors[project.color as keyof typeof badgeColors]
                        }`}
                      >
                        {project.category}
                      </span>
                      {/* Title */}
                      <h4 className="text-xl font-extrabold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h4>
                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed font-light mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-text-secondary font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-accent-cyan transition-colors"
                    >
                      View Live Project
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Right Column (Visual Mockup Grid) */}
                  <div className="w-full md:w-[35%] min-h-[160px] rounded-2xl bg-bg-dark/80 border border-white/10 relative overflow-hidden flex items-center justify-center self-center shadow-inner group-hover:border-white/15 transition-all">
                    {/* Background glow node */}
                    <div
                      className={`absolute w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none ${
                        project.color === "cyan"
                          ? "bg-accent-cyan"
                          : project.color === "purple"
                          ? "bg-accent-purple"
                          : project.color === "blue"
                          ? "bg-accent-blue"
                          : "bg-accent-pink"
                      }`}
                    />
                    {project.preview}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
