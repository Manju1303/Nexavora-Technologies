"use client";

import { Star, Quote } from "lucide-react";
import { motion as m } from "framer-motion";

const testimonials = [
  {
    name: "Vikram R.",
    role: "Director of Operations",
    company: "Stanford Student Housing Alliance",
    content:
      "The Hostel Mess ERP designed by Nexavaro Technologies has completely overhauled our meal operations. Billing disputes dropped to zero, and the inventory forecasting feature alone has reduced food waste by 35%. Exceptional code quality.",
    rating: 5,
    initials: "VR",
    color: "cyan",
  },
  {
    name: "Elena S.",
    role: "Chief Technology Officer",
    company: "EduSphere Learning Systems",
    content:
      "Integrating Nexavaro's College Management Portal was the best architecture decision we made this year. The transition to their cloud database was completely seamless, and parents are praising the simplified digital grade book interface.",
    rating: 5,
    initials: "ES",
    color: "purple",
  },
  {
    name: "Devon M.",
    role: "Founder & CEO",
    company: "Aether Analytics Labs",
    content:
      "We needed a world-class front-end to showcase our machine learning predictions. Nexavaro built an AI Analytics Dashboard that is incredibly fast, visually stunning, and highly responsive. Investors were immediately impressed.",
    rating: 5,
    initials: "DM",
    color: "blue",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-light-blue blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest uppercase text-accent-cyan mb-3">
            Client Success
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Endorsed by Tech Visionaries
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => {
            const glowStyles = {
              cyan: "hover:border-accent-cyan/20 hover:shadow-accent-cyan/5",
              purple: "hover:border-accent-purple/20 hover:shadow-accent-purple/5",
              blue: "hover:border-accent-blue/20 hover:shadow-accent-blue/5",
            };

            const avatarGlows = {
              cyan: "from-accent-cyan to-accent-blue",
              purple: "from-accent-purple to-accent-pink",
              blue: "from-accent-blue to-accent-purple",
            };

            return (
              <m.div
                key={test.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between relative group ${
                  glowStyles[test.color as keyof typeof glowStyles]
                }`}
              >
                {/* Quote Icon overlay */}
                <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 pointer-events-none group-hover:scale-115 transition-transform duration-300" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-text-secondary text-sm leading-relaxed font-light mb-8 italic">
                    &quot;{test.content}&quot;
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex items-center gap-4">
                  {/* Glowing Initials Avatar */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${
                      avatarGlows[test.color as keyof typeof avatarGlows]
                    } p-[1px] shadow-md`}
                  >
                    <div className="w-full h-full rounded-[11px] bg-bg-dark flex items-center justify-center font-bold text-white text-sm">
                      {test.initials}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-white text-sm">{test.name}</span>
                    <span className="text-[10px] text-text-secondary mt-0.5 font-medium">
                      {test.role}, <span className="text-white/70">{test.company}</span>
                    </span>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
