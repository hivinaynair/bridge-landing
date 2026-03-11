import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Bridge",
  description:
    "Refund and cancellation policy for Bridge, the modern software for Indian driving schools.",
};

export default function RefundPolicyPage() {
  return (
    <main className="pt-[72px]">
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: 11 March 2026
          </p>
        </header>

        <div className="prose-legal space-y-10 text-sm leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              1. Subscription Cancellation
            </h2>
            <p>
              You may cancel your Bridge subscription at any time from your
              account settings or by contacting us. Upon cancellation:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Your access continues until the end of the current billing cycle
              </li>
              <li>No further charges will be applied after cancellation</li>
              <li>
                You will have a reasonable period to export your data before
                account deletion
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              2. Refund Eligibility
            </h2>

            <h3 className="font-medium text-foreground mb-2">
              a) Within 7 Days of First Payment
            </h3>
            <p>
              If you are a new subscriber and are unsatisfied with the Service,
              you may request a full refund within 7 days of your first payment.
              No questions asked.
            </p>

            <h3 className="font-medium text-foreground mt-4 mb-2">
              b) After 7 Days
            </h3>
            <p>
              Subscription fees are non-refundable after the initial 7-day
              period. Partial refunds for unused portions of a billing cycle are
              not provided, as cancellation takes effect at the end of the
              current cycle.
            </p>

            <h3 className="font-medium text-foreground mt-4 mb-2">
              c) Service Outages
            </h3>
            <p>
              If Bridge experiences prolonged downtime (exceeding 72 consecutive
              hours) due to reasons within our control, affected subscribers may
              request a pro-rata credit for the downtime period.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              3. How to Request a Refund
            </h2>
            <p>To request a refund, contact us with:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Your registered school name and email</li>
              <li>Payment transaction ID or receipt</li>
              <li>Reason for the refund request</li>
            </ul>
            <p className="mt-2">
              Email your request to{" "}
              <a
                href="mailto:hi@vinaynair.dev"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                hi@vinaynair.dev
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              4. Refund Processing
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Approved refunds will be processed within 5–7 business days
              </li>
              <li>
                Refunds are issued to the original payment method (UPI account
                or bank account used for the transaction)
              </li>
              <li>
                Processing time may vary depending on your bank or payment
                provider
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              5. Non-Refundable Items
            </h2>
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                KYC verification charges (Aadhaar and Driving License
                verifications consumed via Surepass)
              </li>
              <li>
                WhatsApp messaging costs (per-message charges billed by the BSP)
              </li>
              <li>
                Add-on services or one-time setup fees, if applicable
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              6. Plan Downgrades
            </h2>
            <p>
              If you downgrade your subscription plan, the change takes effect
              at the start of the next billing cycle. No refund or credit is
              issued for the difference in the current cycle.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              7. Contact
            </h2>
            <p>
              For refund or billing inquiries, reach us at{" "}
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
