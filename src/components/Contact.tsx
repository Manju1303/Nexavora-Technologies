"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle, Globe } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "AI Solutions",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    "AI Solutions",
    "ERP Development",
    "Web Development",
    "Mobile Apps",
    "SaaS Platforms",
    "UI/UX Design",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/ceo.nexavora@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Service: form.service,
          Message: form.message,
          _subject: `New Nexavaro Lead: ${form.name} (${form.service})`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setForm({ name: "", email: "", service: "AI Solutions", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Form submission failed. Please try again or email us directly at ceo.nexavora@gmail.com");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05021a]">
      {/* Background glow layers */}
      <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-light-purple blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-light-cyan blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Initiate Your Engineering Cycle
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 rounded-3xl glass-card border border-white/5 shadow-2xl relative"
            >
              {/* Form Success Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3 z-20 backdrop-blur-md"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-semibold">
                      Transmission Successful! Our tech coordinators will reply within 4 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`px-4 py-3 rounded-xl text-sm font-light glass-input ${
                        errors.name ? "border-rose-500/40" : ""
                      }`}
                    />
                    {errors.name && (
                      <span className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className={`px-4 py-3 rounded-xl text-sm font-light glass-input ${
                        errors.email ? "border-rose-500/40" : ""
                      }`}
                    />
                    {errors.email && (
                      <span className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service choice */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Select Target Service
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="px-4 py-3 rounded-xl text-sm font-light glass-input cursor-pointer"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv} className="bg-bg-dark text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Project Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your goals, tech stack preferences, timelines, etc..."
                    className={`px-4 py-3 rounded-xl text-sm font-light glass-input resize-none ${
                      errors.message ? "border-rose-500/40" : ""
                    }`}
                  />
                  {errors.message && (
                    <span className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg shadow-accent-cyan/15 hover:shadow-accent-cyan/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 glow-on-hover cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Establishing Uplink...
                    </>
                  ) : (
                    <>
                      Transmit Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Details & Radar scan */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl glass-card border border-white/5 space-y-6"
            >
              <h4 className="font-extrabold text-white text-lg border-b border-white/5 pb-3">
                Communications Hub
              </h4>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
                    Sales & Support
                  </span>
                  <a href="mailto:ceo.nexavora@gmail.com" className="text-white hover:text-accent-cyan text-sm transition-colors mt-0.5 block font-medium">
                    ceo.nexavora@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
                    Direct Hotline
                  </span>
                  <a href="tel:+919159926553" className="text-white hover:text-accent-blue text-sm transition-colors mt-0.5 block font-medium">
                    +91 91599 26553
                  </a>
                </div>
              </div>

              {/* Global Workspace */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/10">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
                    Global Ecosystem
                  </span>
                  <span className="text-white text-sm mt-0.5 block font-light leading-relaxed">
                    100% Remote-First Startup<br />
                    Distributed Network & Agile Teams<br />
                    Collaborating Worldwide
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Global Coordinates map overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-grow min-h-[220px] rounded-3xl bg-bg-dark border border-white/10 relative overflow-hidden flex items-center justify-center p-6"
            >
              {/* Radial scanner */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
              <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-white/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "12s" }} />

              {/* Grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

              {/* Custom SVG Location Map Vector */}
              <svg viewBox="0 0 300 150" className="w-full h-full relative z-10 opacity-70">
                {/* Grid dots/stars background */}
                <g fill="rgba(255,255,255,0.05)">
                  <circle cx="20" cy="20" r="1" />
                  <circle cx="60" cy="30" r="1" />
                  <circle cx="100" cy="20" r="1" />
                  <circle cx="140" cy="30" r="1" />
                  <circle cx="180" cy="20" r="1" />
                  <circle cx="220" cy="30" r="1" />
                  <circle cx="260" cy="20" r="1" />
                  
                  <circle cx="40" cy="60" r="1" />
                  <circle cx="80" cy="70" r="1" />
                  <circle cx="120" cy="60" r="1" />
                  <circle cx="160" cy="70" r="1" />
                  <circle cx="200" cy="60" r="1" />
                  <circle cx="240" cy="70" r="1" />
                  <circle cx="280" cy="60" r="1" />

                  <circle cx="20" cy="100" r="1" />
                  <circle cx="60" cy="110" r="1" />
                  <circle cx="100" cy="100" r="1" />
                  <circle cx="140" cy="110" r="1" />
                  <circle cx="180" cy="100" r="1" />
                  <circle cx="220" cy="110" r="1" />
                  <circle cx="260" cy="100" r="1" />
                </g>

                {/* Interconnecting pathways */}
                <g stroke="rgba(0, 242, 254, 0.15)" strokeWidth="0.8" fill="none">
                  {/* SF to NYC */}
                  <path d="M 50,50 Q 70,42 90,45" strokeDasharray="2 2" />
                  {/* NYC to LDN */}
                  <path d="M 90,45 Q 120,30 155,38" />
                  {/* LDN to FRA */}
                  <path d="M 155,38 L 165,42" />
                  {/* FRA to IND */}
                  <path d="M 165,42 Q 190,55 215,75" />
                  {/* IND to SGP */}
                  <path d="M 215,75 L 235,90" />
                  {/* SGP to NRT */}
                  <path d="M 235,90 Q 250,70 265,55" />
                  {/* SGP to SYD */}
                  <path d="M 235,90 Q 260,110 280,125" />
                </g>

                {/* Animated Global Packets */}
                <motion.circle
                  r="1.5"
                  fill="#00f2fe"
                  animate={{
                    cx: [50, 90, 155, 165, 215, 235],
                    cy: [50, 45, 38, 42, 75, 90]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  r="1.5"
                  fill="#9d4edd"
                  animate={{
                    cx: [235, 265, 50, 90],
                    cy: [90, 55, 50, 45]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2.5 }}
                />

                {/* Nodes */}
                {/* SF */}
                <circle cx="50" cy="50" r="2.5" fill="#00f2fe" />
                
                {/* NYC */}
                <circle cx="90" cy="45" r="2.5" fill="#3b82f6" />
                
                {/* LDN */}
                <circle cx="155" cy="38" r="2.5" fill="#3b82f6" />

                {/* FRA */}
                <circle cx="165" cy="42" r="2.5" fill="#9d4edd" />

                {/* India (Main hub) */}
                <g>
                  <circle cx="215" cy="75" r="3.5" fill="#f72585" />
                  <circle cx="215" cy="75" r="8" fill="none" stroke="#f72585" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: "2s" }} />
                </g>

                {/* SGP */}
                <circle cx="235" cy="90" r="2.5" fill="#00f2fe" />
                
                {/* NRT */}
                <circle cx="265" cy="55" r="2.5" fill="#9d4edd" />

                {/* SYD */}
                <circle cx="280" cy="125" r="2.5" fill="#3b82f6" />

                {/* Node Labels */}
                <text x="38" y="52" fill="#94a3b8" fontSize="5" fontFamily="monospace">SF</text>
                <text x="94" y="47" fill="#94a3b8" fontSize="5" fontFamily="monospace">NYC</text>
                <text x="143" y="36" fill="#94a3b8" fontSize="5" fontFamily="monospace">LDN</text>
                <text x="210" y="70" fill="#f72585" fontSize="5.5" fontFamily="monospace" fontWeight="bold">IND</text>
                <text x="240" y="93" fill="#94a3b8" fontSize="5" fontFamily="monospace">SGP</text>
              </svg>

              {/* Location Scan indicator */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10 flex items-center gap-1.5 font-mono text-[9px] text-accent-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
                <span>REMOTE LINK ESTABLISHED: ~12ms</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
