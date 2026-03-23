"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Search,
  GitBranch,
  Shield,
  Wrench,
  FileText,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Scale,
  Building2,
} from "lucide-react";
import Link from "next/link";

interface RegMapping {
  framework: string;
  article: string;
  requirement: string;
}

interface DemoStep {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  timestamp: string;
  description: string;
  terminal: string[];
  regulatoryMappings: RegMapping[];
  outcome: string;
  status: "critical" | "warning" | "active" | "success";
}

const steps: DemoStep[] = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Incident Detection",
    subtitle: "Alert fires — latency spike on trade execution service",
    timestamp: "T+0s",
    description:
      "A PagerDuty alert triggers at 14:32 UTC. The FX trade execution service (GBIS) is showing P99 latency of 4,200ms — 8x above threshold. Devin is automatically invoked via webhook integration.",
    terminal: [
      "$ [14:32:07 UTC] ALERT PagerDuty → P1 incident #INC-2024-7891",
      "$ Service: fx-execution-gateway (GBIS)",
      "$ P99 latency: 4,207ms (threshold: 500ms)",
      "$ Affected region: EU-WEST-1 / Paris DC failover",
      "$ Devin session initiated → session_id: dvn-8f3a2c",
      "$ Loading service topology for fx-execution-gateway...",
      "$ Identified 14 upstream dependencies, 6 downstream consumers",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 17",
        requirement:
          "ICT-related incident management process — institutions must have processes to detect, manage, and report ICT-related incidents.",
      },
      {
        framework: "ECB/SSM",
        article: "SREP IT Risk",
        requirement:
          "Supervisory expectations on ICT risk management — real-time monitoring and escalation procedures for critical systems.",
      },
      {
        framework: "Basel",
        article: "Principle 6",
        requirement:
          "Operational resilience — banks should have capabilities to identify disruptions to critical operations promptly.",
      },
    ],
    outcome:
      "Incident detected and autonomous investigation initiated within 7 seconds of alert — no human intervention required for initial triage.",
    status: "critical",
  },
  {
    id: 2,
    icon: Search,
    title: "Automatic Triage & Classification",
    subtitle: "Severity assessment and regulatory classification",
    timestamp: "T+12s",
    description:
      "Devin classifies the incident by severity, determines affected business lines, and assesses whether regulatory reporting thresholds are potentially breached. Classification follows internal SocGen severity matrix aligned with DORA taxonomy.",
    terminal: [
      "$ Analysing incident characteristics...",
      "$ Business impact assessment:",
      "$   → FX spot trading: DEGRADED (orders queuing)",
      "$   → FX options pricing: UNAFFECTED",
      "$   → Client API gateway: DEGRADED (timeout errors)",
      "$ Classification: SEV-1 / MAJOR",
      "$ DORA classification: Potentially Major ICT Incident",
      "$   → Criterion 1: Critical service affected ✓",
      "$   → Criterion 2: Client impact detected ✓",
      "$   → Criterion 3: Duration threshold not yet met",
      "$ Regulatory notification: MONITORING (2hr threshold)",
      "$ Escalation: CIO on-call notified, incident bridge opened",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 18",
        requirement:
          "Classification of ICT-related incidents — institutions must classify incidents using criteria including criticality of services, number of clients affected, duration, and geographical spread.",
      },
      {
        framework: "DORA",
        article: "Article 19(1)",
        requirement:
          "Reporting major ICT-related incidents — financial entities shall report major ICT-related incidents to the relevant competent authority.",
      },
      {
        framework: "ECB/SSM",
        article: "SSM Cyber Incident Reporting",
        requirement:
          "Significant cyber incidents must be reported within 2 hours of classification as significant.",
      },
    ],
    outcome:
      "Incident classified as SEV-1 with DORA major incident threshold under monitoring. Regulatory clock started automatically.",
    status: "critical",
  },
  {
    id: 3,
    icon: GitBranch,
    title: "Root Cause Analysis",
    subtitle: "Tracing across distributed services and infrastructure",
    timestamp: "T+45s",
    description:
      "Devin performs distributed tracing across 14 services, correlates log patterns, analyses recent deployments, and inspects infrastructure metrics. Root cause identified: a connection pool exhaustion in the market data adapter following a configuration change deployed 47 minutes prior.",
    terminal: [
      "$ Initiating distributed trace analysis...",
      "$ Correlating spans across 14 services (last 2 hours)...",
      "$ Anomaly detected: market-data-adapter",
      "$   → Connection pool utilisation: 100% (max: 200)",
      "$   → Avg connection wait: 3,847ms",
      "$   → Error rate: 34.2% (ConnectionTimeout)",
      "$ Checking recent changes...",
      "$   → Deploy #4,891 at 13:45 UTC: market-data-adapter v2.14.3",
      "$   → Change: connection pool config migrated to new format",
      "$   → DIFF: maxPoolSize: 200 → maxConnections: 20 (⚠ 10x reduction)",
      "$ ROOT CAUSE IDENTIFIED:",
      "$   Configuration regression in deploy #4,891",
      "$   Pool size reduced from 200 to 20 due to field name migration error",
      "$ Confidence: 97.3%",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 17(3)",
        requirement:
          "Root cause analysis — financial entities must analyse ICT-related incidents to identify root causes and establish corrective actions to prevent recurrence.",
      },
      {
        framework: "Basel",
        article: "BCBS 239 Principle 3",
        requirement:
          "Accuracy and integrity — risk data aggregation capabilities should ensure data is accurate and reliable, including traceability of issues to root cause.",
      },
      {
        framework: "EBA Guidelines",
        article: "GL/2019/04 §48",
        requirement:
          "ICT and security risk management — institutions should have procedures to identify the root cause of ICT incidents and security events.",
      },
    ],
    outcome:
      "Root cause identified in 45 seconds: configuration regression reducing connection pool by 10x. Full trace evidence preserved.",
    status: "warning",
  },
  {
    id: 4,
    icon: Shield,
    title: "Impact Assessment",
    subtitle: "Blast radius mapping across clients, transactions, and reporting",
    timestamp: "T+58s",
    description:
      "Devin maps the full blast radius: affected client sessions, in-flight transactions, downstream data feeds, and regulatory reporting pipelines. Determines whether any transaction reporting obligations (MiFID II, EMIR) are at risk.",
    terminal: [
      "$ Mapping incident blast radius...",
      "$ Client impact:",
      "$   → 142 active API sessions experiencing timeouts",
      "$   → 23 institutional clients affected",
      "$   → 0 retail clients (separate gateway)",
      "$ Transaction impact:",
      "$   → 847 FX spot orders queued (not lost)",
      "$   → 0 orders rejected / failed",
      "$   → Order queue persistence: VERIFIED (Kafka backed)",
      "$ Regulatory reporting impact:",
      "$   → MiFID II transaction reporting: DELAYED (T+15min buffer OK)",
      "$   → EMIR trade reporting: UNAFFECTED (separate pipeline)",
      "$   → AML monitoring feed: DELAYED (non-critical, 1hr buffer)",
      "$ Data integrity check: NO data loss detected",
      "$ Financial exposure: CONTAINED (orders queued, not dropped)",
    ],
    regulatoryMappings: [
      {
        framework: "MiFID II",
        article: "RTS 25 / Article 14",
        requirement:
          "Transaction reporting — investment firms must report complete and accurate details of transactions no later than T+1. Delays must be documented.",
      },
      {
        framework: "DORA",
        article: "Article 19(4)",
        requirement:
          "Major incident reporting content — reports must include information on the number and relevance of clients affected, impact on transactions, and cross-border implications.",
      },
      {
        framework: "EMIR",
        article: "Article 9",
        requirement:
          "Reporting obligation — counterparties shall report details of derivative contracts. Institutions must ensure reporting continuity during operational disruptions.",
      },
    ],
    outcome:
      "Full blast radius mapped: 23 institutional clients affected, 847 orders queued (none lost), all regulatory reporting within tolerance. No data integrity issues.",
    status: "warning",
  },
  {
    id: 5,
    icon: Wrench,
    title: "Remediation Execution",
    subtitle: "Fix proposed, reviewed, and deployed within guardrails",
    timestamp: "T+3m 20s",
    description:
      "Devin generates the fix: revert the connection pool configuration to the correct field name and value. Creates a PR with full context, automated tests pass, and the change is deployed via the standard CI/CD pipeline with emergency change approval.",
    terminal: [
      "$ Generating remediation...",
      "$ Fix: Revert connection pool config in market-data-adapter",
      "$ Creating branch: hotfix/INC-2024-7891-pool-config",
      "$ --- a/config/datasource.yaml",
      "$ +++ b/config/datasource.yaml",
      "$ -  maxConnections: 20",
      "$ +  maxPoolSize: 200",
      "$ PR #3,247 created → automated checks running...",
      "$   → Unit tests: PASSED (142/142)",
      "$   → Integration tests: PASSED (38/38)",
      "$   → Security scan: PASSED",
      "$   → Config validation: PASSED",
      "$ Emergency change request CAB-7891 auto-filed",
      "$ Approval: On-call SRE approved (policy: P1 hotfix)",
      "$ Deploying market-data-adapter v2.14.4 to EU-WEST-1...",
      "$ Deploy complete. Connection pool recovering...",
      "$ P99 latency: 4,207ms → 1,203ms → 487ms → 312ms ✓",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 16(1)",
        requirement:
          "ICT security management — financial entities shall implement ICT change management procedures including testing and approval processes for all changes to ICT systems.",
      },
      {
        framework: "ECB/SSM",
        article: "SREP IT Risk §4.3",
        requirement:
          "Change management — emergency changes must follow documented procedures including authorisation, testing where feasible, and post-implementation review.",
      },
      {
        framework: "Basel",
        article: "Principle 7",
        requirement:
          "Risk data aggregation — change management processes must ensure that changes to systems do not compromise data accuracy or timeliness.",
      },
    ],
    outcome:
      "One-line config fix deployed through standard CI/CD pipeline with emergency CAB approval. Service recovered to normal latency within 90 seconds of deploy.",
    status: "active",
  },
  {
    id: 6,
    icon: FileText,
    title: "Regulatory Notification Assessment",
    subtitle: "Auto-determination of reporting obligations",
    timestamp: "T+8m",
    description:
      "Devin assesses whether the incident meets the reporting thresholds under DORA, ECB SSM, and national competent authority requirements. Generates a pre-filled incident report template for the compliance team.",
    terminal: [
      "$ Assessing regulatory reporting obligations...",
      "$ DORA Major Incident Criteria:",
      "$   → Critical service affected: YES",
      "$   → Clients affected: 23 institutional (> threshold)",
      "$   → Duration: 8 minutes (< 2hr significant threshold)",
      "$   → Data loss: NONE",
      "$   → Financial impact: NONE (orders queued, not lost)",
      "$ Assessment: BELOW major incident reporting threshold",
      "$   → Reason: Duration < 2hrs, no financial loss, no data loss",
      "$ ECB SSM Cyber Incident: NOT APPLICABLE (not cyber-related)",
      "$ ACPR (France) notification: NOT REQUIRED (below threshold)",
      "$ Recommendation: Log as significant operational incident",
      "$   → Internal escalation report: GENERATED",
      "$   → Pre-filled DORA template: GENERATED (precautionary)",
      "$ Compliance team notified with full assessment package",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 19(1)–(3)",
        requirement:
          "Reporting thresholds — major ICT-related incidents must be reported using initial notification (within 4 hours), intermediate report (within 72 hours), and final report (within 1 month).",
      },
      {
        framework: "DORA",
        article: "Article 20",
        requirement:
          "Harmonised reporting content — the ESAs shall develop ITS specifying the content, format, and time limits of reports.",
      },
      {
        framework: "ECB/SSM",
        article: "SSM Cyber Framework",
        requirement:
          "Significant cyber incidents require notification within 2 hours. Assessment of whether an operational incident has a cyber dimension is mandatory.",
      },
    ],
    outcome:
      "Incident assessed as below DORA major reporting threshold. Pre-filled templates generated for compliance review. Full assessment audit trail preserved.",
    status: "success",
  },
  {
    id: 7,
    icon: BookOpen,
    title: "Post-Incident Documentation",
    subtitle: "Complete audit trail generated automatically",
    timestamp: "T+12m",
    description:
      "Devin generates the complete post-incident report: timeline, root cause analysis, remediation actions, impact assessment, regulatory assessment, and recommendations. Every action taken is logged with timestamps, evidence links, and decision rationale.",
    terminal: [
      "$ Generating post-incident documentation...",
      "$ Report: PIR-2024-7891.pdf",
      "$ Sections generated:",
      "$   1. Executive Summary ✓",
      "$   2. Incident Timeline (7 events, 8m duration) ✓",
      "$   3. Root Cause Analysis (with trace evidence) ✓",
      "$   4. Impact Assessment (clients, transactions, reporting) ✓",
      "$   5. Remediation Actions (PR #3,247, deploy log) ✓",
      "$   6. Regulatory Assessment (DORA, ECB, ACPR) ✓",
      "$   7. Audit Trail (47 logged actions) ✓",
      "$   8. Preventive Recommendations ✓",
      "$ All evidence artifacts linked and preserved:",
      "$   → Distributed traces: 14 service spans",
      "$   → Log extracts: 3 services, 2hr window",
      "$   → Config diffs: before/after",
      "$   → Deployment records: #4,891 (cause), #4,892 (fix)",
      "$ Report distributed to: SRE, Engineering, Risk, Compliance",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 17(4)",
        requirement:
          "Post-incident reviews — financial entities shall conduct post-ICT-related incident reviews after significant disruptions, analysing causes and identifying improvements.",
      },
      {
        framework: "Basel",
        article: "BCBS 239 Principle 6",
        requirement:
          "Adaptability — risk data aggregation capabilities should be adaptable and able to incorporate lessons learned from incidents.",
      },
      {
        framework: "EBA Guidelines",
        article: "GL/2019/04 §52",
        requirement:
          "Incident reporting and communication — institutions should document all ICT incidents, including analysis, response actions, and follow-up measures.",
      },
    ],
    outcome:
      "Complete post-incident report generated in under 4 minutes. 47 auditable actions logged. All evidence preserved and cross-referenced.",
    status: "success",
  },
  {
    id: 8,
    icon: Scale,
    title: "Prevention & Continuous Improvement",
    subtitle: "Systemic fixes to prevent recurrence",
    timestamp: "T+15m",
    description:
      "Devin analyses the root cause pattern and recommends systemic preventive measures: a config schema validation check in the CI pipeline, a pre-deploy connection pool smoke test, and a runbook update. Creates implementation tickets automatically.",
    terminal: [
      "$ Analysing root cause pattern for systemic improvements...",
      "$ Pattern: Configuration field migration without validation",
      "$ Preventive measures identified:",
      "$ ",
      "$ 1. CI Pipeline Enhancement",
      "$    → Add config schema validation step",
      "$    → Detect field renames without value migration",
      "$    → Ticket: ENG-14,203 created (Priority: High)",
      "$ ",
      "$ 2. Pre-Deploy Smoke Test",
      "$    → Connection pool health check before traffic shift",
      "$    → Verify pool size matches expected baseline",
      "$    → Ticket: ENG-14,204 created (Priority: High)",
      "$ ",
      "$ 3. Runbook Update",
      "$    → market-data-adapter connection pool troubleshooting",
      "$    → Added to: confluence/runbooks/market-data-adapter",
      "$ ",
      "$ 4. Change Review Enhancement",
      "$    → Config changes flagged for additional review",
      "$    → Policy update submitted to CAB",
      "$ ",
      "$ All recommendations linked to incident PIR-2024-7891",
    ],
    regulatoryMappings: [
      {
        framework: "DORA",
        article: "Article 17(5)",
        requirement:
          "Lessons learned — financial entities must ensure that ICT-related incidents are reviewed and that lessons learned are integrated into the ICT risk assessment process.",
      },
      {
        framework: "ECB/SSM",
        article: "SREP Expectations §5",
        requirement:
          "Continuous improvement — institutions are expected to demonstrate a cycle of continuous improvement in ICT risk management based on incident learnings.",
      },
      {
        framework: "DORA",
        article: "Article 25(1)",
        requirement:
          "ICT risk management framework review — the framework must be reviewed at least annually and upon occurrence of major ICT-related incidents.",
      },
    ],
    outcome:
      "4 preventive measures identified and ticketed. CI pipeline enhancement prevents this entire class of configuration regression. Runbooks updated within 15 minutes of resolution.",
    status: "success",
  },
];

