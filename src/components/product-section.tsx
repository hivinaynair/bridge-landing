import { BookDemoButton } from "@/components/contact-modal";
import { DisplayHeadline } from "@/components/ui/display-headline";
import { SectionLabel } from "@/components/ui/section-label";
import { GridBackground } from "./ui/grid-background/grid-background";
import { PixelArrow } from "./ui/pixer-arrow";

export function ProductSection() {
  return (
    <GridBackground>
      <div id="product" className="mx-auto px-6 py-20 text-center ">
        <SectionLabel className="justify-center mb-6">PRODUCT</SectionLabel>
        <div className="flex items-center gap-2 relative">
          <DisplayHeadline className="m-0 mb-5 text-3xl lg:text-5xl max-w-xl mx-auto">
            Less typing. More students.
          </DisplayHeadline>
        </div>

        <p className="text-muted-foreground text-base max-w-md mx-auto mb-8 leading-relaxed">
          Bridge fills in student forms for you, tracks every rupee, and sends
          follow-up messages to enquiries you&apos;d otherwise miss.
        </p>
        <BookDemoButton variant="primary" className="text-xs group gap-1">
          GET IN TOUCH <PixelArrow size={28} />
        </BookDemoButton>
      </div>
    </GridBackground>
  );
}
