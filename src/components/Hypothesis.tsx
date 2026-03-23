"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, GitBranch, Users } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    label: "Execution Capacity",
    text: "Not copilots that suggest — agents that execute. Complete tasks autonomously within defined guardrails, producing auditable, reviewable outputs.",
  },
  {
    icon: GitBranch,
    label: "Parallelisation of Work",
    text: "Multiple engineering workstreams executed concurrently. Modernisation, documentation, testing, and review — no longer sequentially bottlenecked.",
  },
  {
    icon: Users,
    label: "Reduction in Human Bottlenecks",
    text: "Senior engineers freed from routine work. Expertise deployed where judgement matters — architecture, risk assessment, strategic decisions — not mechanical tasks.",
  },
];

export default function Hypothesis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hypothesis" ref={ref} className="py-14 sm:py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            The Hypothesis
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            A New Layer in the
            <br />
            Engineering Stack
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cognition does not replace your engineers, your platforms, or your
            governance. It adds a layer of{" "}
            <span className="text-foreground font-medium">
              autonomous execution
            </span>{" "}
            — compressing timelines across legacy and modern environments
            without compromising control.
          </p>
        </motion.div>

        {/* Core distinction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 p-6 sm:p-8 rounded-2xl border border-accent/20 bg-accent/[0.03]"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                The Shift
              </h3>
              <p className="text-lg sm:text-xl font-semibold leading-snug">
                From AI-assisted development
                <br />
                to AI-executed engineering.
              </p>
            </div>
            <div className="flex-1 text-muted text-sm leading-relaxed">
              Most AI tooling adds suggestions to an existing workflow. Cognition
              adds capacity — autonomous agents that take a task specification,
              execute across codebases and systems, produce a verifiable result,
              and generate a complete audit trail.
            </div>
          </div>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * i }}
                className="p-5 rounded-2xl border border-border bg-card/40 text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-3">{item.label}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
