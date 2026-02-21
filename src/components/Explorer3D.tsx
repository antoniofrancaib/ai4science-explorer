"use client";

import { useState, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Problem } from "@/types";
import { allProblems } from "@/data/problems";

const PROBLEMS = Object.values(allProblems);

// Category → color (accessible, distinct palette)
const CAT_COLORS: Record<string, string> = {
  Biology: "#10b981",
  Chemistry: "#f59e0b",
  Physics: "#3b82f6",
  Math: "#8b5cf6",
  Quantum: "#a855f7",
  "Meta-Science": "#f43f5e",
};

const CATEGORIES = Object.keys(CAT_COLORS);

function getCatColor(problem: Problem): string {
  return CAT_COLORS[problem.category] ?? "#888888";
}

// Map [0,1] problem coords → [-0.5, 0.5] scene coords
function toScene(x: number, y: number, z: number): [number, number, number] {
  return [x - 0.5, y - 0.5, z - 0.5];
}

// ── 12 edges of the unit cube centered at origin ──────────────────────────────
function CubeEdges() {
  const color = "#d8d5d2";
  const edges: Array<[[number, number, number], [number, number, number]]> = [
    // bottom face
    [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5]],
    [[0.5, -0.5, -0.5], [0.5, -0.5, 0.5]],
    [[0.5, -0.5, 0.5], [-0.5, -0.5, 0.5]],
    [[-0.5, -0.5, 0.5], [-0.5, -0.5, -0.5]],
    // top face
    [[-0.5, 0.5, -0.5], [0.5, 0.5, -0.5]],
    [[0.5, 0.5, -0.5], [0.5, 0.5, 0.5]],
    [[0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]],
    [[-0.5, 0.5, 0.5], [-0.5, 0.5, -0.5]],
    // vertical edges
    [[-0.5, -0.5, -0.5], [-0.5, 0.5, -0.5]],
    [[0.5, -0.5, -0.5], [0.5, 0.5, -0.5]],
    [[0.5, -0.5, 0.5], [0.5, 0.5, 0.5]],
    [[-0.5, -0.5, 0.5], [-0.5, 0.5, 0.5]],
  ];

  return (
    <>
      {edges.map(([s, e], i) => (
        <Line key={i} points={[s, e]} color={color} lineWidth={1.2} />
      ))}
    </>
  );
}

// ── 3 center axis lines for reference ─────────────────────────────────────────
function CenterAxes() {
  const c = "#e8e4e0";
  return (
    <>
      <Line points={[[-0.5, 0, 0], [0.5, 0, 0]]} color={c} lineWidth={0.8} />
      <Line points={[[0, -0.5, 0], [0, 0.5, 0]]} color={c} lineWidth={0.8} />
      <Line points={[[0, 0, -0.5], [0, 0, 0.5]]} color={c} lineWidth={0.8} />
    </>
  );
}

// ── Axis end labels (Html elements anchored to 3D positions) ──────────────────
function AxisLabels() {
  const style: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 600,
    color: "#444",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    fontFamily: "Inter, system-ui, sans-serif",
    letterSpacing: "-0.01em",
  };
  const dimStyle: React.CSSProperties = { ...style, color: "#aaa", fontWeight: 500 };

  return (
    <>
      {/* X axis: Overlooked ← left, Crowded → right */}
      <Html position={[-0.68, -0.54, -0.5]} center>
        <div style={style}>← Overlooked</div>
      </Html>
      <Html position={[0.68, -0.54, -0.5]} center>
        <div style={style}>Crowded →</div>
      </Html>

      {/* Y axis: Incremental ↓ bottom, Transformative ↑ top */}
      <Html position={[-0.56, -0.62, -0.5]} center>
        <div style={dimStyle}>Incremental ↓</div>
      </Html>
      <Html position={[-0.56, 0.62, -0.5]} center>
        <div style={style}>↑ Transformative</div>
      </Html>

      {/* Z axis: Tractable → front, Moonshot → back */}
      <Html position={[-0.5, -0.6, -0.65]} center>
        <div style={dimStyle}>◦ Tractable</div>
      </Html>
      <Html position={[-0.5, -0.6, 0.68]} center>
        <div style={style}>◦ Moonshot</div>
      </Html>
    </>
  );
}

