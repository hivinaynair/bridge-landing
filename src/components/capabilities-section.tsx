import type { LucideIcon } from "lucide-react";
import { Building2, Car, Globe, MessageCircle, UserCheck } from "lucide-react";
import { BookDemoButton } from "./contact-modal";
import { BorderEdges, DisplayHeadline, SectionLabel } from "./ui";
import { GridBackground } from "./ui/grid-background/grid-background";
import { PixelArrow } from "./ui/pixer-arrow";

export function CapabilitiesHeading() {
  return (
    <GridBackground>
      <div id="capabilities" className="mx-auto px-6 py-20 text-center ">
        <SectionLabel className="justify-center mb-6">
          CAPABILITIES
        </SectionLabel>
        <div className="flex items-center gap-2 relative">
          <DisplayHeadline className="m-0 mb-5 text-3xl lg:text-5xl max-w-xl mx-auto">
            Built for how driving schools actually work.
          </DisplayHeadline>
        </div>

        <p className="text-muted-foreground text-base max-w-md mx-auto mb-8 leading-relaxed">
          Multiple branches, multiple vehicles, one dashboard.
        </p>
        <BookDemoButton variant="primary" className="text-xs group gap-1">
          GET IN TOUCH <PixelArrow size={28} />
        </BookDemoButton>
      </div>
    </GridBackground>
  );
}

/* ── Capability data ─────────────────────────────────────────────────── */

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statSub: string;
}[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp Follow-ups",
    description:
      "Bridge automatically reminds clients when their \u2019s License is expiring, sends referral offers, and runs discount campaigns \u2014 all on WhatsApp.",
    stat: "4 touchpoints",
    statSub: "automated",
  },
  {
    icon: Building2,
    title: "Multi-Branch Management",
    description:
      "One dashboard for all your branches. Your managers see their branch. You see everything \u2014 revenue, students, and payments across all locations.",
    stat: "1 dashboard",
    statSub: "all branches",
  },
  {
    icon: Car,
    title: "Fleet & Compliance Tracking",
    description:
      "Track every vehicle \u2014 registration, insurance, PUC, fitness certificate. Bridge alerts you before anything expires so you\u2019re never caught off guard.",
    stat: "0 expired",
    statSub: "documents",
  },
  {
    icon: Globe,
    title: "Sarathi Auto-Fill",
    description:
      "One click fills the entire Sarathi RTO form with student data from Bridge. No re-typing, no typos, no switching between tabs.",
    stat: "1-click",
    statSub: "RTO filing",
  },
  {
    icon: UserCheck,
    title: "Staff Verification",
    description:
      "Verify branch managers with Aadhaar and instructors with their driving license \u2014 directly inside Bridge. Know exactly who\u2019s working at each branch.",
    stat: "Aadhaar + DL",
    statSub: "verified",
  },
];

/* ── Stacked feature rows ────────────────────────────────────────────── */

export function CapabilitiesCards() {
  return (
    <div className="border-y">
      <section className="bg-background">
        <div className="mx-auto max-w-8xl px-6">
          <div className="border-x">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`relative grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 border-b last:border-b-0 ${i === 0 ? "py-12 lg:py-20 px-4 lg:px-12" : "py-10 lg:py-16 px-4 lg:px-12"}`}
              >
                <BorderEdges />
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <cap.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                    <h3 className="text-lg font-semibold text-foreground">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-md text-muted-foreground leading-relaxed max-w-md">
                    {cap.description}
                  </p>
                </div>
                <div className="lg:text-right lg:pr-4">
                  <DisplayHeadline as="p" className="text-3xl lg:text-4xl text-foreground">
                    {cap.stat}
                  </DisplayHeadline>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cap.statSub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
