"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What type of projects does Nexavora build?",
    a: "We build websites, web applications, ERP systems, AI applications, automation solutions, dashboards, and custom software platforms.",
  },
  {
    q: "Can you build a completely custom application?",
    a: "Yes. We can design and develop systems based on your specific business requirements and workflows.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We can help startups with prototypes, MVPs, web applications, AI products, and technical development.",
  },
  {
    q: "Can you add AI to an existing application?",
    a: "Yes. Depending on the application, AI capabilities such as assistants, document processing, RAG, automation, or intelligent search can be integrated.",
  },
  {
    q: "Do you provide maintenance after deployment?",
    a: "Maintenance and ongoing development can be provided depending on the project and engagement model.",
  },
  {
    q: "Where does Nexavora operate?",
    a: "Nexavora Technologies is based in Tamil Nadu, India, and can work with clients remotely.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container max-w-4xl">
        {/* ── Section 14: FAQ ── */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Clear answers about our capabilities, collaboration models, and development process.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={faq.q} delay={idx * 40} direction="up">
                <div
                  className={`portfolio-card theme-cyan transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-cyan-400/40" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-white">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-white/10" : "bg-white/5"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[var(--color-cyan)]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                      <p className="mt-2">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
