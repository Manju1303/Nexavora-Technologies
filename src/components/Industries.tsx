"use client";

import { motion } from "framer-motion";
import { Activity, GraduationCap, Building2, Rocket } from "lucide-react";

const industries = [
  {
    title: "Healthcare & Life Sciences",
    icon: Activity,
    description:
      "Powering hospital portals, clinic management databases, and digital accreditation support dashboards ensuring absolute compliance.",
    highlights: ["Hospital Portals", "NABH Accreditation", "Appointment Systems", "Clinical Databases"],
    color: "cyan",
  },
  {
    title: "Education & E-Learning",
    icon: GraduationCap,
    description:
      "Engineering college administration ERPs, student lead capture channels, and study abroad counseling dashboards.",
    highlights: ["College Portals", "Study Abroad Listings", "Career Guidance Info", "Lead Management"],
    color: "purple",
  },
  {
    title: "Enterprise ERP & SaaS",
    icon: Building2,
    description:
      "Building robust employee tracking databases, automated attendance checking, and multi-tenant subscription software.",
    highlights: ["Staff Trackers", "Attendance Systems", "Multi-Tenant SaaS", "CRM Integrations"],
    color: "blue",
  },
  {
    title: "Startups & Scaleups",
    icon: Rocket,
    description:
      "Crafting high-speed custom web architectures, responsive Android applications, and serverless API database uplinks.",
    highlights: ["Next.js Web Apps", "Android Applications", "Serverless Deployments", "GraphQL/REST APIs"],
    color: "pink",
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

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background Neon Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-light-blue blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-light-purple blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3"
          >
            Industries We Serve
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Sectors Powering Our Engineering
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;

            const borderColors = {
              cyan: "hover:border-accent-cyan/20 hover:shadow-accent-cyan/5",
              purple: "hover:border-accent-purple/20 hover:shadow-accent-purple/5",
              blue: "hover:border-accent-blue/20 hover:shadow-accent-blue/5",
              pink: "hover:border-accent-pink/20 hover:shadow-accent-pink/5",
            };

            const iconColors = {
              cyan: "bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white",
              purple: "bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple group-hover:text-white",
              blue: "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white",
              pink: "bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white",
            };

            return (
              <motion.div
                key={ind.title}
                variants={cardVariants}
                className={`group flex flex-col p-8 rounded-3xl glass-card border border-white/5 shadow-lg shadow-black/10 hover:-translate-y-1.5 transition-all duration-300 ${
                  borderColors[ind.color as keyof typeof borderColors]
                }`}
              >
                {/* Icon wrapper */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/5 transition-all duration-300 ${
                    iconColors[ind.color as keyof typeof iconColors]
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h4 className="font-extrabold text-white text-lg mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                  {ind.title}
                </h4>

                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed font-light mb-6 flex-grow">
                  {ind.description}
                </p>

                {/* Bullet Highlights */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {ind.highlights.map((high, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] text-text-secondary font-medium"
                    >
                      {high}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
