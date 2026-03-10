import Image from "next/image";
import { GridText } from "@/components/ui/grid-background/grid-text";

const LEFT_LINKS = ["Features", "Pricing", "Blog", "Status Page"];
const RIGHT_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Contact",
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="flex justify-between gap-12 mx-auto max-w-8xl py-12 lg:py-16">
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
        <div className="flex gap-24">
          <ul className="list-none p-0 m-0 space-y-3">
            {LEFT_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="/"
                  className="font-roboto-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none p-0 m-0 space-y-3">
            {RIGHT_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="/"
                  className="font-roboto-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mosaic grid text */}
      <div className="w-full h-[30rem] overflow-hidden">
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
