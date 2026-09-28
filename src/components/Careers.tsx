import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    title: "Full-Stack Web Developer",
    department: "Engineering",
    location: "Kallakurichi, Tamil Nadu / Hybrid",
    type: "Full-time",
    emailSubject: "Application: Full-Stack Web Developer",
  },
  {
    title: "Frontend Developer Intern",
    department: "Engineering",
    location: "Remote / Kallakurichi",
    type: "Internship (6 Months)",
    emailSubject: "Application: Frontend Developer Intern",
  },
  {
    title: "SEO & Digital Marketing Analyst",
    department: "Growth",
    location: "Kallakurichi / On-site",
    type: "Full-time",
    emailSubject: "Application: SEO & Digital Marketing Analyst",
  },
  {
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Internship (3–6 Months)",
    emailSubject: "Application: UI/UX Design Intern",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-[var(--foreground)]">
              Careers
            </h2>
            <p className="mt-4 text-base text-[var(--muted-foreground)] leading-relaxed">
              We look for engineers and designers who care about software quality, clear communication, and delivering reliable systems.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-[var(--border)] overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
                <th className="py-4 pr-6 font-normal">Role</th>
                <th className="py-4 px-6 font-normal hidden sm:table-cell">Department</th>
                <th className="py-4 px-6 font-normal hidden md:table-cell">Location</th>
                <th className="py-4 px-6 font-normal">Type</th>
                <th className="py-4 pl-6 text-right font-normal">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.title}
                  className="border-b border-[var(--border)] transition-colors hover:bg-[var(--card-bg)]"
                >
                  <td className="py-5 pr-6 font-medium text-[var(--foreground)]">
                    {job.title}
                    <div className="sm:hidden text-xs text-[var(--muted-foreground)] mt-1 font-normal">
                      {job.department} · {job.location}
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm text-[var(--muted-foreground)] hidden sm:table-cell">
                    {job.department}
                  </td>
                  <td className="py-5 px-6 text-sm text-[var(--muted-foreground)] hidden md:table-cell">
                    {job.location}
                  </td>
                  <td className="py-5 px-6 text-xs font-mono text-[var(--muted-foreground)]">
                    {job.type}
                  </td>
                  <td className="py-5 pl-6 text-right">
                    <a
                      href={`mailto:careers@nexavora.com?subject=${encodeURIComponent(
                        job.emailSubject
                      )}&body=${encodeURIComponent(
                        "Hi Nexavora Team,\n\nI am writing to apply for the position. Please find my resume and portfolio attached.\n\nName:\nPhone:\nLinkedIn / GitHub:\n"
                      )}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline"
                    >
                      Apply <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
