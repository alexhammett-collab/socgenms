"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Workflow, LayoutGrid, Bot, ShieldCheck } from "lucide-react";

const priorities = [
  {
    icon: LayoutGrid,
    title: "Platform Engineering Evolution",
    description:
      "Consolidating fragmented tooling into cohesive internal developer platforms. Reducing cognitive load on engineering teams while maintaining governance and compliance at the platform layer.",
  },
  {
    icon: Workflow,
    title: "Industrialisation of the SDLC",
    description:
      "Moving from bespoke delivery pipelines to standardised, reproducible workflows. DevSecOps maturity as a foundation — not an afterthought. Measurable improvements in deployment frequency and lead time.",
  },
  {
    icon: Bot,
    title: "Selective AI Adoption",
    description:
      "AI introduced with governance guardrails, not as blanket experimentation. Focus on measurable productivity gains in well-understood domains — code generation, review automation, incident triage — before expanding scope.",
  },
  {
    icon: ShieldCheck,
    title: "Resilience & Operational Stability",
    description:
      "Reducing incident frequency and mean time to recovery. Strengthening audit trails across distributed systems. Operational stability as a prerequisite for any transformation initiative.",
  },
];

export default function TechnologyStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="strategy" ref={ref} className="py-24 sm:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Observed Strategic Priorities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Where SocGen Is Heading
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mb-16">
            Based on public disclosures, industry positioning, and
            infrastructure patterns — these are the likely technology priorities
            shaping engineering investment at Société Générale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {priorities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="flex gap-4 p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/60 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl border border-border bg-card/30"
        >
          <h3 className="text-base font-semibold mb-2">
            Data & Infrastructure Modernisation
          </h3>
          <p className="text-muted text-sm leading-relaxed max-w-3xl">
            Gradual migration over big bang transformation. Data platform
            consolidation to reduce fragmentation. Performance and cost
            optimisation across hybrid infrastructure — on-premises, private
            cloud, and public cloud. Every modernisation decision weighed
            against operational risk and regulatory impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