// ── Cursor management and individual sphere ────────────────────────────────────
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
  const color = getCatColor(problem);

  return (
    <group position={pos}>
      <mesh
        scale={isHovered ? 1.7 : 1}
        onPointerEnter={(e) => {
          e.stopPropagation();
          gl.domElement.style.cursor = "pointer";
          onPointerEnter();
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          gl.domElement.style.cursor = "default";
          onPointerLeave();
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <sphereGeometry args={[0.020, 18, 18]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.05} />
      </mesh>

      {/* Hover tooltip via Html overlay */}
      {isHovered && (
        <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "7px 11px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              fontFamily: "Inter, system-ui, sans-serif",
              transform: "translateY(-32px)",
            }}
          >
            <div style={{ fontSize: "11px", fontWeight: 600, color: "#1c1c1e" }}>
              {problem.shortName}
            </div>
            <div
              style={{
                fontSize: "10px",
                color: getCatColor(problem),
                marginTop: "2px",
                fontWeight: 500,
              }}
            >
              {problem.category}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

// ── All spheres, rendered inside Canvas ───────────────────────────────────────
interface DotsProps {
  hoveredId: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
  onClickProblem: (p: Problem) => void;
}

function ProblemDots({ hoveredId, onHover, onLeave, onClickProblem }: DotsProps) {
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

// ── Main exported component ───────────────────────────────────────────────────
interface Explorer3DProps {
  onProblemClick: (problem: Problem) => void;
}

export default function Explorer3D({ onProblemClick }: Explorer3DProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = useCallback((id: string) => setHoveredId(id), []);
  const handleLeave = useCallback(() => setHoveredId(null), []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-[#f8f6f4]" style={{ height: "calc(100vh - 220px)", minHeight: 500 }}>
      <div ref={containerRef} className="w-full h-full">
        <Canvas
          camera={{ position: [1.6, 1.1, 2.0], fov: 42 }}
          style={{ background: "#f8f6f4" }}
          // Prevent default right-click menu on canvas
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Lighting */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 4, 5]} intensity={0.6} />
          <pointLight position={[-2, -2, -2]} intensity={0.3} color="#fff" />

          {/* Orbit controls — responds only to explicit user interaction */}
          <OrbitControls
            enableDamping
            dampingFactor={0.08}
            minDistance={0.8}
            maxDistance={4.5}
          />

          {/* Scene geometry */}
          <CubeEdges />
          <CenterAxes />
          <AxisLabels />

          {/* Data points */}
          <ProblemDots
            hoveredId={hoveredId}
            onHover={handleHover}
            onLeave={handleLeave}
            onClickProblem={onProblemClick}
          />
        </Canvas>
      </div>

      {/* ── Category legend overlay ── */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3.5 shadow-sm">
        <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2.5">
          Category
        </p>
        <div className="flex flex-col gap-1.5">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: CAT_COLORS[cat] }}
              />
              <span className="text-[11px] text-[#555] font-medium">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Axis guide overlay (top-left) ── */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-3.5 py-3 shadow-sm">
        <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2">
          Axes
        </p>
        <div className="flex flex-col gap-1">
          {[
            { label: "X", desc: "Overlooked → Crowded" },
            { label: "Y", desc: "Incremental → Transformative" },
            { label: "Z", desc: "Tractable → Moonshot" },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#aaa] w-3">{label}</span>
              <span className="text-[11px] text-[#555]">{desc}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#bbb] mt-2.5 leading-snug">
          Drag to rotate · Scroll to zoom
          <br />
          Click a dot for details
        </p>
      </div>
    </div>
  );
}
