import { faqItems } from "@/content/faq";
import { getPriceRange } from "@/content/pricing";

export function JsonLd() {
  const { low, high } = getPriceRange();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Bridge",
      url: "https://bridgedrive.in",
      logo: "https://bridgedrive.in/arch.svg",
      description:
        "Driving school management software built for India. Aadhaar KYC admissions, WhatsApp lead recovery, Sarathi auto-fill, fleet tracking.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Bridge",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Driving school management software built for Indian motor training schools.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: low,
        highPrice: high,
        priceCurrency: "INR",
        offerCount: 3,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      {structuredData.map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
