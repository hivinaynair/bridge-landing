"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Home size={20} className="text-primary" strokeWidth={1.5} />
          <span className="font-sans text-sm font-semibold text-card-foreground tracking-tighter">
            Bridge
          </span>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-10">
            <Link
              href="#product"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest hover:text-foreground"
            >
              PRODUCT
            </Link>
            <Link
              href="#features"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest hover:text-foreground"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest hover:text-foreground"
            >
              PRICING
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button href="/login" variant="primary">LOG IN</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
