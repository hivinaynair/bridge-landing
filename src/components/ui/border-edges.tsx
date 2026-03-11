type Position = "tl" | "tr" | "bl" | "br";

const config: Record<
  Position,
  { path: string; className: string; viewBox: string }
> = {
  tl: {
    path: "M0 0V12M0 0H12",
    viewBox: "0 0 12 12",
    className: "-top-[1px] left-0",
  },
  tr: {
    path: "M12 0V12M12 0H0",
    viewBox: "0 0 12 12",
    className: "-top-[1px] right-0",
  },
  bl: {
    path: "M0 12V0M0 12H12",
    viewBox: "0 0 12 12",
    className: "-bottom-[1px] left-0",
  },
  br: {
    path: "M12 12V0M12 12H0",
    viewBox: "0 0 12 12",
    className: "-bottom-[1px] right-0",
  },
};

const CrossMark = ({ position }: { position: Position }) => {
  const { path, className, viewBox } = config[position];
  const newPath = path;

  return (
    <div className={`absolute z-20 pointer-events-none ${className}`}>
      <svg width="12" height="12" viewBox={viewBox} aria-hidden="true">
        <path
          d={newPath}
          stroke="var(--muted-foreground)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

const positions: Position[] = ["tl", "tr", "bl", "br"];

export const BorderEdges = ({
  tl = true,
  tr = true,
  bl = true,
  br = true,
}: {
  tl?: boolean;
  tr?: boolean;
  bl?: boolean;
  br?: boolean;
}) => {
  const positionsToShow = positions.filter(
    (p) =>
      (tl && p === "tl") ||
      (tr && p === "tr") ||
      (bl && p === "bl") ||
      (br && p === "br"),
  );

  return (
    <>
      {positionsToShow.map((p) => (
        <CrossMark key={p} position={p} />
      ))}
    </>
  );
};
