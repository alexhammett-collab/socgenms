"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Layers } from "lucide-react";

const phases = [
  {
    icon: Target,
    phase: "Phase 1",
    title: "Focused Pilot",
    duration: "4–8 weeks",
    description:
      "Select a high-impact, contained use case — incident resolution or PR review automation. Deploy within a single team. Establish baseline metrics and governance framework.",
    details: [
      "Single team, single use case",
      "Measurable KPIs defined upfront",
      "Full audit and compliance review",
      "Go/no-go decision at end of phase",
    ],
  },
  {
    icon: Users,
    phase: "Phase 2",
    title: "Team-Level Expansion",
    duration: "2–4 months",
    description:
      "Expand to 3–5 teams across different engineering domains. Add use cases based on pilot learnings. Measure productivity gains and operational impact against baselines.",
    details: [
      "Multi-team deployment",
      "Additional use cases activated",
      "Quantified productivity gains",
      "Refined governance and access controls",
    ],
  },
  {
    icon: Layers,
    phase: "Phase 3",
    title: "Platform Integration",
    duration: "Ongoing",
    description:
      "Embed Cognition into the software delivery lifecycle at the platform layer. Integrate with CI/CD, incident management, and developer tooling. Autonomous execution becomes part of the engineering operating model.",
    details: [
      "SDLC-embedded automation",
      "Organisation-wide availability",
      "Continuous measurement framework",
      "Strategic roadmap alignment",
    ],
  },
];

export default function LandingStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="landing" ref={ref} className="py-14 sm:py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Landing Strategy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How This Gets Started
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A phased approach designed for enterprise governance. Measurable at
            every stage. No commitment without evidence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — desktop only */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-0.5px)] w-px bg-border" />

          <div className="space-y-8 md:space-y-0">
            {phases.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                  className={`relative md:flex md:items-start md:gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:py-8`}
                >
                  {/* Dot on timeline — desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full border-2 border-accent bg-background z-10" />

                  {/* Content card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border border-border bg-card/40 ${
                        isLeft ? "md:ml-auto" : "md:mr-auto"
                      } max-w-lg`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-accent">
                            {item.phase}
                          </span>
                          <span className="text-xs text-muted ml-2">
                            {item.duration}
                          </span>
                        </div>
                      </div>
                      <h3
                        className={`text-lg font-semibold mb-2 ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-muted text-sm leading-relaxed mb-4 ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.details.map((d, j) => (
                          <li
                            key={j}
                            className={`text-xs text-muted flex items-center gap-2 ${
                              isLeft ? "md:justify-end md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
