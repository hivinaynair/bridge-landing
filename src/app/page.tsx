"use client";

import {
  CapabilitiesSection,
  CtaSection,
  FeaturesSection,
  Footer,
  Hero,
  Navbar,
  ProductSection,
} from "@/components";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
