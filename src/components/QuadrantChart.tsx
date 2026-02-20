"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Problem, ChartGroup } from "@/types";
import { Maximize2 } from "lucide-react";

interface QuadrantChartProps {
  group: ChartGroup;
  onProblemClick: (problem: Problem) => void;
  chartHeight?: number;
  compactHeader?: boolean;
  onExpand?: (group: ChartGroup) => void;
}

const CHART_PADDING = { top: 44, right: 16, bottom: 52, left: 88 };

export default function QuadrantChart({
  group,
  onProblemClick,
  chartHeight = 480,
  compactHeader = false,
  onExpand,
}: QuadrantChartProps) {
  const [hoveredProblem, setHoveredProblem] = useState<string | null>(null);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={() => onExpand?.(group)}
      className={`rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden ${
        onExpand ? "cursor-pointer" : ""
      }`}
    >
      {/* Header */}
      <div
        className={`px-5 pt-5 pb-3 border-b border-gray-100 ${
          onExpand ? "hover:bg-gray-50/70 transition-colors group/header" : ""
        }`}
      >
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-[15px] font-semibold text-[#1c1c1e] tracking-tight">
            {group.icon} {group.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#bbb] font-mono tabular-nums">
              {group.problems.length}
            </span>
            {onExpand && (
              <Maximize2
                size={14}
                strokeWidth={1.7}
                className="text-[#bbb] group-hover/header:text-[#888] transition-colors flex-shrink-0"
              />
            )}
          </div>
        </div>
        {!compactHeader && (
          <p className="text-[12px] text-[#999] leading-relaxed">
            {group.description}
          </p>
        )}
      </div>

      {/* Chart area — whole card clickable to expand */}
      <div className="relative" style={{ height: chartHeight }}>
        {/* Quadrant background — very light cool grey */}
        <div className="absolute inset-0 bg-[#f5f4f2]" />

        {/* Crosshair lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Vertical center line */}
          <line
            x1="50%"
            y1={CHART_PADDING.top}
            x2="50%"
            y2={`calc(100% - ${CHART_PADDING.bottom}px)`}
            stroke="#d4d4d4"
            strokeWidth="1"
          />
          {/* Horizontal center line */}
          <line
            x1={CHART_PADDING.left}
            y1="50%"
            x2={`calc(100% - ${CHART_PADDING.right}px)`}
            y2="50%"
            stroke="#d4d4d4"
            strokeWidth="1"
          />
          {/* Border frame */}
          <rect
            x={CHART_PADDING.left}
            y={CHART_PADDING.top}
            width={`calc(100% - ${CHART_PADDING.left + CHART_PADDING.right}px)`}
            height={`calc(100% - ${CHART_PADDING.top + CHART_PADDING.bottom}px)`}
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="1"
            rx="0"
          />
        </svg>

        {/* Y-axis labels — vertical, height-centered in respective quadrants */}
        <div
          className="absolute text-[11px] font-semibold text-[#1c1c1e] tracking-tight whitespace-nowrap"
          style={{
            left: 12,
            top: CHART_PADDING.top + (chartHeight - CHART_PADDING.top - CHART_PADDING.bottom) / 4,
            transform: "translate(-50%, -50%) rotate(-90deg)",
            transformOrigin: "center center",
          }}
        >
          Transformative
        </div>
        <div
          className="absolute text-[11px] font-semibold text-[#1c1c1e] tracking-tight whitespace-nowrap"
          style={{
            left: 12,
            top: CHART_PADDING.top + (3 * (chartHeight - CHART_PADDING.top - CHART_PADDING.bottom)) / 4,
            transform: "translate(-50%, -50%) rotate(-90deg)",
            transformOrigin: "center center",
          }}
        >
          Incremental
        </div>

        {/* X-axis labels — centered under left/right half of plot */}
        <div
          className="absolute text-[11px] font-semibold text-[#1c1c1e] tracking-tight"
          style={{
            bottom: 16,
            left: "25%",
            transform: "translateX(-50%)",
          }}
        >
          Overlooked
        </div>
        <div
          className="absolute text-[11px] font-semibold text-[#1c1c1e] tracking-tight"
          style={{
            bottom: 16,
            left: "75%",
            transform: "translateX(-50%)",
          }}
        >
          Crowded
        </div>

        {/* Data points */}
        <AnimatePresence mode="popLayout">
          {group.problems.map((problem) => {
            const isHovered = hoveredProblem === problem.id;

            const leftPercent =
              CHART_PADDING.left / 4 +
              problem.x * (100 - (CHART_PADDING.left + CHART_PADDING.right) / 4);
            const topPercent =
              CHART_PADDING.top / 4 +
              (1 - problem.y) *
                (100 - (CHART_PADDING.top + CHART_PADDING.bottom) / 4);

            return (
              <motion.div
                key={problem.id}
                layout
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  zIndex: isHovered ? 50 : 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                }}
                className="absolute cursor-pointer group/dot"
                style={{
                  left: `${problem.x * 100}%`,
                  top: `${(1 - problem.y) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredProblem(problem.id)}
                onMouseLeave={() => setHoveredProblem(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onProblemClick(problem);
                }}
              >
                {/* Black dot */}
                <motion.div
                  className="rounded-full bg-[#1c1c1e]"
                  style={{
                    width: isHovered ? 9 : 7,
                    height: isHovered ? 9 : 7,
                  }}
                />

                {/* Text label — always visible */}
                <div
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] leading-none pointer-events-none transition-colors duration-150 ${
                    isHovered
                      ? "text-[#1c1c1e] font-semibold"
                      : "text-[#666] font-medium"
                  }`}
                >
                  {problem.shortName}
                </div>

                {/* Hover card with extra info */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-2 rounded-lg bg-white border border-gray-200 shadow-md whitespace-nowrap z-50 pointer-events-none"
                    >
                      <div className="text-[11px] font-semibold text-[#1c1c1e]">
                        {problem.shortName}
                      </div>
                      <div className="text-[10px] text-[#999] mt-0.5">
                        {problem.category} · {problem.overlooked}
                      </div>
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
