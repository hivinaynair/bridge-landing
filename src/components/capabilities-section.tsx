import { BorderCross, BorderY, DisplayHeadline, SectionLabel } from "./ui";

export function CapabilitiesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderY position="top" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-16 pl-6">
            <div>
              <SectionLabel className="mb-4">CAPABILITIES</SectionLabel>
              <DisplayHeadline className="text-4xl lg:text-5xl max-w-lg">
                All-in-one platform for workflows you can rely on.
              </DisplayHeadline>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs lg:pt-8">
              Bridge covers the entire lifecycle of running a driving school —
              from first lead to DL issuance — out of the box.
            </p>
            <BorderCross />
          </div>

          <BorderY position="bottom" />
        </div>
      </div>
    </section>
  );
}
