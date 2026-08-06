"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Target, Rocket, Users, Shield, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: 120, label: "Projects Completed", suffix: "+", id: "projects" },
  { value: 15, label: "Technologies Used", suffix: "+", id: "tech" },
  { value: 99, label: "Client Satisfaction", suffix: "%", id: "satisfaction" },
  { value: 24, label: "Support Response", suffix: "/7", id: "support" },
];

const missionPoints = [
  { icon: Target, text: "Deliver high-quality software tailored to client needs." },
  { icon: Rocket, text: "Build AI-powered solutions that simplify complex business processes." },
  { icon: BookOpen, text: "Foster innovation through modern technologies and continuous learning." },
  { icon: Users, text: "Maintain transparency, reliability, and long-term client partnerships." },
  { icon: Shield, text: "Create scalable and secure digital products that generate real business impact." },
];

export default function About() {
  const [counts, setCounts] = useState({
    projects: 0,
    tech: 0,
    satisfaction: 0,
    support: 0,
  });

  const [founderImgError, setFounderImgError] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        projects: Math.floor((stats[0].value / steps) * currentStep),
        tech: Math.floor((stats[1].value / steps) * currentStep),
        satisfaction: Math.floor((stats[2].value / steps) * currentStep),
        support: 24,
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
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-light-violet blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-light-cyan blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-accent-violet mb-3"
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
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-5 rounded-full" />
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
              Nexavora Technologies is an innovative technology company specializing in Artificial Intelligence, custom software development, web and mobile applications, cloud solutions, and digital transformation. We help businesses, startups, educational institutions, and organizations leverage modern technologies to solve real-world challenges and accelerate growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary leading-relaxed font-light"
            >
              With expertise across AI, full-stack development, cloud computing, automation, and UI/UX design, we transform ideas into reliable, high-performance products that deliver measurable business value. Our mission is to build intelligent, scalable, and user-centric digital solutions that empower organizations to work smarter, innovate faster, and achieve lasting success.
            </motion.p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl glass-card-premium text-center flex flex-col justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">
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
              className="relative w-full max-w-[380px] rounded-3xl glass-card-premium p-6 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Outer decorative light */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent-violet/15 blur-xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-accent-cyan/10 blur-xl" />

              {/* Founder Avatar with neon gradient border */}
              <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-amber mb-6 shadow-xl shadow-accent-violet/15 group">
                <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center overflow-hidden relative">
                  {!founderImgError ? (
                    <img
                      src="/Nexavora-Technologies/about-image.jpeg"
                      alt="Manjunath - Founder & CEO of Nexavora Technologies"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes("/Nexavora-Technologies/about-image.jpeg")) {
                          target.src = "/Nexavora-Technologies/founder.jpg";
                        } else if (target.src.includes("/Nexavora-Technologies/founder.jpg")) {
                          target.src = "/about-image.jpeg";
                        } else if (target.src.includes("/about-image.jpeg")) {
                          target.src = "/founder.jpg";
                        } else {
                          setFounderImgError(true);
                        }
                      }}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <svg viewBox="0 0 100 100" className="w-20 h-20 text-text-secondary" fill="currentColor">
                      <path d="M50 10A20 20 0 1 0 50 50A20 20 0 1 0 50 10Z" fill="url(#founder-grad-light)" />
                      <path d="M50 60C30 60 10 72 10 90H90C90 72 70 60 50 60Z" fill="url(#founder-grad-dark)" />
                      <defs>
                        <linearGradient id="founder-grad-light" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                        <linearGradient id="founder-grad-dark" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#A855F7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>

              {/* Details */}
              <span className="font-extrabold text-white text-xl">Manjunath</span>
              <span className="text-xs font-semibold text-accent-violet uppercase tracking-widest mt-1">
                Founder & CEO
              </span>

              {/* Student Entrepreneur Badge */}
              <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/20 text-accent-amber text-[9px] font-bold uppercase tracking-wider">
                Student Entrepreneur
              </span>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                {["AI & ML", "Full-Stack", "Cloud", "UI/UX"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] text-text-secondary font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CEO Quote */}
              <p className="text-sm text-text-secondary mt-5 italic font-light relative px-4 border-l-2 border-accent-violet/30 text-left">
                &quot;Technology is not just about writing code—it&apos;s about creating meaningful solutions that empower people, simplify businesses, and shape the future.&quot;
              </p>

              {/* Signature */}
              <span className="font-serif text-white/40 text-lg mt-5 tracking-widest font-semibold block">
                Manjunath
              </span>
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl glass-card-premium p-8 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-accent-violet/10 text-accent-violet border border-accent-violet/20 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-6 h-6" />
              </div>
              <h5 className="font-extrabold text-white text-xl">Our Mission</h5>
            </div>
            <div className="space-y-3">
              {missionPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Icon className="w-4 h-4 text-accent-violet mt-0.5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed font-light text-sm">{point.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl glass-card-premium p-8 group glass-card-cyan"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h5 className="font-extrabold text-white text-xl">Our Vision</h5>
            </div>
            <p className="text-text-secondary leading-relaxed font-light text-sm mb-4">
              To become a globally recognized technology company that drives innovation through Artificial Intelligence and next-generation digital solutions, empowering businesses to thrive in the digital era.
            </p>
            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4 mt-4">
              {["Global Impact", "AI Innovation", "Digital Transformation", "Next-Gen Solutions"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-accent-cyan/5 border border-accent-cyan/10 text-accent-cyan text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
