import { Button } from "@/components/ui/button";
import { DisplayHeadline } from "@/components/ui/display-headline";

export function CtaSection() {
  return (
    <div className="border-y">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <div className="">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
              }}
            />
            <div className="relative z-10 p-12 py-20 text-center bg-primary">
              <div className="text-[14px] font-medium uppercase tracking-widest text-white/80 mb-6 flex items-center justify-center gap-2">
                <span className="opacity-40">/</span>
                LET&apos;S TALK
              </div>
              <DisplayHeadline
                as="h2"
                className="text-[clamp(32px,4vw,52px)] text-white m-0 mb-4 max-w-2xl mx-auto"
              >
                Stop losing revenue and peace of mind to bad software.
              </DisplayHeadline>
              <p className="text-white/80 text-[14px] font-medium max-w-md mx-auto mb-9 leading-relaxed">
                See Bridge in action. We'll show you exactly how much revenue
                you're leaving on the table with your current setup.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button href="/" variant="muted">
                  GET STARTED
                </Button>
                <Button href="/" variant="outline-white">
                  BOOK A DEMO
                </Button>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}