const statusConfig = {
  critical: {
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    dot: "bg-red-500",
    label: "Critical",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
    label: "Investigating",
  },
  active: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    label: "Remediating",
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    label: "Resolved",
  },
};

export default function IncidentDemo() {
  const [current, setCurrent] = useState(0);
  const step = steps[current];
  const Icon = step.icon;
  const sc = statusConfig[step.status];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <div className="w-px h-5 bg-border" />
              <div>
                <span className="text-sm font-semibold">
                  Incident Resolution Demo
                </span>
                <span className="hidden sm:inline text-xs text-muted ml-2">
                  INC-2024-7891
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${sc.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                {sc.label}
              </span>
              <span className="text-xs text-muted font-mono">
                {step.timestamp}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step indicators — horizontal scroll on mobile */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-1 min-w-max">
            {steps.map((s, i) => {
              const SIcon = s.icon;
              const ssc = statusConfig[s.status];
              const isActive = i === current;
              const isPast = i < current;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-foreground text-background"
                      : isPast
                      ? "bg-card text-foreground"
                      : "text-muted hover:text-foreground hover:bg-card"
                  }`}
                >
                  <SIcon size={14} />
                  <span className="hidden lg:inline">{s.title}</span>
                  <span className="lg:hidden">{i + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step header */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${sc.bg} ${sc.border} border`}
                >
                  <Icon size={24} className={`${sc.badge.split(" ")[1]}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted font-mono">
                      Step {step.id} of {steps.length}
                    </span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted font-mono">
                      {step.timestamp}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {step.title}
                  </h1>
                  <p className="text-muted mt-1">{step.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column — narrative + terminal */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="p-6 rounded-2xl border border-border bg-card/50">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {step.description}
                  </p>
                </div>

                {/* Terminal output */}
                <div className="rounded-2xl border border-border bg-[#1e1e1e] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <Terminal size={14} className="text-white/40" />
                    <span className="text-xs text-white/40 font-mono">
                      devin — session dvn-8f3a2c
                    </span>
                  </div>
                  <div className="p-4 font-mono text-xs leading-6 text-green-400/90 overflow-x-auto">
                    {step.terminal.map((line, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.05 * j }}
                        className={
                          line.includes("⚠") || line.includes("ALERT")
                            ? "text-red-400"
                            : line.includes("✓") || line.includes("PASSED")
                            ? "text-emerald-400"
                            : line.includes("ROOT CAUSE") ||
                              line.includes("Assessment:")
                            ? "text-amber-400 font-semibold"
                            : line.startsWith("$ ")
                            ? ""
                            : "text-white/50"
                        }
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className={`p-5 rounded-2xl border ${sc.border} ${sc.bg}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        sc.badge.split(" ")[1]
                      }`}
                    />
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Outcome</h3>
                      <p className="text-sm text-foreground/70">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column — regulatory mapping */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={16} className="text-accent" />
                  <h2 className="text-sm font-semibold">
                    Regulatory Mapping
                  </h2>
                </div>

                {step.regulatoryMappings.map((reg, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * j }}
                    className="p-4 rounded-xl border border-border bg-card/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-accent/10 text-accent">
                        {reg.framework}
                      </span>
                      <span className="text-xs font-semibold text-foreground/70">
                        {reg.article}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted">
                      {reg.requirement}
                    </p>
                  </motion.div>
                ))}

                {/* Compliance status card */}
                <div className="p-4 rounded-xl border border-accent/20 bg-accent/[0.04]">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield size={14} className="text-accent" />
                    <span className="text-xs font-semibold text-accent">
                      Compliance Status
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted">Audit trail</span>
                      <span className="text-emerald-600 font-medium flex items-center gap-1">
                        <CheckCircle2 size={12} /> Complete
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted">Evidence preserved</span>
                      <span className="text-emerald-600 font-medium flex items-center gap-1">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted">Actions logged</span>
                      <span className="text-foreground/70 font-mono">
                        {current * 6 + 5} actions
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted">Elapsed</span>
                      <span className="text-foreground/70 font-mono">
                        {step.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card"
              >
                <ArrowLeft size={16} />
                Previous
              </button>

              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current
                        ? "bg-accent w-6"
                        : i < current
                        ? "bg-foreground/30"
                        : "bg-border"
                    }`}
                  />
                ))}
              </div>

              {current < steps.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrent(Math.min(steps.length - 1, current + 1))
                  }
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-soft transition-all"
                >
                  Next Step
                  <ArrowRight size={16} />
                </button>
              ) : (
                <Link
                  href="/"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-soft transition-all"
                >
                  Back to Overview
                  <ChevronRight size={16} />
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
