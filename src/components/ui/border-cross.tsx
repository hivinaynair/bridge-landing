type Position = "tl" | "tr" | "bl" | "br";

const config: Record<
  Position,
  { path: string; className: string; viewBox: string }
> = {
  tl: {
    path: "M0 0V12M0 0H12",
    viewBox: "0 0 12 12",
    className: "-top-0 left-0",
  },
  tr: {
    path: "M12 0V12M12 0H0",
    viewBox: "0 0 12 12",
    className: "top-0 right-0",
  },
  bl: {
    path: "M0 12V0M0 12H12",
    viewBox: "0 0 12 12",
    className: "bottom-0 left-0",
  },
  br: {
    path: "M12 12V0M12 12H0",
    viewBox: "0 0 12 12",
    className: "bottom-0 right-0",
  },
};

const CrossMark = ({
  position,
  hideTop,
  hideBottom,
}: {
  position: Position;
  hideTop?: boolean;
  hideBottom?: boolean;
}) => {
  const { path, className, viewBox } = config[position];
  const newPath = path;

  return (
    <div className={`absolute z-20 pointer-events-none ${className}`}>
      <svg width="12" height="12" viewBox={viewBox} aria-hidden="true">
        <path
          d={newPath}
          stroke="var(--muted-foreground)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

const positions: Position[] = ["tl", "tr", "bl", "br"];

export const BorderCross = ({
  hideTop,
  hideBottom,
}: {
  hideTop?: boolean;
  hideBottom?: boolean;
}) => (
  <>
    {positions.map((p) => (
      <CrossMark
        key={p}
        position={p}
        hideTop={hideTop}
        hideBottom={hideBottom}
      />
    ))}
  </>
);
