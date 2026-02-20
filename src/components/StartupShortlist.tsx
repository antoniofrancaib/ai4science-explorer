"use client";

import { motion } from "framer-motion";
import { Problem } from "@/types";
import { allProblems } from "@/data/problems";
import { ChevronRight } from "lucide-react";

interface StartupShortlistProps {
  onProblemClick: (problem: Problem) => void;
}

const shortlist = [
  {
    rank: 1,
    id: "idps",
    title: "Conformational Ensemble Prediction (IDPs)",
    reason:
      "Undruggable targets become druggable. No one has cracked generative Boltzmann modeling for protein ensembles at scale. Pharma would pay enormously.",
  },
  {
    rank: 2,
    id: "autonomous_wet_labs",
    title: "Autonomous Wet Lab Orchestration",
    reason:
      'The "self-driving lab" is inevitable but the AI brain is missing. Requires integrating LLM reasoning with domain-specific generative models.',
  },
  {
    rank: 3,
    id: "csp",
    title: "Crystal Structure Prediction",
    reason:
      "Polymorphism costs pharma billions. A reliable CSP engine is worth a platform company.",
  },
  {
    rank: 4,
    id: "catalyst_design",
    title: "Catalyst Design Platform",
    reason:
      "Green hydrogen and carbon capture depend on better catalysts. The intersection of ML force fields + reaction modeling + active learning is wide open.",
  },
  {
    rank: 5,
    id: "manifold_learning",
    title: "Geometry-Aware Generative Infrastructure",
    reason:
      "Build the foundational toolkit (flows on manifolds, SE(3)-equivariant diffusion) that every AI4Science company will need.",
  },
  {
    rank: 6,
    id: "prog_biology",
    title: "Programmable Cell Circuits",
    reason:
      "Foundation model for gene regulation → design living therapeutics. Extremely hard, but synthetic biology is a $30B+ market.",
  },
  {
    rank: 7,
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
    <section id="shortlist" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-[#1c1c1e] tracking-tight mb-1">
          Startup Shortlist
        </h2>
        <p className="text-[13px] text-[#999] mb-6 max-w-xl">
          Problems where a PhD-depth breakthrough directly unlocks a fundable
          company, ranked by{" "}
          <span className="text-[#666]">
            overlooked × transformative × defensible
          </span>
          .
        </p>
      </motion.div>

      <div className="space-y-2">
        {shortlist.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            onClick={() => onProblemClick(allProblems[item.id])}
            className="group flex items-center gap-4 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all duration-150"
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-[11px] font-semibold text-[#666] tabular-nums">
              {item.rank}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[13px] font-medium text-[#333] group-hover:text-[#1c1c1e] transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#aaa] mt-0.5 leading-relaxed line-clamp-1">
                {item.reason}
              </p>
            </div>
            <ChevronRight
              size={14}
              strokeWidth={1.8}
              className="text-[#ccc] group-hover:text-[#999] transition-colors flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
