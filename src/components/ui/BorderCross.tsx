type Position = "tl" | "tr" | "bl" | "br";

const paths: Record<Position, string> = {
  tl: "M12 12V24M12 12H24",
  tr: "M12 12V24M12 12H0",
  bl: "M12 12V0M12 12H24",
  br: "M12 12V0M12 12H0",
};

const positionClasses: Record<Position, string> = {
  tl: "top-0 left-0 -mt-3 -ml-3",
  tr: "top-0 right-0 -mt-3 -mr-3",
  bl: "bottom-0 left-0 -mb-3 -ml-3",
  br: "bottom-0 right-0 -mb-3 -mr-3",
};

export const CrossMark = ({ position }: { position: Position }) => (
  <div
    className={`absolute z-10 pointer-events-none text-primary ${positionClasses[position]}`}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={paths[position]}
        stroke="var(--border)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  </div>
);
