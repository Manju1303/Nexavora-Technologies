"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  /* Track scroll progress and current visible section */
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.substring(1));
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = `#${section}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-header-bg)] backdrop-blur-xl border-b border-[var(--color-rule)] shadow-2xl shadow-[rgba(0,10,30,0.8)] py-3"
            : "bg-transparent py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Bar in Nexavora Logo Cyan & Royal Blue */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-cyan)] to-[var(--color-accent)] transition-all duration-75 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container flex items-center justify-between">
          {/* Official Full Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#");
            }}
            className="flex items-center group cursor-pointer py-1"
            aria-label="Nexavora Technologies, back to top"
          >
            <img
              src="/Nexavora-Technologies/logo-full.png"
              alt="Nexavora Technologies"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith("/logo-full.png")) {
                  target.src = "/logo-full.png";
                } else {
                  target.src = "/Nexavora-Technologies/logo.png";
                }
              }}
            />
          </a>

          {/* Desktop Navigation with High-Contrast Visible Text */}
          <nav
            className="hidden xl:flex items-center gap-7"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-150 relative py-1.5 ${
                    isActive
                      ? "text-[var(--color-cyan)]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cyan)] rounded-full shadow-[0_0_10px_var(--color-cyan)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="btn btn-primary text-xs hidden sm:inline-flex items-center gap-1.5"
            >
              Start a project <ArrowUpRight size={14} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2.5 rounded-lg border border-[var(--color-rule)] text-white hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-page)]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 xl:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-lg font-medium text-white py-2 border-b border-[var(--color-rule)] flex items-center justify-between hover:text-[var(--color-cyan)] transition-colors"
              >
                {link.name}
                <ArrowUpRight size={16} className="text-[var(--color-cyan)]" />
              </a>
            ))}
          </nav>

          <div className="pt-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="btn btn-primary w-full text-center"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
