import IncidentDemo from "@/components/demo/IncidentDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incident Resolution Demo — Cognition × Société Générale",
  description:
    "Interactive walkthrough: how Devin handles incident resolution mapped to DORA, ECB, and Basel regulatory requirements.",
};

export default function IncidentResolutionPage() {
  return <IncidentDemo />;
}
