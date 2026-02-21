"use client";

import { AxisDef } from "@/types";

interface LegendProps {
  hAxis: AxisDef;
  vAxis: AxisDef;
}

export default function Legend({ hAxis, vAxis }: LegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] text-[#999]">
      <span className="font-medium text-[#888] uppercase tracking-wider text-[10px]">
        Reading the chart
      </span>
      <span className="flex items-center gap-1.5">
        ← {hAxis.lowLabel}
      </span>
      <span className="flex items-center gap-1.5">
        {hAxis.highLabel} →
      </span>
      <span>↑ {vAxis.highLabel}</span>
      <span>↓ {vAxis.lowLabel}</span>
      <span className="border-l border-gray-200 pl-4 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
        Top-left = Sweet spot
      </span>
    </div>
  );
}
