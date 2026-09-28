"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const servicesList = [
  "AI & Machine Learning Solutions",
  "Custom Software & Web Applications",
  "ERP & SaaS Systems",
  "Mobile App Development",
  "Cloud Infrastructure & DevOps",
  "UI/UX Design",
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
      nextErrors.name = "Please provide your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please describe your project or enquiry.";
    } else if (form.message.trim().length < 15) {
      nextErrors.message = "Please include a bit more detail (at least 15 characters).";
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
        "A network error occurred. Please reach out via ceo.nexavora@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-[var(--foreground)]">
              Start a Project
            </h2>
            <p className="mt-4 text-base text-[var(--muted-foreground)] leading-relaxed">
              Tell us about your organization, current challenges, and project goals. We review every enquiry and reply within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <FadeIn>
              {status === "success" ? (
                <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] text-left">
                  <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
                    Thank you for reaching out. We will review your requirements and respond via email within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--foreground)] mb-2"
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
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      placeholder="e.g. Dr. Rajesh Kumar"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--foreground)] mb-2"
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
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      placeholder="name@organization.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--foreground)] mb-2"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--foreground)] mb-2"
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
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-y"
                      placeholder="Describe the problem you are looking to solve, timeline expectations, or existing systems."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="p-4 border border-red-300 dark:border-red-900 bg-red-50 dark:bg-red-950/20 text-xs text-red-700 dark:text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >
                    {isSubmitting ? "Submitting enquiry..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Details sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={150}>
              <div className="border border-[var(--border)] p-6 bg-[var(--card-bg)] space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:ceo.nexavora@gmail.com"
                    className="text-base font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    ceo.nexavora@gmail.com
                  </a>
                </div>

                <div className="border-t border-[var(--border)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Location
                  </h3>
                  <p className="text-sm text-[var(--foreground)]">
                    Kallakurichi, Tamil Nadu, India
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    Engagements managed remotely across India
                  </p>
                </div>

                <div className="border-t border-[var(--border)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Response Window
                  </h3>
                  <p className="text-sm text-[var(--foreground)]">
                    Within 24 business hours
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    Every message goes directly to our engineering lead
                  </p>
                </div>

                <div className="border-t border-[var(--border)] pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                    Confidentiality
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    We sign mutual Non-Disclosure Agreements (NDAs) prior to detailed architecture reviews upon request.
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
