import { BorderEdges } from "./ui/border-edges";

export function HeroVideo() {
  return (
    <div className="border-b ">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative h-96 border-x">
          <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2 py-12 px-12 ">
            <BorderEdges />
          </div>
        </div>
      </section>
    </div>
  );
}
