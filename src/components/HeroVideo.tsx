import { CrossMark } from "./Hero";

export function HeroVideo() {
  return (
    <section className="relative w-full">
      <div className="absolute h-px bg-foreground/15 top-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
      <div className="relative w-full overflow-x-clip">
        {/* Outer frame — bg-foreground/15 lines only, no CSS borders */}
        <div className="">
          <div className="absolute top-0 left-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />

          {/* Hero cover: top section */}
          <div className="relative grid grid-cols-2 gap-16 items-center py-12 px-12">
            {/* Section left/right borders — crosses center on these */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-border pointer-events-none" />

            <CrossMark position="tl" />
            <CrossMark position="tr" />
            <CrossMark position="bl" />
            <CrossMark position="br" />

            {/* Left: content */}
            <div>
              <div className="mb-8">
                <span className="trust-badge">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  Trusted by 50+ driving schools across India
                </span>
              </div>

              <h1 className="display-headline m-0 text-[clamp(40px,5vw,60px)] mb-6">
                Modern software for Indian driving schools.
              </h1>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Replace your legacy software. Admit students in 5 minutes with
                Aadhaar KYC. Recover leads on WhatsApp. Fill Sarathi with one
                click.
              </p>

              <div className="flex gap-2">
                <a href="/" className="btn-primary">
                  GET STARTED →
                </a>
                <a href="/" className="btn-outline">
                  BOOK A DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-px bg-foreground/15 bottom-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
    </section>
  );
}
