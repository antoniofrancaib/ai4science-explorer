"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Problem } from "@/types";

interface ProblemModalProps {
  problem: Problem | null;
  onClose: () => void;
}

function OverlookedBadge({ level }: { level: string }) {
  const normalized = level.toLowerCase();
  let bg = "bg-white/10";
  let text = "text-white/60";

  if (
    normalized.includes("very crowded") ||
    normalized.includes("saturated")
  ) {
    bg = "bg-red-500/15";
    text = "text-red-400";
  } else if (
    normalized.includes("crowded") ||
    normalized.includes("overhyped") ||
    normalized.includes("stalled")
  ) {
    bg = "bg-orange-500/15";
    text = "text-orange-400";
  } else if (normalized.includes("getting")) {
    bg = "bg-yellow-500/15";
    text = "text-yellow-400";
  } else if (normalized.includes("medium")) {
    bg = "bg-blue-500/15";
    text = "text-blue-400";
  } else if (normalized.includes("very") || normalized.includes("yes")) {
    bg = "bg-emerald-500/15";
    text = "text-emerald-400";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium ${bg} ${text}`}
    >
      {level}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    Biology: "bg-emerald-500/15 text-emerald-400",
    Chemistry: "bg-amber-500/15 text-amber-400",
    Physics: "bg-blue-500/15 text-blue-400",
    Math: "bg-violet-500/15 text-violet-400",
    Quantum: "bg-purple-500/15 text-purple-400",
    "Meta-Science": "bg-rose-500/15 text-rose-400",
  };
  const cls = colorMap[category] || "bg-white/10 text-white/60";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium ${cls}`}
    >
      {category}
    </span>
  );
}

function CoordDisplay({ x, y }: { x: number; y: number }) {
  return (
    <div className="flex gap-3 text-[11px] font-mono text-white/40">
      <span>
        crowdedness: <span className="text-white/60">{(x * 100).toFixed(0)}%</span>
      </span>
      <span>
        impact: <span className="text-white/60">{(y * 100).toFixed(0)}%</span>
      </span>
    </div>
  );
}

export default function ProblemModal({ problem, onClose }: ProblemModalProps) {
  return (
    <AnimatePresence>
      {problem && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0f1419] border border-white/[0.08] shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/80 transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white/95 tracking-tight pr-8 mb-3">
                    {problem.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <CategoryBadge category={problem.category} />
                    <OverlookedBadge level={problem.overlooked} />
                  </div>
                  <CoordDisplay x={problem.x} y={problem.y} />
                </div>

                {/* Content sections */}
                <div className="space-y-5">
                  <Section
                    title="Why It Matters"
                    content={problem.whyItMatters}
                    icon="💡"
                  />
                  <Section
                    title="Why It's Hard"
                    content={problem.whyItsHard}
                    icon="🔥"
                  />
                  <Section
                    title="Startup Angle"
                    content={problem.startupAngle}
                    icon="🚀"
                  />
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {problem.tags
                      .filter((t) => t !== "crowded")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/35 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">{icon}</span>
        <h4 className="text-[13px] font-semibold text-white/70 uppercase tracking-wider">
          {title}
        </h4>
      </div>
      <p className="text-sm text-white/55 leading-relaxed">{content}</p>
    </div>
  );
}
