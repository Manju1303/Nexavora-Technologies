"use client";

import { ArrowUp } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleScroll = (href: string) => {
    const target = document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/Manju1303", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/manjunath-manjunath-248594352", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://www.instagram.com/mjx_1303", label: "Instagram" },
  ];

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll("home")}>
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                <img src="/Nexavora-Technologies/logo.png" alt="Nexavaro Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">Nexavaro</span>
                <span className="text-[9px] text-accent-purple tracking-widest uppercase font-semibold">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed font-light max-w-sm">
              Engineering premium, enterprise-grade digital infrastructures. Specializing in AI-driven automation, secure ERP frameworks, and custom SaaS platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6 space-y-4">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider text-accent-cyan">
              Quick Navigation
            </h5>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "About Company", id: "about" },
                { name: "Services", id: "services" },
                { name: "Case Studies", id: "projects" },
                { name: "Why Partner Us", id: "why-us" },
                { name: "Contact Hub", id: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="text-xs text-text-secondary hover:text-white transition-colors font-light cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider text-accent-purple">
              Core Practices
            </h5>
            <ul className="space-y-2">
              {[
                "AI Solutions",
                "ERP Development",
                "Web Engineering",
                "Mobile App Dev",
                "Cloud Systems",
                "SaaS Frameworks",
              ].map((srv) => (
                <li key={srv}>
                  <button
                    onClick={() => handleScroll("services")}
                    className="text-xs text-text-secondary hover:text-white transition-colors font-light cursor-pointer text-left"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[11px] text-text-secondary font-light">
            © {new Date().getFullYear()} Nexavaro Technologies. All Rights Reserved. Designed for Manjunath.
          </span>

          {/* Socials & Top Scroll */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    aria-label={soc.label}
                    className="p-2 rounded-lg bg-white/5 border border-white/5 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => handleScroll("home")}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
