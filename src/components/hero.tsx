import { DisplayHeadline } from "@/components/ui/display-headline";
import { PixelArrow } from "@/components/ui/pixer-arrow";
import { TrustBadge } from "@/components/ui/trust-badge";
import { BookDemoButton } from "./contact-modal";
import { BorderEdges } from "./ui/border-edges";

export function Hero() {
  return (
    <div className="border-y">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="grid md:gap-8 lg:grid-cols-2 lg:gap-16 items-center px-3 py-12 lg:p-12 lg:py-20 border-x min-h-[26.5rem]">
            <div className="flex flex-col gap-4">
              <TrustBadge>
                <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_3px_1px_var(--color-primary)] animate-pulse" />
                Launching Across India
              </TrustBadge>
              <DisplayHeadline
                as="h1"
                className="m-0 text-[clamp(32px,5vw,60px)] mb-6"
              >
                Everything your driving school needs. In one app.
              </DisplayHeadline>
            </div>

            <div className="lg:pt-8 mx-auto">
              <p className="text text-muted-foreground mb-8 leading-relaxed max-w-md">
                Bridge handles admissions, scheduling, payments, and student
                follow-ups for driving schools across India
              </p>

              <div className="flex flex-wrap gap-3">
                <BookDemoButton variant="primary" className="group gap-2">
                  GET STARTED
                  <PixelArrow
                    size={28}
                    arrowColor="white"
                    className="shrink-0"
                    animationClassName="group-hover:animate-arrow-bounce"
                  />
                </BookDemoButton>
                <BookDemoButton variant="outline">BOOK A DEMO</BookDemoButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
