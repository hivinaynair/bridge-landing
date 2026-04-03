export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is driving school management software?",
    answer:
      "Driving school management software is a digital tool that helps motor training schools in India run their daily operations — student admissions, scheduling, fleet tracking, payments, and RTO compliance. Instead of paper registers and Excel sheets, everything lives in one app that the owner and branch managers can access from anywhere.",
  },
  {
    question: "How can this software help my driving school grow?",
    answer:
      "Bridge automates the busywork that eats into your day — instant Aadhaar-based admissions, automated WhatsApp follow-ups for every enquiry, referral campaigns to alumni, and LL expiry upsells. Schools using automation typically recover 10-15% more revenue from leads that would otherwise go cold, while freeing up hours every week for the work that actually grows the business.",
  },
  {
    question: "How does Aadhaar KYC work in Bridge?",
    answer:
      "The branch managers enter the student's Aadhaar registred mobile number, Bridge verifies it via DigiLocker and auto-fills their name, photo, date of birth, and address — turning a 15-minute paper form into a 30-second digital admission.",
  },
  {
    question:
      "Does Bridge send WhatsApp messages to my students automatically?",
    answer:
      "Yes. Bridge sends pricing brochures when a lead enquires, follow-ups if they don't enroll within 48 hours, payment receipts, session reminders, and referral campaigns — all on WhatsApp, all automatic. We set up a dedicated WhatsApp number for your school so your personal number stays separate.",
  },
  {
    question: "Does Bridge help with RTO filing and Sarathi forms?",
    answer:
      "Yes. Bridge's Chrome extension pulls student data directly from your dashboard and auto-fills the Sarathi RTO portal — Learner's License applications, DL test bookings, all of it. No re-typing names and Aadhaar numbers, no tab-switching, no typos that delay applications.",
  },
  {
    question: "Can I track student progress and payments?",
    answer:
      "Yes. Bridge tracks each student's lifecycle — from enquiry to enrollment, training sessions completed, LL/DL status, and payment history. You can see outstanding dues across all students at a glance, accept UPI or cash, manage installments, and export income reports in one click.",
  },
  {
    question: "Is there a free trial or demo available?",
    answer:
      "Yes. You can book a free demo where we'll walk you through Bridge using your school's actual workflow — your vehicles, your branches, your pricing. No commitment required. Just fill out the contact form and we'll set up a call.",
  },
  {
    question: "Is Bridge easy to use for non-technical users?",
    answer:
      "Absolutely. Bridge is designed for driving school owners and branch managers, not IT teams. The interface is simple — if you can use WhatsApp, you can use Bridge. We also provide dedicated onboarding to get your team comfortable from day one.",
  },
  {
    question: "How much does Bridge cost?",
    answer:
      "Bridge starts at ₹2,499/month for the Starter plan, which includes DigiLocker integration, vehicle and staff management, smart scheduling, and payment tracking. The Pro plan at ₹3,999/month adds WhatsApp automation, lead recovery, and the Sarathi Chrome extension. Save 12% with annual billing. Enterprise pricing is custom.",
  },
  {
    question: "Can I manage multiple branches from one account?",
    answer:
      "Yes. Tenant Admins see an aggregate dashboard across all branches — revenue, students, payments, everything. Branch Managers only see their own branch. Data is completely isolated between branches for security.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Bridge runs on enterprise-grade cloud infrastructure with 99.9% uptime. Payment data is handled with bank-grade encryption, and each branch's data is completely isolated — no cross-access between branches.",
  },
];
