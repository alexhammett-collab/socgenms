"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Layers, TrendingDown, Shield } from "lucide-react";
import Image from "next/image";

const insights = [
  {
    icon: Scale,
    title: "Scale Meets Constraint",
    body: "Société Générale operates across retail banking, investment banking (GBIS), and securities services — serving millions of clients across dozens of markets. Every technology decision must satisfy ECB oversight, Basel requirements, and local regulatory frameworks simultaneously. Scale here is not a vanity metric; it is a compounding constraint.",
  },
  {
    icon: Layers,
    title: "Legacy and Modern Coexist",
    body: "The technology estate spans mainframe systems, distributed Java services, and emerging cloud-native workloads. This is not a deficiency — it is the reality of a 160-year-old institution that has continuously adapted. Any credible technology strategy must work across this hybrid landscape, not pretend it doesn't exist.",
  },
  {
    icon: TrendingDown,
    title: "Efficiency is a Strategic Imperative",
    body: "Cost-to-income pressure is structural, not cyclical. Application rationalisation, platform consolidation, and reduction of duplication are not IT projects — they are board-level priorities. Every engineering investment must demonstrate measurable efficiency gains.",
  },
  {
    icon: Shield,
    title: "Control is Non-Negotiable",
    body: "Audit trails, governance frameworks, and access controls are not friction — they are the operating license. Any technology introduced into this environment must be fully auditable, deterministic where required, and aligned with enterprise security posture from day one.",
  },
];

export default function UnderstandingSocGen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="understanding" ref={ref} className="py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Understanding SocGen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Operating Reality
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl mb-10">
            Before proposing any solution, we start with the constraints.
            These observations shape every recommendation that follows.
          </p>
        </motion.div>

        {/* Context image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 rounded-2xl overflow-hidden border border-border relative h-48 sm:h-56"
        >
          <Image
            src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1200&q=80"
            alt="Modern banking headquarters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <p className="text-xs text-foreground/70 font-medium">Universal bank across 67 countries · €25.1B revenue · 117,000 employees</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                className="group relative p-5 sm:p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {item.body}
                </p>
                <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/20 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
