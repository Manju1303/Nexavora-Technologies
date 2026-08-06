"use client";

import { motion } from "framer-motion";
import { Lightbulb, Award, HeartHandshake, Trophy, BookOpen } from "lucide-react";

const values = [
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "We embrace emerging technologies to create forward-thinking digital solutions.",
    color: "violet",
    gradient: "from-accent-violet/20 to-accent-violet/5",
  },
  {
    title: "Quality",
    icon: Award,
    description: "We maintain high standards in design, development, security, and performance.",
    color: "cyan",
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
  },
  {
    title: "Integrity",
    icon: HeartHandshake,
    description: "We build trust through honesty, transparency, and accountability.",
    color: "amber",
    gradient: "from-accent-amber/20 to-accent-amber/5",
  },
  {
    title: "Customer Success",
    icon: Trophy,
    description: "Our clients' success is the foundation of everything we do.",
    color: "pink",
    gradient: "from-accent-pink/20 to-accent-pink/5",
  },
  {
    title: "Continuous Learning",
    icon: BookOpen,
    description: "Technology evolves rapidly, and so do we through constant improvement and innovation.",
    color: "blue",
    gradient: "from-accent-blue/20 to-accent-blue/5",
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

export default function CoreValues() {
  return (
    <section id="values" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-light-violet blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-light-amber blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-violet mb-3"
          >
            Our Foundation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Core Values That Guide Us
          </motion.h3>
          <p className="text-text-secondary text-sm mt-4 font-light max-w-xl mx-auto">
            These principles define who we are, how we work, and the quality we deliver to every client.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-5 rounded-full" />
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {values.map((val) => {
            const Icon = val.icon;

            const iconBg = {
              violet: "bg-accent-violet/10 text-accent-violet group-hover:bg-accent-violet group-hover:text-white",
              cyan: "bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white",
              amber: "bg-accent-amber/10 text-accent-amber group-hover:bg-accent-amber group-hover:text-white",
              pink: "bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white",
              blue: "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white",
            };

            const hoverBorder = {
              violet: "hover:border-accent-violet/20 hover:shadow-accent-violet/5",
              cyan: "hover:border-accent-cyan/20 hover:shadow-accent-cyan/5",
              amber: "hover:border-accent-amber/20 hover:shadow-accent-amber/5",
              pink: "hover:border-accent-pink/20 hover:shadow-accent-pink/5",
              blue: "hover:border-accent-blue/20 hover:shadow-accent-blue/5",
            };

            return (
              <motion.div
                key={val.title}
                variants={cardVariants}
                className={`group flex flex-col items-center text-center p-6 rounded-3xl glass-card border border-white/5 shadow-lg shadow-black/10 hover:-translate-y-2 transition-all duration-300 ${
                  hoverBorder[val.color as keyof typeof hoverBorder]
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/5 transition-all duration-300 ${
                    iconBg[val.color as keyof typeof iconBg]
                  }`}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h4 className="font-extrabold text-white text-base mb-2 tracking-tight">
                  {val.title}
                </h4>

                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed font-light">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
