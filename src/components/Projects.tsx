"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Healthcare", "Education", "ERP & SaaS"];

const projects = [
  {
    title: "Arockia Medical Centre",
    category: "Healthcare",
    description:
      "A premium multi-speciality hospital platform featuring real-time doctor appointment bookings, clinical department directory management, emergency speed links, and NABH-compliant presentations.",
    tech: ["React", "Next.js", "Tailwind CSS", "SEO Tools"],
    link: "https://arockiamedicalcentre.in/?utm_source=chatgpt.com",
    color: "cyan",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>AROCKIA_MED_PORTAL</span>
          <span className="text-accent-cyan flex items-center gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" /> 24/7 ER ACTIVE
          </span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="flex justify-between text-xs text-white">
            <span>Appointments:</span>
            <span className="text-accent-cyan font-bold">14 Active</span>
          </div>
          <div className="bg-white/5 p-1.5 rounded border border-white/5 space-y-1">
            <div className="flex justify-between text-[7px]">
              <span>Dr. Sarah (Cardiology)</span>
              <span className="text-emerald-400 font-bold">ON DUTY</span>
            </div>
            <div className="flex justify-between text-[7px]">
              <span>Dr. Vignesh (Orthopedic)</span>
              <span className="text-emerald-400 font-bold">ON DUTY</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded border border-white/5 text-center text-[7px] text-accent-cyan">
          NABH PRESENTATION: COMPLIANT
        </div>
      </div>
    ),
  },
  {
    title: "Insta Educational Guidance Platform",
    category: "Education",
    description:
      "A comprehensive educational counseling and guidance platform supporting college listing directories, study abroad support systems, student lead generation tools, and career guidance paths.",
    tech: ["React", "Tailwind CSS", "Next.js", "Lead Analytics"],
    link: "https://github.com/Manju1303",
    color: "pink",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>INSTA_GUIDANCE_HUB</span>
          <span className="text-accent-pink font-bold">LEADS UPLINK: OK</span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="flex justify-between text-xs text-white">
            <span>Student Inquiries:</span>
            <span className="text-accent-pink font-bold">154+ Today</span>
          </div>
          <div className="flex justify-between">
            <span>Universities Listed:</span>
            <span className="text-white font-bold">150+ Global</span>
          </div>
          <div className="flex justify-between">
            <span>Active Admissions:</span>
            <span className="text-emerald-400 font-bold">42 Transmitting</span>
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded border border-white/5 text-center text-[7px] text-accent-pink">
          STUDY ABROAD: UPLINK ACTIVE
        </div>
      </div>
    ),
  },
  {
    title: "STEPCOUNT Staff Monitoring System",
    category: "ERP & SaaS",
    description:
      "An advanced college administration and employee tracking dashboard monitoring real-time check-ins, staff attendance records, dashboard statistics, and administrative workflows.",
    tech: ["FastAPI", "React", "PostgreSQL", "Dashboard Analytics"],
    link: "https://stepcount-eight.vercel.app/",
    color: "blue",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>STEPCOUNT_STAFF_ERP</span>
          <span className="text-accent-blue font-bold">TRACKING ACTIVE</span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="flex justify-between">
            <span>Staff Present:</span>
            <span className="text-white font-bold">94.8%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[94%] h-full bg-accent-blue" />
          </div>
          <div className="flex justify-between text-[8px]">
            <span>Activity Log Speed:</span>
            <span className="text-accent-blue font-bold">12ms Sync</span>
          </div>
        </div>
        <div className="bg-white/5 p-1.5 rounded border border-white/5 text-center text-[8px] text-emerald-400">
          ATTENDANCE MONITORED
        </div>
      </div>
    ),
  },
  {
    title: "NABH Documentation & Digital Support",
    category: "Healthcare",
    description:
      "A specialized hospital accreditation digitization and documentation management platform offering automated checklists, secure records storage, and database compliance checking.",
    tech: ["React", "PostgreSQL", "Compliance Checkers", "Docker"],
    link: "https://nabh.vercel.app",
    color: "purple",
    preview: (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-slate-300">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span>NABH_COMPLIANCE_SYS</span>
          <span className="text-accent-purple font-bold">MONITORING</span>
        </div>
        <div className="space-y-1 my-2">
          <div className="flex justify-between">
            <span>Accreditation Docs:</span>
            <span className="text-white font-bold">42/42 Verified</span>
          </div>
          <div className="flex justify-between">
            <span>Audit Readiness:</span>
            <span className="text-emerald-400 font-bold">100% Score</span>
          </div>
          <div className="flex justify-between">
            <span>Compliance Sync:</span>
            <span className="text-white">Active Node</span>
          </div>
        </div>
        <div className="bg-white/5 p-1.5 rounded border border-white/5 text-center text-[7px] text-accent-purple">
          COMPLIANCE SECURED (AES-256)
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
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-dark">
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
