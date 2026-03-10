import { GridPanel } from "./grid-panel";

interface GridBackgroundProps {
  children: React.ReactNode;
  dotColors?: string[];
  gridColor?: string;
  bgColor?: string;
  dotCount?: number;
  spawnInterval?: number;
  cellSize?: number;
  dotSize?: number;
  fadeIn?: number;
  holdTime?: number;
  fadeOut?: number;
  className?: string;
}

export function GridBackground({
  children,
  className = "",
  ...panelProps
}: GridBackgroundProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <GridPanel side="left" {...panelProps} />
      <div className="relative z-10">{children}</div>
      <GridPanel side="right" {...panelProps} />
    </div>
  );
}
