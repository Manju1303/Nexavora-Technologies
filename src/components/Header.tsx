"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  /* Restore saved theme preference */
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  /* Show subtle bottom border when scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

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
    <header
      style={{ backgroundColor: "var(--color-page)" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-rule)]" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo("#"); }}
          className="font-serif text-lg sm:text-xl tracking-tight font-medium"
          aria-label="Nexavora Technologies, back to top"
        >
          Nexavora Technologies
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--color-ink-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-muted)")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-colors duration-150"
            style={{ color: "var(--color-ink-muted)" }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="btn btn-primary hidden lg:inline-flex text-sm"
          >
            Start a project
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md"
            style={{ color: "var(--color-ink)" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {menuOpen && (
        <nav
          className="lg:hidden fixed inset-0 top-16 z-40"
          style={{ backgroundColor: "var(--color-page)" }}
          aria-label="Mobile navigation"
        >
          <div className="container flex flex-col gap-1 pt-6 pb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="py-3 text-lg font-medium"
                style={{
                  color: "var(--color-ink)",
                  borderBottom: "1px solid var(--color-rule)",
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn btn-primary mt-6"
            >
              Start a project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
