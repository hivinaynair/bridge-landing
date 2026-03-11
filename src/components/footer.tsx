import Image from "next/image";
import Link from "next/link";
import { GridText } from "@/components/ui/grid-background/grid-text";

const LEFT_LINKS = [
  { label: "Features", href: "/#product" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "mailto:hello@bridgedriving.in" },
];

const RIGHT_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  return (
    <footer className="pt-16 lg:pt-28">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mx-auto max-w-8xl px-6 lg:px-20">
        {/* Left — brand */}
        <div className="max-w-md flex flex-col gap-6">
          <Image src="/arch.svg" alt="Bridge" width={50} height={50} />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Modern software for Indian driving schools. Digitise admissions,
            automate workflows, and grow revenue. Built in India.
          </p>
          <div className="flex">
            <span className="text-xs text-muted-foreground">
              © 2026 Vinay Nair | All rights reserved.
            </span>
          </div>
        </div>

        {/* Right — link columns */}
        <div className="flex gap-12 lg:gap-24">
          <ul className="list-none p-0 m-0 space-y-3">
            {LEFT_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-roboto-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="list-none p-0 m-0 space-y-3">
            {RIGHT_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-roboto-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mosaic grid text */}
      <div className="w-full h-48 lg:h-[30rem] overflow-hidden pt-16 lg:pt-28">
        <GridText
          text="Bridge"
          cellSize={8}
          dotSize={6}
          gridColor="#eeedea"
          textColor="#d5d4cc"
          fontFamily="'DM Sans', sans-serif"
        />
      </div>
    </footer>
  );
}
