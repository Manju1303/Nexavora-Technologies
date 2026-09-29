"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Send, CheckCircle2 } from "lucide-react";

const servicesList = [
  "Autonomous AI & Intelligence Systems",
  "Distributed Enterprise ERP & Operations",
  "High-Availability Web Platforms & Portals",
  "Next-Gen Mobile Applications",
  "Cloud Infrastructure, DevOps & Zero-Trust",
  "Strategic UX Architecture & Systems Design",
  "Technical Architecture Audit & Consultation",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: servicesList[0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name and organization.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please describe your project scope and objectives.";
    } else if (form.message.trim().length < 15) {
      nextErrors.message = "Please provide additional architectural context (minimum 15 characters).";
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
            Domain: form.service,
            Message: form.message.trim(),
            _subject: `Architectural Consultation Enquiry: ${form.name} (${form.service})`,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          service: servicesList[0],
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          "We could not submit the brief automatically. Please reach out directly to ceo.nexavora@gmail.com."
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
    <section id="contact" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Initiate Consultation & Engagement
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Partner with our principal engineering team to architect, deploy, and scale mission-critical digital systems. We review every technical brief and reply with an initial architectural perspective within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="up">
              {status === "success" ? (
                <div className="p-8 border border-[var(--color-rule)] bg-[var(--color-page-alt)] rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white">
                    Consultation Brief Received
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for submitting your architectural brief. Our lead systems engineer will review your specifications and contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn btn-secondary text-xs mt-2"
                  >
                    Submit another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Full Name & Organization
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className="w-full px-4 py-3 bg-[var(--color-page-alt)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                      placeholder="e.g. Dr. Rajesh Kumar, Hospital Director"
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
                      Institutional / Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className="w-full px-4 py-3 bg-[var(--color-page-alt)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                      placeholder="director@institution.org"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Primary Architectural Domain
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[var(--color-page-alt)] border border-[var(--color-rule)] rounded-xl text-sm text-white focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-[var(--color-page)] text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Project Scope & Technical Objectives
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className="w-full px-4 py-3 bg-[var(--color-page-alt)] border border-[var(--color-rule)] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-cyan)] transition-colors resize-y"
                      placeholder="Describe your operational bottleneck, concurrency requirements, target deployment timeline, or legacy systems to integrate..."
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
                    {isSubmitting ? "Transmitting brief..." : (
                      <>
                        Submit Architectural Brief <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={100} direction="up">
              <div className="border border-[var(--color-rule)] p-6 bg-[var(--color-page-alt)] rounded-2xl space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Direct Executive Channel
                  </h3>
                  <a
                    href="mailto:ceo.nexavora@gmail.com"
                    className="text-base font-medium text-white hover:text-[var(--color-cyan)] transition-colors"
                  >
                    ceo.nexavora@gmail.com
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct routing to Principal Systems Architect
                  </p>
                </div>

                <div className="border-t border-[var(--color-rule)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Engineering Headquarters
                  </h3>
                  <p className="text-sm text-white">
                    Kallakurichi, Tamil Nadu, India
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Nationwide client engagements & remote deployments
                  </p>
                </div>

                <div className="border-t border-[var(--color-rule)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Response SLA
                  </h3>
                  <p className="text-sm text-white">
                    Within 24 business hours
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Every inquiry receives an engineering assessment
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
