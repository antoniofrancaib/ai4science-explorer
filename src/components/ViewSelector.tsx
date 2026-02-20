"use client";

import { motion } from "framer-motion";
import { PartitionView } from "@/types";

interface ViewSelectorProps {
  views: PartitionView[];
  activeViewId: string;
  onViewChange: (viewId: string) => void;
}

const viewIcons: Record<string, string> = {
  "object-of-study": "🗂️",
  methodological: "⚙️",
  scale: "📏",
  hybrid: "✦",
};

export default function ViewSelector({
  views,
  activeViewId,
  onViewChange,
}: ViewSelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
      {views.map((view) => {
        const isActive = view.id === activeViewId;
        return (
          <button
            key={view.id}
            onClick={() => onViewChange(view.id)}
            className={`relative flex items-center gap-2.5 px-4 py-3 sm:py-2.5 rounded-xl text-left transition-all duration-200 flex-1 min-w-0 ${
              isActive
                ? "text-white"
                : "text-white/40 hover:text-white/60 hover:bg-white/[0.03]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeViewBg"
                className="absolute inset-0 rounded-xl bg-white/[0.07] border border-white/[0.08]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative text-base sm:text-sm flex-shrink-0">
              {viewIcons[view.id] || "📊"}
            </span>
            <div className="relative min-w-0">
              <div className="text-[13px] font-medium truncate">
                {view.title}
              </div>
              <div className="text-[10px] text-white/30 truncate hidden sm:block">
                {view.groups.length} maps
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
