"use client";

import { useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Problem } from "@/types";
import { ChartGroup } from "@/types";
import { partitionViews } from "@/data/views";
import { allProblems } from "@/data/problems";
import QuadrantChart from "@/components/QuadrantChart";
import SlideOverDrawer from "@/components/SlideOverDrawer";
import ChartModal from "@/components/ChartModal";
import Sidebar from "@/components/Sidebar";
import SearchBar, { SearchBarHandle } from "@/components/SearchBar";
import Legend from "@/components/Legend";

// Dynamic import with ssr:false — Three.js cannot run on the server
const Explorer3D = dynamic(() => import("@/components/Explorer3D"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full rounded-2xl border border-gray-200 bg-[#f8f6f4]" style={{ height: "calc(100vh - 220px)", minHeight: 500 }}>
      <p className="text-[13px] text-[#bbb]">Loading 3D scene…</p>
    </div>
  ),
});

export default function Home() {
  const [activeViewId, setActiveViewId] = useState("hybrid");
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [expandedChart, setExpandedChart] = useState<ChartGroup | null>(null);
  const [is3D, setIs3D] = useState(false);
  const searchRef = useRef<SearchBarHandle>(null);

  const activeView = partitionViews.find((v) => v.id === activeViewId)!;

  const handleProblemClick = useCallback((problem: Problem) => {
    setSelectedProblem(problem);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProblem(null);
  }, []);

  const totalProblems = new Set(
    activeView.groups.flatMap((g) => g.problems.map((p) => p.id))
  ).size;

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1c1c1e] flex justify-center">
      {/* Centered layout: sidebar + main (Cursor-style) */}
      <div className="flex w-full max-w-7xl min-w-0">
        <Sidebar
          views={partitionViews}
          activeViewId={activeViewId}
          onViewChange={(id) => { setIs3D(false); setActiveViewId(id); }}
          onSearchFocus={() => searchRef.current?.focus()}
          is3D={is3D}
          onToggle3D={() => setIs3D((v) => !v)}
        />

        {/* Main content */}
        <main className="flex-1 flex justify-center min-h-screen min-w-0">
        <div className="w-full max-w-6xl px-8 py-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-10"
          >
            <h1 className="text-3xl font-semibold tracking-tight text-[#1c1c1e] leading-tight">
              Open Problems in AI for Science
            </h1>
          </motion.header>

          {/* Controls — hidden in 3D mode */}
          {!is3D && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <motion.div
                    key={activeViewId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[13px] text-[#999]"
                  >
                    <span className="text-[#555] font-medium">
                      {activeView.title}
                    </span>
                    {" — "}
                    {activeView.description}
                    <span className="text-[#bbb] ml-1">
                      ({totalProblems} problems)
                    </span>
                  </motion.div>
                </div>
                <SearchBar ref={searchRef} onProblemClick={handleProblemClick} />
              </div>

              <Legend />
            </motion.div>
          )}

          {/* 3D Explorer view */}
          {is3D ? (
            <motion.div
              key="3d"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-6">
                <p className="text-[13px] text-[#999]">
                  <span className="text-[#555] font-medium">3D Explorer</span>
                  {" — "}
                  All {Object.keys(allProblems).length} problems plotted across three axes.
                </p>
              </div>
              <Explorer3D onProblemClick={handleProblemClick} />
            </motion.div>
          ) : (
            /* Charts Grid — always 2 per row to avoid overlaps */
            <motion.div
              key="charts"
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {activeView.groups.map((group) => (
                  <QuadrantChart
                    key={`${activeViewId}-${group.id}`}
                    group={group}
                    onProblemClick={handleProblemClick}
                    onExpand={setExpandedChart}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Footer */}
          <footer className="mt-16 pt-6 border-t border-gray-200 text-center pb-8">
            <p className="text-[11px] text-[#ccc]">
              AI4Science Explorer — Open Problems Landscape
            </p>
          </footer>
        </div>
      </main>
      </div>

      {/* Problem detail slide-over drawer */}
      <SlideOverDrawer problem={selectedProblem} onClose={handleCloseModal} />

      {/* Chart Expand Modal */}
      <ChartModal
        group={expandedChart}
        onClose={() => setExpandedChart(null)}
        onProblemClick={handleProblemClick}
      />
    </div>
  );
}
