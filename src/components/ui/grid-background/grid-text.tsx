"use client";
import { useEffect, useRef } from "react";

const DEFAULT_DOT_COLORS = ["#c96442"];

interface AnimDot {
  col: number;
  row: number;
  color: string;
  startTime: number;
}

interface GridTextProps {
  text: string;
  cellSize?: number;
  dotSize?: number;
  gridColor?: string;
  textColor?: string;
  fontFamily?: string;
  dotColors?: string[];
  dotCount?: number;
  spawnInterval?: number;
  fadeIn?: number;
  holdTime?: number;
  fadeOut?: number;
  bgColor?: string;
  className?: string;
}

export function GridText({
  text,
  cellSize = 8,
  dotSize = 8,
  gridColor = "#eeedea",
  textColor = "#d0cfc8",
  fontFamily = "sans-serif",
  dotColors = DEFAULT_DOT_COLORS,
  dotCount = 4,
  spawnInterval = 100,
  fadeIn = 100,
  holdTime = 100,
  fadeOut = 100,
  bgColor = "var(--background)",
  className = "",
}: GridTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<AnimDot[]>([]);
  const animRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const baseRef = useRef<HTMLCanvasElement | null>(null);
  const baseKeyRef = useRef("");

  // Keep props in ref so rAF always sees current values
  const cfg = useRef({
    text,
    cellSize,
    dotSize,
    gridColor,
    textColor,
    fontFamily,
    dotColors,
    dotCount,
    spawnInterval,
    fadeIn,
    holdTime,
    fadeOut,
  });
  cfg.current = {
    text,
    cellSize,
    dotSize,
    gridColor,
    textColor,
    fontFamily,
    dotColors,
    dotCount,
    spawnInterval,
    fadeIn,
    holdTime,
    fadeOut,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Text mask: Set<number> keyed by (row * cols + col)
    let mask = new Set<number>();

    const buildBase = (w: number, h: number, dpr: number) => {
      const { text, cellSize, dotSize, gridColor, textColor, fontFamily } =
        cfg.current;

      const bw = Math.round(w * dpr);
      const bh = Math.round(h * dpr);
      if (bw === 0 || bh === 0) return;
      const cols = Math.floor(w / cellSize);
      const rows = Math.floor(h / cellSize);
      // Build text mask on offscreen canvas
      const textOff = document.createElement("canvas");
      textOff.width = bw;
      textOff.height = bh;
      const textCtx = textOff.getContext("2d");
      if (!textCtx) return;
      textCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      textCtx.fillStyle = "#000";
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";

      // Binary search for font size that fills ~60% width
      let lo = 10,
        hi = h * 2;
      while (hi - lo > 1) {
        const mid = Math.floor((lo + hi) / 2);
        textCtx.font = `600 ${mid}px ${fontFamily}`;
        if (textCtx.measureText(text).width < w * 0.6) lo = mid;
        else hi = mid;
      }
      textCtx.font = `600 ${lo}px ${fontFamily}`;
      textCtx.fillText(text, w / 2, h / 2);

      const imgData = textCtx.getImageData(0, 0, bw, bh);
      mask = new Set<number>();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = Math.round((c * cellSize + cellSize / 2) * dpr);
          const py = Math.round((r * cellSize + cellSize / 2) * dpr);
          const idx = (py * bw + px) * 4;
          if (imgData.data[idx + 3] > 30) {
            mask.add(r * cols + c);
          }
        }
      }

      // Build base grid with text/grid colors baked in
      const base = document.createElement("canvas");
      base.width = bw;
      base.height = bh;
      const baseCtx = base.getContext("2d");
      if (!baseCtx) return;
      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          baseCtx.fillStyle = mask.has(r * cols + c) ? textColor : gridColor;
          baseCtx.fillRect(c * cellSize, r * cellSize, dotSize, dotSize);
        }
      }

      baseRef.current = base;
    };

    const draw = (time: number) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const {
        cellSize,
        dotSize,
        dotCount,
        spawnInterval,
        dotColors,
        fadeIn,
        holdTime,
        fadeOut,
        text,
        gridColor,
        textColor,
        fontFamily,
      } = cfg.current;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      const bw = Math.round(w * dpr);
      const bh = Math.round(h * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }

      const cols = Math.floor(w / cellSize);
      const rows = Math.floor(h / cellSize);

      // Rebuild base grid + mask when size/props change
      const key = `${bw}:${bh}:${text}:${cellSize}:${dotSize}:${gridColor}:${textColor}:${fontFamily}`;
      if (baseKeyRef.current !== key) {
        buildBase(w, h, dpr);
        baseKeyRef.current = key;
      }

      // Stamp cached base grid
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, bw, bh);
      if (baseRef.current) {
        ctx.drawImage(baseRef.current, 0, 0);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Spawn flickering dots
      if (time - lastSpawnRef.current > spawnInterval) {
        lastSpawnRef.current = time;
        for (let i = 0; i < dotCount; i++) {
          dotsRef.current.push({
            col: Math.floor(Math.random() * cols),
            row: Math.floor(Math.random() * rows),
            color: dotColors[Math.floor(Math.random() * dotColors.length)],
            startTime: time,
          });
        }
      }

      // Draw animated dots with fade
      const totalDuration = fadeIn + holdTime + fadeOut;
      dotsRef.current = dotsRef.current.filter((dot) => {
        const elapsed = time - dot.startTime;
        if (elapsed > totalDuration) return false;

        let opacity: number;
        if (elapsed < fadeIn) {
          opacity = elapsed / fadeIn;
        } else if (elapsed < fadeIn + holdTime) {
          opacity = 1;
        } else {
          opacity = 1 - (elapsed - fadeIn - holdTime) / fadeOut;
        }

        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
        ctx.fillStyle = dot.color;
        ctx.fillRect(dot.col * cellSize, dot.row * cellSize, dotSize, dotSize);
        return true;
      });

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    // Wait for fonts then start animation
    document.fonts.ready.then(() => {
      animRef.current = requestAnimationFrame(draw);
    });

    return () => cancelAnimationFrame(animRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeGradient = `linear-gradient(to bottom, ${bgColor} 0%, transparent 40%, transparent 100%)`;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: fadeGradient }}
      />
    </div>
  );
}
