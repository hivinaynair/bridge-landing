import { BorderEdges } from "./ui/border-edges";

export function HeroVideo() {
  return (
    <div className="border-y border-border">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative ">
          <BorderEdges />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center p-12 py-20 border-x h-96"></div>
        </div>
      </section>
    </div>
  );
}
