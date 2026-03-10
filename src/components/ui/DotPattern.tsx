import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const DOT_STYLE = {
  backgroundImage:
    "radial-gradient(circle, rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px)",
  backgroundSize: "22px 22px",
} as const;

export function DotPattern({ children, className = "", style, ...rest }: Props) {
  return (
    <div className={className} style={{ ...DOT_STYLE, ...style }} {...rest}>
      {children}
    </div>
  );
}
