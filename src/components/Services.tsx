"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe2,
  Smartphone,
  Building2,
  Activity,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    icon: Code2,
    description:
      "Engineering robust custom software architectures, desktop systems, SaaS frameworks, and business management consoles tailored for operational excellence.",
    list: [
      "Custom Software Development",
      "SaaS Product Development",
      "Desktop Application Development",
      "Business Management Systems"
    ],
    color: "cyan",
  },
  {
    title: "Web Development",
    icon: Globe2,
    description:
      "Crafting light-speed corporate sites, specialized educational/healthcare portals, e-commerce stores, and high-fidelity Progressive Web Apps (PWAs).",
    list: [
      "Corporate Websites",
      "Healthcare Websites",
      "Educational Portals",
      "E-Commerce Platforms",
      "Portfolio Websites",
      "Progressive Web Applications (PWA)"
    ],
    color: "blue",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Designing and deploying feature-rich native Android applications and cross-platform mobile business workflows optimized for high retention.",
    list: [
      "Android Applications",
      "Business Mobile Solutions",
      "Educational Applications",
      "Healthcare Applications"
    ],
    color: "pink",
  },
  {
    title: "ERP & Management Systems",
    icon: Building2,
    description:
      "Automating campus administrative workflows, staff monitoring matrices, attendance record engines, and customized enterprise resource software.",
    list: [
      "College ERP Solutions",
      "Staff Monitoring Systems",
      "Attendance Management Systems",
      "Workflow Automation"
    ],
    color: "cyan",
  },
  {
    title: "Healthcare Digital Solutions",
    icon: Activity,
    description:
      "Digitizing medical practices through interactive hospital sites, appointment booking platforms, and digital NABH accreditation support workflows.",
    list: [
      "Hospital Websites",
      "NABH Support Systems",
      "Appointment Management Solutions",
      "Healthcare Management Platforms"
    ],
    color: "purple",
  },
  {
    title: "Professional Training & Internships",
    icon: GraduationCap,
    description:
      "Empowering students and aspiring engineers through practical software internships and core coding academies in Full-Stack, Python, Java, AI, and UI/UX.",
    list: [
      "Full Stack Development & Python/Java",
      "AI & Machine Learning Basics",
      "Software & Web Dev Internships",
      "Mobile App & UI/UX Internships",
      "AI & Data Science Internships"
    ],
    color: "blue",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-light-cyan blur-3xl opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-light-purple blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Futuristic Software Solutions
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            
            // Color theme class names
            const glowColors = {
              cyan: "group-hover:border-accent-cyan/40 group-hover:shadow-accent-cyan/5 text-accent-cyan bg-accent-cyan/5 border-accent-cyan/10",
              purple: "group-hover:border-accent-purple/40 group-hover:shadow-accent-purple/5 text-accent-purple bg-accent-purple/5 border-accent-purple/10",
              blue: "group-hover:border-accent-blue/40 group-hover:shadow-accent-blue/5 text-accent-blue bg-accent-blue/5 border-accent-blue/10",
              pink: "group-hover:border-accent-pink/40 group-hover:shadow-accent-pink/5 text-accent-pink bg-accent-pink/5 border-accent-pink/10",
            };

            const iconColors = {
              cyan: "bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white",
              purple: "bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple group-hover:text-white",
              blue: "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white",
              pink: "bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white",
            };

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group flex flex-col p-8 rounded-3xl glass-card border border-white/5 shadow-lg shadow-black/10 hover:-translate-y-1.5 transition-all duration-300 ${glowColors[service.color as keyof typeof glowColors]}`}
              >
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/5 transition-all duration-300 ${iconColors[service.color as keyof typeof iconColors]}`}>
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h4 className="font-extrabold text-white text-lg mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed font-light flex-grow">
                  {service.description}
                </p>

                {/* List Details */}
                <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-4 text-xs font-light text-slate-400 group-hover:text-slate-300 transition-colors">
                  {service.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        service.color === 'cyan' ? 'bg-accent-cyan/60 group-hover:bg-accent-cyan' :
                        service.color === 'purple' ? 'bg-accent-purple/60 group-hover:bg-accent-purple' :
                        service.color === 'blue' ? 'bg-accent-blue/60 group-hover:bg-accent-blue' :
                        'bg-accent-pink/60 group-hover:bg-accent-pink'
                      } transition-colors`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Micro-arrow CTA inside card */}
                <div className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-transparent group-hover:text-accent-cyan transition-all duration-300">
                  <span>Learn more</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
