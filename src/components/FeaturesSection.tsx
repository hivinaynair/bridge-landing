"use client";

import {
  Calendar,
  type LucideIcon,
  MessageCircle,
  Monitor,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { CrossCorner } from "./CrossCorner";
import {
  AdmissionsVisual,
  LeadsVisual,
  SarathiVisual,
  SchedulingVisual,
  UpsellsVisual,
} from "./FeatureVisuals";
import PixelGrid from "./pixel-bg";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Feature {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  visual: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "admissions",
    title: "5-Minute Admissions",
    icon: Zap,
    description:
      "Aadhaar-based KYC auto-fills student name, DOB, photo, and address in seconds. Cut paperwork from 15 minutes to 5. No re-entry errors.",
    visual: <AdmissionsVisual />,
  },
  {
    id: "leads",
    title: "WhatsApp Lead Recovery",
    icon: MessageCircle,
    description:
      "When a prospect calls for pricing, Bridge fires an instant WhatsApp pitch. If they don't enroll in 48 hours, an automated follow-up with a discount goes out. Hot leads flagged for manual follow-up.",
    visual: <LeadsVisual />,
  },
  {
    id: "upsells",
    title: "Automated Revenue Upsells",
    icon: TrendingUp,
    description:
      "Bridge messages students when their Learner's License is expiring (Month 5), driving DL conversions. Referral and family discount campaigns run automatically.",
    visual: <UpsellsVisual />,
  },
  {
    id: "sarathi",
    title: "Sarathi Auto-Fill",
    icon: Monitor,
    description:
      "Chrome extension that injects student data into India's Sarathi RTO portal with one click. No manual re-entry. No typos.",
    visual: <SarathiVisual />,
  },
  {
    id: "scheduling",
    title: "Smart Scheduling",
    icon: Calendar,
    description:
      "Vehicle-first calendar. Book all sessions upfront, auto-assign instructor, prevent double-booking. Students get their full schedule on day one.",
    visual: <SchedulingVisual />,
  },
];

export function FeaturesSection() {
  const [activeId, setActiveId] = useState("admissions");
  const activeFeature = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Header */}
        <div className="py-16 pb-12">
          <SectionLabel className="mb-4">FEATURES</SectionLabel>
          <div className="grid grid-cols-2 gap-12 items-start">
            <DisplayHeadline className="m-0 text-[clamp(28px,3.5vw,44px)]">
              Everything you need to run a driving school.
            </DisplayHeadline>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1.5 max-w-sm">
              Bridge covers every part of your school's operations — from first
              enquiry to DL issuance, out of the box.
            </p>
          </div>
        </div>

        {/* 2-col accordion + visual */}
        <div className="grid grid-cols-2 border border-border relative">
          <CrossCorner position="top-left" />
          <CrossCorner position="top-right" />
          <CrossCorner position="bottom-left" />
          <CrossCorner position="bottom-right" />

          {/* Left: accordion */}
          <div className="border-r border-border">
            {features.map((feature) => {
              const isActive = feature.id === activeId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveId(feature.id)}
                  className="block w-full text-left border-b border-border py-5 px-8 cursor-pointer transition-all hover:bg-secondary/50"
                  style={{
                    background: isActive ? "white" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon
                      size={24}
                      className="transition-colors"
                      style={{
                        color: isActive
                          ? "var(--primary)"
                          : "var(--muted-foreground)",
                      }}
                    />
                    <span
                      className="text-base transition-all"
                      style={{
                        fontWeight: isActive ? 600 : 400,
                        color: isActive
                          ? "var(--card-foreground)"
                          : "var(--muted-foreground)",
                      }}
                    >
                      {feature.title}
                    </span>
                  </div>
                  {isActive && (
                    <p className="text-sm text-muted-foreground leading-relaxed m-0 pl-7">
                      {feature.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: visual panel */}
          <div className="bg-muted flex items-center justify-center min-h-[480px] p-8 relative overflow-hidden">
            {activeFeature.visual}
          </div>
        </div>
      </div>
    </section>
  );
}
