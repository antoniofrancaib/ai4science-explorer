"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Problem, AxisKey, AXES } from "@/types";
import { ChartGroup } from "@/types";
import { partitionViews } from "@/data/views";
import { allProblems } from "@/data/problems";
import QuadrantChart from "@/components/QuadrantChart";
import SlideOverDrawer from "@/components/SlideOverDrawer";
import ChartModal from "@/components/ChartModal";
import Sidebar from "@/components/Sidebar";
import Legend from "@/components/Legend";

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

  // Dynamic axis selection for 2D charts
  const [xAxisKey, setXAxisKey] = useState<AxisKey>("x");
  const [yAxisKey, setYAxisKey] = useState<AxisKey>("y");

  const hAxis = AXES.find((a) => a.key === xAxisKey)!;
  const vAxis = AXES.find((a) => a.key === yAxisKey)!;

  const activeView = partitionViews.find((v) => v.id === activeViewId)!;

  const handleProblemClick = useCallback((problem: Problem) => {
    setSelectedProblem(problem);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProblem(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1c1c1e] flex justify-center">
      <div className="flex w-full max-w-7xl min-w-0">
        <Sidebar
          views={partitionViews}
          activeViewId={activeViewId}
          onViewChange={(id) => { setIs3D(false); setActiveViewId(id); }}
          is3D={is3D}
          onToggle3D={() => setIs3D((v) => !v)}
          xAxis={xAxisKey}
          yAxis={yAxisKey}
          onXAxisChange={setXAxisKey}
          onYAxisChange={setYAxisKey}
          onProblemClick={handleProblemClick}
        />

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
                </motion.div>
              </div>

              <Legend hAxis={hAxis} vAxis={vAxis} />
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
            <motion.div
              key="charts"
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {activeView.groups.map((group) => (
                  <QuadrantChart
                    key={`${activeViewId}-${group.id}-${xAxisKey}-${yAxisKey}`}
                    group={group}
                    onProblemClick={handleProblemClick}
                    onExpand={setExpandedChart}
                    hAxis={hAxis}
                    vAxis={vAxis}
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
        hAxis={hAxis}
        vAxis={vAxis}
      />
    </div>
  );
}
