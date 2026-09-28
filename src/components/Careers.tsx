import FadeIn from "./FadeIn";
import { ArrowUpRight, MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    title: "Full-Stack Web Developer",
    department: "Enterprise Systems",
    location: "Kallakurichi, Tamil Nadu / Hybrid",
    type: "Full-Time",
    experience: "1–3 Years",
    emailSubject: "Application: Full-Stack Web Developer",
  },
  {
    title: "Frontend Developer Intern",
    department: "Client Engineering",
    location: "Remote / Kallakurichi",
    type: "Internship (6 Months)",
    experience: "Students / Recent Grads",
    emailSubject: "Application: Frontend Developer Intern",
  },
  {
    title: "SEO & Digital Marketing Analyst",
    department: "Growth Advisory",
    location: "Kallakurichi / On-site",
    type: "Full-Time",
    experience: "1+ Years",
    emailSubject: "Application: SEO & Digital Marketing Analyst",
  },
  {
    title: "UI/UX Design Intern",
    department: "Experience Design",
    location: "Remote / Hybrid",
    type: "Internship (3–6 Months)",
    experience: "Portfolio Required",
    emailSubject: "Application: UI/UX Design Intern",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="section relative">
      <div className="container">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow">Talent & Opportunities</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display max-w-2xl">
                Build serious software with high agency.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              We look for engineers and designers passionate about technical craftsmanship, clear writing, and delivering dependable software systems.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <FadeIn key={job.title} delay={index * 70} direction="up">
              <div className="mnc-card rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-[var(--color-cyan)] uppercase tracking-wider font-medium">
                      {job.department}
                    </span>
                    <span className="text-[var(--color-rule-active)]">·</span>
                    <span className="font-mono text-xs text-[var(--color-ink-subtle)] flex items-center gap-1">
                      <Clock size={12} /> {job.type}
                    </span>
                    <span className="text-[var(--color-rule-active)]">·</span>
                    <span className="font-mono text-xs text-[var(--color-ink-subtle)]">
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-cyan)] transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-ink-muted)]">
                    <MapPin size={13} className="text-[var(--color-cyan)]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <a
                    href={`mailto:careers@nexavora.com?subject=${encodeURIComponent(
                      job.emailSubject
                    )}&body=${encodeURIComponent(
                      "Hi Nexavora Team,\n\nI would like to apply for the position. Please find my portfolio and resume attached.\n\nName:\nContact Phone:\nLinkedIn / GitHub Profile:\n"
                    )}`}
                    className="btn btn-secondary text-xs gap-1.5 py-2.5 px-5 group-hover:border-[var(--color-cyan)] group-hover:text-[var(--color-cyan)] transition-all"
                  >
                    Submit Application <ArrowUpRight size={14} />
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
