export type PlanFeature = {
  text: string;
  included?: boolean;
  highlighted?: boolean;
};

export type Plan = {
  name: string;
  slug: "starter" | "growth" | "enterprise";
  monthly: number | null;
  annual: number | null;
  description: string;
  features: PlanFeature[];
  recommended?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    slug: "starter",
    monthly: 2499,
    annual: 1999,
    description: "Everything you need to run your driving school digitally.",
    features: [
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
    ],
  },
  {
    name: "Growth",
    slug: "growth",
    monthly: 3999,
    annual: 3499,
    recommended: true,
    description:
      "Everything in Starter, plus WhatsApp automation, lead recovery & alumni campaigns.",
    features: [
      { text: "Everything in Starter", highlighted: false },
      { text: "Sarathi auto-fill Chrome plugin", highlighted: true },
      { text: "1,500 WhatsApp messages/month", highlighted: true },
      { text: "Lead recovery pipeline", highlighted: true },
      { text: "Promotional campaigns", highlighted: true },
    ],
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    monthly: null,
    annual: null,
    description: "For multi-branch driving school operations.",
    features: [
      { text: "Everything in Growth" },
      { text: "Unlimited branches" },
      { text: "Custom WhatsApp quota" },
      { text: "Custom Aadhaar verification quota" },
      { text: "Your school's own WhatsApp number" },
      { text: "Dedicated onboarding" },
      { text: "Priority support" },
    ],
  },
];

export const whatsappAddon = {
  name: "Your School's Own WhatsApp Number",
  tier: "Growth & above",
  description:
    "Messages come from your school's branded number instead of the shared Bridge number. We handle all setup.",
  monthly: 799,
};

/** Lowest and highest numeric prices across all plans (for JSON-LD AggregateOffer) */
export function getPriceRange(): { low: number; high: number } {
  const prices = plans
    .flatMap((p) => [p.monthly, p.annual])
    .filter((p): p is number => p !== null);
  return { low: Math.min(...prices), high: Math.max(...prices) };
}
