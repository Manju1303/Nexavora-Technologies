"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 32,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    if (direction === "up") return `translate3d(0, ${distance}px, 0)`;
    if (direction === "down") return `translate3d(0, -${distance}px, 0)`;
    if (direction === "left") return `translate3d(${distance}px, 0, 0)`;
    if (direction === "right") return `translate3d(-${distance}px, 0, 0)`;
    return "none";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : getInitialTransform(),
        filter: visible ? "blur(0px)" : "blur(6px)",
        transition:
          "opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}
