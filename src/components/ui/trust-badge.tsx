import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLSpanElement>;

export function TrustBadge({ children, className = "", ...rest }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground w-fit border py-1 px-3 bg-background${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </span>
  );
}
