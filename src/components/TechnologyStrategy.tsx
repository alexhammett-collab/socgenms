"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Cloud,
  Server,
  GitMerge,
  ShieldCheck,
  Database,
  Bot,
  Cpu,
  ArrowRight,
} from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  inView,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const techLandscape = [
  {
    icon: Server,
    label: "Mainframe & COBOL",
    detail: "Core banking, batch processing, regulatory reporting — Bull/GCOS and IBM z/OS systems underpinning retail and wholesale operations",
  },
  {
    icon: Cpu,
    label: "Java / J2EE Estate",
    detail: "Thousands of distributed services across GBIS trading platforms, risk engines (Murex, Calypso), and middle-office workflows",
  },
  {
    icon: Cloud,
    label: "SG Cloud & Hybrid",
    detail: "Multi-cloud strategy across private cloud, GCP, and Azure — with strict data residency and sovereign cloud requirements under French and EU regulation",
  },
  {
    icon: Database,
    label: "Data Infrastructure",
    detail: "Oracle, Sybase, and PostgreSQL estates alongside Hadoop/Spark clusters and emerging lakehouse architectures for risk aggregation and BCBS 239 compliance",
  },
  {
    icon: GitMerge,
    label: "CI/CD & DevOps",
    detail: "GitLab-centric pipelines with Jenkins legacy. Internal platform engineering initiative to standardise golden paths, reduce build times, and embed security scanning",
  },
  {
    icon: ShieldCheck,
    label: "Security & Compliance",
    detail: "IAM via CyberArk and SailPoint. SIEM through Splunk. Strict change management (CAB), DORA compliance programme, and ECB SSM audit readiness across all technology changes",
  },
];

const priorities = [
  {
    icon: Server,
    title: "Application Rationalisation",
    stat: "3,000+",
    statLabel: "estimated applications",
    points: [
      "Reducing from ~3,000+ applications to a consolidated, governed portfolio",
      "Eliminating duplicate systems across retail (BDDF, Crédit du Nord merger), GBIS, and securities services",
      "Target: 30–40% reduction in application count by 2026 per strategic plan",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Migration & SG Cloud",
    stat: "Hybrid",
    statLabel: "cloud strategy",
    points: [
      "SG Private Cloud as primary, with selective workloads on GCP and Azure",
      "Kubernetes adoption (OpenShift) for container orchestration across environments",
      "Strict data sovereignty: French/EU data residency for regulated workloads, DORA Art. 28 third-party risk management",
    ],
  },
  {
    icon: GitMerge,
    title: "Platform Engineering & SDLC",
    stat: "~25K",
    statLabel: "technology staff",
    points: [
      "Internal developer platform initiative: standardised golden paths, self-service provisioning",
      "GitLab as primary SCM/CI with migration from legacy Jenkins pipelines",
      "DevSecOps maturity: SAST/DAST embedded in pipelines, shift-left security scanning",
    ],
  },
  {
    icon: Bot,
    title: "Controlled AI Adoption",
    stat: "Governed",
    statLabel: "rollout model",
    points: [
      "AI governance committee with model risk management aligned to ECB expectations",
      "Focus on engineering productivity (code generation, test automation) before client-facing AI",
      "LLM deployment within SG perimeter — no external API calls for sensitive code or data",
    ],
  },
];

export default function TechnologyStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="strategy" ref={ref} className="py-14 sm:py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-2">
            Observed Strategic Priorities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Where SocGen Is Heading
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl mb-10">
            Based on public disclosures, analyst reports, and the Crédit du Nord
            integration programme — these are the technology priorities shaping
            engineering investment at Société Générale today.
          </p>
        </motion.div>

        {/* Key metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {[
            { value: 25000, suffix: "+", label: "Technology Staff", prefix: "~" },
            { value: 3000, suffix: "+", label: "Applications", prefix: "" },
            { value: 67, suffix: "", label: "Countries", prefix: "" },
            { value: 4, suffix: "", label: "Cloud Providers", prefix: "" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + 0.08 * i }}
              className="p-4 rounded-xl border border-border bg-card/50 text-center group hover:border-accent/30 transition-colors duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                <AnimatedCounter
                  target={m.value}
                  suffix={m.suffix}
                  prefix={m.prefix}
                  inView={isInView}
                />
              </div>
              <div className="text-xs text-muted mt-1">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current technology landscape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Current Technology Landscape
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {techLandscape.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + 0.06 * i }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-4 rounded-xl border border-border bg-card/30 hover:bg-card/70 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <h4 className="text-sm font-semibold">{item.label}</h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Strategic priorities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Inferred Strategic Priorities
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {priorities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * i }}
                  whileHover={{ y: -2 }}
                  className="group p-5 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <h4 className="text-base font-semibold">{item.title}</h4>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <div className="text-lg font-bold text-accent leading-none">
                        {item.stat}
                      </div>
                      <div className="text-[10px] text-muted">{item.statLabel}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-xs text-muted leading-relaxed flex items-start gap-2"
                      >
                        <ArrowRight
                          size={10}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Data modernisation callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="mt-8 p-5 rounded-2xl border border-accent/20 bg-accent/[0.03]"
        >
          <div className="flex items-start gap-3">
            <Database size={18} className="text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold mb-1">
                Data & Infrastructure Modernisation
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Gradual migration from Oracle/Sybase to PostgreSQL and
                cloud-native databases. Data platform consolidation for BCBS 239
                risk data aggregation compliance. Lakehouse architecture adoption
                for analytics workloads. Every modernisation decision weighed
                against DORA operational resilience requirements and ECB supervisory
                expectations on ICT risk.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
