"use client";

import { Check, Minus } from "lucide-react";
import { useState } from "react";

import { BookDemoButton } from "./contact-modal";
import { BorderEdges, DisplayHeadline, SectionLabel } from "./ui";

const starterFeatures = [
  { text: "DigiLocker integration", included: true },
  { text: "Vehicle & Staff management", included: true },
  { text: "Smart scheduling", included: true },
  { text: "Payment tracking (UPI + Cash)", included: true },
  { text: "Staff verification (Aadhaar + DL)", included: true },
  { text: "WhatsApp notifications", included: false },
  { text: "Lead recovery pipeline", included: false },
  { text: "Alumni campaigns", included: false },
  { text: "Marketing hub", included: false },
  { text: "Promotional campaigns", included: false },
];

const enterpriseFeatures = [
  { text: "Everything in Pro" },
  { text: "Unlimited branches" },
  { text: "Custom WhatsApp quota" },
  { text: "Custom Aadhaar verification quota" },
  { text: "Your school's own WhatsApp number" },
  { text: "Dedicated onboarding" },
  { text: "Priority support" },
];

const proFeatures = [
  { text: "Everything in Starter", highlighted: false },
  { text: "Sarathi auto-fill Chrome plugin", highlighted: true },
  { text: "1,500 WhatsApp messages/month", highlighted: true },
  { text: "Lead recovery pipeline", highlighted: true },
  { text: "Promotional campaigns", highlighted: true },
];

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const starterPrice = billing === "monthly" ? "₹2,499" : "₹1,999";
  const proPrice = billing === "monthly" ? "₹3,999" : "₹3,499";

  return (
    <div id="pricing" className="border-y">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="border-x p-4 py-16 lg:p-12 lg:py-28">
            {/* Header */}
            <div className="text-center mb-10">
              <SectionLabel className="justify-center mb-6">
                PRICING
              </SectionLabel>
              <DisplayHeadline
                as="h2"
                className="text-[clamp(32px,4vw,52px)] m-0 mb-4"
              >
                Pricing that makes sense
                <br className="hidden sm:block" />
                for your school.
              </DisplayHeadline>
              <p className="text-muted-foreground text-[15px] font-medium max-w-md mx-auto leading-relaxed mb-8">
                Flat monthly fee. No per-branch charges. No surprises.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-3">
                <div className="inline-flex border p-1 bg-muted rounded-full">
                  <button
                    type="button"
                    onClick={() => setBilling("monthly")}
                    className={`text-[13px] cursor-pointer font-semibold px-4 py-1.5 rounded-full transition-all duration-150 ${
                      billing === "monthly"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBilling("annual")}
                    className={`text-[13px] cursor-pointer font-semibold px-4 py-1.5 rounded-full transition-all duration-150 ${
                      billing === "annual"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground"
                    }`}
                  >
                    Annual
                  </button>
                </div>
                <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.05em]">
                  Save 12%
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="border rounded-lg p-8 lg:p-10 flex flex-col">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Starter
                </p>
                <div className="mt-5 mb-2">
                  <DisplayHeadline
                    as="p"
                    className="text-[clamp(36px,4vw,48px)] inline"
                  >
                    {starterPrice}
                  </DisplayHeadline>
                  <span className="text-muted-foreground text-[14px] ml-1">
                    /month
                  </span>
                </div>
                {billing === "annual" && (
                  <p className="text-muted-foreground text-[13px]">
                    billed annually
                  </p>
                )}
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-8 mt-2">
                  Everything you need to run your driving school digitally.
                </p>

                <div className="border-t pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {starterFeatures.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.included ? (
                          <Check
                            size={16}
                            strokeWidth={2}
                            className="text-foreground mt-0.5 shrink-0"
                          />
                        ) : (
                          <Minus
                            size={16}
                            strokeWidth={2}
                            className="text-border mt-0.5 shrink-0"
                          />
                        )}
                        <span
                          className={`text-[13px] leading-snug ${f.included ? "text-foreground" : "text-border"}`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <BookDemoButton
                  variant="outline"
                  className="justify-center w-full"
                >
                  GET STARTED
                </BookDemoButton>
              </div>

              {/* Pro */}
              <div className="border-2 border-primary rounded-lg p-8 lg:p-10 flex flex-col relative">
                <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                  Recommended
                </span>

                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Pro
                </p>
                <div className="mt-5 mb-2">
                  <DisplayHeadline
                    as="p"
                    className="text-[clamp(36px,4vw,48px)] inline"
                  >
                    {proPrice}
                  </DisplayHeadline>
                  <span className="text-muted-foreground text-[14px] ml-1">
                    /month
                  </span>
                </div>
                {billing === "annual" && (
                  <p className="text-muted-foreground text-[13px]">
                    billed annually
                  </p>
                )}
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-8 mt-2">
                  Everything in Starter, plus WhatsApp automation, lead recovery
                  &amp; alumni campaigns.
                </p>

                <div className="border-t pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {proFeatures.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          strokeWidth={2}
                          className={`mt-0.5 shrink-0 ${f.highlighted ? "text-primary" : "text-foreground"}`}
                        />
                        <span
                          className={`text-[13px] leading-snug ${f.highlighted ? "text-primary font-medium" : "text-foreground"}`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <BookDemoButton
                  variant="primary"
                  className="justify-center w-full"
                >
                  GET STARTED
                </BookDemoButton>
              </div>

              {/* Enterprise */}
              <div className="border rounded-lg p-8 lg:p-10 flex flex-col">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Enterprise
                </p>
                <div className="mt-5 mb-2">
                  <DisplayHeadline
                    as="p"
                    className="text-[clamp(36px,4vw,48px)] inline"
                  >
                    Custom
                  </DisplayHeadline>
                </div>
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-8">
                  For multi-branch driving school operations.
                </p>

                <div className="border-t pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {enterpriseFeatures.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          strokeWidth={2}
                          className="text-foreground mt-0.5 shrink-0"
                        />
                        <span className="text-[13px] leading-snug text-foreground">
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <BookDemoButton
                  variant="outline"
                  className="justify-center w-full"
                >
                  CONTACT US
                </BookDemoButton>
              </div>
            </div>

            {/* Add-on */}
            <div className="border rounded-lg p-6 max-w-5xl mx-auto mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-muted/50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[14px] font-semibold text-foreground">
                    Your School&apos;s Own WhatsApp Number
                  </p>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded-full">
                    Pro &amp; above
                  </span>
                </div>
                <p className="text-muted-foreground text-[13px] leading-relaxed max-w-lg">
                  Messages come from your school&apos;s branded number instead
                  of the shared Bridge number. We handle all setup.
                </p>
              </div>
              <p className="text-foreground font-semibold text-[15px] shrink-0">
                +₹799
                <span className="text-muted-foreground text-[13px] font-normal">
                  /month
                </span>
              </p>
            </div>

            {/* MDR Note */}
            <p className="text-center text-muted-foreground text-[13px] mt-8 leading-relaxed">
              Payment gateway MDR:{" "}
              <span className="text-foreground font-medium">2% + GST</span> per
              transaction &nbsp;·&nbsp; Unlimited students &nbsp;·&nbsp; Cancel
              anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
