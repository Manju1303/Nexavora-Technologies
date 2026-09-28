"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Mail, MapPin, Clock, ShieldAlert, Send, CheckCircle2 } from "lucide-react";

const servicesList = [
  "AI & Machine Learning Solutions",
  "Custom Software & Web Applications",
  "ERP & Multi-Branch Systems",
  "Mobile App Development",
  "Cloud Infrastructure & DevOps",
  "UI/UX Design Systems",
  "SEO & Digital Strategy",
  "General Architecture Consultation",
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
      nextErrors.name = "Please enter your name or organization.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please summarize your project or operational requirements.";
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
            Service: form.service,
            Message: form.message.trim(),
            _subject: `New Enterprise Enquiry: ${form.name} (${form.service})`,
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
          "We could not process the transmission. Please email our engineering lead directly at ceo.nexavora@gmail.com."
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
    <section id="contact" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Project Enquiries</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Initiate a project dialogue.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              Every inquiry is reviewed directly by our lead architects. We evaluate requirements and reply with initial technical thoughts within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="up">
              <div className="mnc-card rounded-3xl p-8 sm:p-10">
                {status === "success" ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-emerald)]/10 text-[var(--color-emerald)] flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-[var(--color-ink)]">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-[var(--color-ink-muted)] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. We have logged your project brief and will follow up via email within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn btn-secondary text-xs mt-4"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] mb-2"
                      >
                        Your Name / Organization
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-subtle)] focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                        placeholder="e.g. Dr. Rajesh Kumar / Arockia Health"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-500 font-mono">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] mb-2"
                      >
                        Corporate / Institutional Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-subtle)] focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                        placeholder="name@organisation.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-500 font-mono">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] mb-2"
                      >
                        Practice Area of Interest
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) =>
                          setForm({ ...form, service: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-[var(--color-page)] text-[var(--color-ink)]">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] mb-2"
                      >
                        Project Scope & Objectives
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        className="w-full px-4 py-3 bg-[var(--color-page)] border border-[var(--color-rule)] rounded-xl text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-subtle)] focus:outline-none focus:border-[var(--color-cyan)] transition-colors resize-y"
                        placeholder="Briefly outline your systems, current operational friction, target deadlines, or compliance requirements."
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-rose-500 font-mono">
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
                      className="btn btn-primary w-full gap-2 text-sm py-3.5"
                    >
                      {isSubmitting ? (
                        "Submitting Enquiry..."
                      ) : (
                        <>
                          Transmit Enquiry <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Direct Engagement Details */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={150} direction="up">
              <div className="mnc-card rounded-3xl p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] block mb-1">
                    Direct Channel
                  </span>
                  <h3 className="text-xl font-display font-semibold text-[var(--color-ink)]">
                    Direct Engineering Access
                  </h3>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-ink-subtle)] block">
                        Executive Mailbox
                      </span>
                      <a
                        href="mailto:ceo.nexavora@gmail.com"
                        className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-cyan)] transition-colors"
                      >
                        ceo.nexavora@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-ink-subtle)] block">
                        Engineering Studio
                      </span>
                      <p className="text-sm text-[var(--color-ink)]">
                        Kallakurichi, Tamil Nadu, India
                      </p>
                      <p className="text-xs text-[var(--color-ink-muted)]">
                        Engagements executed across India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-rule)] flex items-center justify-center text-[var(--color-cyan)] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-ink-subtle)] block">
                        Committed SLA
                      </span>
                      <p className="text-sm text-[var(--color-ink)]">
                        Initial response within 24 business hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--color-rule)] flex items-start gap-3">
                  <ShieldAlert size={16} className="text-[var(--color-cyan)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                    Mutual non-disclosure agreements (NDAs) are executed prior to reviewing proprietary databases or architectural schemas upon request.
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
