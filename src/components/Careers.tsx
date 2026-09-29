import FadeIn from "./FadeIn";
import { ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";

const areasOfInterest = [
  "Full-Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "AI Agents",
  "Backend Engineering",
  "Frontend Engineering",
  "UI/UX Design",
  "Cloud & DevOps",
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 border-t border-[var(--color-rule)] relative">
      <div className="container">
        {/* ── Section 13: Careers ── */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Build the Future With Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Nexavora is growing around software engineering, artificial intelligence, automation, and digital product development. We are interested in people who enjoy learning, solving difficult problems, experimenting with technology, and building useful products.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Areas of Interest Card */}
          <div className="lg:col-span-7 portfolio-card theme-cyan p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                  style={{ background: "var(--card-pill)" }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Areas of Interest
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                We are continually looking for builders across core engineering and design disciplines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {areasOfInterest.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-200"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: "var(--card-text)" }} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
              >
                <span>View Opportunities</span>
              </a>
              <a
                href="mailto:ceo.nexavora@gmail.com?subject=Profile%20Submission%20-%20Nexavora%20Careers&body=Hi%20Manjunath%20%26%20Nexavora%20Team%2C%0A%0AI%20am%20interested%20in%20collaborating%20with%20Nexavora.%0A%0AName%3A%20%0AArea%20of%20Interest%3A%20%0AGitHub%20%2F%20Portfolio%20%2F%20LinkedIn%3A%20%0APhone%3A%20%0A"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-white border border-white/15 transition-all"
                style={{ background: "var(--card-pill)", color: "var(--card-text)" }}
              >
                <span>Send Your Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Internships Card */}
          <div className="lg:col-span-5 portfolio-card theme-violet p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                  style={{ background: "var(--card-pill)" }}
                >
                  <GraduationCap className="w-5 h-5" style={{ color: "var(--card-text)" }} />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Student Internships
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                We may offer internship opportunities for students interested in gaining practical experience through real-world technology projects.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Work directly alongside engineering on active customer systems, real databases, and AI automation pipelines.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="mailto:ceo.nexavora@gmail.com?subject=Internship%20Inquiry%20-%20Nexavora&body=Hi%20Nexavora%20Team%2C%0A%0AI%20am%20a%20student%20interested%20in%20an%20internship%20opportunity%20at%20Nexavora.%0A%0AName%3A%20%0ACollege%20%2F%20Degree%3A%20%0ASkills%3A%20%0ALinks%3A%20%0A"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: "var(--card-text)" }}
              >
                <span>Apply for an Internship</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
