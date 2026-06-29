"use client";
 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, Send, X, CheckCircle, AlertCircle } from "lucide-react";
 
const jobs = [
  {
    id: "fs-dev",
    title: "Full-Stack Web Developer",
    department: "Engineering",
    location: "Kallakurichi, Tamil Nadu (Hybrid)",
    type: "Full-time",
    description: "We are seeking a senior full-stack engineer proficient in React, Next.js, Node.js, and MongoDB to build scalable enterprise apps and SaaS consoles.",
    requirements: "3+ years of commercial development experience, strong system design, and TypeScript proficiency.",
  },
  {
    id: "fe-intern",
    title: "Frontend Developer Intern",
    department: "Engineering",
    location: "Remote / Kallakurichi",
    type: "Internship (6 Months)",
    description: "Perfect for students or recent grads. Work directly under our CEO to craft highly interactive glassmorphic web apps using React, TailwindCSS, and Framer Motion.",
    requirements: "Basic knowledge of HTML, CSS, JavaScript, and React. High curiosity, high agency, and passion for UI engineering.",
  },
  {
    id: "dm-analyst",
    title: "SEO & Digital Marketing Analyst",
    department: "Growth & Marketing",
    location: "Kallakurichi, Tamil Nadu (On-site)",
    type: "Full-time",
    description: "Scale organic performance, manage conversion funnels, run target PPC campaigns, and audit Core Web Vitals to place client pages on Google page #1.",
    requirements: "Proven record in SEO optimization, Google Analytics, and lead generation ad accounts.",
  },
  {
    id: "uiux-intern",
    title: "UI/UX Design Intern",
    department: "Product Design",
    location: "Remote / Kallakurichi",
    type: "Internship (3-6 Months)",
    description: "Collaborate with developers to establish sleek component-driven styles, design brand packages, corporate logos, and draft user-experience flows in Figma.",
    requirements: "Figma portfolio showing web/mobile designs, understanding of design systems, color theories, and micro-interactions.",
  },
];
 
export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
 
  const handleOpenModal = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setForm({ name: "", email: "", phone: "", portfolio: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };
 
  const handleCloseModal = () => {
    setSelectedJob(null);
  };
 
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.portfolio.trim()) {
      newErrors.portfolio = "Resume link or Portfolio URL is required";
    } else if (!/^https?:\/\//i.test(form.portfolio)) {
      newErrors.portfolio = "Must begin with http:// or https://";
    }
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
          Position: selectedJob?.title,
          ApplicantName: form.name,
          ApplicantEmail: form.email,
          ApplicantPhone: form.phone,
          ResumeLink: form.portfolio,
          CoverLetter: form.message,
          _subject: `New Job Application: ${form.name} for ${selectedJob?.title}`,
        }),
      });
 
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          handleCloseModal();
        }, 3000);
      } else {
        alert("Failed to submit application. Please email your CV directly to ceo.nexavora@gmail.com");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please email your CV directly to ceo.nexavora@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <section id="careers" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background glow backdrops */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-light-purple blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-light-cyan blur-3xl opacity-10 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3">
            Join Our Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Build the Future With Us
          </h3>
          <p className="text-text-secondary text-sm mt-4 font-light max-w-xl mx-auto">
            We are a team of passionate creators, engineers, and dreamers based in Kallakurichi, building world-class products. We value craft, curiosity, and high agency.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>
 
        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-3xl glass-card border border-white/5 bg-white/5 hover:border-accent-cyan/20 hover:shadow-accent-cyan/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[10px] font-bold uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-text-secondary font-medium uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>
 
                {/* Title */}
                <h4 className="text-white text-lg font-extrabold mb-3 tracking-tight">
                  {job.title}
                </h4>
 
                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed font-light mb-4">
                  {job.description}
                </p>
 
                {/* Requirements */}
                <div className="border-t border-white/5 pt-4 mt-4">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider block mb-1">
                    Requirements
                  </span>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-light">
                    {job.requirements}
                  </p>
                </div>
              </div>
 
              {/* Action Button */}
              <button
                onClick={() => handleOpenModal(job)}
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-accent-cyan hover:text-white border border-white/10 hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                Apply for Position
                <Briefcase className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
 
      {/* Application Form Modal overlay */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
 
            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-bg-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Outer decorative light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/10 blur-xl pointer-events-none" />
 
              {/* Success state overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-bg-dark flex flex-col items-center justify-center p-8 text-center z-20"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-white text-xl font-extrabold mb-2">Application Received!</h4>
                    <p className="text-text-secondary text-sm leading-relaxed font-light">
                      Thank you for applying. Our talent coordinates will review your qualifications and contact you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
 
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
 
              {/* Modal Header */}
              <div className="mb-6">
                <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block mb-1">
                  Apply Now
                </span>
                <h3 className="text-white text-lg font-extrabold tracking-tight">
                  {selectedJob.title}
                </h3>
                <span className="text-[10px] text-text-secondary font-medium tracking-wide">
                  {selectedJob.department} · {selectedJob.location}
                </span>
              </div>
 
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="app-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="app-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className={`px-3 py-2 rounded-lg text-xs font-light glass-input ${
                        errors.name ? "border-rose-500/40" : ""
                      }`}
                    />
                    {errors.name && (
                      <span className="text-rose-400 text-[9px] font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>
 
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="app-email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="app-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@domain.com"
                      className={`px-3 py-2 rounded-lg text-xs font-light glass-input ${
                        errors.email ? "border-rose-500/40" : ""
                      }`}
                    />
                    {errors.email && (
                      <span className="text-rose-400 text-[9px] font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>
 
                <div className="grid grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="app-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="app-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="px-3 py-2 rounded-lg text-xs font-light glass-input"
                    />
                  </div>
 
                  {/* Resume Link */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="app-portfolio" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Resume Link (GDrive/Dropbox) *
                    </label>
                    <input
                      id="app-portfolio"
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                      placeholder="https://drive.google.com/..."
                      className={`px-3 py-2 rounded-lg text-xs font-light glass-input ${
                        errors.portfolio ? "border-rose-500/40" : ""
                      }`}
                    />
                    {errors.portfolio && (
                      <span className="text-rose-400 text-[9px] font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.portfolio}
                      </span>
                    )}
                  </div>
                </div>
 
                {/* Cover Letter */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="app-message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Why are you a good fit? (Cover Letter)
                  </label>
                  <textarea
                    id="app-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your interest, skills, or projects..."
                    className="px-3 py-2 rounded-lg text-xs font-light glass-input resize-none"
                  />
                </div>
 
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg shadow-accent-cyan/15 hover:shadow-accent-cyan/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 glow-on-hover cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
