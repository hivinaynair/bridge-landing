import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const GRID_STYLE = {
  backgroundImage: [
    "linear-gradient(oklch(0.88 0.007 97 / 0.6) 1px, transparent 1px)",
    "linear-gradient(90deg, oklch(0.88 0.007 97 / 0.6) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "44px 44px",
} as const;

export function GridBg({ children, className = "", style, ...rest }: Props) {
  return (
    <div className={className} style={{ ...GRID_STYLE, ...style }} {...rest}>
      {children}
    </div>
  );
}
