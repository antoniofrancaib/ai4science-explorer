"use client";

import { useState, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Problem } from "@/types";
import { allProblems } from "@/data/problems";

const PROBLEMS = Object.values(allProblems);

// Category → color
const CAT_COLORS: Record<string, string> = {
  Biology: "#10b981",
  Chemistry: "#f59e0b",
  Physics: "#3b82f6",
  Math: "#8b5cf6",
  Quantum: "#a855f7",
  "Meta-Science": "#f43f5e",
};

const CATEGORIES = Object.keys(CAT_COLORS);

// Axis colors — distinct, readable on light bg
const AXIS_COLORS = {
  x: "#e05c3a", // warm red-orange  →  Overlooked / Crowded
  y: "#2563eb", // blue             →  Incremental / Transformative
  z: "#7c3aed", // violet           →  Tractable / Moonshot
};

function getCatColor(p: Problem): string {
  return CAT_COLORS[p.category] ?? "#888";
}

function toScene(x: number, y: number, z: number): [number, number, number] {
  return [x - 0.5, y - 0.5, z - 0.5];
}

// ── 12 cube edges (neutral grey) ──────────────────────────────────────────────
function CubeEdges() {
  const c = "#d8d5d2";
  const edges: Array<[[number, number, number], [number, number, number]]> = [
    [[-0.5,-0.5,-0.5],[0.5,-0.5,-0.5]], [[0.5,-0.5,-0.5],[0.5,-0.5,0.5]],
    [[0.5,-0.5,0.5],[-0.5,-0.5,0.5]], [[-0.5,-0.5,0.5],[-0.5,-0.5,-0.5]],
    [[-0.5,0.5,-0.5],[0.5,0.5,-0.5]], [[0.5,0.5,-0.5],[0.5,0.5,0.5]],
    [[0.5,0.5,0.5],[-0.5,0.5,0.5]], [[-0.5,0.5,0.5],[-0.5,0.5,-0.5]],
    [[-0.5,-0.5,-0.5],[-0.5,0.5,-0.5]], [[0.5,-0.5,-0.5],[0.5,0.5,-0.5]],
    [[0.5,-0.5,0.5],[0.5,0.5,0.5]], [[-0.5,-0.5,0.5],[-0.5,0.5,0.5]],
  ];
  return <>{edges.map(([s,e],i) => <Line key={i} points={[s,e]} color={c} lineWidth={1.1} />)}</>;
}

// ── 3 center axes — each a distinct color ─────────────────────────────────────
function CenterAxes() {
  return (
    <>
      {/* X — warm red */}
      <Line points={[[-0.5,0,0],[0.5,0,0]]} color={AXIS_COLORS.x} lineWidth={1.8} />
      {/* Y — blue */}
      <Line points={[[0,-0.5,0],[0,0.5,0]]} color={AXIS_COLORS.y} lineWidth={1.8} />
      {/* Z — violet */}
      <Line points={[[0,0,-0.5],[0,0,0.5]]} color={AXIS_COLORS.z} lineWidth={1.8} />
    </>
  );
}

// ── Individual sphere ─────────────────────────────────────────────────────────
interface SphereProps {
  problem: Problem;
  isHovered: boolean;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onClick: () => void;
}

function ProblemSphere({ problem, isHovered, onPointerEnter, onPointerLeave, onClick }: SphereProps) {
  const { gl } = useThree();
  const pos = toScene(problem.x, problem.y, problem.z);

  return (
    <mesh
      position={pos}
      scale={isHovered ? 1.8 : 1}
      onPointerEnter={(e) => { e.stopPropagation(); gl.domElement.style.cursor = "pointer"; onPointerEnter(); }}
      onPointerLeave={(e) => { e.stopPropagation(); gl.domElement.style.cursor = "default"; onPointerLeave(); }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      <sphereGeometry args={[0.02, 18, 18]} />
      <meshStandardMaterial color={getCatColor(problem)} roughness={0.25} metalness={0.05} />
    </mesh>
  );
}

function ProblemDots({
  hoveredId,
  onHover,
  onLeave,
  onClickProblem,
}: {
  hoveredId: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
  onClickProblem: (p: Problem) => void;
}) {
  return (
    <>
      {PROBLEMS.map((p) => (
        <ProblemSphere
          key={p.id}
          problem={p}
          isHovered={hoveredId === p.id}
          onPointerEnter={() => onHover(p.id)}
          onPointerLeave={onLeave}
          onClick={() => onClickProblem(p)}
        />
      ))}
    </>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
interface Explorer3DProps {
  onProblemClick: (problem: Problem) => void;
}

export default function Explorer3D({ onProblemClick }: Explorer3DProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredProblem = hoveredId ? allProblems[hoveredId] : null;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = useCallback((id: string) => setHoveredId(id), []);
  const handleLeave = useCallback(() => setHoveredId(null), []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-[#f8f6f4]"
      style={{ height: "calc(100vh - 220px)", minHeight: 500 }}
    >
      <div ref={containerRef} className="w-full h-full">
        <Canvas
          camera={{ position: [1.6, 1.1, 2.0], fov: 42 }}
          style={{ background: "#f8f6f4" }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 4, 5]} intensity={0.6} />
          <pointLight position={[-2, -2, -2]} intensity={0.3} color="#fff" />

          <OrbitControls enableDamping dampingFactor={0.08} minDistance={0.8} maxDistance={4.5} />

          <CubeEdges />
          <CenterAxes />

          <ProblemDots
            hoveredId={hoveredId}
            onHover={handleHover}
            onLeave={handleLeave}
            onClickProblem={onProblemClick}
          />
        </Canvas>
      </div>

      {/* ── Hover tooltip — rendered in DOM, not inside Canvas ── */}
      {hoveredProblem && (
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-md pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <p className="text-[13px] font-semibold text-[#1c1c1e]">{hoveredProblem.shortName}</p>
          <p className="text-[11px] mt-0.5" style={{ color: getCatColor(hoveredProblem) }}>
            {hoveredProblem.category}
          </p>
        </div>
      )}

      {/* ── Category legend ── */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3.5 shadow-sm">
        <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2.5">Category</p>
        <div className="flex flex-col gap-1.5">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: CAT_COLORS[cat] }} />
              <span className="text-[11px] text-[#555] font-medium">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Axis legend — colored lines match the 3D scene ── */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-3.5 py-3 shadow-sm">
        <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2.5">Axes</p>
        <div className="flex flex-col gap-2">
          {([
            { color: AXIS_COLORS.x, low: "Overlooked", high: "Crowded" },
            { color: AXIS_COLORS.y, low: "Incremental", high: "Transformative" },
            { color: AXIS_COLORS.z, low: "Tractable",   high: "Moonshot" },
          ] as { color: string; low: string; high: string }[]).map(({ color, low, high }) => (
            <div key={low} className="flex items-center gap-2.5">
              {/* Colored line swatch */}
              <div className="w-5 h-[2px] rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-[11px] text-[#555]">
                {low} <span className="text-[#bbb]">→</span> {high}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#bbb] mt-3 leading-snug">
          Drag to orbit · Scroll to zoom
          <br />
          Click a dot for details
        </p>
      </div>
    </div>
  );
}
