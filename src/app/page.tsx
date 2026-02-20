"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Problem } from "@/types";
import { partitionViews } from "@/data/views";
import QuadrantChart from "@/components/QuadrantChart";
import ProblemModal from "@/components/ProblemModal";
import ViewSelector from "@/components/ViewSelector";
import SearchBar from "@/components/SearchBar";
import Legend from "@/components/Legend";
import StartupShortlist from "@/components/StartupShortlist";
import GuideSection from "@/components/GuideSection";

export default function Home() {
  const [activeViewId, setActiveViewId] = useState("hybrid");
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

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
    <div className="min-h-screen bg-[#080c14] text-white selection:bg-emerald-500/20">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-emerald-500/[0.02] blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-violet-500/[0.02] blur-[120px]" />
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
              <span className="text-sm">🔬</span>
            </div>
            <span className="text-[13px] font-medium text-white/40 tracking-wide uppercase">
              AI4Science Explorer
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/95 max-w-3xl leading-[1.15]">
            Open Problems in{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              AI for Science
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed">
            The biggest breakthroughs come from working on problems that are{" "}
            <span className="text-white/60 font-medium">high-potential</span>{" "}
            and{" "}
            <span className="text-white/60 font-medium">under-explored</span>.
            This page maps ~65 open problems across biology, chemistry, physics,
            and mathematics — with a focus on identifying the most overlooked,
            high-upside opportunities.
          </p>
        </motion.header>

        {/* Controls bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1">
              <ViewSelector
                views={partitionViews}
                activeViewId={activeViewId}
                onViewChange={setActiveViewId}
              />
            </div>
            <SearchBar onProblemClick={handleProblemClick} />
          </div>

          {/* View description */}
          <div className="flex items-center justify-between">
            <motion.div
              key={activeViewId}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[13px] text-white/35"
            >
              <span className="text-white/55 font-medium">
                {activeView.title}
              </span>{" "}
              — {activeView.description}{" "}
              <span className="text-white/25">
                ({totalProblems} unique problems)
              </span>
            </motion.div>
          </div>

          <Legend />
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          layout
          className={`grid gap-5 ${
            activeView.groups.length <= 3
              ? "grid-cols-1 lg:grid-cols-3"
              : activeView.groups.length === 4
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {activeView.groups.map((group) => (
              <QuadrantChart
                key={`${activeViewId}-${group.id}`}
                group={group}
                onProblemClick={handleProblemClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Startup Shortlist */}
        <StartupShortlist onProblemClick={handleProblemClick} />

        {/* Guide */}
        <GuideSection />

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/[0.05] text-center">
          <p className="text-[11px] text-white/20">
            AI4Science Explorer — Open Problems Landscape Map
          </p>
          <p className="text-[10px] text-white/15 mt-1">
            Built for internal research navigation. Data last reviewed Feb 2026.
          </p>
        </footer>
      </main>

      {/* Problem Detail Modal */}
      <ProblemModal problem={selectedProblem} onClose={handleCloseModal} />
    </div>
  );
}
