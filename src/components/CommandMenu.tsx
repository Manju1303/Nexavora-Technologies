"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  Layers,
  Cpu,
  Calculator,
  Terminal,
  Globe,
  Briefcase,
  Mail,
  X,
  Sparkles,
  Check,
} from "lucide-react";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    {
      id: "services",
      label: "Explore Core Services",
      category: "Navigation",
      icon: Layers,
      hint: "AI, ERP, Cloud, Apps",
      run: () => scrollToSection("services"),
    },
    {
      id: "architecture",
      label: "View Enterprise Architecture Pipeline",
      category: "Solutions",
      icon: Cpu,
      hint: "Interactive 4-tier pipeline",
      run: () => scrollToSection("architecture"),
    },
    {
      id: "telemetry",
      label: "Global Edge Infrastructure Telemetry",
      category: "Network",
      icon: Globe,
      hint: "6 Global nodes & 99.99% SLA",
      run: () => scrollToSection("telemetry"),
    },
    {
      id: "estimator",
      label: "Interactive Scope & ROI Calculator",
      category: "Tools",
      icon: Calculator,
      hint: "Estimate sprint velocity & cost",
      run: () => scrollToSection("estimator"),
    },
    {
      id: "projects",
      label: "Client Case Studies & Live Deployments",
      category: "Showcase",
      icon: Sparkles,
      hint: "Arockia, Insta Guidance & ERPs",
      run: () => scrollToSection("projects"),
    },
    {
      id: "console",
      label: "Launch Virtual CLI Uplink Console",
      category: "Developer",
      icon: Terminal,
      hint: "Interactive system query tool",
      run: () => scrollToSection("why-us"),
    },
    {
      id: "careers",
      label: "View Open Career Opportunities",
      category: "Company",
      icon: Briefcase,
      hint: "Full-stack, AI & Intern roles",
      run: () => scrollToSection("careers"),
    },
    {
      id: "email",
      label: "Copy Official Email Address",
      category: "Contact",
      icon: Mail,
      hint: "contact@nexavora.com",
      run: () => copyEmail(),
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase()) ||
    act.hint.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setSelectedIndex(0);
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].run();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@nexavora.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#090f1d]/95 border border-white/10 shadow-2xl shadow-accent-violet/20 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-accent-violet shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search (e.g. 'architecture', 'services', 'ROI')..."
                className="w-full bg-transparent text-white placeholder-text-secondary/70 text-sm focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-text-secondary hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-text-secondary px-2 py-0.5 rounded bg-white/5 border border-white/10">
                ESC
              </span>
            </div>

            {/* Actions List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-text-secondary text-sm">
                  No matching commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((action, idx) => {
                  const Icon = action.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={action.id}
                      onClick={() => action.run()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-accent-violet/20 to-accent-cyan/10 text-white border border-accent-violet/30"
                          : "text-text-secondary hover:text-white border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-accent-violet text-white shadow-md shadow-accent-violet/30"
                              : "bg-white/5 text-text-secondary"
                          }`}
                        >
                          {action.id === "email" && copied ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Icon className="w-4 h-4" />
                          )}
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-medium text-white truncate">
                            {action.label}
                          </p>
                          <p className="text-[11px] text-text-secondary font-light truncate">
                            {action.hint}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-text-secondary">
                          {action.category}
                        </span>
                        {isSelected && <ArrowRight className="w-4 h-4 text-accent-cyan" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer with Keyboard Hints */}
            <div className="px-5 py-3 border-t border-white/5 bg-black/40 flex items-center justify-between text-[11px] text-text-secondary">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-white">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-white">↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-white">↵</kbd>
                  Execute
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-accent-violet font-semibold">
                <Command className="w-3.5 h-3.5" /> Nexavora HUD
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
