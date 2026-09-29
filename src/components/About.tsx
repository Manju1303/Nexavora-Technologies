import FadeIn from "./FadeIn";
import { Users, Cpu, Lightbulb, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const founderInterests = [
  "Artificial Intelligence",
  "AI Agents",
  "Generative AI",
  "Software Engineering",
  "Automation",
  "ERP Systems",
  "Full-Stack Development",
];

const principles = [
  {
    title: "Direct Collaboration",
    theme: "theme-cyan",
    icon: Users,
    description:
      "We keep communication close to the people actually involved in building the solution.",
  },
  {
    title: "Practical Engineering",
    theme: "theme-blue",
    icon: Cpu,
    description:
      "We focus on solving the actual business problem instead of adding unnecessary technology.",
  },
  {
    title: "Continuous Learning",
    theme: "theme-violet",
    icon: Lightbulb,
    description:
      "Technology changes quickly. We continuously explore new tools and approaches that can create genuine value.",
  },
  {
    title: "Long-Term Thinking",
    theme: "theme-emerald",
    icon: TrendingUp,
    description:
      "A successful system should remain useful beyond its initial launch.",
  },
  {
    title: "Responsible AI",
    theme: "theme-pink",
    icon: ShieldCheck,
    description:
      "AI should be implemented with attention to reliability, data privacy, security, and the actual needs of the organization.",
  },
];

const workflowSteps = [
  "Understand the problem",
  "Design the right solution",
  "Build it",
  "Deploy it",
  "Improve it",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 3: About Nexavora ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Technology With a Purpose
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Nexavora Technologies is a technology company based in Tamil Nadu, India, focused on building practical software and intelligent digital solutions for businesses and institutions.
            </p>
          </div>
        </FadeIn>

        {/* About Card & Simple Approach Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-[var(--color-rule)] items-stretch">
          <div className="lg:col-span-7 portfolio-card theme-blue p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                Practical Software & Intelligent Digital Solutions
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                We combine software engineering, artificial intelligence, automation, and modern cloud technologies to solve operational problems and create better digital experiences.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We believe technology should not add complexity. It should make work simpler, faster, and more manageable.
              </p>
            </div>

            {/* Approach Flow Sequence */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="block text-xs font-mono uppercase tracking-wider text-[var(--color-cyan)] mb-3">
                Our Approach Is Simple
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {workflowSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200">
                      {step}
                    </span>
                    {idx < workflowSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-cyan)] opacity-70 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Section 11: Founder ── */}
          <div className="lg:col-span-5 flex">
            <div className="portfolio-card theme-cyan p-8 w-full flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-cyan)] block mb-4">
                  Meet the Founder
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Manjunath K.
                </h4>
                <p className="text-xs font-mono font-semibold tracking-wider uppercase mt-1 text-[var(--card-text)]">
                  Founder — Nexavora Technologies
                </p>

                <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                  Manjunath is an AI & Data Science student and technology developer focused on software engineering, artificial intelligence, automation, and modern web systems.
                </p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  He works across the development lifecycle—from understanding requirements and designing system architecture to building, deploying, and improving digital products.
                </p>

                {/* Interests Pills */}
                <div className="mt-6">
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Interests & Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founderInterests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="italic text-slate-300">
                  Building technology that solves practical problems.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 12: Our Principles ── */}
        <div className="pt-16">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                How We Work
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Our core operating principles guide every system we design and deliver.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 60} direction="up">
                  <div className={`portfolio-card ${p.theme} p-6 h-full flex flex-col justify-between group`}>
                    <div>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white/10"
                        style={{ background: "var(--card-pill)" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                      </div>
                      <h4 className="text-base font-display font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
