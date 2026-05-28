"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Mock API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", service: "AI Solutions", message: "" });
      // Clear success banner after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
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
                  <a href="mailto:manjunathkaids23@jkkmct.edu.in" className="text-white hover:text-accent-cyan text-sm transition-colors mt-0.5 block font-medium">
                    manjunathkaids23@jkkmct.edu.in
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

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
                    Headquarters
                  </span>
                  <span className="text-white text-sm mt-0.5 block font-light leading-relaxed">
                    Nexavora Tech Office,<br />
                    Kallakurichi, Tamil Nadu,<br />
                    India
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Radar Coordinates map overlay */}
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
                {/* Simulated geographic nodes */}
                <path d="M 30,80 Q 50,60 80,75 T 120,40 T 160,80 T 220,50 T 270,70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 40,110 Q 90,130 140,110 T 240,120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Grid intersection ticks */}
                <circle cx="80" cy="75" r="2" fill="white" opacity="0.3" />
                <circle cx="120" cy="40" r="2" fill="white" opacity="0.3" />
                <circle cx="220" cy="50" r="2" fill="white" opacity="0.3" />

                {/* HQ Glowing Coordinate */}
                <motion.g
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Radar sweep */}
                  <circle cx="150" cy="75" r="24" fill="none" stroke="#00f2fe" strokeWidth="0.5" opacity="0.2" className="animate-ping" style={{ animationDuration: "3s" }} />
                  <circle cx="150" cy="75" r="12" fill="none" stroke="#00f2fe" strokeWidth="1" opacity="0.4" />
                  <circle cx="150" cy="75" r="4" fill="#00f2fe" />
                </motion.g>

                {/* Coordinates text */}
                <text x="160" y="80" fill="#00f2fe" fontSize="7" fontFamily="monospace" fontWeight="bold">
                  HQ: 11.7380° N, 78.9639° E
                </text>
              </svg>

              {/* Location Scan indicator */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10 flex items-center gap-1.5 font-mono text-[9px] text-accent-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
                <span>SCANNING HQ LATENCY: 2ms</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
