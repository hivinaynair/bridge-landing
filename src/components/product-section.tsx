"use client";

import { Typewriter } from "motion-plus/react";
// import { BookDemoButton } from "@/components/contact-modal";
import { DisplayHeadline } from "@/components/ui/display-headline";
import { SectionLabel } from "@/components/ui/section-label";
import { GridBackground } from "./ui/grid-background/grid-background";
// import { PixelArrow } from "./ui/pixer-arrow";

export function ProductSection() {
  return (
    <GridBackground>
      <div id="product" className="mx-auto px-6 py-28 text-center ">
        <SectionLabel className="justify-center mb-6">PRODUCT</SectionLabel>
        <div className="flex items-center gap-2 relative">
          <DisplayHeadline className="m-0 mb-5 text-3xl lg:text-5xl max-w-xl mx-auto">
            <Typewriter speed="normal" variance="natural">
              Less typing. More students.
            </Typewriter>
          </DisplayHeadline>
        </div>

        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8 leading-relaxed">
          Aadhaar KYC auto-fills student forms in seconds. WhatsApp follow-ups
          chase every enquiry so you don&apos;t have to. One dashboard tracks
          every rupee in and out.
        </p>
        {/* <BookDemoButton variant="primary" className="text-xs group gap-1">
          GET IN TOUCH <PixelArrow size={28} />
        </BookDemoButton> */}
      </div>
    </GridBackground>
  );
}
