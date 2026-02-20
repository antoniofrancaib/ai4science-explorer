"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChartGroup } from "@/types";
import QuadrantChart from "./QuadrantChart";
import { X } from "lucide-react";

interface ChartModalProps {
  group: ChartGroup | null;
  onClose: () => void;
  onProblemClick: (problem: import("@/types").Problem) => void;
}

const EXPANDED_HEIGHT = 620;

export default function ChartModal({
  group,
  onClose,
  onProblemClick,
}: ChartModalProps) {
  return (
    <AnimatePresence>
      {group && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 z-[101] flex items-center justify-center p-4 pointer-events-none sm:inset-8"
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xl pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} strokeWidth={1.8} />
              </button>

              <div className="flex-1 overflow-auto">
                <QuadrantChart
                  group={group}
                  onProblemClick={onProblemClick}
                  chartHeight={EXPANDED_HEIGHT}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
