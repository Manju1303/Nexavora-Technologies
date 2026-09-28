/**
 * Hero -- the first thing visitors see.
 * No animation wrapper here so the headline is visible immediately
 * (no flash of invisible content while JS hydrates).
 */
export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] max-w-[720px] leading-[1.1]">
          Software and AI systems built for how your organisation actually works.
        </h1>

        <p
          className="mt-6 text-lg md:text-xl max-w-[600px] leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Nexavora Technologies partners with hospitals, schools, and growing
          businesses across India to design, build, and maintain software that
          solves real operational problems.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
          <a href="#work" className="btn btn-secondary">
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
