"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to explore this further?
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-8">
            This brief was prepared specifically for Société Générale. We would
            welcome the opportunity to discuss the hypothesis in detail.
          </p>
          <a
            href="mailto:enterprise@cognition.ai"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-soft text-white text-sm font-semibold rounded-full transition-all duration-200"
          >
            Start the Conversation
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        <div className="pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            <span className="text-accent font-semibold">Cognition</span>
            <span className="mx-1.5">×</span>
            <span>Société Générale</span>
          </div>
          <p className="text-xs text-muted/60">
            Confidential — Prepared for strategic engagement purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
