"use client";
import { useEffect, useRef } from "react";

const DEFAULT_COLORS = ["#c96442", "#c96442", "#c96442", "#c96442"];

interface Dot {
  col: number;
  row: number;
  color: string;
  startTime: number;
}

interface GridPanelProps {
  side: "left" | "right";
  cellSize?: number;
  dotSize?: number;
  dotCount?: number;
  spawnInterval?: number;
  dotColors?: string[];
  gridColor?: string;
  bgColor?: string;
  fadeIn?: number;
  holdTime?: number;
  fadeOut?: number;
}

export function GridPanel({
  side,
  cellSize = 8,
  dotSize = 6,
  dotCount = 2,
  dotColors = DEFAULT_COLORS,
  gridColor = "#f5f4ee",
  bgColor = "var(--background)",
  spawnInterval = 200,
  fadeIn = 200,
  holdTime = 200,
  fadeOut = 200,
}: GridPanelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const offscreenKeyRef = useRef("");

  // Store props in ref so the rAF loop always sees current values
  const cfg = useRef({
    cellSize,
    dotSize,
    dotCount,
    spawnInterval,
    dotColors,
    gridColor,
    fadeIn,
    holdTime,
    fadeOut,
  });
  cfg.current = {
    cellSize,
    dotSize,
    dotCount,
    spawnInterval,
    dotColors,
    gridColor,
    fadeIn,
    holdTime,
    fadeOut,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = (time: number) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const {
        cellSize,
        dotSize,
        dotCount,
        spawnInterval,
        dotColors,
        gridColor,
        fadeIn,
        holdTime,
        fadeOut,
      } = cfg.current;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Resize backing store if needed
      const bw = Math.round(w * dpr);
      const bh = Math.round(h * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cols = Math.floor(w / cellSize);
      const rows = Math.floor(h / cellSize);

      // Build offscreen base grid (only when size or color changes)
      const key = `${bw}:${bh}:${gridColor}:${cellSize}:${dotSize}`;
      if (offscreenKeyRef.current !== key) {
        const off = document.createElement("canvas");
        off.width = bw;
        off.height = bh;
        const offCtx = off.getContext("2d");
        if (!offCtx) return;
        offCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        offCtx.fillStyle = gridColor;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            offCtx.fillRect(c * cellSize, r * cellSize, dotSize, dotSize);
          }
        }
        offscreenRef.current = off;
        offscreenKeyRef.current = key;
      }

      // Stamp base grid (already at full DPR resolution, so reset transform)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      if (offscreenRef.current) ctx.drawImage(offscreenRef.current, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Spawn new illuminated dots
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

      // Draw illuminated dots with smooth fade
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

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeGradient =
    side === "left"
      ? `linear-gradient(to right, transparent 0%, transparent 20%, ${bgColor} 100%)`
      : `linear-gradient(to left, transparent 0%, transparent 20%, ${bgColor} 100%)`;

  return (
    <div
      className="absolute top-0 h-full pointer-events-none"
      style={{ [side]: 0, width: "50%" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: fadeGradient }}
      />
    </div>
  );
}
