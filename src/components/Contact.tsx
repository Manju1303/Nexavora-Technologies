"use client";
 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle, Globe, X } from "lucide-react";
 
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web Development",
  });
  
  // Explicitly separate message state since it is textarea
  const [message, setMessage] = useState("");
 
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
 
  const servicesList = [
    "Web Development",
    "App Development",
    "UI / UX Design",
    "Branding & Identity",
    "Digital Marketing",
    "Tech Consulting",
    "Other",
  ];
 
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
 
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/2c0abcf6c78b00c64dd0bbad21dd56bc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Service: form.service,
          Message: message,
          _subject: `New Nexavora Lead: ${form.name} (${form.service})`,
        }),
      });
 
      if (response.ok) {
        setIsSuccess(true);
        setForm({ name: "", email: "", service: "Web Development" });
        setMessage("");
      } else {
        alert("Form submission failed. Please try again or email us directly at ceo.nexavora@gmail.com");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission. Please try again or email us directly at ceo.nexavora@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />
      {/* Background glow layers */}
      <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-light-purple blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-light-cyan blur-3xl opacity-10 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest uppercase text-accent-violet mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let&apos;s Build Something Extraordinary
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-5 rounded-full" />
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 rounded-3xl glass-card border border-white/5 shadow-2xl relative bg-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider text-left">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
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
                    <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider text-left">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
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
                  <label htmlFor="service" className="text-xs font-bold text-slate-300 uppercase tracking-wider text-left">
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
                  <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider text-left">
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your goals, timelines, and business model..."
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
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-lg shadow-accent-violet/15 hover:shadow-accent-violet/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 glow-on-hover cursor-pointer"
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
 
          {/* Right Column: Details & Map overlay */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl glass-card border border-white/5 space-y-6 bg-white/5 text-left"
            >
              <h4 className="font-extrabold text-white text-lg border-b border-white/5 pb-3">
                Communications Hub
              </h4>
 
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-accent-violet/10 text-accent-violet border border-accent-violet/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
                    Sales & Support
                  </span>
                  <a href="mailto:ceo.nexavora@gmail.com" className="text-white hover:text-accent-violet text-sm transition-colors mt-0.5 block font-medium">
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
                    Response Window
                  </span>
                  <span className="text-white text-sm mt-0.5 block font-medium">
                    Within 24 Hours
                  </span>
                </div>
              </div>
 
              {/* Global Workspace */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/10">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
                    We Serve
                  </span>
                  <span className="text-white text-sm mt-0.5 block font-light leading-relaxed">
                    Kallakurichi · Tamil Nadu · Pan India
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
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
                </g>
 
                {/* India (Main hub) */}
                <g>
                  <circle cx="215" cy="75" r="3.5" fill="#f72585" />
                  <circle cx="215" cy="75" r="8" fill="none" stroke="#f72585" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: "2s" }} />
                </g>
 
                <text x="210" y="70" fill="#f72585" fontSize="5.5" fontFamily="monospace" fontWeight="bold">IND</text>
              </svg>
 
              {/* Location Scan indicator */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10 flex items-center gap-1.5 font-mono text-[9px] text-accent-violet">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-ping" />
                <span>Kallakurichi Location Link Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
 
      {/* ── SUCCESS POPUP MODAL OVERLAY ── */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccess(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />
 
            {/* Confetti simulation particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
              {[...Array(20)].map((_, i) => {
                const randomDelay = Math.random() * 2;
                const randomX = Math.random() * 100;
                return (
                  <motion.div
                    key={i}
                    initial={{ y: -20, x: `${randomX}%`, scale: 0.5 + Math.random(), rotate: 0, opacity: 1 }}
                    animate={{ y: "105vh", rotate: 360 * (Math.random() > 0.5 ? 1 : -1), opacity: 0 }}
                    transition={{ duration: 3 + Math.random() * 2, delay: randomDelay, ease: "easeOut" }}
                    className={`absolute w-3 h-3 rounded-sm ${
                      i % 3 === 0 ? "bg-accent-violet" : i % 3 === 1 ? "bg-accent-cyan" : "bg-accent-pink"
                    }`}
                  />
                );
              })}
            </div>
 
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-bg-dark border border-white/10 rounded-3xl p-8 text-center shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Outer decorative light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/10 blur-xl pointer-events-none" />
 
              {/* Close X Button */}
              <button
                onClick={() => setIsSuccess(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close success popup"
              >
                <X className="w-4 h-4" />
              </button>
 
              {/* Animated checkmark circle */}
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <CheckCircle className="w-8 h-8 animate-pulse" />
              </div>
 
              {/* Success title */}
              <div className="text-white text-2xl font-extrabold mb-2 tracking-tight">
                We Got Your<br />
                <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                  Message!
                </span>
              </div>
 
              {/* Success description */}
              <p className="text-text-secondary text-sm font-light leading-relaxed mb-6">
                Thank you for reaching out. Our team will review your project and get back to you shortly.
              </p>
 
              {/* Committed Details badges */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-accent-violet tracking-wide">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Response in 24h
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-accent-purple tracking-wide">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Email Confirmation
                </div>
              </div>
 
              {/* CTA Back to site */}
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-lg hover:shadow-accent-violet/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Back to Site ✦
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
