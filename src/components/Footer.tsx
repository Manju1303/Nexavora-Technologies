"use client";
/* eslint-disable @next/next/no-img-element */

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

const companyLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "AI & Automation", href: "#services" },
  { name: "Software Development", href: "#services" },
  { name: "ERP Solutions", href: "#services" },
  { name: "Mobile Applications", href: "#services" },
  { name: "Cloud & DevOps", href: "#services" },
  { name: "UI/UX", href: "#services" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-rule)] bg-[#040817] pt-20 pb-12 relative">
      <div className="container">
        {/* ── Section 18: Footer ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-rule)]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center shrink-0">
                <img
                  src="/Nexavora-Technologies/logo-icon.png"
                  alt="Nexavora Logo"
                  className="h-10 sm:h-11 w-auto object-contain drop-shadow-[0_0_14px_rgba(0,229,255,0.45)]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith("/logo-icon.png")) {
                      target.src = "/logo-icon.png";
                    }
                  }}
                />
              </div>
              <div className="flex flex-col select-none text-left">
                <span className="font-display font-extrabold text-2xl text-white tracking-tight leading-none">
                  Nexavora
                </span>
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.24em] text-[var(--color-cyan)] leading-tight mt-1 opacity-90">
                  Technologies
                </span>
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] font-semibold pt-1">
              AI. Software. Automation. Built for Real-World Operations.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Building practical digital solutions for businesses, institutions, and emerging technology ventures.
            </p>

            <div className="font-mono text-xs text-slate-400 space-y-1 pt-2">
              <p>Location: Tamil Nadu, India</p>
              <p>Direct: ceo.nexavora@gmail.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] mb-4 font-semibold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[var(--color-cyan)] transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[var(--color-cyan)] transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] mb-4 font-semibold">
                Connect
              </h4>
              <div className="flex items-center gap-3 text-slate-300 mb-4">
                <a
                  href="https://github.com/Manju1303"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-cyan)] hover:text-black transition-all"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/manjunath-manjunath-248594352"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-cyan)] hover:text-black transition-all"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://www.instagram.com/mjx_1303"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-cyan)] hover:text-black transition-all"
                >
                  <InstagramIcon />
                </a>
              </div>
              <a
                href="mailto:ceo.nexavora@gmail.com"
                className="font-mono text-xs text-slate-300 hover:text-[var(--color-cyan)] transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Nexavora Technologies. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Engineering from Tamil Nadu · Global Reach
          </p>
        </div>
      </div>
    </footer>
  );
}
