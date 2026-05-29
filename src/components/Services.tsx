"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Building2,
  Cpu,
  Database,
  Globe2,
  Layers,
  Palette,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "ERP Development",
    icon: Building2,
    description:
      "Enterprise Resource Planning systems customized to streamline your operations, inventory, finances, and HR in a unified secure console.",
    color: "cyan",
  },
  {
    title: "AI Solutions",
    icon: Brain,
    description:
      "Leverage NLP, machine learning models, predictive data models, and generative intelligence to automate workflows and unlock analytics.",
    color: "purple",
  },
  {
    title: "Web Development",
    icon: Globe2,
    description:
      "Modern, lightning-fast web applications built on Next.js, React, and serverless stacks, tailored for conversion and global scale.",
    color: "blue",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Native and cross-platform (iOS & Android) mobile apps built with React Native and Flutter, optimizing animations and user retention.",
    color: "pink",
  },
  {
    title: "Cloud Solutions",
    icon: Cpu,
    description:
      "AWS/GCP/Vercel serverless deployments, multi-region database replication, docker orchestration, and enterprise security auditing.",
    color: "cyan",
  },
  {
    title: "SaaS Platforms",
    icon: Layers,
    description:
      "Multi-tenant SaaS products designed with recurring subscription integrations, custom tenant routing, and highly scalable user management.",
    color: "purple",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "High-fidelity responsive UI mockups, modern color tokens, micro-interactions, and detailed UX customer journey research.",
    color: "blue",
  },
  {
    title: "API & Database Development",
    icon: Database,
    description:
      "Optimized GraphQL & REST APIs, Redis caching layers, PostgreSQL/MongoDB schemas, and secure data sync webhooks.",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
