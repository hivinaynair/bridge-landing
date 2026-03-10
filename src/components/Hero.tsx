import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { BorderX } from "./ui/BorderX";

export const CrossMark = ({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) => {
  const paths = {
    tl: "M12 12V24M12 12H24",
    tr: "M12 12V24M12 12H0",
    bl: "M12 12V0M12 12H24",
    br: "M12 12V0M12 12H0",
  };
  const cls = {
    tl: "absolute z-10 pointer-events-none top-0 left-0 -mt-3 -ml-3 text-primary",
    tr: "absolute z-10 pointer-events-none top-0 right-0 -mt-3 -mr-3 text-primary",
    bl: "absolute z-10 pointer-events-none bottom-0 left-0 -mb-3 -ml-3 text-primary",
    br: "absolute z-10 pointer-events-none bottom-0 right-0 -mb-3 -mr-3 text-primary",
  };
  return (
    <div className={cls[position]}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d={paths[position]}
          stroke="#74675A"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative w-full">
      <BorderX position="top" />
      <div className="relative w-full overflow-x-clip">
        <div>
          <div className="absolute top-0 left-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />

          <div className="relative grid grid-cols-2 gap-16 items-center py-12 px-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-border pointer-events-none" />

            <CrossMark position="tl" />
            <CrossMark position="tr" />
            <CrossMark position="bl" />
            <CrossMark position="br" />

            <div>
              <div className="mb-8">
                <TrustBadge>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  Trusted by 50+ driving schools across India
                </TrustBadge>
              </div>

              <DisplayHeadline
                as="h1"
                className="m-0 text-[clamp(40px,5vw,60px)] mb-6"
              >
                Modern software for Indian driving schools.
              </DisplayHeadline>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Replace your legacy software. Admit students in 5 minutes with
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
  );
}
