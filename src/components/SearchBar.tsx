"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Problem } from "@/types";
import { allProblems } from "@/data/problems";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onProblemClick: (problem: Problem) => void;
}

export interface SearchBarHandle {
  focus: () => void;
}

const SearchBar = forwardRef<SearchBarHandle, SearchBarProps>(
  function SearchBar({ onProblemClick }, ref) {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
    }));

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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div ref={containerRef} className="relative w-full max-w-sm">
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 ${
            isFocused
              ? "bg-white border-gray-300 shadow-sm"
              : "bg-white border-gray-200"
          }`}
        >
          <Search size={14} strokeWidth={1.8} className="text-[#bbb] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search problems..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="flex-1 bg-transparent text-[13px] text-[#333] placeholder:text-[#bbb] outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="text-[#bbb] hover:text-[#666] transition-colors"
            >
              <X size={13} strokeWidth={1.8} />
            </button>
          )}
        </div>

        <AnimatePresence>
          {isFocused && filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute top-full left-0 right-0 mt-1.5 py-1 rounded-lg bg-white border border-gray-200 shadow-md z-50 max-h-72 overflow-y-auto"
            >
              {filtered.slice(0, 12).map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => {
                    onProblemClick(problem);
                    setQuery("");
                    setIsFocused(false);
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e] flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] font-medium text-[#333] truncate">
                      {problem.shortName}
                    </div>
                    <div className="text-[10px] text-[#aaa]">
                      {problem.category} · {problem.overlooked}
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default SearchBar;
