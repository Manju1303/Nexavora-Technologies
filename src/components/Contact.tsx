"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

const needOptions = [
  "Website",
  "Web Application",
  "ERP",
  "AI Solution",
  "Automation",
  "Mobile Application",
  "Cloud / Deployment",
  "UI/UX",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: needOptions[0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please describe your project.";
    } else if (form.message.trim().length < 15) {
      nextErrors.message = "Please include a bit more detail (minimum 15 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/2c0abcf6c78b00c64dd0bbad21dd56bc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: form.name.trim(),
            Email: form.email.trim(),
            Company: form.company.trim() || "Not specified",
            Need: form.service,
            Message: form.message.trim(),
            _subject: `Project Request: ${form.name} (${form.service})`,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          company: "",
          service: needOptions[0],
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          "We could not submit the request. Please email us directly at ceo.nexavora@gmail.com."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network communication error occurred. Please contact us directly at ceo.nexavora@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Section 15: Contact / Start a Project ── */}
      <section id="contact" className="py-24 border-t border-[var(--color-rule)] relative">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Have an Idea? Let&apos;s Build It.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Whether you&apos;re starting a new digital product, improving an existing process, or looking to automate repetitive work, we&apos;d like to understand what you&apos;re trying to achieve.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Tell us about your project and we&apos;ll start with the problem—not the technology.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="up">
                <div className="portfolio-card theme-cyan p-8 sm:p-10">
                  <h3 className="text-xl font-display font-bold text-white mb-6">
                    Start a Conversation
                  </h3>

                  {status === "success" ? (
                    <div className="p-8 border border-white/10 bg-white/5 rounded-2xl text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-cyan)]/15 text-[var(--color-cyan)] flex items-center justify-center mx-auto">
                        <CheckCircle2 size={28} />
                      </div>
                      <h4 className="text-xl font-display font-semibold text-white">
                        Project Request Received
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                        Thank you for reaching out. We will review your project details and respond as soon as possible.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="btn btn-secondary text-xs mt-2"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-rose-400 font-mono">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                          placeholder="name@organization.com"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-rose-400 font-mono">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                        >
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                          placeholder="Organization name (optional)"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                        >
                          What do you need?
                        </label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) =>
                            setForm({ ...form, service: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-white focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                        >
                          {needOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[var(--color-page)] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                        >
                          Tell us about your project
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => {
                            setForm({ ...form, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: "" });
                          }}
                          className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors resize-y"
                          placeholder="Describe the problem, requirements, or goals you want to achieve..."
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-rose-400 font-mono">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {status === "error" && (
                        <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-xs text-rose-400">
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary w-full sm:w-auto px-8 py-3.5 gap-2 text-sm"
                      >
                        {isSubmitting ? "Sending request..." : (
                          <>
                            Send Project Request <Send size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* ── Section 16: Direct Contact ── */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn delay={100} direction="up">
                <div className="portfolio-card theme-blue p-8 space-y-6">
                  <h3 className="text-xl font-display font-bold text-white">
                    Direct Contact
                  </h3>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:ceo.nexavora@gmail.com"
                      className="text-base font-medium text-white hover:text-[var(--color-cyan)] transition-colors"
                    >
                      ceo.nexavora@gmail.com
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Location
                    </h4>
                    <p className="text-sm text-white">
                      Tamil Nadu, India
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Service Area
                    </h4>
                    <p className="text-sm text-white">
                      Remote · India · Global
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Response
                    </h4>
                    <p className="text-xs text-slate-300">
                      We aim to respond to project inquiries as soon as possible.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 17: Final CTA ── */}
      <section className="py-20 border-t border-[var(--color-rule)] bg-[#040817]/60 relative">
        <div className="container max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Your Next Digital Solution Starts Here.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From a simple business website to an AI-powered application or complete ERP platform, Nexavora Technologies can help transform your requirements into working technology.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="cta-luxury group">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="px-7 py-3 rounded-full text-sm font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200"
              >
                Explore Our Work
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
