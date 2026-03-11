import type { HTMLAttributes } from "react";

type Props = {
  direction: "in" | "out";
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const STYLES = {
  in: "bg-white rounded-xl rounded-bl-[2px] py-2 px-3 text-[11px] text-[#111] max-w-[85%] shadow-[0_1px_1px_rgba(0,0,0,0.1)]",
  out: "bg-[#dcf8c6] rounded-xl rounded-br-[2px] py-2 px-3 text-[11px] text-[#111] max-w-[85%] shadow-[0_1px_1px_rgba(0,0,0,0.1)] self-end",
};

export function WaBubble({
  direction,
  children,
  className = "",
  ...rest
}: Props) {
  return (
    <div
      className={`${STYLES[direction]}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
