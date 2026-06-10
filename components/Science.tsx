/* ------------------------------------------------------------------ */
/*  Microbiology-themed decorative SVG art.                           */
/*  All on-palette, scalable, and animated with CSS (see globals.css) */
/*  — animations are disabled under prefers-reduced-motion.           */
/* ------------------------------------------------------------------ */

type SvgProps = { className?: string };

/** Double helix built from two offset strands + base-pair rungs. */
export function DnaHelix({ className = "" }: SvgProps) {
  const steps = 11;
  const amp = 34;
  const cx = 70;
  const top = 18;
  const bottom = 342;
  const turns = 1.6;

  const pts = Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    const y = top + t * (bottom - top);
    const phase = t * Math.PI * 2 * turns;
    const sin = Math.sin(phase);
    return {
      y,
      lx: cx + amp * sin,
      rx: cx - amp * sin,
      depth: (sin + 1) / 2, // 0..1 for faux-3D opacity
    };
  });

  const strand = (key: "lx" | "rx") =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[key].toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  return (
    <svg viewBox="0 0 140 360" className={className} aria-hidden="true" fill="none">
      <path d={strand("lx")} stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      <path d={strand("rx")} stroke="var(--color-sand)" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      {pts.map((p, i) => (
        <line
          key={i}
          x1={p.lx}
          y1={p.y}
          x2={p.rx}
          y2={p.y}
          stroke="var(--color-slate)"
          strokeWidth="2"
          opacity={0.25 + p.depth * 0.45}
        />
      ))}
      {pts.map((p, i) => (
        <g key={`n${i}`}>
          <circle cx={p.lx} cy={p.y} r="5" fill="currentColor" />
          <circle cx={p.rx} cy={p.y} r="5" fill="var(--color-sand)" />
        </g>
      ))}
    </svg>
  );
}

/** A rod-shaped bacterium (bacillus) with flagellum and granules. */
export function Microbe({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true" fill="none">
      <path
        d="M2 50 q 10 -10 20 0 t 20 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <rect x="38" y="20" width="74" height="34" rx="17" fill="currentColor" opacity="0.92" />
      <circle cx="58" cy="37" r="4" fill="var(--color-sky)" opacity="0.9" />
      <circle cx="76" cy="33" r="3" fill="var(--color-sky)" opacity="0.8" />
      <circle cx="92" cy="40" r="3.5" fill="var(--color-sky)" opacity="0.85" />
    </svg>
  );
}

/** A cluster of cocci (spherical bacteria). */
export function Coccus({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 90 90" className={className} aria-hidden="true" fill="none">
      {[
        [34, 30, 20],
        [60, 40, 16],
        [40, 60, 14],
        [64, 64, 11],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="currentColor" opacity="0.9" />
          <circle cx={cx - r / 3} cy={cy - r / 3} r={r / 3.5} fill="#fff" opacity="0.35" />
        </g>
      ))}
    </svg>
  );
}

/** A virus particle with a spiked capsid. */
export function Virus({ className = "" }: SvgProps) {
  const spikes = 12;
  const cx = 50;
  const cy = 50;
  const rInner = 26;
  const rOuter = 40;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      {Array.from({ length: spikes }, (_, i) => {
        const a = (i / spikes) * Math.PI * 2;
        const x1 = cx + Math.cos(a) * rInner;
        const y1 = cy + Math.sin(a) * rInner;
        const x2 = cx + Math.cos(a) * rOuter;
        const y2 = cy + Math.sin(a) * rOuter;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" />
            <circle cx={x2} cy={y2} r="4" fill="var(--color-sand)" />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={rInner} fill="currentColor" opacity="0.92" />
      <circle cx={cx} cy={cy} r={rInner - 9} fill="none" stroke="var(--color-sky)" strokeWidth="2" opacity="0.7" />
      <circle cx={cx - 6} cy={cy - 5} r="3.5" fill="var(--color-sky)" opacity="0.8" />
      <circle cx={cx + 7} cy={cy + 4} r="3" fill="var(--color-sky)" opacity="0.7" />
    </svg>
  );
}

/** A petri dish with bacterial colonies. */
export function PetriDish({ className = "" }: SvgProps) {
  const colonies: [number, number, number][] = [
    [62, 70, 9],
    [110, 58, 6],
    [128, 96, 11],
    [78, 120, 7],
    [104, 132, 5],
    [142, 70, 4],
    [90, 92, 5],
  ];
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none">
      <circle cx="100" cy="100" r="92" fill="var(--color-paper)" stroke="currentColor" strokeWidth="3" opacity="0.95" />
      <circle cx="100" cy="100" r="78" fill="var(--color-sky)" opacity="0.5" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {colonies.map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="var(--color-slate)" opacity="0.8" />
          <circle cx={cx} cy={cy} r={r + 4} fill="none" stroke="var(--color-slate)" strokeWidth="1" opacity="0.3" />
        </g>
      ))}
      {/* highlight glint */}
      <path d="M52 60 A 70 70 0 0 1 96 30" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** A connected molecular node lattice. */
export function Molecule({ className = "" }: SvgProps) {
  const nodes: [number, number][] = [
    [30, 40],
    [80, 24],
    [120, 56],
    [96, 104],
    [44, 96],
    [150, 100],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 0],
    [2, 5],
    [3, 5],
  ];
  return (
    <svg viewBox="0 0 180 130" className={className} aria-hidden="true" fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.45"
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 9 : 6}
          fill={i % 2 === 0 ? "currentColor" : "var(--color-sand)"}
        />
      ))}
    </svg>
  );
}
