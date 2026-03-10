import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "lavender" | "outline-white";

const BASE =
  "inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.1em] py-2.5 px-[22px] no-underline whitespace-nowrap transition-all duration-150 ease-linear cursor-pointer";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-card-foreground text-white hover:opacity-90",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-secondary",
  lavender:
    "bg-[oklch(0.91_0.055_95)] text-[oklch(0.28_0.045_39)] hover:opacity-90",
  "outline-white":
    "bg-transparent text-white border border-white/35 hover:bg-white/10",
};

type AnchorProps = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = { variant?: Variant; className?: string } & (AnchorProps | ButtonProps);

export function Button({ variant = "primary", className = "", ...rest }: Props) {
  const cls = `${BASE} ${VARIANTS[variant]}${className ? ` ${className}` : ""}`;
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return <a href={href} className={cls} {...anchorRest} />;
  }
  const { ...btnRest } = rest as ButtonProps;
  return <button type="button" className={cls} {...btnRest} />;
}
