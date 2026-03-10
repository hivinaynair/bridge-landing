// components/Corner.tsx
type CornerProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number; // how long the lines are in px
};
export function Corner({ position = "top-left", size = 12 }: CornerProps) {
  const isTop = position.startsWith("top");
  const isLeft = position.endsWith("left");
  return (
    <span
      className="absolute w-0 h-0"
      style={{
        top: isTop ? 0 : "auto",
        bottom: !isTop ? 0 : "auto",
        left: isLeft ? 0 : "auto",
        right: !isLeft ? 0 : "auto",
      }}
    >
      {/* Dark square at the very corner tip */}
      <span
        className="absolute bg-neutral-800"
        style={{
          width: 4,
          height: 4,
          top: isTop ? 0 : "auto",
          bottom: !isTop ? 0 : "auto",
          left: isLeft ? 0 : "auto",
          right: !isLeft ? 0 : "auto",
        }}
      />
      {/* Horizontal line */}
      <span
        className="absolute bg-neutral-400"
        style={{
          height: 1,
          width: size,
          top: isTop ? 0 : "auto",
          bottom: !isTop ? 0 : "auto",
          left: isLeft ? 0 : "auto",
          right: !isLeft ? 0 : "auto",
        }}
      />
      {/* Vertical line */}
      <span
        className="absolute bg-neutral-400"
        style={{
          width: 1,
          height: size,
          top: isTop ? 0 : "auto",
          bottom: !isTop ? 0 : "auto",
          left: isLeft ? 0 : "auto",
          right: !isLeft ? 0 : "auto",
        }}
      />
    </span>
  );
}
