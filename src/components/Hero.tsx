"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background image — La Défense */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern glass skyscraper — La Défense, Paris"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-8"
        >
          <Image
            src="/logos/cognition.png"
            alt="Cognition"
            width={140}
            height={32}
            className="h-7 sm:h-8 w-auto"
          />
          <div className="w-px h-8 bg-border" />
          <Image
            src="/logos/socgen.png"
            alt="Société Générale"
            width={160}
            height={40}
            className="h-8 sm:h-9 w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/60 backdrop-blur-sm text-xs text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Strategic Engagement Brief
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
        >
          Compressing Engineering
          <br />
          <span className="text-accent">Timelines</span> at
          <br />
          Société Générale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          From legacy modernisation to incident resolution — Cognition
          introduces a new operating model for software delivery in regulated
          environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <button
            onClick={() => {
              document
                .getElementById("understanding")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-soft text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-accent/20"
          >
            Explore the Hypothesis
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
