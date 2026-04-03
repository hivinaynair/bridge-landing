import {
  CapabilitiesCards,
  CapabilitiesHeading,
  CtaSection,
  FeaturesSection,
  Footer,
  Hero,
  Navbar,
  PricingSection,
  ProductSection,
} from "@/components";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { SecuritySection } from "@/components/security-section";

export default function Page() {
  return (
    <main className="pt-[72px]">
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
