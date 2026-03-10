import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProductSection() {
  return (
    <section className="border-b border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-20 text-center">
        <SectionLabel className="justify-center mb-6">PRODUCT</SectionLabel>
        <DisplayHeadline className="m-0 mb-5 text-[clamp(32px,4vw,52px)] max-w-lg mx-auto">
          Bridge. So you spend less time on paperwork.
        </DisplayHeadline>
        <p className="text-muted-foreground text-base max-w-md mx-auto mb-8 leading-relaxed">
          Built for school owners and branch managers who want to grow revenue,
          not chase spreadsheets and government portals.
        </p>
        <Button href="/" variant="primary" className="text-xs">
          START MANAGING YOUR SCHOOL NOW →
        </Button>
      </div>
    </section>
  );
}
