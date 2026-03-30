"use client";

import {
  Calendar,
  CreditCard,
  type LucideIcon,
  MessageCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  AdmissionsVisual,
  LeadsVisual,
  PaymentsVisual,
  SchedulingVisual,
} from "./feature-visuals";
import { BorderEdges } from "./ui";

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
    title: "Quick Admissions",
    icon: Zap,
    description:
      "Enter a student's phone number and Bridge fills in their name, photo, date of birth, and address automatically using DigiLocker.",
    visual: <AdmissionsVisual />,
  },
  {
    id: "payments",
    title: "Payments & Accounting",
    icon: CreditCard,
    description:
      "Accept fees during enrollment via cash, QR, or online link. Bridge tracks every transaction, shows outstanding dues across students, and lets you export income reports in one click.",
    visual: <PaymentsVisual />,
  },
  {
    id: "scheduling",
    title: "Easy Scheduling",
    icon: Calendar,
    description:
      "Pick a vehicle, see open slots, assign a student. Bridge prevents double-bookings and gives each student their full schedule on day one.",
    visual: <SchedulingVisual />,
  },
  {
    id: "leads",
    title: "WhatsApp Follow-Ups",
    icon: MessageCircle,
    description:
      "When someone calls asking about prices, Bridge sends them a WhatsApp message automatically. If they don't enroll in 48 hours, a follow-up goes out — so you never lose an enquiry.",
    visual: <LeadsVisual />,
  },
];

function FeatureAccordionItem({
  feature,
  isActive,
  isLast,
  onSelect,
}: {
  feature: Feature;
  isActive: boolean;
  isLast: boolean;
  isFirst: boolean;
  onSelect: () => void;
}) {
  return (
    <div className="relative border-r ">
      {/* <BorderEdges tr={isFirst} br={isLast} /> */}

      <button
        type="button"
        onClick={onSelect}
        className={`
        group relative w-full text-left p-8 py-6 transition-all duration-200 cursor-pointer h-auto min-h-[10rem] overflow-hidden
        ${!isLast ? "border-b border-foreground/10" : ""}
        ${isActive ? "bg-foreground/5" : "hover:bg-foreground/2"}
      `}
      >
        <div
          className={`flex gap-4 w-full ${isActive ? "items-start" : "items-center"}`}
        >
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
                  className="text-sm text-foreground/60 leading-relaxed overflow-hidden pr-10"
                >
                  {feature.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </button>
    </div>
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
    <div className="border-y ">
      <section id="features" className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <div className="mx-auto max-w-8xl border-x">
            <BorderEdges />
            <div className="relative">
              <div className="grid lg:grid-cols-2">
                <div className="relative flex flex-col">
                  {features.map((feature, index) => (
                    <FeatureAccordionItem
                      key={feature.id}
                      feature={feature}
                      isActive={feature.id === activeId}
                      isLast={index === features.length - 1}
                      isFirst={index === 0}
                      onSelect={() => setActiveId(feature.id)}
                    />
                  ))}
                </div>

                <FeatureVisualPanel
                  activeId={activeId}
                  visual={activeFeature.visual}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
