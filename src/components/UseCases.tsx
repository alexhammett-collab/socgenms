"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  RefreshCw,
  Database,
  Code2,
  GitPullRequest,
  BarChart3,
  BookOpen,
  Terminal,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const useCases = [
  {
    icon: AlertTriangle,
    tag: "Devin — Event-Triggered",
    title: "Incident Resolution",
    demoUrl: "/demo/incident-resolution",
    context:
      "High cost of downtime across interconnected services. Complex root cause analysis spanning distributed systems, legacy components, and multiple log sources.",
    value: [
      "Automatic triage on incident detection",
      "Root cause analysis across services, logs, and infrastructure",
      "Suggested or autonomously executed fixes within defined guardrails",
    ],
    outcome:
      "Reduced mean time to recovery. Increased resilience. Full audit trail for every action taken.",
  },
  {
    icon: RefreshCw,
    tag: "Devin",
    title: "Legacy & Application Modernisation",
    context:
      "Large backlog of systems requiring refactoring, service extraction, or migration. Limited senior engineering capacity to dedicate to modernisation at scale.",
    value: [
      "Accelerated codebase understanding across legacy systems",
      "Autonomous refactoring and service extraction",
      "Test generation for newly extracted components",
    ],
    outcome:
      "Faster modernisation without massive team scaling. Reduced risk through incremental, reviewable changes.",
  },
  {
    icon: Database,
    tag: "Devin",
    title: "Database & Data Platform Modernisation",
    context:
      "Fragmented data landscape with performance and cost challenges. Schema evolution, query optimisation, and pipeline debugging consuming senior engineering time.",
    value: [
      "Automated schema evolution and migration scripting",
      "Query performance analysis and optimisation",
      "Data pipeline debugging and remediation",
    ],
    outcome:
      "Improved query performance. Reduced infrastructure cost. Faster data access for downstream consumers.",
  },
  {
    icon: Code2,
    tag: "Windsurf + Devin",
    title: "Developer Productivity",
    context:
      "Developer time lost to context switching, legacy complexity, and extended review cycles. High cognitive load from navigating heterogeneous technology estate.",
    value: [
      "AI-native development workflows within the IDE",
      "Parallel task execution across feature work and maintenance",
      "Automated context gathering and code understanding",
    ],
    outcome:
      "Higher output per engineer. Reduced cycle times. Engineers focused on high-judgement work.",
  },
  {
    icon: GitPullRequest,
    tag: "Devin PR Review",
    title: "PR Review Automation",
    context:
      "Code review bottlenecks slowing delivery. Inconsistent application of standards, security checks, and compliance requirements across teams.",
    value: [
      "Automated, intelligent reviews against defined standards",
      "Security and compliance checks embedded in the review process",
      "Contextual feedback — not generic lint warnings",
    ],
    outcome:
      "Faster merge cycles. Higher and more consistent code quality. Reduced burden on senior reviewers.",
  },
  {
    icon: BarChart3,
    tag: "Dana",
    title: "Data Intelligence",
    context:
      "Slow access to insights. Heavy dependence on specialised data teams for queries and analysis. Decision latency in operational and strategic contexts.",
    value: [
      "Natural language queries across data systems",
      "Root cause analysis and anomaly investigation",
      "Self-service access for non-technical stakeholders",
    ],
    outcome:
      "Faster data-driven decisions. Broader access to insights without scaling data teams.",
  },
  {
    icon: BookOpen,
    tag: "DeepWiki",
    title: "Knowledge & Documentation",
    context:
      "Knowledge fragmentation across teams and systems. Onboarding friction for engineers joining complex domains. Documentation perpetually out of date.",
    value: [
      "Auto-generated, always-current documentation from codebases",
      "Searchable knowledge base across repositories",
      "Reduced dependency on tribal knowledge",
    ],
    outcome:
      "Reduced knowledge loss. Faster onboarding. Lower risk from team transitions.",
  },
  {
    icon: Terminal,
    tag: "Devin CLI",
    title: "Automation Layer",
    context:
      "Fragmented tooling and manual workflows across the engineering organisation. Automation limited to CI/CD — leaving large categories of work manual.",
    value: [
      "Embedded autonomous execution within existing pipelines",
      "Task orchestration beyond CI/CD — maintenance, migration, testing",
      "Programmable interface for engineering automation",
    ],
    outcome:
      "End-to-end automation of engineering workflows. Reduced manual intervention across the delivery lifecycle.",
  },
];

function UseCaseCard({
  item,
  index,
}: {
  item: (typeof useCases)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group rounded-2xl border border-border bg-card/40 hover:bg-card/70 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
          <Icon size={20} className="text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              {item.tag}
            </span>
          </div>
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-muted text-sm mt-1 line-clamp-2">{item.context}</p>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted mt-1 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 ml-14">
              <div className="border-t border-border pt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    Value Delivered
                  </h4>
                  <ul className="space-y-1.5">
                    {item.value.map((v, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    Outcome
                  </h4>
                  <p className="text-sm text-muted">{item.outcome}</p>
                </div>
                {(item as any).demoUrl && (
                  <Link
                    href={(item as any).demoUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-accent text-white text-xs font-semibold rounded-full hover:bg-accent-soft transition-all"
                  >
                    View Interactive Demo
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="use-cases" ref={ref} className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            High-Impact Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Where This Becomes Real
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Eight scenarios grounded in the engineering challenges that exist
            inside organisations like Société Générale. Each is pain-driven,
            measurable, and deployable within existing governance frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {useCases.map((item, i) => (
            <UseCaseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
