import { BorderCross } from "./ui/border-cross";

export function HeroVideo() {
  return (
    <div className="border-b border-border">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative h-96">
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2 py-12 px-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
            <BorderCross hideTop />
          </div>
        </div>
      </section>
    </div>
  );
}
