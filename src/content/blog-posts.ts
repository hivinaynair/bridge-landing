export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-driving-school-software-india",
    title: "Best Driving School Software in India (2026)",
    description:
      "Comparing the top driving school management software options in India — features, pricing, and what actually matters for motor training schools.",
    date: "2026-04-03",
    tags: ["driving school software", "comparison", "india"],
  },
  {
    slug: "how-to-manage-motor-training-school",
    title: "How to Manage a Motor Training School in 2026",
    description:
      "A practical guide to running a motor training school in India — from fleet compliance and scheduling to student admissions and RTO paperwork.",
    date: "2026-04-02",
    tags: ["motor training school", "management", "guide"],
  },
  {
    slug: "why-driving-schools-need-digital-admissions",
    title: "Why Indian Driving Schools Need Digital Admissions",
    description:
      "Manual admissions cost driving schools hours every day. Here's how Aadhaar KYC and Sarathi auto-fill are changing the game.",
    date: "2026-04-01",
    tags: ["admissions", "aadhaar", "sarathi", "digital"],
  },
];
