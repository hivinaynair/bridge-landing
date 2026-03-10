import type { HTMLAttributes } from "react";

type As = "h1" | "h2" | "h3" | "h4" | "p";

type Props = {
  as?: As;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

export function DisplayHeadline({ as: Tag = "h2", className = "", children, ...rest }: Props) {
  return (
    <Tag
      className={`font-serif font-normal leading-[1.05] tracking-[-0.025em] text-card-foreground${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
