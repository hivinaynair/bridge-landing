import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Terms of Service — Bridge",
  description:
    "Terms and conditions for using Bridge, the modern software for Indian driving schools.",
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-[72px]">
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: 11 March 2026
          </p>
        </header>

        <div className="prose-legal space-y-10 text-sm leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Bridge (&quot;the Service&quot;), you agree
              to be bound by these Terms of Service. If you are using the
              Service on behalf of a driving school or business, you represent
              that you have authority to bind that organisation to these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              2. Service Description
            </h2>
            <p>
              Bridge is a cloud-based SaaS platform for Indian driving schools.
              The Service includes: student admission management, Aadhaar-based
              KYC verification, vehicle and staff management, scheduling,
              payment tracking, WhatsApp-based lead recovery and marketing
              automation, and Sarathi portal auto-fill assistance.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              3. Account Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials
              </li>
              <li>
                You must provide accurate business information during onboarding
                (school name, WhatsApp number, branch details)
              </li>
              <li>
                You are responsible for all data entered into Bridge by your
                staff, including student and lead personal information
              </li>
              <li>
                You must comply with applicable laws when using WhatsApp
                messaging features, including obtaining necessary consents from
                recipients
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              4. Data Ownership
            </h2>
            <p>
              You retain ownership of all data you input into Bridge (student
              records, lead information, payment data, etc.). Bridge processes
              this data on your behalf to provide the Service. See our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Privacy Policy
              </Link>{" "}
              for details on how we handle data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              5. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Use the Service for any unlawful purpose or in violation of
                Indian law
              </li>
              <li>
                Send unsolicited or spam messages through the WhatsApp messaging
                features
              </li>
              <li>
                Misuse Aadhaar verification capabilities or store Aadhaar data
                outside the platform
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or disassemble any part
                of the Service
              </li>
              <li>Share your account access with unauthorised individuals</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              6. WhatsApp Messaging
            </h2>
            <p>
              Bridge provisions a dedicated WhatsApp Business API number for
              your school. You acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                All automated messages are sent in compliance with WhatsApp
                Business Platform policies and Indian DLT regulations
              </li>
              <li>
                You are responsible for the content of custom promotional blasts
                sent to your leads and clients
              </li>
              <li>
                Message delivery depends on third-party providers and is not
                guaranteed
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              7. Payment Terms
            </h2>
            <p>
              Subscription fees are as published on our pricing page and may be
              updated with 30 days&apos; notice. Fees are non-refundable except
              where required by law. Bridge does not charge MDR on UPI payments
              processed through the platform.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              8. Service Availability
            </h2>
            <p>
              We strive to maintain high availability but do not guarantee
              uninterrupted service. We may perform scheduled maintenance with
              reasonable advance notice. We are not liable for downtime caused
              by factors beyond our control, including internet outages,
              third-party service failures, or government actions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by Indian law, Bridge&apos;s total
              liability for any claims arising from use of the Service shall not
              exceed the fees paid by you in the 12 months preceding the claim.
              We are not liable for any indirect, incidental, or consequential
              damages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              10. Termination
            </h2>
            <p>
              Either party may terminate this agreement with 30 days&apos;
              written notice. Upon termination, we will provide a reasonable
              period to export your data. After that period, data will be
              deleted in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              11. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in
              Bengaluru, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              12. Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the
              Service after changes constitutes acceptance. We will notify
              registered users of material changes via email or in-app
              notification.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              13. Contact
            </h2>
            <p>
              For questions about these terms, reach us at{" "}
              <a
                href="mailto:legal@bridgedriving.in"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                legal@bridgedriving.in
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Back to home
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
