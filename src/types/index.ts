export interface Paper {
  title: string;
  authors: string;
  year: number;
  link: string;
}

export interface Problem {
  id: string;
  name: string;
  shortName: string;
  x: number; // 0 = Overlooked, 1 = Crowded
  y: number; // 0 = Incremental, 1 = Transformative
  z: number; // 0 = Tractable, 1 = Moonshot
  category: string;
  // Legacy fields kept for chart tooltips / search
  whyItMatters: string;
  whyItsHard: string;
  overlooked: string;
  startupAngle: string;
  tags: string[];
  // Deep-dive drawer fields
  definition: string;
  bottleneck: string;
  currentSota: string;
  solvedState: string;
  symmetries: string[];
  benchmarks: string[];
  papers: Paper[];
}

export interface ChartGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  problems: Problem[];
  color: string; // tailwind color class
}

export interface PartitionView {
  id: string;
  title: string;
  description: string;
  groups: ChartGroup[];
}

export type ViewId = "object-of-study" | "methodological" | "scale" | "hybrid";

export type AxisKey = "x" | "y" | "z";

export interface AxisDef {
  key: AxisKey;
  name: string;        // Human-readable name for the sidebar filter
  lowLabel: string;    // Label at 0 end of the axis
  highLabel: string;   // Label at 1 end of the axis
}

export const AXES: AxisDef[] = [
  { key: "x", name: "Research Saturation", lowLabel: "Overlooked", highLabel: "Crowded" },
  { key: "y", name: "Impact Potential", lowLabel: "Incremental", highLabel: "Transformative" },
  { key: "z", name: "Technical Feasibility", lowLabel: "Tractable", highLabel: "Moonshot" },
];
