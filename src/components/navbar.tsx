"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#capabilities", label: "Features" },
  { href: "#pricing", label: "Pricing" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className="fixed top-0 z-50 w-full px-3 transition-all duration-300 lg:px-6">
      <div
        className={`transition-all duration-300 ${scrolled ? "pt-2 lg:pt-3" : ""}`}
      >
        <nav
          className={`mx-auto transition-all duration-300 ${
            scrolled
              ? "max-w-[1440px] border border-foreground/10 bg-background/70 shadow-lg shadow-foreground/5 backdrop-blur-xl"
              : "max-w-[1600px] bg-transparent px-14"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300 h-[72px]  ${
              scrolled ? "px-4 lg:px-10" : " px-4 lg:px-6"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/arch.svg" alt="Bridge" width={32} height={32} />
              <span className="font-sans text-2xl font-semibold tracking-tighter text-card-foreground">
                Bridge
              </span>
            </Link>

            {/* Nav links + CTA */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-10">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-bold uppercase tracking-widest hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <Button
                href="https://app.bridgedrive.in/sign-in"
                variant="primary"
                className="px-4! py-2!"
              >
                LOG IN
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
