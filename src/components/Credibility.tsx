"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, Lock } from "lucide-react";

const points = [
  {
    icon: Building2,
    title: "Designed for Complex, Regulated Environments",
    body: "Cognition's platform is built for organisations where compliance, governance, and auditability are not optional. Every feature assumes enterprise-grade security, access control, and traceability as baseline requirements.",
  },
  {
    icon: Globe,
    title: "Applicable to Global Financial Institutions",
    body: "The challenges at Société Générale — legacy modernisation, operational resilience, cost pressure, regulatory burden — are shared by every global bank. Cognition's platform is designed for this exact intersection of scale and constraint.",
  },
  {
    icon: Lock,
    title: "Aligned with Enterprise Engineering Systems",
    body: "Integration architecture built around existing CI/CD, observability, and security tooling. No requirement to adopt new platforms or migrate workflows. Cognition works alongside your existing engineering investment.",
  },
];

export default function Credibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="credibility" ref={ref} className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Credibility
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for Environments Like Yours
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            We make no claims we cannot substantiate. Here is what we can say
            about how Cognition maps to an environment like Société Générale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                className="p-6 rounded-2xl border border-border bg-card/30"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
