"use client";

import { motion } from "framer-motion";
import { Problem } from "@/types";
import { allProblems } from "@/data/problems";

interface StartupShortlistProps {
  onProblemClick: (problem: Problem) => void;
}

const shortlist = [
  {
    rank: "🥇",
    id: "idps",
    title: "Conformational Ensemble Prediction (IDPs)",
    reason:
      "Undruggable targets become druggable. No one has cracked generative Boltzmann modeling for protein ensembles at scale. Pharma would pay enormously.",
  },
  {
    rank: "🥈",
    id: "autonomous_wet_labs",
    title: "Autonomous Wet Lab Orchestration",
    reason:
      'The "self-driving lab" is inevitable but the AI brain is missing. Requires integrating LLM reasoning with domain-specific generative models.',
  },
  {
    rank: "🥉",
    id: "csp",
    title: "Crystal Structure Prediction",
    reason:
      "Polymorphism costs pharma billions. A reliable CSP engine is worth a platform company.",
  },
  {
    rank: "4",
    id: "catalyst_design",
    title: "Catalyst Design Platform",
    reason:
      "Green hydrogen and carbon capture depend on better catalysts. The intersection of ML force fields + reaction modeling + active learning is wide open.",
  },
  {
    rank: "5",
    id: "manifold_learning",
    title: "Geometry-Aware Generative Infrastructure",
    reason:
      "Build the foundational toolkit (flows on manifolds, SE(3)-equivariant diffusion) that every AI4Science company will need. Sell the picks and shovels.",
  },
  {
    rank: "6",
    id: "prog_biology",
    title: "Programmable Cell Circuits",
    reason:
      "Foundation model for gene regulation → design living therapeutics. Extremely hard, but synthetic biology is a $30B+ market growing fast.",
  },
  {
    rank: "7",
    id: "sci_data_infra",
    title: "Scientific Data Platform",
    reason:
      "Unsexy but critical. The company that structures and unifies experimental data across labs wins the long game.",
  },
];

export default function StartupShortlist({
  onProblemClick,
}: StartupShortlistProps) {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🎯</span>
          <h2 className="text-2xl font-bold text-white/90 tracking-tight">
            The Startup Shortlist
          </h2>
        </div>
        <p className="text-sm text-white/40 mb-8 max-w-2xl">
          Problems where a PhD-depth breakthrough directly unlocks a fundable
          company, ranked by{" "}
          <span className="text-white/60">overlooked × transformative × defensible</span>.
        </p>
      </motion.div>

      <div className="space-y-3">
        {shortlist.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            onClick={() => onProblemClick(allProblems[item.id])}
            className="group flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] cursor-pointer transition-all duration-200"
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg">
              {item.rank}
            </div>
            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold text-white/80 group-hover:text-white/95 transition-colors">
                {item.title}
              </h3>
              <p className="text-[12px] text-white/35 mt-1 leading-relaxed">
                {item.reason}
              </p>
            </div>
            <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-white/30"
              >
                <path d="M6 3l5 5-5 5" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
