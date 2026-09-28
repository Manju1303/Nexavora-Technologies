import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Arockia Medical Centre",
    problem:
      "A multi-speciality hospital in Tamil Nadu needed a public-facing website to manage patient appointments, list clinical departments, and present NABH accreditation standards clearly.",
    outcome:
      "Delivered a responsive web portal with real-time appointment booking, department directories, and emergency contact integration.",
    stack: "React, Next.js, Tailwind CSS",
    link: "https://arockiamedicalcentre.in/",
  },
  {
    title: "Insta Educational Guidance Platform",
    problem:
      "An educational counselling organisation required a high-capacity platform to list universities, capture student leads, and support study-abroad inquiries.",
    outcome:
      "Built a secure lead-capture engine with college directories, enquiry routing, and counselling content management.",
    stack: "React, Next.js, Tailwind CSS",
    link: null,
  },
  {
    title: "STEPCOUNT Staff Monitoring System",
    problem:
      "A collegiate administration needed to digitise staff attendance tracking with verifiable check-ins and executive reporting.",
    outcome:
      "Engineered an employee tracking portal with real-time attendance logs, analytics, shift management, and administrative audit trails.",
    stack: "FastAPI, React, PostgreSQL",
    link: "https://stepcount-eight.vercel.app/",
  },
  {
    title: "NABH Documentation & Digital Support",
    problem:
      "A hospital preparing for NABH accreditation required a centralized digital system to manage compliance manuals, audits, and department checklists.",
    outcome:
      "Created a compliance platform with automated version control, audit-readiness tracking, and departmental checklists.",
    stack: "React, PostgreSQL, Docker",
    link: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-[var(--color-rule)]">
      <div className="container">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              Selected Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Real projects shipped to production for hospitals, academic institutions, and growing businesses across India.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 60} direction="up">
              <article className="border-t border-[var(--color-rule)] pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-3">
                  <h3 className="text-2xl font-display font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-medium">Problem:</strong> {project.problem}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-medium">Outcome:</strong> {project.outcome}
                  </p>
                  <p className="text-xs text-slate-400 font-mono pt-1">
                    Stack: {project.stack}
                  </p>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end items-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-cyan)] hover:underline"
                    >
                      Visit live deployment <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">
                      Private institutional deployment
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* JKKMCT Entry */}
        <FadeIn delay={200} direction="up">
          <div className="mt-12 pt-8 border-t border-[var(--color-rule)] text-sm text-slate-300">
            We also built the{" "}
            <strong className="text-white font-medium">
              Hostel Mess ERP for JKKMCT
            </strong>
            , managing student mess billing, attendance reconciliation, and kitchen inventory across hostel campuses.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
