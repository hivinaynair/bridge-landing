export function CrossCorner({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  };

  return (
    <div className={`absolute w-4 h-4 z-[2] ${positionClasses[position]}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="16"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="8"
          x2="16"
          y2="8"
          stroke="var(--border)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
