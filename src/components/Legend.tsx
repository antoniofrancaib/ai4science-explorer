"use client";

import { motion } from "framer-motion";

export default function Legend() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-white/40"
    >
      <span className="font-medium text-white/50 uppercase tracking-wider text-[10px]">
        Reading the chart:
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-5 h-[1px] bg-gradient-to-r from-emerald-400/60 to-transparent" />
        ← Overlooked
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-red-400/60" />
        Crowded →
      </span>
      <span className="flex items-center gap-1.5">
        ↑ Transformative
      </span>
      <span className="flex items-center gap-1.5">
        ↓ Incremental
      </span>
      <span className="border-l border-white/10 pl-4 flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        Top-left = Sweet spot
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        Crowded / overhyped
      </span>
    </motion.div>
  );
}
