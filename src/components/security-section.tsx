import { Cloud, DollarSign, Home } from "lucide-react";

import { DisplayHeadline } from "@/components/ui/display-headline";
import { BorderEdges } from "./ui";

const badges = [
{
    icon: <Cloud size={32} strokeWidth={1.2} aria-hidden="true" />,
    label: "Cloud Secured",
    sub: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime",
  },
  {
    icon: <DollarSign size={32} strokeWidth={1.2} aria-hidden="true" />,
    label: "Secure Payments",
    sub: "UPI & payment data handled with bank-grade encryption",
  },
  {
    icon: <Home size={32} strokeWidth={1.2} aria-hidden="true" />,
    label: "Branch Isolated",
    sub: "Each branch\u2019s data is completely separated \u2014 no cross-access",
  },
];

export function SecuritySection() {
  return (
    <div className="border ">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="text-center border-x p-6 py-16 lg:p-12 lg:py-28">
            <div className="text-[14px] font-medium uppercase tracking-widest text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <span className="opacity-40">/</span>
              YOUR DATA IS SAFE
            </div>

            <DisplayHeadline
              as="h2"
              className="text-[clamp(32px,4vw,52px)] text-foreground m-0 mb-4"
            >
              Enterprise-grade security
            </DisplayHeadline>

            <p className="text-muted-foreground text-[15px] font-medium max-w-lg mx-auto mb-10 leading-relaxed">
              Industry-standard protections to safeguard your company and your
              users.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-12 max-w-4xl mx-auto">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-5"
                >
                  <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                    {badge.icon}
                  </div>
                  <div className="text-center max-w-[200px]">
                    <div className="text-foreground text-[14px] font-semibold mb-1">
                      {badge.label}
                    </div>
                    <span className="text-muted-foreground text-[12px] font-medium leading-snug">
                      {badge.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
