import { Check, Minus } from "lucide-react";
import { BorderEdges, Button, DisplayHeadline, SectionLabel } from "./ui";

const essentialsFeatures = [
  { text: "5-minute student admission", included: true },
  { text: "Vehicle & fleet tracking", included: true },
  { text: "Smart scheduling", included: true },
  { text: "Sarathi auto-fill", included: true },
  { text: "Payment tracking (UPI + Cash)", included: true },
  { text: "Staff verification (Aadhaar + DL)", included: true },
  { text: "WhatsApp notifications", included: true },
  { text: "Lead recovery pipeline", included: false },
  { text: "Alumni campaigns", included: false },
  { text: "Marketing hub", included: false },
];

const growthFeatures = [
  { text: "Everything in Essentials", highlighted: false },
  { text: "Dedicated WhatsApp number", highlighted: true },
  { text: "Lead recovery pipeline", highlighted: true },
  { text: "Alumni campaigns (4 touchpoints)", highlighted: true },
  { text: "Marketing hub (bulk WhatsApp)", highlighted: true },
  { text: "Hot lead scoring", highlighted: false },
  { text: "Priority support", highlighted: false },
];

export function PricingSection() {
  return (
    <div id="pricing" className="border-y">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="border-x p-4 py-16 lg:p-12 lg:py-28">
            {/* Header */}
            <div className="text-center mb-16">
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
              <p className="text-muted-foreground text-[15px] font-medium max-w-md mx-auto leading-relaxed">
                Flat monthly fee. No per-branch charges. No surprises.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Essentials */}
              <div className="border rounded-lg p-8 lg:p-10 flex flex-col">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Essentials
                </p>
                <div className="mt-5 mb-2">
                  <DisplayHeadline as="p" className="text-[clamp(36px,4vw,48px)] inline">
                    ₹2,499
                  </DisplayHeadline>
                  <span className="text-muted-foreground text-[14px] ml-1">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-8">
                  Everything you need to run your driving school. WhatsApp
                  messages sent from Bridge&apos;s number.
                </p>

                <div className="border-t pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {essentialsFeatures.map((f) => (
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

                <Button href="/" variant="outline" className="justify-center w-full">
                  GET STARTED
                </Button>
              </div>

              {/* Growth */}
              <div className="border-2 border-primary rounded-lg p-8 lg:p-10 flex flex-col relative">
                <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                  Recommended
                </span>

                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Growth
                </p>
                <div className="mt-5 mb-2">
                  <DisplayHeadline as="p" className="text-[clamp(36px,4vw,48px)] inline">
                    ₹3,499
                  </DisplayHeadline>
                  <span className="text-muted-foreground text-[14px] ml-1">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-8">
                  Dedicated WhatsApp number for your school. Automated lead
                  recovery &amp; alumni campaigns.
                </p>

                <div className="border-t pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {growthFeatures.map((f) => (
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

                <Button href="/" variant="primary" className="justify-center w-full">
                  GET STARTED
                </Button>
              </div>
            </div>

            {/* MDR Note */}
            <p className="text-center text-muted-foreground text-[13px] mt-8 leading-relaxed">
              Payment gateway MDR:{" "}
              <span className="text-foreground font-medium">2% + GST</span> per
              transaction &nbsp;·&nbsp; Unlimited students
              &nbsp;·&nbsp; Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
