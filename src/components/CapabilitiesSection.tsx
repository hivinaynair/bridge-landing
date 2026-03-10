import {
  BarChart3,
  Building,
  Car,
  type LucideIcon,
  RefreshCw,
  Smartphone,
  Zap,
} from "lucide-react";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Capability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const capabilities: Capability[] = [
  {
    icon: Zap,
    title: "Instant Onboarding",
    desc: "Students go from enquiry to enrolled in under 5 minutes. Aadhaar KYC, fee collection, schedule booking — all in one flow.",
  },
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    desc: "See conversion rates, average revenue per student, and lead recovery stats at a glance. No spreadsheets.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-ups",
    desc: "WhatsApp sequences, DL upgrade campaigns, referral programs — all running on autopilot while you focus on teaching.",
  },
  {
    icon: Building,
    title: "Government Portal Integration",
    desc: "Sarathi auto-fill via Chrome extension. No duplicate data entry. Fewer errors. RTO filings done faster.",
  },
  {
    icon: Car,
    title: "Fleet & Instructor Management",
    desc: "Assign vehicles and instructors per session. Track availability. Prevent double-bookings automatically.",
  },
  {
    icon: Smartphone,
    title: "Multi-Branch Support",
    desc: "Own multiple branches? Manage them all from one dashboard. Student transfers, shared fleet, consolidated reporting.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <div className="grid grid-cols-2 gap-12 mb-14 items-start">
          <div>
            <SectionLabel className="mb-4">CAPABILITIES</SectionLabel>
            <DisplayHeadline className="m-0 text-[clamp(28px,3.5vw,44px)]">
              All-in-one platform for driving schools.
            </DisplayHeadline>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pt-12 max-w-sm">
            Bridge covers the entire lifecycle of running a driving school —
            from first lead to DL issuance — out of the box.
          </p>
        </div>

        <div className="grid grid-cols-3 border border-border">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="p-7 border-border"
              style={{
                borderRight:
                  i % 3 !== 2 ? "1px solid var(--border)" : undefined,
                borderBottom: i < 3 ? "1px solid var(--border)" : undefined,
              }}
            >
              <cap.icon size={28} className="mb-3 text-foreground" />
              <div className="text-base font-semibold text-card-foreground mb-2">
                {cap.title}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {cap.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
