import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

export function MockupCard({ children, className = "", ...rest }: Props) {
  return (
    <div
      className={`bg-white border border-border shadow-[0_2px_12px_0_oklch(0_0_0/0.06)]${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
