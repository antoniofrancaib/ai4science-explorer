export interface Problem {
  id: string;
  name: string;
  shortName: string;
  x: number; // 0 = Overlooked, 1 = Crowded
  y: number; // 0 = Incremental, 1 = Transformative
  category: string;
  whyItMatters: string;
  whyItsHard: string;
  overlooked: string;
  startupAngle: string;
  tags: string[];
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
