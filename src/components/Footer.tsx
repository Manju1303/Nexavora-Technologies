const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Technology", href: "#approach" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border)]">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-xl tracking-tight font-medium text-[var(--foreground)]">
              Nexavora Technologies
            </span>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-sm">
              Custom software, AI integrations, and digital infrastructure built for small and mid-size enterprises, healthcare providers, and academic institutions across India.
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Kallakurichi, Tamil Nadu, India
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4 mb-4 text-[var(--muted-foreground)]">
              <a
                href="https://github.com/Manju1303"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/manjunath-manjunath-248594352"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/mjx_1303"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
            <a
              href="mailto:ceo.nexavora@gmail.com"
              className="text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors block"
            >
              ceo.nexavora@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--muted-foreground)] gap-4">
          <p>© {new Date().getFullYear()} Nexavora Technologies. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Engineering from Kallakurichi, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
