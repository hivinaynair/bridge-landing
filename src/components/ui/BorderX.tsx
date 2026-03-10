export function BorderX({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className={`absolute h-px bg-foreground/15 ${position === "top" ? "top-0" : "bottom-0"} left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]`}
    ></div>
  );
}
