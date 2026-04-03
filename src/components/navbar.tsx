"use client";

import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#capabilities", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
] as const;

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-dvh w-72 border-l bg-background p-8 pt-24"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="text-sm font-bold uppercase tracking-widest hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
              <Button
                href="https://app.bridgedrive.in/sign-in"
                variant="primary"
                className="mt-4 justify-center"
              >
                LOG IN
              </Button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className="fixed top-0 z-50 w-full px-3 lg:px-6">
      <div
        className={`transition-[padding] duration-300 ${scrolled ? "pt-2 lg:pt-3" : ""}`}
      >
        <nav
          className={`mx-auto transition-[max-width,background-color,border-color,box-shadow,backdrop-filter,padding] duration-300 ${
            scrolled
              ? "max-w-[1440px] border border-foreground/10 bg-background/70 shadow-lg shadow-foreground/5 backdrop-blur-xl"
              : "max-w-[1600px] bg-transparent lg:px-14"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-[padding] duration-300 h-[72px] ${
              scrolled ? "px-4 lg:px-10" : "px-4 lg:px-6"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/arch.svg" alt="Bridge" width={32} height={32} />
              <span className="font-sans text-2xl font-semibold tracking-tighter text-card-foreground">
                Bridge
              </span>
            </Link>

            {/* Desktop nav links + CTA */}
            <div className="hidden lg:flex items-center gap-10">
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

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-foreground"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
