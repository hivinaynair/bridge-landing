import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

export function SectionLabel({ children, className = "", ...rest }: Props) {
  return (
    <div
      className={`flex items-center gap-1.5 text-[14px] font-medium uppercase tracking-[0.1em] text-muted-foreground${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <span className="opacity-45">/</span>
      {children}
    </div>
  );
}
