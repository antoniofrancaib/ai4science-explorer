"use client";

import { motion } from "framer-motion";
import { PartitionView } from "@/types";
import {
  Microscope,
  Wrench,
  Scaling,
  Sparkles,
  Search,
} from "lucide-react";

interface SidebarProps {
  views: PartitionView[];
  activeViewId: string;
  onViewChange: (viewId: string) => void;
  onSearchFocus: () => void;
}

const viewIcons: Record<string, React.ReactNode> = {
  "object-of-study": <Microscope size={16} strokeWidth={1.7} />,
  methodological: <Wrench size={16} strokeWidth={1.7} />,
  scale: <Scaling size={16} strokeWidth={1.7} />,
  hybrid: <Sparkles size={16} strokeWidth={1.7} />,
};

export default function Sidebar({
  views,
  activeViewId,
  onViewChange,
  onSearchFocus,
}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 h-screen w-56 flex flex-col py-7 px-4 z-40">
      {/* Logo / Title */}
      <div className="mb-8 px-2">
        <h1 className="text-[13px] font-semibold text-[#1c1c1e] tracking-tight leading-tight">
          AI4Science
        </h1>
        <p className="text-[11px] text-[#999] mt-0.5">Open Problems Explorer</p>
      </div>

      {/* Search trigger */}
      <button
        onClick={onSearchFocus}
        className="flex items-center gap-2 px-2.5 py-2 mb-5 rounded-lg text-[12px] text-[#999] hover:bg-black/[0.04] transition-colors"
      >
        <Search size={14} strokeWidth={1.7} />
        <span>Search problems...</span>
      </button>

      {/* Navigation label */}
      <p className="px-2.5 mb-2 text-[10px] font-medium text-[#bbb] uppercase tracking-wider">
        Views
      </p>

      {/* View links */}
      <nav className="flex flex-col gap-0.5">
        {views.map((view) => {
          const isActive = view.id === activeViewId;
          return (
            <button
              key={view.id}
              onClick={() => onViewChange(view.id)}
              className={`relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors duration-150 ${
                isActive
                  ? "text-[#1c1c1e]"
                  : "text-[#777] hover:text-[#444] hover:bg-black/[0.03]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebarActive"
                  className="absolute inset-0 rounded-lg bg-black/[0.05]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative flex-shrink-0">
                {viewIcons[view.id] || <Microscope size={16} strokeWidth={1.7} />}
              </span>
              <span className="relative text-[13px] font-medium truncate">
                {view.title}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto px-2.5">
        <p className="text-[10px] text-[#ccc] leading-relaxed">
          Data last reviewed
          <br />
          Feb 2026
        </p>
      </div>
    </aside>
  );
}
