import dynamic from "next/dynamic";

import {
  CapabilitiesCards,
  CapabilitiesHeading,
  Footer,
  Hero,
  Navbar,
} from "@/components";
import { JsonLd } from "@/components/json-ld";
import { ProductSection } from "@/components/product-section";
import { SecuritySection } from "@/components/security-section";

const FeaturesSection = dynamic(
  () => import("@/components/features-section").then((m) => m.FeaturesSection),
  { ssr: true },
);
const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((m) => m.PricingSection),
  { ssr: true },
);
const FaqSection = dynamic(
  () => import("@/components/faq-section").then((m) => m.FaqSection),
  { ssr: true },
);
const CtaSection = dynamic(
  () => import("@/components/cta-section").then((m) => m.CtaSection),
  { ssr: true },
);

export default function Page() {
  return (
    <main style={{ paddingTop: 72 }}>
      <JsonLd />
      <Navbar />
      <Hero />
      <ProductSection />
      <FeaturesSection />
      <SecuritySection />

      <CapabilitiesHeading />
      <CapabilitiesCards />
      <PricingSection />
      <FaqSection />
      <CtaSection />

      <Footer />
    </main>
  );
}
