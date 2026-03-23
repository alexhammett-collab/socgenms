"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cognitionLayer = [
  { name: "Windsurf", desc: "AI-native IDE — the interface layer" },
  { name: "Devin", desc: "Autonomous software engineer — the execution layer" },
  { name: "Dana", desc: "Data intelligence — the insight layer" },
];

const integrations = [
  { name: "CI/CD Pipelines", desc: "Jenkins, GitLab CI, GitHub Actions" },
  { name: "Cloud (Hybrid)", desc: "On-prem, private cloud, public cloud" },
  { name: "Data Platforms", desc: "Warehouses, lakes, streaming systems" },
  { name: "Observability", desc: "Monitoring, logging, alerting" },
  { name: "Security & Governance", desc: "RBAC, audit, compliance controls" },
];

export default function Architecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="architecture"
      ref={ref}
      className="py-24 sm:py-32 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Overlay, Not Replacement
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Cognition integrates as a layer above your existing infrastructure.
            No rip-and-replace. No new platforms to manage. Connects to what you
            already run.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="space-y-4">
          {/* Cognition Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
                Cognition Layer
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cognitionLayer.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-white border border-border"
                >
                  <h4 className="text-base font-semibold mb-1">{item.name}</h4>
                  <p className="text-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Connection indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-xs text-muted font-medium">
                API · CLI · Webhooks · Events
              </div>
              <div className="w-px h-4 bg-border" />
            </div>
          </motion.div>

          {/* Enterprise Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-border bg-card/30 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-muted" />
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                Enterprise Infrastructure
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl border border-border bg-white"
                >
                  <h4 className="text-sm font-semibold mb-0.5">{item.name}</h4>
                  <p className="text-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key point */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center text-muted text-sm max-w-xl mx-auto"
        >
          Every interaction logged. Every action auditable. Deployed within your
          security perimeter — cloud or on-premises.
        </motion.p>
      </div>
    </section>
  );
}
