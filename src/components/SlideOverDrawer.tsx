"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Problem } from "@/types";

interface SlideOverDrawerProps {
  problem: Problem | null;
  onClose: () => void;
}

// Maps category names to a subtle accent color used in the header pill
const CAT_ACCENT: Record<string, string> = {
  Biology: "#d1fae5",
  Chemistry: "#fef3c7",
  Physics: "#dbeafe",
  Math: "#ede9fe",
  Quantum: "#f3e8ff",
  "Meta-Science": "#ffe4e6",
};
const CAT_TEXT: Record<string, string> = {
  Biology: "#065f46",
  Chemistry: "#92400e",
  Physics: "#1e40af",
  Math: "#4c1d95",
  Quantum: "#6b21a8",
  "Meta-Science": "#9f1239",
};

export default function SlideOverDrawer({ problem, onClose }: SlideOverDrawerProps) {
  return (
    <AnimatePresence>
      {problem && (
        <>
          {/* Semi-transparent backdrop — closes drawer on click */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/10 z-[200]"
            onClick={onClose}
          />

          {/* Slide-over panel */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.9 }}
            className="fixed right-0 top-0 h-screen z-[201] flex flex-col bg-white border-l border-gray-200 shadow-2xl"
            style={{ width: "clamp(480px, 45vw, 700px)" }}
            // Prevent clicks inside drawer from closing it via backdrop
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ─────────────────────────────────────────────────── */}
            <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-gray-100 flex-shrink-0">
              <div className="flex-1 pr-6">
                {/* Category pill */}
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide mb-3"
                  style={{
                    background: CAT_ACCENT[problem.category] ?? "#f3f4f6",
                    color: CAT_TEXT[problem.category] ?? "#374151",
                  }}
                >
                  {problem.category}
                </span>
                <h1 className="text-[22px] font-semibold text-[#1c1c1e] leading-snug tracking-tight">
                  {problem.name}
                </h1>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* ── Scrollable body ────────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto px-8 py-8">
              <div className="flex flex-col gap-8">

                {/* Definition */}
                <Section title="Definition">
                  <p className="text-[14px] text-[#333] leading-relaxed">
                    {problem.definition}
                  </p>
                </Section>

                {/* Methodological Bottleneck — visually accented */}
                <Section title="Methodological Bottleneck">
                  <div className="border-l-[3px] border-[#1c1c1e]/15 pl-4">
                    <p className="text-[14px] text-[#333] leading-relaxed bg-[#f8f7f5] rounded-r-xl px-4 py-3.5">
                      {problem.bottleneck}
                    </p>
                  </div>
                </Section>

                {/* SOTA vs Solved State — two-column grid */}
                <Section title="State of the Field">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#f9f8f7] rounded-xl p-4 border border-gray-100">
                      <p className="text-[10px] font-semibold text-[#bbb] uppercase tracking-wider mb-2">
                        Current SOTA
                      </p>
                      <p className="text-[13px] text-[#444] leading-relaxed">
                        {problem.currentSota}
                      </p>
                    </div>
                    <div className="bg-[#f0f4ff] rounded-xl p-4 border border-blue-100">
                      <p className="text-[10px] font-semibold text-[#93a5d4] uppercase tracking-wider mb-2">
                        Solved State / Horizon
                      </p>
                      <p className="text-[13px] text-[#444] leading-relaxed">
                        {problem.solvedState}
                      </p>
                    </div>
                  </div>
                </Section>

                {/* Symmetries & Inductive Biases */}
                {problem.symmetries.length > 0 && (
                  <Section title="Symmetries & Inductive Biases">
                    <div className="flex flex-wrap gap-2">
                      {problem.symmetries.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1.5 bg-gray-100 text-[#555] text-[12px] font-medium rounded-full border border-gray-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Section>
                )}

                {/* Benchmarks */}
                {problem.benchmarks.length > 0 && (
                  <Section title="Benchmarks & Datasets">
                    <p className="text-[13px] text-[#555] leading-relaxed">
                      {problem.benchmarks.join(" · ")}
                    </p>
                  </Section>
                )}

                {/* Key Literature */}
                {problem.papers.length > 0 && (
                  <Section title="Key Literature">
                    <div className="flex flex-col divide-y divide-gray-100">
                      {problem.papers.map((paper, i) => (
                        <a
                          key={i}
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 py-3.5 hover:bg-gray-50 -mx-3 px-3 rounded-lg transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-semibold text-[#1c1c1e] leading-snug group-hover:text-blue-700 transition-colors">
                              {paper.title}
                            </p>
                            <p className="text-[11px] text-[#999] mt-1">
                              {paper.authors} &middot; {paper.year}
                            </p>
                          </div>
                          <ExternalLink
                            size={13}
                            strokeWidth={1.8}
                            className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors"
                          />
                        </a>
                      ))}
                    </div>
                  </Section>
                )}

                {/* Bottom padding */}
                <div className="h-4" />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Reusable section wrapper ──────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[10px] font-semibold text-[#bbb] uppercase tracking-widest mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
