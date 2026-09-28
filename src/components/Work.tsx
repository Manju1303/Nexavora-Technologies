import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Arockia Medical Centre",
    problem:
      "A multi-speciality hospital in Tamil Nadu needed a public-facing website to manage appointments, list departments, and present NABH accreditation information clearly.",
    outcome:
      "Delivered a responsive website with appointment booking, department directories, and emergency contact integration.",
    stack: "React, Next.js, Tailwind CSS",
    link: "https://arockiamedicalcentre.in/",
    screenshot: null as string | null,
  },
  {
    title: "Insta Educational Guidance Platform",
    problem:
      "An educational counselling organisation required a platform to list colleges, manage student leads, and support study-abroad enquiries.",
    outcome:
      "Built a lead-capture platform with college directories, enquiry tracking, and career guidance content management.",
    stack: "React, Next.js, Tailwind CSS",
    link: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "STEPCOUNT Staff Monitoring System",
    problem:
      "A college administration needed to digitise staff attendance tracking with check-in records and dashboard reporting.",
    outcome:
      "Developed an employee tracking dashboard with real-time attendance logs, analytics, and administrative workflows.",
    stack: "FastAPI, React, PostgreSQL",
    link: "https://stepcount-eight.vercel.app/",
    screenshot: null as string | null,
  },
  {
    title: "NABH Documentation and Digital Support",
    problem:
      "A hospital preparing for NABH accreditation needed a digital system to manage compliance documentation and checklists.",
    outcome:
      "Created a documentation management platform with automated checklists, secure records storage, and compliance auditing tools.",
    stack: "React, PostgreSQL, Docker",
    link: null as string | null,
    screenshot: null as string | null,
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <FadeIn>
          <p className="section-label">Selected work</p>
          <h2 className="text-3xl md:text-4xl max-w-xl">
            Projects we have shipped
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-0">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 60}>
              <article
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start py-10"
                style={{ borderTop: "1px solid var(--color-rule)" }}
              >
                {/* Screenshot placeholder shown in a simple browser frame */}
                <div
                  className={`rounded-lg overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  style={{
                    backgroundColor: "var(--color-page-alt)",
                    border: "1px solid var(--color-rule)",
                  }}
                >
                  {/* Browser frame chrome */}
                  <div
                    className="flex items-center gap-1.5 px-4 py-2.5"
                    style={{ borderBottom: "1px solid var(--color-rule)" }}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--color-rule)" }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--color-rule)" }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--color-rule)" }}
                    />
                  </div>
                  {/* Screenshot area */}
                  <div className="aspect-video flex items-center justify-center p-8">
                    {project.screenshot ? (
                      <img
                        src={project.screenshot}
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <p
                        className="text-sm italic text-center"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Screenshot placeholder -- replace with actual project
                        screenshot
                      </p>
                    )}
                  </div>
                </div>

                {/* Project details */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-xl md:text-2xl mb-4 font-serif font-normal">
                    {project.title}
                  </h3>
                  <p
                    className="mb-3 readable"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {project.problem}
                  </p>
                  <p className="mb-5 readable">{project.outcome}</p>
                  <p
                    className="text-sm mb-5"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Built with {project.stack}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium"
                      style={{ color: "var(--color-accent)" }}
                    >
                      View live site
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Smaller additional entry */}
        <FadeIn>
          <div
            className="pt-8 mt-2"
            style={{ borderTop: "1px solid var(--color-rule)" }}
          >
            <p style={{ color: "var(--color-ink-muted)" }}>
              We also built the{" "}
              <strong className="font-medium" style={{ color: "var(--color-ink)" }}>
                Hostel Mess ERP for JKKMCT
              </strong>{" "}
              -- a meal operations system with billing, inventory forecasting,
              and waste tracking for a college hostel.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
