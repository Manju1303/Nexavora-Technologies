"use client";
 
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
 
const testimonials = [
  {
    name: "Vikram R.",
    role: "Director of Operations",
    company: "Stanford Student Housing Alliance",
    content:
      "The Hostel Mess ERP designed by Nexavora Technologies has completely overhauled our meal operations. Billing disputes dropped to zero, and the inventory forecasting feature alone has reduced food waste by 35%. Exceptional code quality.",
    rating: 5,
    initials: "VR",
    color: "cyan",
  },
  {
    name: "Elena S.",
    role: "Chief Technology Officer",
    company: "EduSphere Learning Systems",
    content:
      "Integrating Nexavora's College Management Portal was the best architecture decision we made this year. The transition to their cloud database was completely seamless, and parents are praising the simplified digital grade book interface.",
    rating: 5,
    initials: "ES",
    color: "purple",
  },
  {
    name: "Devon M.",
    role: "Founder & CEO",
    company: "Aether Analytics Labs",
    content:
      "We needed a world-class front-end to showcase our machine learning predictions. Nexavora built an AI Analytics Dashboard that is incredibly fast, visually stunning, and highly responsive. Investors were immediately impressed.",
    rating: 5,
    initials: "DM",
    color: "blue",
  },
  {
    name: "Pooja S.",
    role: "Founder & Owner",
    company: "Aura Beauty Studio",
    content:
      "The custom website and digital marketing setup built by Nexavora Technologies has completely transformed our brand visibility. Our client booking volume increased by over 45% in just two months. Their creativity is unmatched.",
    rating: 5,
    initials: "PS",
    color: "pink",
  },
  {
    name: "Rajeev P.",
    role: "Head of Growth",
    company: "Radhe Developers",
    content:
      "Nexavora's SEO audits and organic ranking strategies placed our luxury housing project page on the first page of Google searches. The digital lead flow has doubled our sales inquiries. Highly professional technology consulting!",
    rating: 5,
    initials: "RP",
    color: "purple",
  },
  {
    name: "Jignesh Shah",
    role: "Managing Director",
    company: "Shree Krishnam Rubtech",
    content:
      "We needed a custom SaaS workflow console to monitor factory staff attendance and metrics across three plant locations. Nexavora delivered a lightweight, responsive ERP system that works seamlessly. Exceptional engineering team.",
    rating: 5,
    initials: "JS",
    color: "cyan",
  },
];
 
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
 
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
 
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
 
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };
 
  const currentTest = testimonials[currentIndex];
 
  const glowStyles = {
    cyan: "border-accent-cyan/20 shadow-accent-cyan/5",
    purple: "border-accent-purple/20 shadow-accent-purple/5",
    blue: "border-accent-blue/20 shadow-accent-blue/5",
    pink: "border-accent-pink/20 shadow-accent-pink/5",
  };
 
  const avatarGlows = {
    cyan: "from-accent-cyan to-accent-blue",
    purple: "from-accent-purple to-accent-pink",
    blue: "from-accent-blue to-accent-purple",
    pink: "from-accent-pink to-accent-purple",
  };
 
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-light-blue blur-3xl opacity-10 pointer-events-none" />
 
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-accent-violet mb-3">
            Client Success
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Endorsed by Tech & Business Leaders
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-5 rounded-full" />
        </div>
 
        {/* Testimonials Slider Area */}
        <div className="relative min-h-[360px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`w-full p-8 md:p-12 rounded-3xl glass-card border bg-white/5 flex flex-col justify-between relative group ${
                glowStyles[currentTest.color as keyof typeof glowStyles]
              }`}
            >
              {/* Quote Icon overlay */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
 
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
 
                {/* Review Text */}
                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light mb-8 italic text-left">
                  &quot;{currentTest.content}&quot;
                </p>
              </div>
 
              {/* Profile row */}
              <div className="flex items-center gap-4">
                {/* Glowing Initials Avatar */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${
                    avatarGlows[currentTest.color as keyof typeof avatarGlows]
                  } p-[1px] shadow-md`}
                >
                  <div className="w-full h-full rounded-[11px] bg-bg-dark flex items-center justify-center font-bold text-white text-sm">
                    {currentTest.initials}
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-white text-sm">{currentTest.name}</span>
                  <span className="text-[10px] text-text-secondary mt-0.5 font-medium">
                    {currentTest.role}, <span className="text-white/70">{currentTest.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
 
        {/* Navigation Buttons and Index Indicator */}
        <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/5 bg-white/5 text-text-secondary hover:text-white hover:border-accent-violet/35 hover:bg-accent-violet/5 transition-all duration-300 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
 
          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? "bg-accent-violet w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
 
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/5 bg-white/5 text-text-secondary hover:text-white hover:border-accent-violet/35 hover:bg-accent-violet/5 transition-all duration-300 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
