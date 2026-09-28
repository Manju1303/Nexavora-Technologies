"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Send, CheckCircle2 } from "lucide-react";

const servicesList = [
  "AI & Machine Learning Solutions",
  "Custom Software & Web Applications",
  "ERP & SaaS Systems",
  "Mobile App Development",
  "Cloud Infrastructure & DevOps",
  "UI/UX Design Systems",
  "SEO & Digital Marketing",
  "General Consultation",
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
            Service: form.service,
            Message: form.message.trim(),
            _subject: `New Project Enquiry: ${form.name} (${form.service})`,
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
          "We could not submit the form. Please email us directly at ceo.nexavora@gmail.com."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network error occurred. Please contact us directly at ceo.nexavora@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              Start a Project
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Tell us about your organization, current challenges, and project goals. We review every enquiry and reply within 24 hours.
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
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. We will review your requirements and respond via email within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn btn-secondary text-xs mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name
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
                      placeholder="e.g. Dr. Rajesh Kumar"
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
                      Email Address
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
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Area of Interest
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
                      Project Details
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
                      placeholder="Describe the problem you are looking to solve, timeline expectations, or existing systems."
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
                    {isSubmitting ? "Submitting enquiry..." : (
                      <>
                        Submit Enquiry <Send size={15} />
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
                    Direct Email
                  </h3>
                  <a
                    href="mailto:ceo.nexavora@gmail.com"
                    className="text-base font-medium text-white hover:text-[var(--color-cyan)] transition-colors"
                  >
                    ceo.nexavora@gmail.com
                  </a>
                </div>

                <div className="border-t border-[var(--color-rule)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Location
                  </h3>
                  <p className="text-sm text-white">
                    Kallakurichi, Tamil Nadu, India
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Engagements managed remotely across India
                  </p>
                </div>

                <div className="border-t border-[var(--color-rule)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Response Window
                  </h3>
                  <p className="text-sm text-white">
                    Within 24 business hours
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Every message goes directly to our engineering lead
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
