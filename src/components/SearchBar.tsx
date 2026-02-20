"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Problem } from "@/types";
import { allProblems } from "@/data/problems";

interface SearchBarProps {
  onProblemClick: (problem: Problem) => void;
}

export default function SearchBar({ onProblemClick }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div
        className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all duration-200 ${
          isFocused
            ? "bg-white/[0.05] border-white/[0.12]"
            : "bg-white/[0.03] border-white/[0.06]"
        }`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="text-white/30 flex-shrink-0"
        >
          <circle
            cx="6.5"
            cy="6.5"
            r="5.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10.5 10.5L14 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search problems..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="flex-1 bg-transparent text-[13px] text-white/80 placeholder:text-white/25 outline-none"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="text-white/30 hover:text-white/60 transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFocused && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 py-1.5 rounded-xl bg-[#141920] border border-white/[0.08] shadow-2xl z-50 max-h-72 overflow-y-auto"
          >
            {filtered.slice(0, 12).map((problem) => (
              <button
                key={problem.id}
                onClick={() => {
                  onProblemClick(problem);
                  setQuery("");
                  setIsFocused(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.04] transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[12px] font-medium text-white/75 truncate">
                    {problem.shortName}
                  </div>
                  <div className="text-[10px] text-white/30">
                    {problem.category} · {problem.overlooked}
                  </div>
                </div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white/20 flex-shrink-0"
                >
                  <path d="M4.5 2l4 4-4 4" />
                </svg>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
