import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { DotPattern } from "@/components/ui/DotPattern";

export function CtaSection() {
  return (
    <section className="bg-background px-6 pb-20">
      <div className="mx-auto max-w-[1440px]">
        <DotPattern
          className="py-20 px-12 text-center relative"
          style={{ background: "oklch(0.22 0.045 39)" }}
        >
          <div className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-6 flex items-center justify-center gap-2">
            <span className="opacity-40">/</span>
            LET'S TALK
          </div>
          <DisplayHeadline
            as="h2"
            className="text-[clamp(32px,4vw,52px)] text-white m-0 mb-4 max-w-2xl mx-auto"
          >
            Stop losing students to bad software.
          </DisplayHeadline>
          <p className="text-white/55 text-sm max-w-md mx-auto mb-9 leading-relaxed">
            See Bridge in action. We'll show you exactly how much revenue you're
            leaving on the table with your current setup.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/" variant="lavender">GET STARTED →</Button>
            <Button href="/" variant="outline-white">BOOK A DEMO</Button>
          </div>
        </DotPattern>
      </div>
    </section>
  );
}
