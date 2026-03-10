import { DisplayHeadline } from "@/components/ui/display-headline";

const badges = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "Aadhaar Encrypted",
    sub: "Aadhaar data encrypted at rest & in transit per UIDAI guidelines",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    label: "Cloud Secured",
    sub: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "Secure Payments",
    sub: "UPI & payment data handled with bank-grade encryption",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Branch Isolated",
    sub: "Each branch\u2019s data is completely separated \u2014 no cross-access",
  },
];

export function SecuritySection() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="bg-primary relative w-full mx-auto max-w-8xl px-6 py-20 lg:py-28">
        {/* Dotted bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 4px, transparent 4px, transparent 10px)",
          }}
        />

        <div className="relative text-center">
          {/* Section label */}
          <div className="text-[14px] font-medium uppercase tracking-widest text-white/80 mb-6 flex items-center justify-center gap-2">
            <span className="opacity-40">/</span>
            YOUR DATA IS SAFE
          </div>

          <DisplayHeadline
            as="h2"
            className="text-[clamp(32px,4vw,52px)] text-white m-0 mb-4"
          >
            Enterprise-grade security
          </DisplayHeadline>

          <p className="text-white/70 text-[15px] font-medium max-w-lg mx-auto mb-16 leading-relaxed">
            Industry-standard protections to safeguard your company and your
            users.
          </p>

          {/* Badges grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-4xl mx-auto">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-5"
              >
                <div className="w-28 h-28 rounded-full border border-white/20 flex items-center justify-center text-white/80">
                  {badge.icon}
                </div>
                <div className="text-center max-w-[200px]">
                  <div className="text-white/90 text-[14px] font-semibold mb-1">
                    {badge.label}
                  </div>
                  <span className="text-white/55 text-[12px] font-medium leading-snug">
                    {badge.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
