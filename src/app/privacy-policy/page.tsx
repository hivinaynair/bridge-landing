import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Privacy Policy — Bridge",
  description:
    "How Bridge collects, uses, and protects your data. Privacy policy for Indian driving school software.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-[72px]">
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: 11 March 2026
          </p>
        </header>

        <div className="prose-legal space-y-10 text-sm leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              1. Who We Are
            </h2>
            <p>
              Bridge (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a B2B
              SaaS platform that helps Indian driving schools digitise
              admissions, automate workflows, and grow revenue. This policy
              explains how we collect, use, store, and protect information when
              you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              2. Information We Collect
            </h2>

            <h3 className="font-medium text-foreground mb-2">
              a) Account &amp; Business Information
            </h3>
            <p>
              When a driving school signs up, we collect: school name, branch
              addresses, WhatsApp phone numbers, and staff details (name, phone,
              role). Branch Managers may undergo Aadhaar-based identity
              verification and Instructors may undergo Driving License
              verification via our third-party provider, Surepass.
            </p>

            <h3 className="font-medium text-foreground mt-4 mb-2">
              b) Student &amp; Lead Data
            </h3>
            <p>
              Driving schools input student and prospect data into Bridge,
              including: name, phone number, Aadhaar number (for KYC), payment
              records, and training schedules. This data is entered and
              controlled by the driving school (the data controller); Bridge
              processes it on their behalf.
            </p>

            <h3 className="font-medium text-foreground mt-4 mb-2">
              c) Usage Data
            </h3>
            <p>
              We collect standard analytics data: pages visited, browser type,
              device information, and IP address to improve our service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Providing and maintaining the Bridge platform</li>
              <li>
                Processing Aadhaar and Driving License verification via Surepass
              </li>
              <li>
                Sending WhatsApp messages on behalf of driving schools (lead
                follow-ups, payment receipts, session reminders, marketing
                campaigns)
              </li>
              <li>
                Generating analytics and reports for driving school admins
              </li>
              <li>Improving our product and user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              4. WhatsApp Messaging
            </h2>
            <p>
              Bridge provisions a dedicated WhatsApp Business API number for
              each driving school tenant. Automated messages (pricing pitches,
              follow-ups, reminders, promotional blasts) are sent from this
              Bridge-managed number. All templates comply with WhatsApp Business
              Platform policies and Indian DLT regulations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              5. Third-Party Services
            </h2>
            <p>We share data with the following categories of providers:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Identity verification:</strong> Surepass (Aadhaar via
                DigiLocker, Driving License verification)
              </li>
              <li>
                <strong>Messaging:</strong> WhatsApp Business API aggregator for
                automated communications
              </li>
              <li>
                <strong>Payments:</strong> UPI payment processors
              </li>
              <li>
                <strong>Hosting &amp; infrastructure:</strong> Cloud service
                providers
              </li>
            </ul>
            <p className="mt-2">
              We do not sell personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain data for as long as the driving school&apos;s account is
              active. Upon account termination, we delete or anonymise all
              associated data within 90 days, unless retention is required by
              law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              7. Chrome Extension ("Bridge - Sarathi Auto-Fill")
            </h2>
            <p>
              Our Chrome extension accesses sarathi.parivahan.gov.in to
              auto-fill driving licence application forms using student data
              already stored in Bridge. The extension authenticates via your
              existing Bridge account and does not collect, store, or transmit
              any additional data beyond what is described above. No data is
              read from the Sarathi portal. The extension requires cookies
              permission solely for authentication and does not track browsing
              activity.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              8. Data Security
            </h2>
            <p>
              We implement industry-standard security measures including
              encryption in transit and at rest, access controls, and regular
              security audits to protect your data. Aadhaar data is handled in
              compliance with UIDAI guidelines.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              9. Your Rights
            </h2>
            <p>
              Under India&apos;s Digital Personal Data Protection Act (DPDP),
              2023, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>File a grievance with us or the Data Protection Board</li>
            </ul>
            <p className="mt-2">
              If you are a student or lead, please contact your driving school
              directly, as they are the data controller for your information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. We will notify
              registered users of material changes via email or in-app
              notification.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              11. Contact
            </h2>
            <p>
              For privacy-related inquiries, reach us at{" "}
              <a
                href="mailto:hi@vinaynair.dev"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                hi@vinaynair.dev
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
