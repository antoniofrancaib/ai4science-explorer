"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Problem, ChartGroup } from "@/types";

interface QuadrantChartProps {
  group: ChartGroup;
  onProblemClick: (problem: Problem) => void;
}

function getQuadrantLabel(x: number, y: number): string {
  if (x < 0.5 && y >= 0.5) return "Sweet Spot";
  if (x >= 0.5 && y >= 0.5) return "Competitive";
  if (x < 0.5 && y < 0.5) return "Niche";
  return "Avoid";
}

function getQuadrantBg(x: number, y: number): string {
  if (x < 0.5 && y >= 0.5) return "rgba(16, 185, 129, 0.06)";
  if (x >= 0.5 && y >= 0.5) return "rgba(245, 158, 11, 0.04)";
  if (x < 0.5 && y < 0.5) return "rgba(139, 92, 246, 0.04)";
  return "rgba(239, 68, 68, 0.04)";
}

export default function QuadrantChart({
  group,
  onProblemClick,
}: QuadrantChartProps) {
  const [hoveredProblem, setHoveredProblem] = useState<string | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const padding = { top: 32, right: 24, bottom: 40, left: 24 };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative rounded-2xl border border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-sm overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="text-2xl">{group.icon}</span>
          <h3 className="text-[15px] font-semibold text-white/90 tracking-tight">
            {group.title}
          </h3>
          <span className="ml-auto text-xs text-white/30 font-mono">
            {group.problems.length} problems
          </span>
        </div>
        <p className="text-xs text-white/40 leading-relaxed">
          {group.description}
        </p>
      </div>

      {/* Chart Area */}
      <div
        ref={chartRef}
        className="relative mx-3 mb-3 rounded-xl bg-[#080c14] border border-white/[0.04]"
        style={{ height: 420 }}
      >
        {/* Quadrant background fills */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div
            className="absolute top-0 left-0 w-1/2 h-1/2"
            style={{ background: getQuadrantBg(0.25, 0.75) }}
          />
          <div
            className="absolute top-0 right-0 w-1/2 h-1/2"
            style={{ background: getQuadrantBg(0.75, 0.75) }}
          />
          <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2"
            style={{ background: getQuadrantBg(0.25, 0.25) }}
          />
          <div
            className="absolute bottom-0 right-0 w-1/2 h-1/2"
            style={{ background: getQuadrantBg(0.75, 0.25) }}
          />
        </div>

        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Center cross */}
          <line
            x1="50%"
            y1={padding.top}
            x2="50%"
            y2={`calc(100% - ${padding.bottom}px)`}
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="4 4"
          />
          <line
            x1={padding.left}
            y1="50%"
            x2={`calc(100% - ${padding.right}px)`}
            y2="50%"
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Axis labels */}
        <div
          className="absolute text-[10px] font-medium text-white/25 tracking-widest uppercase"
          style={{ bottom: 8, left: padding.left }}
        >
          ← Overlooked
        </div>
        <div
          className="absolute text-[10px] font-medium text-white/25 tracking-widest uppercase"
          style={{ bottom: 8, right: padding.right }}
        >
          Crowded →
        </div>
        <div
          className="absolute text-[10px] font-medium text-white/25 tracking-widest uppercase"
          style={{
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Transformative
        </div>
        <div
          className="absolute text-[10px] font-medium text-white/25 tracking-widest uppercase"
          style={{
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Incremental
        </div>

        {/* Quadrant labels */}
        <div className="absolute text-[9px] font-semibold text-emerald-400/20 uppercase tracking-wider" style={{ top: padding.top + 4, left: padding.left + 4 }}>
          Sweet Spot
        </div>
        <div className="absolute text-[9px] font-semibold text-red-400/15 uppercase tracking-wider" style={{ bottom: padding.bottom + 4, right: padding.right + 4 }}>
          Avoid
        </div>

        {/* Problem dots */}
        <AnimatePresence mode="popLayout">
          {group.problems.map((problem) => {
            const isHovered = hoveredProblem === problem.id;
            const isCrowded = problem.tags.includes("crowded");
            const dotColor = isCrowded
              ? "rgb(239, 68, 68)"
              : group.color;

            const xPercent =
              padding.left +
              problem.x * (100 - padding.left - padding.right) * 0.01 * 100;
            const yPercent =
              padding.top +
              (1 - problem.y) *
                (100 - padding.top - padding.bottom) *
                0.01 *
                100;

            return (
              <motion.div
                key={problem.id}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  zIndex: isHovered ? 50 : 1,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute cursor-pointer group/dot"
                style={{
                  left: `${problem.x * 100}%`,
                  top: `${(1 - problem.y) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredProblem(problem.id)}
                onMouseLeave={() => setHoveredProblem(null)}
                onClick={() => onProblemClick(problem)}
              >
                {/* Pulse ring on hover */}
                {isHovered && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: 32,
                      height: 32,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      border: `1.5px solid ${dotColor}`,
                      opacity: 0.3,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Dot */}
                <motion.div
                  className="rounded-full shadow-lg"
                  style={{
                    width: isHovered ? 14 : 10,
                    height: isHovered ? 14 : 10,
                    backgroundColor: dotColor,
                    boxShadow: isHovered
                      ? `0 0 16px ${dotColor}80`
                      : `0 0 8px ${dotColor}40`,
                  }}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-lg bg-[#1a1f2e] border border-white/10 shadow-2xl whitespace-nowrap z-50 pointer-events-none"
                    >
                      <div className="text-[11px] font-semibold text-white/90">
                        {problem.shortName}
                      </div>
                      <div className="text-[9px] text-white/40 mt-0.5">
                        {getQuadrantLabel(problem.x, problem.y)} ·{" "}
                        {problem.overlooked}
                      </div>
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1a1f2e] border-r border-b border-white/10"
                        style={{ marginTop: -4 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
