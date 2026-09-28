"use client";

import { ArrowUp } from "lucide-react";

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
  { name: "Services & Practices", href: "#services" },
  { name: "Production Case Studies", href: "#work" },
  { name: "Industry Verticals", href: "#industries" },
  { name: "Delivery Methodology", href: "#process" },
  { name: "Studio & Leadership", href: "#about" },
  { name: "Architecture & Stack", href: "#approach" },
  { name: "Careers & Talent", href: "#careers" },
  { name: "Start a Project", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-rule)] bg-[var(--color-page)] pt-20 pb-12 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-rule)]">
          {/* Brand & Visible Logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center">
              <img
                src="/Nexavora-Technologies/logo-full.png"
                alt="Nexavora Technologies"
                className="h-10 sm:h-11 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith("/logo-full.png")) {
                    target.src = "/logo-full.png";
                  } else {
                    target.src = "/Nexavora-Technologies/logo.png";
                  }
                }}
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Custom software engineering, AI integrations, and high-availability digital systems for hospitals, universities, and commercial enterprises across India.
            </p>

            <div className="font-mono text-xs text-[var(--color-ink-subtle)] space-y-1">
              <p>HEADQUARTERS: Kallakurichi, Tamil Nadu, India</p>
              <p>DIRECT: ceo.nexavora@gmail.com</p>
            </div>
          </div>

          {/* Directory */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] mb-5">
              Practice Directory
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-xs font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-cyan)] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] mb-5">
                Executive Channels
              </h4>
              <div className="flex items-center gap-3 text-[var(--color-ink-muted)] mb-5">
                <a
                  href="https://github.com/Manju1303"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository Profile"
                  className="w-9 h-9 rounded-lg bg-[var(--color-rule)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/manjunath-manjunath-248594352"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Executive Profile"
                  className="w-9 h-9 rounded-lg bg-[var(--color-rule)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://www.instagram.com/mjx_1303"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-lg bg-[var(--color-rule)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all"
                >
                  <InstagramIcon />
                </a>
              </div>
              <a
                href="mailto:ceo.nexavora@gmail.com"
                className="font-mono text-xs text-[var(--color-ink-muted)] hover:text-[var(--color-cyan)] transition-colors"
              >
                ceo.nexavora@gmail.com
              </a>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="btn btn-secondary text-xs gap-1.5 py-2 px-3 group"
              >
                Back to top <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-ink-subtle)] gap-4">
          <p>© {new Date().getFullYear()} Nexavora Technologies. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Engineering from Kallakurichi, Tamil Nadu · Pan-India Operations
          </p>
        </div>
      </div>
    </footer>
  );
}
