import FadeIn from "./FadeIn";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Full-Stack Web Developer",
    theme: "theme-cyan",
    department: "Engineering",
    location: "Kallakurichi, Tamil Nadu / Hybrid",
    type: "Full-time",
    emailSubject: "Application: Full-Stack Web Developer",
  },
  {
    title: "Frontend Developer Intern",
    theme: "theme-violet",
    department: "Engineering",
    location: "Remote / Kallakurichi",
    type: "Internship (6 Months)",
    emailSubject: "Application: Frontend Developer Intern",
  },
  {
    title: "SEO & Digital Marketing Analyst",
    theme: "theme-amber",
    department: "Growth",
    location: "Kallakurichi / On-site",
    type: "Full-time",
    emailSubject: "Application: SEO & Digital Marketing Analyst",
  },
  {
    title: "UI/UX Design Intern",
    theme: "theme-pink",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Internship (3–6 Months)",
    emailSubject: "Application: UI/UX Design Intern",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Careers
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We look for engineers and designers who care about software quality, clear communication, and delivering reliable systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <FadeIn key={job.title} delay={i * 80} direction="up">
              <div className={`portfolio-card ${job.theme} p-7 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" style={{ color: "var(--card-text)" }} />
                      {job.department}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-white/10"
                      style={{ color: "var(--card-text)", background: "var(--card-pill)" }}
                    >
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                  <a
                    href={`mailto:careers@nexavora.com?subject=${encodeURIComponent(
                      job.emailSubject
                    )}&body=${encodeURIComponent(
                      "Hi Nexavora Team,\n\nI am writing to apply for the position. Please find my resume and portfolio attached.\n\nName:\nPhone:\nLinkedIn / GitHub:\n"
                    )}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "var(--card-text)" }}
                  >
                    <span>Apply for role</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
