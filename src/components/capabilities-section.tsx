import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Car,
  Globe,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { BorderEdges, DisplayHeadline, SectionLabel } from "./ui";

export function CapabilitiesHeading() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-8xl px-6 py-20">
        <div className="relative">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 pl-6">
            <div>
              <SectionLabel className="mb-6">CAPABILITIES</SectionLabel>
              <DisplayHeadline className="text-4xl lg:text-5xl max-w-lg">
                Built for how driving schools actually work.
              </DisplayHeadline>
            </div>
            <p className="text-md text-muted-foreground leading-relaxed max-w-xs justify-self-center pt-8">
              Multiple branches, multiple vehicles, one dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Multi-branch visual ─────────────────────────────────────────────── */

function MultiBranchVisual() {
  const branches = [
    { name: "Koramangala", students: 142, revenue: 4.2, pct: 47 },
    { name: "Indiranagar", students: 98, revenue: 2.8, pct: 31 },
    { name: "Whitefield", students: 67, revenue: 1.9, pct: 22 },
  ];

  return (
    <div className="px-6 py-8">
      {/* Summary strip */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 bg-background border rounded-lg px-3 py-2 text-center">
          <div className="text-base font-bold text-card-foreground">3</div>
          <div className="text-2xs text-muted-foreground">Branches</div>
        </div>
        <div className="flex-1 bg-background border rounded-lg px-3 py-2 text-center">
          <div className="text-base font-bold text-card-foreground">307</div>
          <div className="text-2xs text-muted-foreground">Students</div>
        </div>
        <div className="flex-1 bg-background border rounded-lg px-3 py-2 text-center">
          <div className="text-base font-bold text-primary">₹8.9L</div>
          <div className="text-2xs text-muted-foreground">Revenue</div>
        </div>
      </div>

      {/* Revenue breakdown bars */}
      <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Revenue by branch
      </div>

      {/* Stacked bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-4">
        <div className="bg-primary" style={{ width: "47%" }} />
        <div className="bg-primary/60" style={{ width: "31%" }} />
        <div className="bg-primary/30" style={{ width: "22%" }} />
      </div>

      {/* Branch rows */}
      <div className="space-y-2.5">
        {branches.map((b, i) => (
          <div key={b.name} className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-sm shrink-0"
              style={{
                background:
                  i === 0
                    ? "var(--primary)"
                    : i === 1
                      ? "oklch(from var(--primary) l c h / 0.6)"
                      : "oklch(from var(--primary) l c h / 0.3)",
              }}
            />
            <span className="text-sm font-medium text-card-foreground flex-1">
              {b.name}
            </span>
            <span className="text-2xs text-muted-foreground tabular-nums">
              {b.students} students
            </span>
            <span className="text-sm font-semibold text-card-foreground tabular-nums w-12 text-right">
              ₹{b.revenue}L
            </span>
            <span className="text-2xs text-muted-foreground tabular-nums w-8 text-right">
              {b.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Fleet tracking visual ───────────────────────────────────────────── */

function FleetVisual() {
  const vehicles = [
    {
      name: "Swift Dzire",
      reg: "KA-01-AB-1234",
      transmission: "Manual",
      alerts: 0,
    },
    {
      name: "Wagon R",
      reg: "KA-01-CD-5678",
      transmission: "AMT",
      alerts: 1,
    },
    {
      name: "Alto 800",
      reg: "KA-01-EF-9012",
      transmission: "Manual",
      alerts: 2,
    },
  ];

  return (
    <div className="px-6 py-8">
      <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        FLEET OVERVIEW
      </div>
      <div className="space-y-3">
        {vehicles.map((v) => (
          <div
            key={v.reg}
            className="flex items-center justify-between bg-background border rounded-lg px-4 py-3"
          >
            <div>
              <div className="text-sm font-medium text-card-foreground">
                {v.name}
              </div>
              <div className="text-2xs text-muted-foreground">
                {v.reg} · {v.transmission}
              </div>
            </div>
            {v.alerts > 0 ? (
              <span className="text-2xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
                {v.alerts} expiry alert{v.alerts > 1 ? "s" : ""}
              </span>
            ) : (
              <span className="text-2xs font-semibold text-primary">
                <ShieldCheck size={14} className="inline -mt-0.5 mr-0.5" />
                All clear
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Sarathi Auto-Fill visual ─────────────────────────────────────────── */

function SarathiVisual() {
  const fields = [
    { label: "Applicant Name", value: "RAVI KUMAR" },
    { label: "Father's Name", value: "SURESH KUMAR" },
    { label: "Date of Birth", value: "14-03-1998" },
    { label: "Address", value: "Koramangala, Bengaluru" },
  ];

  return (
    <div className="px-6 py-8">
      <div className="bg-background border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b ">
          <div className="flex gap-1">
            {["bg-red-400", "bg-amber-400", "bg-green-400"].map((c) => (
              <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
            ))}
          </div>
          <div className="flex-1 bg-background rounded py-0.5 px-2 text-2xs text-muted-foreground border ">
            sarathi.parivahan.gov.in
          </div>
        </div>
        <div className="p-4">
          {fields.map((f) => (
            <div key={f.label} className="flex gap-3 items-center mb-2">
              <span className="text-2xs text-muted-foreground w-28 shrink-0">
                {f.label}:
              </span>
              <div className="flex-1 border border-primary py-0.5 px-1.5 text-2xs bg-primary/5 text-primary font-semibold">
                {f.value}
              </div>
              <span className="text-sm text-primary">✓</span>
            </div>
          ))}
          <div className="mt-3 bg-primary text-primary-foreground py-1.5 px-3 text-2xs font-semibold rounded w-fit">
            ⚡ 4 fields auto-filled by Bridge
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Alumni Campaigns visual ─────────────────────────────────────────── */

function AlumniVisual() {
  const campaigns = [
    {
      month: "Month 1",
      label: "Course completed",
      type: null,
    },
    {
      month: "Day 30",
      label: "Referral offer sent",
      type: "referral" as const,
      message: "Refer a friend, get ₹500 cashback!",
    },
    {
      month: "Month 5",
      label: "LL expiry reminder",
      type: "upsell" as const,
      message:
        "Your Learner's License expires in 30 days. Book your DL test now!",
    },
    {
      month: "Year 1",
      label: "Family discount sent",
      type: "family" as const,
      message: "₹500 family discount for a sibling or spouse!",
    },
  ];

  return (
    <div className="px-6 py-8">
      <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        AUTOMATED STUDENT JOURNEY
      </div>
      <div className="flex flex-col">
        {campaigns.map((c, i) => (
          <div key={c.month} className="flex gap-4 items-start">
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`w-3 h-3 rounded-full mt-1 ${c.type ? "bg-amber-500" : "bg-primary"}`}
              />
              {i < campaigns.length - 1 && (
                <div
                  className="w-0.5 bg-border my-1"
                  style={{ height: c.message ? "56px" : "32px" }}
                />
              )}
            </div>
            <div className="pb-1">
              <div className="text-2xs text-muted-foreground uppercase tracking-widest">
                {c.month}
              </div>
              <div className="text-sm font-medium text-card-foreground">
                {c.label}
              </div>
              {c.message && (
                <div className="bg-green-50 border border-green-200 rounded py-1.5 px-2.5 text-2xs text-green-800 mt-1 leading-relaxed">
                  📱 {c.message}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Staff Verification visual ───────────────────────────────────────── */

function StaffVisual() {
  const staff = [
    {
      name: "Suresh Babu",
      role: "Branch Manager",
      method: "Aadhaar",
      verified: true,
    },
    {
      name: "Vijay Kumar",
      role: "Instructor",
      method: "Driving License",
      verified: true,
    },
    {
      name: "Priya Sharma",
      role: "Instructor",
      method: "Driving License",
      verified: false,
    },
  ];

  return (
    <div className="px-6 py-8">
      <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        STAFF VERIFICATION
      </div>
      <div className="space-y-3">
        {staff.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between bg-background border rounded-lg px-4 py-3"
          >
            <div>
              <div className="text-sm font-medium text-card-foreground">
                {s.name}
              </div>
              <div className="text-2xs text-muted-foreground">
                {s.role} · {s.method}
              </div>
            </div>
            {s.verified ? (
              <span className="text-2xs font-semibold text-primary">
                <ShieldCheck size={14} className="inline -mt-0.5 mr-0.5" />
                Verified
              </span>
            ) : (
              <span className="text-2xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
                Pending
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Capabilities cards grid ───────────────────────────────────────────── */

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
  visual: React.ReactNode;
}[] = [
  {
    icon: Building2,
    title: "Multi-Branch Management",
    description:
      "One dashboard for all your branches. Your managers see their branch. You see everything — revenue, students, and payments across all locations.",
    visual: <MultiBranchVisual />,
  },
  {
    icon: Car,
    title: "Fleet & Compliance Tracking",
    description:
      "Track every vehicle — registration, insurance, PUC, fitness certificate. Bridge alerts you before anything expires so you're never caught off guard.",
    visual: <FleetVisual />,
  },
  {
    icon: Globe,
    title: "Sarathi Auto-Fill",
    description:
      "One click fills the entire Sarathi RTO form with student data from Bridge. No re-typing, no typos, no switching between tabs.",
    visual: <SarathiVisual />,
  },
  {
    icon: UserCheck,
    title: "Staff Verification",
    description:
      "Verify branch managers with Aadhaar and instructors with their driving license — directly inside Bridge. Know exactly who's working at each branch.",
    visual: <StaffVisual />,
  },
];

export function CapabilitiesCards() {
  return (
    <div className="border-y">
      <section className="bg-background">
        <div className="mx-auto max-w-8xl px-6">
          {/* Full-width Alumni Campaigns card */}
          <div className="relative border mb-0">
            <BorderEdges />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2.5 mb-2">
                  <MessageCircle
                    size={18}
                    strokeWidth={1.5}
                    className="text-primary"
                  />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Alumni Campaigns
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  Bridge automatically reminds students when their
                  Learner&apos;s License is expiring, sends referral offers, and
                  runs family discount campaigns — all on WhatsApp.
                </p>
              </div>
              <div className="bg-muted/60 rounded-r-lg">
                <AlumniVisual />
              </div>
            </div>
          </div>

          {/* 2-column grid for remaining capabilities */}
          <div className="relative border ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-border">
              {capabilities.map((cap) => (
                <div key={cap.title} className="p-8 relative border-y">
                  <BorderEdges />

                  <div className="flex items-center gap-2.5 mb-2">
                    <cap.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                    {cap.description}
                  </p>
                  <div className="bg-muted/60 rounded">{cap.visual}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
