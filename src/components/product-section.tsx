import { Button } from "@/components/ui/button";
import { DisplayHeadline } from "@/components/ui/display-headline";
import { SectionLabel } from "@/components/ui/section-label";
import { GridBackground } from "./ui/grid-background/grid-background";

export function ProductSection() {
  return (
    <GridBackground>
      <div id="product" className="mx-auto px-6 py-20 text-center ">
        <SectionLabel className="justify-center mb-6">PRODUCT</SectionLabel>
        <div className="flex items-center gap-2 relative">
          <DisplayHeadline className="m-0 mb-5 text-5xl max-w-xl mx-auto">
            Bridge. So you spend less time on paperwork.
          </DisplayHeadline>
        </div>

        <p className="text-muted-foreground text-base max-w-md mx-auto mb-8 leading-relaxed">
          Built for school owners and branch managers who want to grow revenue,
          not chase spreadsheets and government portals.
        </p>
        <Button href="/" variant="primary" className="text-xs">
          START MANAGING YOUR SCHOOL NOW →
        </Button>
      </div>
    </GridBackground>
  );
}
