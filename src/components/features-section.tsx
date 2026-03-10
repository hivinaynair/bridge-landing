"use client";

import {
  Calendar,
  type LucideIcon,
  MessageCircle,
  Monitor,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  AdmissionsVisual,
  LeadsVisual,
  SarathiVisual,
  SchedulingVisual,
  UpsellsVisual,
} from "./feature-visuals";
import { BorderY, DisplayHeadline, SectionLabel } from "./ui";

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
    title: "3-Minute Admissions",
    icon: Zap,
    description:
      "Aadhaar-based KYC auto-fills student name, DOB, photo, and address in seconds. Cut paperwork from 15 minutes to 3. No re-entry errors.",
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

function BorderJunction() {
  return (
    <svg
      className="absolute left-0 z-10 pointer-events-none hidden lg:block"
      style={{ bottom: -12, marginLeft: -12 }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 0V24M12 12H24" stroke="var(--border)" strokeWidth="1" />
    </svg>
  );
}

function FeatureAccordionItem({
  feature,
  isActive,
  isLast,
  onSelect,
}: {
  feature: Feature;
  isActive: boolean;
  isLast: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        group relative w-full text-left p-8 pl-6 transition-all duration-200 cursor-pointer h-40 overflow-hidden
        ${!isLast ? "border-b border-foreground/10" : ""}
        ${isActive ? "bg-foreground/5" : "hover:bg-foreground/2"}
      `}
    >
      {!isLast && <BorderJunction />}

      <div className="flex items-start gap-4">
        <feature.icon
          size={24}
          strokeWidth={1.5}
          className={`shrink-0 transition-colors ${
            isActive
              ? "text-primary"
              : "text-foreground/60 group-hover:text-primary"
          }`}
        />
        <div className="flex flex-col gap-2">
          <h3
            className={`text-lg font-semibold transition-colors ${
              isActive
                ? "text-foreground"
                : "text-foreground/60 group-hover:text-foreground"
            }`}
          >
            {feature.title}
          </h3>
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm text-foreground/60 leading-relaxed max-w-md overflow-hidden"
              >
                {feature.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </button>
  );
}

function FeatureVisualPanel({
  activeId,
  visual,
}: {
  activeId: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="relative p-2 lg:p-6">
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            {visual}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [activeId, setActiveId] = useState("admissions");
  const activeFeature = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderY position="top" />

          <div className="pt-16 pb-10 pl-6">
            <SectionLabel className="mb-4">FEATURES</SectionLabel>
            <DisplayHeadline className="text-4xl lg:text-5xl max-w-lg">
              Everything your school needs. Nothing it doesn't.
            </DisplayHeadline>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="relative flex flex-col">
              {features.map((feature, index) => (
                <FeatureAccordionItem
                  key={feature.id}
                  feature={feature}
                  isActive={feature.id === activeId}
                  isLast={index === features.length - 1}
                  onSelect={() => setActiveId(feature.id)}
                />
              ))}
            </div>

            <FeatureVisualPanel
              activeId={activeId}
              visual={activeFeature.visual}
            />
          </div>
          <BorderY position="bottom" />
        </div>
      </div>
    </section>
  );
}
