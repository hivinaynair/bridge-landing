"use client";

import {
  CapabilitiesCards,
  CapabilitiesHeading,
  CtaSection,
  FeaturesSection,
  Footer,
  Hero,
  Navbar,
  ProductSection,
} from "@/components";
import { HeroVideo } from "@/components/hero-video";
import { SecuritySection } from "@/components/security-section";

export default function Page() {
  return (
    <main className="pt-[72px]">
      <Navbar />
      <Hero />
      <HeroVideo />
      <ProductSection />
      <FeaturesSection />
      <SecuritySection />

      <CapabilitiesHeading />
      <CapabilitiesCards />
      <CtaSection />

      <Footer />
    </main>
  );
}
