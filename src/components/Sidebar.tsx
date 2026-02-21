"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartitionView, AxisKey, AxisDef, AXES, Problem } from "@/types";
import { allProblems } from "@/data/problems";
import {
  Microscope,
  Wrench,
  Scaling,
  Sparkles,
  Search,
  Box,
  X,
  ChevronDown,
} from "lucide-react";

interface SidebarProps {
  views: PartitionView[];
  activeViewId: string;
  onViewChange: (viewId: string) => void;
  is3D: boolean;
  onToggle3D: () => void;
  xAxis: AxisKey;
  yAxis: AxisKey;
  onXAxisChange: (key: AxisKey) => void;
  onYAxisChange: (key: AxisKey) => void;
  onProblemClick: (problem: Problem) => void;
}

const viewIcons: Record<string, React.ReactNode> = {
  "object-of-study": <Microscope size={16} strokeWidth={1.7} />,
  methodological: <Wrench size={16} strokeWidth={1.7} />,
  scale: <Scaling size={16} strokeWidth={1.7} />,
  hybrid: <Sparkles size={16} strokeWidth={1.7} />,
};

function AxisSelect({
  label,
  value,
  disabledKey,
  onChange,
}: {
  label: string;
  value: AxisKey;
  disabledKey: AxisKey;
  onChange: (key: AxisKey) => void;
}) {
  return (
    <div>
      <p className="text-[10px] text-[#aaa] font-medium mb-1">{label}</p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as AxisKey)}
          className="w-full appearance-none text-[12px] font-medium text-[#444] bg-black/[0.03] rounded-lg px-2.5 py-1.5 pr-7 outline-none hover:bg-black/[0.06] transition-colors cursor-pointer border border-transparent focus:border-gray-300"
        >
          {AXES.map((axis) => (
            <option key={axis.key} value={axis.key} disabled={axis.key === disabledKey}>
              {axis.name}
            </option>
          ))}
        </select>
        <ChevronDown
          size={12}
          strokeWidth={2}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none"
        />
      </div>
    </div>
  );
}

export default function Sidebar({
  views,
  activeViewId,
  onViewChange,
  is3D,
  onToggle3D,
  xAxis,
  yAxis,
  onXAxisChange,
  onYAxisChange,
  onProblemClick,
}: SidebarProps) {
  // Inline search state
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const problems = Object.values(allProblems);
  const filtered = query.trim()
    ? problems.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.shortName.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className="sticky top-0 h-screen w-56 flex-shrink-0 flex flex-col py-7 px-4 overflow-y-auto">
      {/* Search bar */}
      <div ref={searchContainerRef} className="relative mb-5">
        <div
          className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border transition-all duration-200 ${
            isFocused
              ? "bg-white border-gray-300 shadow-sm"
              : "bg-transparent border-transparent hover:bg-black/[0.03]"
          }`}
        >
          <Search size={14} strokeWidth={1.7} className="text-[#bbb] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search problems..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="flex-1 bg-transparent text-[12px] text-[#333] placeholder:text-[#999] outline-none min-w-0"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="text-[#bbb] hover:text-[#666] transition-colors"
            >
              <X size={12} strokeWidth={1.8} />
            </button>
          )}
        </div>

        {/* Search results dropdown */}
        <AnimatePresence>
          {isFocused && filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute top-full left-0 right-0 mt-1 py-1 rounded-lg bg-white border border-gray-200 shadow-lg z-50 max-h-64 overflow-y-auto"
            >
              {filtered.slice(0, 10).map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => {
                    onProblemClick(problem);
                    setQuery("");
                    setIsFocused(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e] flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium text-[#333] truncate">
                      {problem.shortName}
                    </div>
                    <div className="text-[10px] text-[#aaa]">{problem.category}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Views label */}
      <p className="px-2.5 mb-2 text-[10px] font-medium text-[#bbb] uppercase tracking-wider">
        Views
      </p>

      {/* Chart view links */}
      <nav className="flex flex-col gap-0.5">
        {views.map((view) => {
          const isActive = !is3D && view.id === activeViewId;
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

      {/* Divider */}
      <div className="my-4 border-t border-gray-100" />

      {/* Axis filters — only shown in 2D chart mode */}
      {!is3D && (
        <>
          <p className="px-2.5 mb-2.5 text-[10px] font-medium text-[#bbb] uppercase tracking-wider">
            Chart Axes
          </p>
          <div className="flex flex-col gap-2.5 px-2.5 mb-4">
            <AxisSelect label="Horizontal (X)" value={xAxis} disabledKey={yAxis} onChange={onXAxisChange} />
            <AxisSelect label="Vertical (Y)" value={yAxis} disabledKey={xAxis} onChange={onYAxisChange} />
          </div>
          <div className="my-4 border-t border-gray-100" />
        </>
      )}

      {/* 3D Explorer section */}
      <p className="px-2.5 mb-2 text-[10px] font-medium text-[#bbb] uppercase tracking-wider">
        Visualize
      </p>
      <button
        onClick={onToggle3D}
        className={`relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors duration-150 ${
          is3D
            ? "text-[#1c1c1e]"
            : "text-[#777] hover:text-[#444] hover:bg-black/[0.03]"
        }`}
      >
        {is3D && (
          <motion.div
            layoutId="sidebarActive"
            className="absolute inset-0 rounded-lg bg-black/[0.05]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative flex-shrink-0">
          <Box size={16} strokeWidth={1.7} />
        </span>
        <span className="relative text-[13px] font-medium">3D Explorer</span>
      </button>

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
