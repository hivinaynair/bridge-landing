import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "muted" | "outline-white";

const BASE =
  "inline-flex items-center text-[14px] font-semibold uppercase tracking-[0.1em] py-3 px-6 no-underline whitespace-nowrap transition-all duration-150 ease-linear cursor-pointer";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-card-foreground text-white hover:opacity-90",
  outline: "bg-transparent text-foreground border  hover:bg-secondary",
  muted: "bg-muted text-foreground hover:opacity-90",
  "outline-white":
    "bg-transparent text-white border border-white/35 hover:bg-white/10",
};

type AnchorProps = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = {
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = { variant?: Variant; className?: string } & (
  | AnchorProps
  | ButtonProps
);

export function Button({
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  const cls = `${BASE} ${VARIANTS[variant]}${className ? ` ${className}` : ""}`;
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return <a href={href} className={cls} {...anchorRest} />;
  }
  const { ...btnRest } = rest as ButtonProps;
  return <button type="button" className={cls} {...btnRest} />;
}
