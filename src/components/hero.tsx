import { Button } from "@/components/ui/button";
import { DisplayHeadline } from "@/components/ui/display-headline";
import { PixelArrow } from "@/components/ui/pixer-arrow";
import { TrustBadge } from "@/components/ui/trust-badge";
import { BorderEdges } from "./ui/border-edges";

export function Hero() {
  return (
    <div className="border-y ">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center px-3 py-12 lg:p-12 lg:py-20 border-x">
            <div className="flex flex-col gap-6">
              <TrustBadge>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                Launching Across India
              </TrustBadge>
              <DisplayHeadline
                as="h1"
                className="m-0 text-[clamp(32px,5vw,60px)] mb-6"
              >
                Everything your <br className="hidden lg:block" />
                Driving school needs. <br className="hidden lg:block" /> In one app.
              </DisplayHeadline>
            </div>

            <div className="py-8">
              <p className="text text-muted-foreground mb-8 leading-relaxed max-w-md">
                Admit students in under 3 minutes with Aadhaar KYC.
                Automatically follow up with every enquiry on WhatsApp. Track
                every rupee in one place.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href="/" variant="primary" className="group gap-2">
                  GET STARTED
                  <PixelArrow
                    size={28}
                    arrowColor="white"
                    className="shrink-0"
                    animationClassName="group-hover:animate-arrow-bounce"
                  />
                </Button>
                <Button href="/" variant="outline">
                  BOOK A DEMO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
