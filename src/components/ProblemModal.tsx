"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Problem } from "@/types";
import { X } from "lucide-react";

interface ProblemModalProps {
  problem: Problem | null;
  onClose: () => void;
}

function OverlookedBadge({ level }: { level: string }) {
  const normalized = level.toLowerCase();
  let cls = "bg-gray-100 text-gray-500";

  if (
    normalized.includes("very crowded") ||
    normalized.includes("saturated")
  ) {
    cls = "bg-red-50 text-red-600";
  } else if (
    normalized.includes("crowded") ||
    normalized.includes("overhyped") ||
    normalized.includes("stalled")
  ) {
    cls = "bg-orange-50 text-orange-600";
  } else if (normalized.includes("getting")) {
    cls = "bg-amber-50 text-amber-600";
  } else if (normalized.includes("medium")) {
    cls = "bg-blue-50 text-blue-600";
  } else if (normalized.includes("very") || normalized.includes("yes")) {
    cls = "bg-emerald-50 text-emerald-700";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium ${cls}`}
    >
      {level}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    Biology: "bg-emerald-50 text-emerald-700",
    Chemistry: "bg-amber-50 text-amber-700",
    Physics: "bg-blue-50 text-blue-700",
    Math: "bg-violet-50 text-violet-700",
    Quantum: "bg-purple-50 text-purple-700",
    "Meta-Science": "bg-rose-50 text-rose-700",
  };
  const cls = colorMap[category] || "bg-gray-100 text-gray-600";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium ${cls}`}
    >
      {category}
    </span>
  );
}

export default function ProblemModal({ problem, onClose }: ProblemModalProps) {
  return (
    <AnimatePresence>
      {problem && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[100]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-gray-200 shadow-lg pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={15} strokeWidth={2} />
              </button>

              <div className="p-6 sm:p-7">
                {/* Header */}
                <div className="mb-5">
                  <h2 className="text-lg sm:text-xl font-semibold text-[#1c1c1e] tracking-tight pr-8 mb-3 leading-snug">
                    {problem.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <CategoryBadge category={problem.category} />
                    <OverlookedBadge level={problem.overlooked} />
                  </div>
                  <div className="flex gap-3 text-[11px] font-mono text-[#bbb]">
                    <span>
                      crowdedness:{" "}
                      <span className="text-[#888]">
                        {(problem.x * 100).toFixed(0)}%
                      </span>
                    </span>
                    <span>
                      impact:{" "}
                      <span className="text-[#888]">
                        {(problem.y * 100).toFixed(0)}%
                      </span>
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Section title="Why It Matters" content={problem.whyItMatters} />
                  <Section title="Why It's Hard" content={problem.whyItsHard} />
                  <Section title="Startup Angle" content={problem.startupAngle} />
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {problem.tags
                      .filter((t) => t !== "crowded")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-gray-50 text-[10px] text-[#aaa] font-mono border border-gray-100"
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

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-lg bg-gray-50/70 border border-gray-100 p-4">
      <h4 className="text-[12px] font-semibold text-[#999] uppercase tracking-wider mb-1.5">
        {title}
      </h4>
      <p className="text-[13px] text-[#444] leading-relaxed">{content}</p>
    </div>
  );
}
