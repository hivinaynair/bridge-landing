import { Button } from "@/components/ui/button";
import { DisplayHeadline } from "@/components/ui/display-headline";
import { TrustBadge } from "@/components/ui/trust-badge";
import { BorderY } from "./ui/border/border-y";
import { BorderCross } from "./ui/border-cross";

export function Hero() {
  return (
    <div className="border-y border-border">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2 py-12 px-12 border-x border-border">
            <BorderCross />
            <div>
              <div className="flex flex-col gap-8">
                <TrustBadge>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  Built by driving school owners for driving school owners
                </TrustBadge>
                <DisplayHeadline
                  as="h1"
                  className="m-0 text-[clamp(40px,5vw,60px)] mb-6"
                >
                  Modern software for Indian driving schools.
                </DisplayHeadline>
              </div>

              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Replace your legacy software. Admit students in 3 minutes with
                  Aadhaar KYC. Recover leads on WhatsApp. Fill Sarathi with one
                  click.
                </p>

                <div className="flex gap-2">
                  <Button href="/" variant="primary">
                    GET STARTED →
                  </Button>
                  <Button href="/" variant="outline">
                    BOOK A DEMO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
