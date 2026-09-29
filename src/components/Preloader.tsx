"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const stages = [
  { threshold: 0, text: "CALIBRATING NEURAL CORE..." },
  { threshold: 25, text: "SYNCHRONIZING ENTERPRISE RUNTIME..." },
  { threshold: 55, text: "INITIALIZING INTELLIGENCE PIPELINES..." },
  { threshold: 85, text: "OPTIMIZING INTERACTION SCHEMAS..." },
  { threshold: 98, text: "SYSTEM READY // NEXAVORA ONLINE" },
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1250; // 1.25s cinematic initial boot

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
          setTimeout(() => setHidden(true), 750);
        }, 220);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  const currentStage =
    [...stages].reverse().find((s) => progress >= s.threshold)?.text ||
    "SYSTEM INITIALIZING...";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040817] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
        loading ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
      aria-hidden={!loading}
    >
      {/* Background cyber ambient glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.12)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)] blur-[120px] pointer-events-none" />

      {/* Cyber Grid Lines in Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00E5FF 1px, transparent 1px), linear-gradient(to bottom, #00E5FF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Central Content */}
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Emblem with Orbital Neon Rings */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Outer Pulsing Glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-accent)] to-[#8B5CF6] opacity-35 blur-xl animate-pulse" />

          {/* Rotating Dashed Orbit Ring */}
          <div
            className="absolute -inset-5 rounded-full border border-dashed border-[var(--color-cyan)]/30 animate-spin"
            style={{ animationDuration: "14s" }}
          />

          {/* Inner Accent Ring */}
          <div className="absolute -inset-2.5 rounded-full border border-[var(--color-cyan)]/25" />

          {/* Glowing Emblem */}
          <div className="relative z-10 p-2">
            <img
              src="/Nexavora-Technologies/logo-icon.png"
              alt="Nexavora Emblem"
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_24px_rgba(0,229,255,0.7)] animate-pulse"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith("/logo-icon.png")) {
                  target.src = "/logo-icon.png";
                }
              }}
            />
          </div>
        </div>

        {/* Brand Identity */}
        <div className="text-center mb-7">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Nexavora
          </h2>
          <p className="font-mono text-[10px] uppercase font-bold tracking-[0.38em] text-[var(--color-cyan)] mt-1.5 opacity-90">
            Technologies
          </p>
        </div>

        {/* High-Tech Progress Bar */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,229,255,0.2)]">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-cyan)] to-[#A78BFA] transition-all duration-75 ease-out rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Leading Light Glint */}
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-white shadow-[0_0_8px_#ffffff] rounded-full" />
          </div>
        </div>

        {/* Telemetry Status Line */}
        <div className="mt-4 flex items-center justify-between w-full font-mono text-[10px] text-slate-400">
          <span className="tracking-wider uppercase truncate pr-2 text-slate-300">
            {currentStage}
          </span>
          <span className="text-[var(--color-cyan)] font-bold tabular-nums shrink-0">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
